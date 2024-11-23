import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, GraduationCap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Best Developer Award',
      organization: 'Tech Excellence Awards 2023',
      description: 'Recognized for outstanding contributions to open-source development',
    },
    {
      icon: GraduationCap,
      title: 'AWS Solutions Architect',
      organization: 'Amazon Web Services',
      description: 'Professional certification for AWS cloud architecture',
    },
    {
      icon: Award,
      title: 'Innovation Champion',
      organization: 'Google Developer Expert',
      description: 'Awarded for innovative contributions to web development',
    },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognition and certifications that showcase my expertise and dedication
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <achievement.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-purple-600 mb-2">{achievement.organization}</p>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;