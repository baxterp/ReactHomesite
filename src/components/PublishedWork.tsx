import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ApiResultModal from './ApiResultModal';

const publishedWorks = [
  {
    title: 'OpenAI ChatGPT Integration Demo Site',
    description: 'ASP.NET Core application that uses OpenAI\'s ChatGPT to perform various useful tasks',
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=500&auto=format&fit=crop',
    tags: ['ASP.NET Core', 'OpenAI API', 'ChatGPT'],
    technology: 'ASP.NET Core MVC 8.0',
    liveLink: 'https://openai.baxterpearson.co.uk/',
    githubLink: 'https://github.com/baxterp/OpenAI.ChatGPT.Examples.Web',
    linkText: 'Live Demo',
    externalLink: true
  },
  {
    title: 'Stockfish .NET Chess Demo Site',
    description: 'ASP.NET Core MVC 6.0 site which uses chess engine to play chess games against an opponent',
    image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=500&auto=format&fit=crop',
    tags: ['ASP.NET Core', 'MVC', 'Chess Engine'],
    technology: 'ASP.NET Core MVC 8.0',
    liveLink: 'https://chess.baxterpearson.co.uk/',
    githubLink: 'https://github.com/baxterp/Chess.Stockfish.Web',
    linkText: 'Live Demo',
    externalLink: true
  },
  {
    title: 'This web site',
    description: 'This website built by me using React JS, and Tailwind CSS with smooth animations and section transitions',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500&auto=format&fit=crop',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    technology: '',
    liveLink: null,
    githubLink: 'https://github.com/baxterp/ReactHomesite',
    linkText: null
  },
  {
    title: 'Public F1 News API published on RapidAPI.com',
    description: '',
    image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=500&auto=format&fit=crop', 
    tags: ['API', 'F1', 'News'],
    technology: 'ASP.NET Core 8.0 WebAPI',
    liveLink: 'https://rssapi.baxterpearson.co.uk/api/news/f1news',
    githubLink: 'https://github.com/baxterp/API.NewsFeed',
    linkText: 'Results',
    apiUrl: 'https://rssapi.baxterpearson.co.uk/api/news/f1news'
  },
  {
    title: 'Public MotoGP News API published on RapidAPI.com',
    description: '',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=500&auto=format&fit=crop',
    tags: ['API', 'MotoGP', 'News'],
    technology: 'ASP.NET Core 8.0 WebAPI',
    liveLink: 'https://rssapi.baxterpearson.co.uk/api/news/motogpnews',
    githubLink: 'https://github.com/baxterp/API.NewsFeed',
    linkText: 'Results',
    apiUrl: 'https://rssapi.baxterpearson.co.uk/api/news/motogpnews'
  },
  {
    title: 'Public Cryptocurrency News API published on RapidAPI.com',
    description: '',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=500&auto=format&fit=crop',
    tags: ['API', 'Cryptocurrency', 'News'],
    technology: 'ASP.NET Core 8.0 WebAPI',
    liveLink: 'https://rssapi.baxterpearson.co.uk/api/news/cryptonews',
    githubLink: 'https://github.com/baxterp/API.NewsFeed',
    linkText: 'Results',
    apiUrl: 'https://rssapi.baxterpearson.co.uk/api/news/cryptonews'
  },
  {
    title: 'Public Universal Translator API published on RapidAPI.com',
    description: '',
    image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=500&auto=format&fit=crop',
    technology: 'ASP.NET Core 8.0 WebAPI',
    tags: ['API', 'Translator', 'Language'],
    liveLink: 'https://rapidapi.com/baxterrpearson/api/universal-translator/playground/apiendpoint_a6d2e7eb-ca97-424b-9275-6a2eb8bc5cf4',
    githubLink: 'https://github.com/baxterp/API.NewsFeed',
    linkText: 'Use Translator',
    externalLink: true
  },
  {
    title: 'Secure Messenger published on Github',
    description: '',
    image: 'https://images.unsplash.com/photo-1611746869696-d09bce200020?q=80&w=500&auto=format&fit=crop',
    tags: ['Security', 'Messaging', 'Encryption'],
    technology: 'WPF .NET 4.8',
    liveLink: null,
    githubLink: 'https://github.com/baxterp/Secure.Messenger'
  },
  {
    title: 'Dependency Injection Demo published on Github',
    description: '',
    image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=500&auto=format&fit=crop',
    tags: ['Dependency Injection', 'Architecture', 'Design Patterns'],
    technology: 'WPF .NET 4.8',
    liveLink: null,
    githubLink: 'https://github.com/baxterp/Dependency.Injection.Demo'
  },
  {
    title: 'Winforms Plugins Architecture Demo published on Github',
    description: '',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=500&auto=format&fit=crop',
    tags: ['Plugins', 'Architecture', 'Winforms'],
    technology: 'WPF .NET 4.8',
    liveLink: null,
    githubLink: 'https://github.com/baxterp/Winforms.Plugins'
  }
];

const PublishedWork = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentApiUrl, setCurrentApiUrl] = useState('');
  const [currentApiTitle, setCurrentApiTitle] = useState('');

  const handleResultsClick = (e, work) => {
    e.preventDefault();
    if (work.externalLink) {
      // For external links like RapidAPI playground, open in a new tab
      window.open(work.liveLink, '_blank', 'noopener,noreferrer');
    } else if (work.apiUrl) {
      // For API endpoints that should show results in the modal
      setCurrentApiUrl(work.apiUrl);
      setCurrentApiTitle(`${work.title} - API Results`);
      setModalOpen(true);
    } else {
      // If no API URL is defined, use the regular link behavior
      if (work.liveLink) {
        window.open(work.liveLink, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const openGithubLink = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="published-work" className="full-height-section bg-[#161c26]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Published Work and Demos</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of my published work, demos, and contributions to the development community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {publishedWorks.map((work, index) => (
            <div 
              key={index} 
              className="bg-[#0e1218] rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-[#00c8ff]/10 border border-gray-800 h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{work.title}</h3>
                {work.description && (
                  <p className="text-gray-400 mb-4 flex-grow whitespace-pre-line">{work.description}</p>
                )}
                {work.technology && (
                  <div className="text-sm text-gray-500 mb-3">{work.technology}</div>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-[#161c26] text-[#00c8ff] text-xs font-medium px-2.5 py-0.5 rounded border border-[#00c8ff]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex space-x-3">
                  {work.liveLink && (
                    <a 
                      href={work.liveLink} 
                      onClick={(e) => handleResultsClick(e, work)}
                      className="text-[#00c8ff] hover:text-white flex items-center"
                      title={`Open ${work.linkText || 'Live Demo'}`}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      {work.linkText || 'Live Demo'}
                    </a>
                  )}
                  {work.githubLink && (
                    <a 
                      href={work.githubLink} 
                      onClick={(e) => openGithubLink(e, work.githubLink)}
                      className="text-[#00c8ff] hover:text-white flex items-center"
                      title="View code on GitHub"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ApiResultModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        apiUrl={currentApiUrl}
        title={currentApiTitle}
      />
    </section>
  );
};

export default PublishedWork;