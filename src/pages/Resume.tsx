import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

// This is a placeholder for the PDF viewer - in a real application, you'd use react-pdf or similar
const ResumeViewer = () => {
  return (
    <div className="bg-dark-800 rounded-lg overflow-hidden shadow-lg mx-auto max-w-4xl">
      <div className="p-8 bg-dark-700">
        <h2 className="text-2xl font-bold mb-2">Your Name</h2>
        <p className="text-gray-300">Software Developer & UI/UX Designer</p>
        <div className="mt-4 text-gray-400">
          <p>example@email.com | (123) 456-7890 | City, Country</p>
        </div>
      </div>
      
      <div className="p-8">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-primary-500">Summary</h3>
          <p className="text-gray-300">
            Passionate software developer with expertise in frontend and backend technologies. Skilled in
            creating responsive, user-friendly applications with modern frameworks and tools.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-primary-500">Experience</h3>
          
          <div className="mb-6">
            <div className="flex flex-wrap justify-between mb-2">
              <h4 className="text-lg font-medium">Senior Developer</h4>
              <span className="text-gray-400">2020 - Present</span>
            </div>
            <p className="text-gray-500 mb-2">Tech Company Inc.</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Led a team of 5 developers to build and maintain web applications</li>
              <li>Implemented CI/CD pipelines that reduced deployment time by 40%</li>
              <li>Redesigned architecture to improve performance by 25%</li>
            </ul>
          </div>
          
          <div>
            <div className="flex flex-wrap justify-between mb-2">
              <h4 className="text-lg font-medium">Frontend Developer</h4>
              <span className="text-gray-400">2018 - 2020</span>
            </div>
            <p className="text-gray-500 mb-2">Web Solutions LLC</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Developed responsive web interfaces using React and Vue.js</li>
              <li>Collaborated with designers to implement UI/UX designs</li>
              <li>Created reusable component libraries that increased development speed</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-primary-500">Education</h3>
          <div className="flex flex-wrap justify-between mb-2">
            <h4 className="text-lg font-medium">Bachelor of Science in Computer Science</h4>
            <span className="text-gray-400">2014 - 2018</span>
          </div>
          <p className="text-gray-500">University of Technology</p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-primary-500">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 
              'Docker', 'AWS', 'Git', 'CI/CD', 'Agile', 'Flutter', 'Firebase'].map(skill => (
              <span 
                key={skill} 
                className="bg-dark-700 text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Resume Page Component
const Resume = () => {
  const [resumeUrl] = useState('/path/to/your-resume.pdf'); // Replace with actual path to your resume

  return (
    <div className="page-container">
      <h1 className="section-heading">
        My <span>Resume</span>
      </h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <a 
          href={resumeUrl} 
          download="YourName-Resume.pdf"
          className="btn btn-primary inline-flex items-center"
        >
          <Download size={18} className="mr-2" />
          Download Resume
        </a>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <ResumeViewer />
      </motion.div>
    </div>
  );
};

export default Resume;