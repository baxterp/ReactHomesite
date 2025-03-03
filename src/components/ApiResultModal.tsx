import React, { useState, useEffect } from 'react';
import { X, Copy, Check, ChevronRight, ChevronDown, ExternalLink } from 'lucide-react';

interface ApiResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  apiUrl: string;
  title: string;
}

interface CollapsibleJsonProps {
  data: any;
  level?: number;
  isLast?: boolean;
  path?: string;
  expandAll?: boolean;
}

const CollapsibleJson: React.FC<CollapsibleJsonProps> = ({ 
  data, 
  level = 0, 
  isLast = true,
  path = '',
  expandAll = false
}) => {
  const [isCollapsed, setIsCollapsed] = useState(!expandAll && level > 1);
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set());
  
  useEffect(() => {
    // Update collapsed state when expandAll changes
    if (expandAll) {
      setIsCollapsed(false);
    }
  }, [expandAll]);
  
  const indent = level * 20;
  const isObject = data !== null && typeof data === 'object';
  const isArray = Array.isArray(data);
  
  const toggleCollapse = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCollapsed(!isCollapsed);
    
    // Track expanded paths for highlighting
    const newExpandedPaths = new Set(expandedPaths);
    if (isCollapsed) {
      newExpandedPaths.add(path);
    } else {
      newExpandedPaths.delete(path);
    }
    setExpandedPaths(newExpandedPaths);
  };

  // Function to detect and make URLs clickable
  const renderValue = (value: any) => {
    if (typeof value === 'string') {
      // URL regex pattern
      const urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
      
      // Check if this is a description field - don't make it clickable
      const isDescriptionField = path.toLowerCase().includes('description');
      
      if (urlPattern.test(value) && !isDescriptionField) {
        return (
          <span className="text-green-400">
            "<a 
              href={value} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#00c8ff] hover:underline hover:text-[#4dd6ff] inline-flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {value}
              <ExternalLink size={12} className="ml-1" />
            </a>"
          </span>
        );
      }
    }
    
    // Render primitive values with appropriate styling
    let valueClass = "text-green-400"; // default for strings
    let displayValue = JSON.stringify(value);
    
    if (typeof value === 'number') {
      valueClass = "text-blue-400";
      displayValue = value.toString();
    } else if (typeof value === 'boolean') {
      valueClass = "text-purple-400";
      displayValue = value.toString();
    } else if (value === null) {
      valueClass = "text-gray-400";
      displayValue = "null";
    }
    
    return <span className={valueClass}>{displayValue}</span>;
  };
  
  if (!isObject) {
    return renderValue(data);
  }
  
  const keys = Object.keys(data);
  
  return (
    <div className="relative">
      <div 
        className={`flex items-start cursor-pointer hover:bg-gray-800/30 rounded px-1 ${expandedPaths.has(path) ? 'bg-gray-800/20' : ''}`}
        onClick={toggleCollapse}
      >
        <div style={{ width: indent }} className="flex-shrink-0"></div>
        <div className="mr-1 mt-0.5 text-gray-400">
          {isCollapsed ? 
            <ChevronRight size={16} className="text-gray-500" /> : 
            <ChevronDown size={16} className="text-[#00c8ff]" />
          }
        </div>
        <div className="flex-1">
          <span className="text-[#00c8ff]">
            {isArray ? '[' : '{'}
          </span>
          {isCollapsed && (
            <span className="text-gray-500 ml-1">
              {isArray ? `${keys.length} items` : `${keys.length} properties`}
            </span>
          )}
          {isCollapsed && <span className="text-[#00c8ff]">{isArray ? ']' : '}'}{!isLast ? ',' : ''}</span>}
        </div>
      </div>
      
      {!isCollapsed && (
        <div className="ml-4">
          {keys.map((key, index) => (
            <div key={key} className="flex items-start">
              <div style={{ width: indent }} className="flex-shrink-0"></div>
              {isArray ? (
                <div className="flex-1">
                  <CollapsibleJson 
                    data={data[key]} 
                    level={level + 1} 
                    isLast={index === keys.length - 1}
                    path={`${path}.${key}`}
                    expandAll={expandAll}
                  />
                </div>
              ) : (
                <div className="flex-1">
                  <span className="text-yellow-300 mr-1">"{key}":</span>
                  <CollapsibleJson 
                    data={data[key]} 
                    level={level + 1} 
                    isLast={index === keys.length - 1}
                    path={`${path}.${key}`}
                    expandAll={expandAll}
                  />
                </div>
              )}
              {index < keys.length - 1 && <span className="text-gray-400">,</span>}
            </div>
          ))}
          <div className="flex">
            <div style={{ width: indent }} className="flex-shrink-0"></div>
            <span className="text-[#00c8ff]">{isArray ? ']' : '}'}{!isLast ? ',' : ''}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const ApiResultModal: React.FC<ApiResultModalProps> = ({ isOpen, onClose, apiUrl, title }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'pretty' | 'raw'>('pretty');
  const [expandAll, setExpandAll] = useState<boolean>(true);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setError(null);
      setExpandAll(true); // Always expand all nodes when modal opens
      
      // Use a CORS proxy to avoid cross-origin issues
      const corsProxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;
      
      fetch(corsProxyUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(result => {
          try {
            // The API response is in the contents property as a string
            const parsedData = JSON.parse(result.contents);
            setData(parsedData);
            setLoading(false);
          } catch (e) {
            console.error('Error parsing JSON:', e);
            setError('Failed to parse API data. The response format may have changed.');
            setLoading(false);
          }
        })
        .catch(error => {
          console.error('Error fetching API data:', error);
          setError('Failed to load API data. Please try again later.');
          setLoading(false);
        });
    }
  }, [isOpen, apiUrl]);

  const copyToClipboard = () => {
    if (data) {
      navigator.clipboard.writeText(JSON.stringify(data, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const openApiUrlInNewTab = () => {
    window.open(apiUrl, '_blank', 'noopener,noreferrer');
  };

  const toggleExpandAll = () => {
    setExpandAll(!expandAll);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-[#161c26] rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] flex flex-col border border-gray-800">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <button 
              onClick={openApiUrlInNewTab}
              className="ml-3 text-[#00c8ff] hover:text-white transition-colors flex items-center text-sm"
              title="Open API URL in new tab"
            >
              <ExternalLink size={16} className="mr-1" />
              Open API
            </button>
          </div>
          <div className="flex items-center space-x-4">
            {data && (
              <>
                <div className="flex rounded-md overflow-hidden border border-gray-700">
                  <button 
                    onClick={() => setViewMode('pretty')}
                    className={`px-3 py-1 text-sm ${viewMode === 'pretty' ? 'bg-[#00c8ff] text-white' : 'bg-[#0e1218] text-gray-300 hover:bg-gray-800'}`}
                  >
                    Pretty
                  </button>
                  <button 
                    onClick={() => setViewMode('raw')}
                    className={`px-3 py-1 text-sm ${viewMode === 'raw' ? 'bg-[#00c8ff] text-white' : 'bg-[#0e1218] text-gray-300 hover:bg-gray-800'}`}
                  >
                    Raw
                  </button>
                </div>
                {viewMode === 'pretty' && (
                  <button 
                    onClick={toggleExpandAll}
                    className={`px-3 py-1 text-sm rounded border border-gray-700 ${expandAll ? 'bg-[#00c8ff] text-white' : 'bg-[#0e1218] text-gray-300 hover:bg-gray-800'}`}
                    title={expandAll ? "Collapse nodes" : "Expand all nodes"}
                  >
                    {expandAll ? "Collapse" : "Expand All"}
                  </button>
                )}
                <button 
                  onClick={copyToClipboard}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                  title="Copy to clipboard"
                >
                  {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                </button>
              </>
            )}
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto p-4">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00c8ff]"></div>
            </div>
          ) : error ? (
            <div className="text-red-400 p-4 text-center">
              <p>{error}</p>
            </div>
          ) : (
            <div className="bg-[#0e1218] p-4 rounded-lg border border-gray-800 overflow-auto">
              {viewMode === 'pretty' ? (
                <div className="font-mono text-sm">
                  <CollapsibleJson data={data} path="root" expandAll={expandAll} />
                </div>
              ) : (
                <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">
                  {JSON.stringify(data, null, 2)}
                </pre>
              )}
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-800 flex justify-between items-center">
          <div className="text-xs text-gray-500">
            {data && `${Object.keys(data).length} root properties`}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0e1218] text-white rounded hover:bg-gray-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiResultModal;