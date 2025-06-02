import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Code,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

// Define social links
const socialLinks = [
  {
    name: "GitHub",
    username: "indresh149",
    url: "https://github.com/indresh149",
    icon: <Github size={24} />,
    color: "bg-gray-800 hover:bg-gray-700",
    description:
      "Check out my open source projects and contributions and personal projects",
  },
  {
    name: "LinkedIn",
    username: "indreshgoswami",
    url: "https://www.linkedin.com/in/indreshgoswami/",
    icon: <Linkedin size={24} />,
    color: "bg-blue-700 hover:bg-blue-600",
    description: "Connect with me professionally",
  },
  {
    name: "Twitter(X)",
    username: "@IndreshGoswami5",
    url: "https://x.com/IndreshGoswami5",
    icon: <Twitter size={24} />,
    color: "bg-sky-500 hover:bg-sky-400",
    description: "Follow me for updates and tech discussions",
  },
  {
    name: "Email",
    username: "indreshgoswami149@gmail.com",
    url: "mailto:indreshgoswami149@gmail.com",
    icon: <Mail size={24} />,
    color: "bg-red-600 hover:bg-red-500",
    description: "Reach out to me directly",
  },
  {
    name: "LeetCode",
    username: "indresh149",
    url: "https://leetcode.com/u/indresh149/",
    icon: <Code size={24} />,
    color: "bg-amber-600 hover:bg-amber-500",
    description: "Follow my problem-solving journey",
  },
  {
    name: "GeeksforGeeks",
    username: "indreshgoswami149",
    url: "https://www.geeksforgeeks.org/user/indreshgoswami149/",
    icon: <Code size={24} />,
    color: "bg-green-600 hover:bg-green-500",
    description: "Check out my GFG profile and contributions",
  },
  {
    name: "StackOverflow",
    username: "indresh-goswami",
    url: "https://stackoverflow.com/users/16163491/indresh-goswami",
    icon: <Globe size={24} />,
    color: "bg-purple-600 hover:bg-purple-500",
    description: "Ask me anything about programming",
  },
  {
    name: "Linktree",
    username: "indresh5",
    url: "https://linktr.ee/indresh5",
    icon: <ExternalLink size={24} />,
    color: "bg-green-500 hover:bg-green-400",
    description: "All my links in one place",
  },
];

// Contact form component
const ContactForm = () => {
  return (
    <form className="bg-dark-800 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4">Send me a message</h3>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full bg-dark-700 border border-dark-600 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Your name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full bg-dark-700 border border-dark-600 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-300 mb-2">
          Message
        </label>
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
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 20px -10px rgba(0, 0, 0, 0.6)",
                }}
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
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 bg-dark-800 rounded-lg p-6 shadow-lg text-center"
          >
            <h3 className="text-xl font-bold mb-4">Scan to connect</h3>
            <div className="bg-white p-4 rounded-lg inline-block">
         
              <div className="w-40 h-40 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">QR Code Placeholder</span>
              </div>
            </div>
            <p className="mt-4 text-gray-400">Scan this QR code to quickly access all my links</p>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 bg-dark-800 rounded-lg p-6 shadow-lg text-center" // Assuming dark theme classes
          >
            <h3 className="text-xl font-bold mb-4 text-white">
              Scan to connect
            </h3>{" "}
            {/* Adjusted text color */}
            <div className="bg-white p-4 rounded-lg inline-block shadow-inner">
              <img
                // Path relative to the public folder
                src="/indresh5.svg" // ADJUST THIS PATH if needed
                alt="QR Code for accessing links" // Important for accessibility
                className="w-40 h-40 block" // Use Tailwind or CSS for sizing
                width="160" // Optional: provide intrinsic size hint
                height="160" // Optional: provide intrinsic size hint
              />
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Scan this QR code to quickly access all my links
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
