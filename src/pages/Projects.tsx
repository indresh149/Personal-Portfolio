import { useEffect, useState } from 'react';
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
      live: 'https://example.com/ecommerce' // Keep for web
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
      // live link removed/omitted for app
      appStore: 'https://apps.apple.com/app/your-app-id', // <-- ADD App Store Link
      playStore: 'https://play.google.com/store/apps/details?id=your.package.name' // <-- ADD Play Store Link
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
      live: 'https://example.com/weather' // Keep for web
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
      // Optionally add store links if they exist
      appStore: 'https://apps.apple.com/app/your-social-app-id', // <-- ADD (Optional)
      playStore: 'https://play.google.com/store/apps/details?id=your.social.package.name' // <-- ADD (Optional)
    }
  }
  // Add more projects...
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

interface ProjectLinkData {
  github: string;
  live?: string; // Optional: May exist for web apps or PWAs
  appStore?: string; // Optional: Link to Apple App Store
  playStore?: string; // Optional: Link to Google Play Store
}

interface ProjectData {
    id: number;
    title: string;
    description: string;
    type: 'web' | 'app';
    image?: string;
    images?: string[];
    technologies: string[];
    links: ProjectLinkData; // Use the refined link interface
}

interface ProjectCardProps {
  project: ProjectData; // Use the refined project data interface
}

// Placeholder icons (replace with actual SVGs or icons from a library if preferred)
const IconApple = () => <svg aria-hidden="true" focusable="false" className="inline h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C39.2 141.6 0 184.8 0 241.2c0 61.6 31.5 117.1 56.6 146.6 23.7 27.7 59.8 58.4 99.8 58.4 39.4 0 69.4-19.7 93.1-19.7 25.3 0 52.8 19.7 82.6 19.7 41.5 0 80.1-33.3 95.4-80.4C380.9 310.5 341.8 301.3 318.7 268.7zM248.7 147.4c16.3-16.5 29-41.7 29.6-66.5-28.6 1.6-59.5 15.8-74.8 31.8-14.9 15.5-27.3 40.3-27.3 65.5 26.6 1.9 54.7-15.1 72.5-30.8z"/></svg>;
const IconPlayStore = () => <svg aria-hidden="true" focusable="false" className="inline h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>;


const ProjectCard = ({ project }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Only run the effect for 'app' type projects with multiple images
    if (project.type === 'app' && project.images && project.images.length > 1) {
      // Set up the interval
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images!.length);
      }, 2000); // Change image every 2000ms (2 seconds)

      // Clear the interval when the component unmounts or dependencies change
      return () => clearInterval(intervalId);
    }

    // If it's not an 'app' or has <= 1 image, the effect does nothing
    // and returns an empty cleanup function.

  }, [project.type, project.images]); // Dependencies: effect runs if type or images array changes

  

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
        
        {/* <div className="flex gap-3">
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
        </div> */}

        {/* --- Action Buttons --- */}
        <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-dark-700"> {/* Pushes buttons down, adds separator */}
          {/* GitHub Button (Always shown) */}
          {project.links.github && ( // Good practice to check if link exists
             <a
               href={project.links.github}
               target="_blank"
               rel="noopener noreferrer"
               className="btn bg-dark-600 hover:bg-dark-500 text-gray-200 px-3 py-1.5 text-sm rounded flex items-center" // Base button style
               title="View source code on GitHub"
             >
               <Github size={16} className="mr-1.5" /> GitHub
             </a>
          )}


          {/* --- Conditional Buttons --- */}
          {project.type === 'web' && project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-primary-600 hover:bg-primary-500 text-white px-3 py-1.5 text-sm rounded flex items-center" // Primary button style
              title="View live demo"
            >
              <ExternalLink size={16} className="mr-1.5" /> Live Demo
            </a>
          )}

          {project.type === 'app' && (
            <>
              {/* App Store Button */}
              {project.links.appStore && (
                <a
                  href={project.links.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 text-sm rounded flex items-center" // App Store specific style
                  title="Download on the App Store"
                  aria-label="Download on the App Store"
                >
                  <IconApple /> App Store
                </a>
              )}
              {/* Play Store Button */}
              {project.links.playStore && (
                <a
                  href={project.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-green-600 hover:bg-green-500 text-white px-3 py-1.5 text-sm rounded flex items-center" // Play Store specific style
                  title="Get it on Google Play"
                  aria-label="Get it on Google Play"
                >
                  <IconPlayStore /> Play Store
                </a>
              )}
            </>
          )}
           {/* --- End Conditional Buttons --- */}

        </div>
         {/* --- End Action Buttons --- */}
      </div>
    </motion.div>
  );
};

export default Projects;