import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Globe, Palette, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 z-0 animated-gradient-bg opacity-30"></div>
        <div className="absolute inset-0 z-10 bg-dark-950/40 backdrop-blur-[2px]"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <span className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300">
                Hi there!{' '}
                <span className="inline-block animate-wave">👋</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              I'm <span className="gradient-text">Indresh Goswami</span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-200 h-16 sm:h-20">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  1000,
                  'UI/UX Designer',
                  1000,
                  'Mobile App Developer',
                  1000,
                  'Backend Engineer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link to="/projects" className="btn btn-primary">
                View Projects <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/connect" className="btn btn-outline">
                Let's Connect
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">
            My <span>Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <SkillCard 
              icon={<Code />}
              title="Frontend Development"
              description="Creating responsive, interactive user interfaces with modern frameworks like React, Vue, and Angular."
              skills={['React', 'TypeScript', 'Tailwind CSS', 'Next.js']}
            />
            
            <SkillCard 
              icon={<Server />}
              title="Backend Development"
              description="Building robust server-side applications and APIs with Node.js, Express, and various databases."
              skills={['Node.js', 'Express', 'MongoDB', 'GraphQL']}
            />
            
            <SkillCard 
              icon={<Globe />}
              title="Mobile Development"
              description="Developing cross-platform mobile applications using Flutter and React Native."
              skills={['Flutter', 'React Native', 'Firebase', 'App Store']}
            />
            
            <SkillCard 
              icon={<Database />}
              title="Database Design"
              description="Designing and optimizing database schemas for various applications needs."
              skills={['SQL', 'NoSQL', 'MongoDB', 'PostgreSQL']}
            />
            
            <SkillCard 
              icon={<Palette />}
              title="UI/UX Design"
              description="Creating intuitive and beautiful user interfaces and experiences."
              skills={['Figma', 'Adobe XD', 'Sketch', 'Prototyping']}
            />
            
            <SkillCard 
              icon={<Code />}
              title="DevOps"
              description="Setting up CI/CD pipelines and managing cloud infrastructure."
              skills={['AWS', 'Docker', 'GitHub Actions', 'Kubernetes']}
            />
          </div>
        </div>
      </section>
    </>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}

const SkillCard = ({ icon, title, description, skills }: SkillCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="card p-6 hover:shadow-2xl hover:shadow-primary-500/10"
    >
      <div className="h-12 w-12 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="text-xs font-medium bg-dark-700 text-gray-300 px-2 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;