import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Github, ExternalLink, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Define tech stacks and their associated icons
const techFilters = [
  { id: 'all', name: 'All Projects', icon: <Globe size={24} /> },
  { id: 'react', name: 'React', icon: <Code size={24} /> },
  { id: 'flutter', name: 'Flutter', icon: <Code size={24} /> },
  { id: 'node', name: 'Node.js', icon: <Code size={24} /> },
  { id: 'mongodb', name: 'MongoDB', icon: <Code size={24} /> },
];

// Sample project data - replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with product catalog, cart, and checkout functionality.',
    type: 'web',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['react', 'node', 'mongodb'],
    links: {
      github: 'https://github.com/yourusername/ecommerce-platform',
      live: 'https://example.com/ecommerce'
    }
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A mobile application for managing tasks, setting reminders, and tracking productivity.',
    type: 'app',
    images: [
      'https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg',
      'https://images.pexels.com/photos/5717461/pexels-photo-5717461.jpeg',
      'https://images.pexels.com/photos/5717514/pexels-photo-5717514.jpeg',
      'https://images.pexels.com/photos/5717528/pexels-photo-5717528.jpeg'
    ],
    technologies: ['flutter', 'node'],
    links: {
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://example.com/task-manager'
    }
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather information dashboard with forecast data and location search.',
    type: 'web',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['react', 'node'],
    links: {
      github: 'https://github.com/yourusername/weather-dashboard',
      live: 'https://example.com/weather'
    }
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'A Flutter-based social media application with real-time chat and post sharing.',
    type: 'app',
    images: [
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg',
      'https://images.pexels.com/photos/3183141/pexels-photo-3183141.jpeg',
      'https://images.pexels.com/photos/3183127/pexels-photo-3183127.jpeg'
    ],
    technologies: ['flutter', 'node', 'mongodb'],
    links: {
      github: 'https://github.com/yourusername/social-media-app',
      live: 'https://example.com/social'
    }
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const handleTechClick = (techId: string) => {
    if (techId === 'all') {
      setActiveFilter('all');
    } else {
      navigate(`/projects/${techId}`);
    }
  };

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.technologies.includes(activeFilter));

  return (
    <div className="page-container">
      <h1 className="section-heading">
        My <span>Projects</span>
      </h1>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {techFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => handleTechClick(filter.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              activeFilter === filter.id
                ? 'bg-primary-600 text-white'
                : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
            }`}
          >
            {filter.icon}
            <span>{filter.name}</span>
            {filter.id !== 'all' && <ChevronRight size={16} />}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-400">No projects found for this filter.</p>
        </div>
      )}
    </div>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    type: 'web' | 'app';
    image?: string;
    images?: string[];
    technologies: string[];
    links: {
      github: string;
      live: string;
    };
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    if (project.type === 'app' && project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card overflow-hidden h-full flex flex-col"
    >
      <div 
        className="relative overflow-hidden h-48 cursor-pointer"
        onClick={handleImageClick}
      >
        {project.type === 'web' ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        ) : (
          <>
            <img 
              src={project.images?.[currentImageIndex]} 
              alt={`${project.title} - View ${currentImageIndex + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="absolute bottom-2 right-2 bg-dark-900/80 px-2 py-1 rounded-full text-xs text-white">
              {currentImageIndex + 1}/{project.images?.length}
            </div>
          </>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => {
            const filter = techFilters.find(f => f.id === tech);
            return (
              <Link 
                key={tech}
                to={`/projects/${tech}`}
                className="text-xs font-medium bg-dark-700 text-gray-300 px-2 py-1 rounded-full flex items-center hover:bg-dark-600 transition-colors"
              >
                {filter?.icon && (
                  <span className="mr-1 text-primary-500" style={{ transform: 'scale(0.7)' }}>
                    {filter.icon}
                  </span>
                )}
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </Link>
            );
          })}
        </div>
        
        <div className="flex gap-3">
          <a 
            href={project.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn bg-dark-700 hover:bg-dark-600 text-white"
          >
            <Github size={16} className="mr-1" /> GitHub
          </a>
          <a 
            href={project.links.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <ExternalLink size={16} className="mr-1" /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;