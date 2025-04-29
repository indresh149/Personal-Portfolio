import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe,
  Code,
  MessageSquare,
  ExternalLink
} from 'lucide-react';

// Define social links
const socialLinks = [
  {
    name: 'GitHub',
    username: 'yourusername',
    url: 'https://github.com/yourusername',
    icon: <Github size={24} />,
    color: 'bg-gray-800 hover:bg-gray-700',
    description: 'Check out my open source projects and contributions'
  },
  {
    name: 'LinkedIn',
    username: 'yourname',
    url: 'https://linkedin.com/in/yourname',
    icon: <Linkedin size={24} />,
    color: 'bg-blue-700 hover:bg-blue-600',
    description: 'Connect with me professionally'
  },
  {
    name: 'Twitter',
    username: '@yourusername',
    url: 'https://twitter.com/yourusername',
    icon: <Twitter size={24} />,
    color: 'bg-sky-500 hover:bg-sky-400',
    description: 'Follow me for updates and tech discussions'
  },
  {
    name: 'Email',
    username: 'your.email@example.com',
    url: 'mailto:your.email@example.com',
    icon: <Mail size={24} />,
    color: 'bg-red-600 hover:bg-red-500',
    description: 'Reach out to me directly'
  },
  {
    name: 'LeetCode',
    username: 'yourusername',
    url: 'https://leetcode.com/yourusername/',
    icon: <Code size={24} />,
    color: 'bg-amber-600 hover:bg-amber-500',
    description: 'Follow my problem-solving journey'
  },
  {
    name: 'GeeksforGeeks',
    username: 'yourusername',
    url: 'https://auth.geeksforgeeks.org/user/yourusername',
    icon: <Code size={24} />,
    color: 'bg-green-600 hover:bg-green-500',
    description: 'Check out my GFG profile and contributions'
  },
  {
    name: 'Website',
    username: 'yourwebsite.com',
    url: 'https://yourwebsite.com',
    icon: <Globe size={24} />,
    color: 'bg-purple-600 hover:bg-purple-500',
    description: 'Visit my personal website'
  },
  {
    name: 'Linktree',
    username: 'yourusername',
    url: 'https://linktr.ee/yourusername',
    icon: <ExternalLink size={24} />,
    color: 'bg-green-500 hover:bg-green-400',
    description: 'All my links in one place'
  }
];

// Contact form component
const ContactForm = () => {
  return (
    <form className="bg-dark-800 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4">Send me a message</h3>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
        <input 
          type="text" 
          id="name" 
          className="w-full bg-dark-700 border border-dark-600 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Your name" 
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
        <input 
          type="email" 
          id="email" 
          className="w-full bg-dark-700 border border-dark-600 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="your.email@example.com" 
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
        <textarea 
          id="message" 
          rows={5}
          className="w-full bg-dark-700 border border-dark-600 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Your message" 
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="btn btn-primary w-full flex items-center justify-center"
      >
        <MessageSquare size={18} className="mr-2" />
        Send Message
      </button>
    </form>
  );
};

// Main Connect Page Component
const Connect = () => {
  return (
    <div className="page-container">
      <h1 className="section-heading">
        Let's <span>Connect</span>
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} rounded-lg p-6 flex items-start space-x-4 text-white transition-all`}
                whileHover={{ y: -5, boxShadow: '0 10px 20px -10px rgba(0, 0, 0, 0.6)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <div className="rounded-full bg-white/10 p-3 flex-shrink-0">
                  {link.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{link.name}</h3>
                  <p className="text-white/80 text-sm mb-2">{link.username}</p>
                  <p className="text-white/60 text-sm">{link.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
          
          {/* QR Code Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 bg-dark-800 rounded-lg p-6 shadow-lg text-center"
          >
            <h3 className="text-xl font-bold mb-4">Scan to connect</h3>
            <div className="bg-white p-4 rounded-lg inline-block">
              {/* Replace with your actual QR code */}
              <div className="w-40 h-40 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">QR Code Placeholder</span>
              </div>
            </div>
            <p className="mt-4 text-gray-400">Scan this QR code to quickly access all my links</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Connect;