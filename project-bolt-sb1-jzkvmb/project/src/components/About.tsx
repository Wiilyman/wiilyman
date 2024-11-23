import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A passionate developer with a keen eye for design and a drive for creating
            exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GraduationCap className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-medium">Master's in Computer Science</p>
                <p className="text-gray-600">Stanford University</p>
                <p className="text-sm text-gray-500">2018 - 2020</p>
              </li>
              <li>
                <p className="font-medium">Bachelor's in Software Engineering</p>
                <p className="text-gray-600">MIT</p>
                <p className="text-sm text-gray-500">2014 - 2018</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Briefcase className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-medium">Senior Developer</p>
                <p className="text-gray-600">Google</p>
                <p className="text-sm text-gray-500">2020 - Present</p>
              </li>
              <li>
                <p className="font-medium">Full Stack Developer</p>
                <p className="text-gray-600">Microsoft</p>
                <p className="text-sm text-gray-500">2018 - 2020</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Award className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Interests</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Web Development</li>
              <li className="text-gray-600">UI/UX Design</li>
              <li className="text-gray-600">Machine Learning</li>
              <li className="text-gray-600">Cloud Computing</li>
              <li className="text-gray-600">Open Source</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;