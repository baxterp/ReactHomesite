import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Housemates',
    description: 'A platform for students to find accommodation and housemates. Built with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Travelr',
    description: 'A travel planning application that helps users organize trips, discover destinations, and share experiences.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Vue.js', 'Firebase', 'Google Maps API'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Foodie',
    description: 'A recipe discovery app that allows users to find, save, and share recipes based on dietary preferences and available ingredients.',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['React Native', 'GraphQL', 'AWS'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Studypal',
    description: 'A collaborative learning platform for students to form study groups, share resources, and track progress together.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Next.js', 'Socket.io', 'PostgreSQL'],
    liveLink: '#',
    githubLink: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="full-height-section bg-[#0e1218]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Work</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work that showcases my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#161c26] rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-[#00c8ff]/10 border border-gray-800">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-[#0e1218] text-[#00c8ff] text-xs font-medium px-2.5 py-0.5 rounded border border-[#00c8ff]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.liveLink} 
                    className="text-[#00c8ff] hover:text-white flex items-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="text-[#00c8ff] hover:text-white flex items-center"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;