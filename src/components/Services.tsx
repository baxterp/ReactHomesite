import React from 'react';
import { Database, Code, Server, Layout, Table, FileCode } from 'lucide-react';

const services = [
  {
    icon: <Layout className="h-10 w-10 text-[#00c8ff]" />,
    title: 'ASP.NET MVC',
    description: 'Experience since 2011 creating and updating Microsoft MVC web application solutions.'
  },
  {
    icon: <Layout className="h-10 w-10 text-[#00c8ff]" />,
    title: 'ASP.NET MVC Core',
    description: 'Experience since 2019 creating and updating Microsoft MVC Core web application solutions.'
  },
  {
    icon: <Code className="h-10 w-10 text-[#00c8ff]" />,
    title: 'Javascript',
    description: 'Experienced since 2008 creating and updating Javascript for website use.'
  },
  {
    icon: <Database className="h-10 w-10 text-[#00c8ff]" />,
    title: 'SQL Server',
    description: 'Experience with all versions of Microsoft SQL Server since 2000 release.'
  },
  {
    icon: <FileCode className="h-10 w-10 text-[#00c8ff]" />,
    title: 'C# .NET',
    description: 'Experienced since 2006 creating and updating Microsoft C# .NET solutions.'
  },
  {
    icon: <Table className="h-10 w-10 text-[#00c8ff]" />,
    title: 'Transactional SQL',
    description: 'Experience since 2008 using Microsoft T-SQL with many successful commercial projects.'
  },
  {
    icon: <Code className="h-10 w-10 text-[#00c8ff]" />,
    title: 'WPF Applications',
    description: 'Experience since 2010 creating and maintaining Microsoft Windows Presentation Foundation applications.'
  },
  {
    icon: <Code className="h-10 w-10 text-[#00c8ff]" />,
    title: 'Winforms Applications',
    description: 'Experienced since 2006 creating and maintaining Microsoft Winforms applications.'
  }
];

const Services = () => {
  return (
    <section id="services" className="full-height-section bg-[#0e1218]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Expertise</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            I offer a wide range of development services with extensive experience in Microsoft technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#161c26] rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#00c8ff]/10 hover:transform hover:-translate-y-1 border border-gray-800"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;