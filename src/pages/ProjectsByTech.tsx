import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Projects from './Projects';

const ProjectsByTech = () => {
  const { tech } = useParams();
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8 flex items-center text-gray-400 hover:text-white transition-colors"
        onClick={() => navigate('/projects')}
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to All Projects
      </motion.button>
      
      <h1 className="section-heading">
        <span>{tech?.charAt(0).toUpperCase() + tech?.slice(1)}</span> Projects
      </h1>
      
      <Projects />
    </div>
  );
};

export default ProjectsByTech;