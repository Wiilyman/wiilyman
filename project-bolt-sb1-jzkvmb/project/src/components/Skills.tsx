import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Cloud, Smartphone, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      title: 'Backend Development',
      icon: Code,
      skills: ['Node.js', 'Python', 'Java', 'GraphQL', 'REST APIs'],
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase'],
    },
    {
      title: 'Cloud Services',
      icon: Cloud,
      skills: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA'],
    },
    {
      title: 'AI & ML',
      icon: Brain,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;