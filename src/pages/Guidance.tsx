import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  Star, 
  MessageCircle, 
  Award,
  Calendar,
  Clock,
  Video,
  ExternalLink
} from 'lucide-react';

const Guidance = () => {
  return (
    <div className="page-container">
      <h1 className="section-heading">
        Mentorship & <span>Guidance</span>
      </h1>
      
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-xl text-gray-300 mb-8">
          I offer mentorship sessions to help others grow in their tech career.
          Connect with me on Topmate for personalized guidance.
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <a 
            href="https://topmate.io/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary text-lg px-8 py-3"
          >
            <Star size={20} className="mr-2" />
            Book a Session on Topmate
          </a>
        </motion.div>
      </div>
      
      {/* Featured Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-dark-800 rounded-lg p-6 text-center">
          <Users size={32} className="mx-auto mb-4 text-primary-500" />
          <h3 className="text-xl font-bold mb-2">50+</h3>
          <p className="text-gray-400">Mentees Guided</p>
        </div>
        
        <div className="bg-dark-800 rounded-lg p-6 text-center">
          <Star size={32} className="mx-auto mb-4 text-yellow-500" />
          <h3 className="text-xl font-bold mb-2">4.9/5</h3>
          <p className="text-gray-400">Average Rating</p>
        </div>
        
        <div className="bg-dark-800 rounded-lg p-6 text-center">
          <MessageCircle size={32} className="mx-auto mb-4 text-green-500" />
          <h3 className="text-xl font-bold mb-2">200+</h3>
          <p className="text-gray-400">Sessions Completed</p>
        </div>
      </div>
      
      {/* Session Types */}
      <h2 className="text-2xl font-bold mb-6 text-center">Available Session Types</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-dark-800 rounded-lg overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-start">
              <div className="bg-primary-500/10 p-3 rounded-lg mr-4">
                <Video className="text-primary-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">1:1 Video Consultation</h3>
                <p className="text-gray-400 mb-4">
                  Personal video call to discuss your career goals, portfolio, or specific technical challenges.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <span className="flex items-center">
                    <Clock size={16} className="mr-1" /> 30 minutes
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" /> Flexible schedule
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-dark-800 rounded-lg overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-start">
              <div className="bg-secondary-500/10 p-3 rounded-lg mr-4">
                <BookOpen className="text-secondary-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Resume Review</h3>
                <p className="text-gray-400 mb-4">
                  Detailed feedback on your resume with suggestions for improvement to stand out to recruiters.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <span className="flex items-center">
                    <Clock size={16} className="mr-1" /> Asynchronous
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" /> 48hr turnaround
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-dark-800 rounded-lg overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-start">
              <div className="bg-accent-500/10 p-3 rounded-lg mr-4">
                <Award className="text-accent-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Mock Interviews</h3>
                <p className="text-gray-400 mb-4">
                  Practice technical and behavioral interviews with real-world scenarios and detailed feedback.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <span className="flex items-center">
                    <Clock size={16} className="mr-1" /> 60 minutes
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" /> Weekends available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-dark-800 rounded-lg overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-start">
              <div className="bg-green-500/10 p-3 rounded-lg mr-4">
                <MessageCircle className="text-green-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Text Consultation</h3>
                <p className="text-gray-400 mb-4">
                  Send your questions via text and get detailed answers and advice within 24 hours.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <span className="flex items-center">
                    <Clock size={16} className="mr-1" /> Asynchronous
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" /> 24hr response
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Testimonials */}
      <h2 className="text-2xl font-bold mb-6 text-center">What Mentees Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-dark-800 rounded-lg p-6">
          <div className="flex gap-1 text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-gray-300 italic mb-4">
            "The guidance I received was exceptional. I learned so much about modern web development practices and landed my dream job shortly after our sessions."
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold mr-3">
              JD
            </div>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-400">Frontend Developer</p>
            </div>
          </div>
        </div>
        
        <div className="bg-dark-800 rounded-lg p-6">
          <div className="flex gap-1 text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-gray-300 italic mb-4">
            "The mock interview session was incredibly helpful. The feedback was specific and actionable, which helped me improve significantly for my real interviews."
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center text-white font-bold mr-3">
              JS
            </div>
            <div>
              <p className="font-medium">Jane Smith</p>
              <p className="text-sm text-gray-400">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="https://topmate.io/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 rounded-lg px-8 py-4 font-semibold text-lg transition-all"
          >
            <ExternalLink size={20} className="mr-2" />
            Visit My Topmate Profile
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Guidance;