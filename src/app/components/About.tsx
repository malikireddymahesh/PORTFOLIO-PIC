import React from 'react';
import { motion } from 'motion/react';
import { FaPython, FaSitemap, FaDatabase, FaGithub, FaFigma, FaCloud, FaRocket } from 'react-icons/fa';
import { SiSupabase } from 'react-icons/si';

const technicalSkills = [
  { name: 'Python', icon: <FaPython className="w-6 h-6 text-[#c9a96e]" /> },
  { name: 'Data Structures and Algorithms', icon: <FaSitemap className="w-6 h-6 text-[#c9a96e]" /> },
  { name: 'SQL', icon: <FaDatabase className="w-6 h-6 text-[#c9a96e]" /> },
  { name: 'DBMS', icon: <FaDatabase className="w-6 h-6 text-[#c9a96e]" /> },
];

const tools = [
  { name: 'GitHub', icon: <FaGithub className="w-6 h-6 text-[#c9a96e]" /> },
  { name: 'Supabase', icon: <SiSupabase className="w-6 h-6 text-[#c9a96e]" /> },
  { name: 'Figma', icon: <FaFigma className="w-6 h-6 text-[#c9a96e]" /> },
  { name: 'Vercel & Netlify', icon: <FaCloud className="w-6 h-6 text-[#c9a96e]" /> },
  { name: 'Antigravity', icon: <FaRocket className="w-6 h-6 text-[#c9a96e]" /> },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-[#151515] relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            About Me
          </h3>
          <div className="w-20 h-px bg-[#c9a96e]/50 mb-8" />
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed font-light">
            I am an undergraduate AIML student with strong Python skills and a passion for web development. I enjoy learning new technologies and solving real-world problems. I am actively seeking opportunities to apply my skills and gain practical experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            <h4 className="text-2xl text-gray-900 dark:text-white font-medium mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Technical Skills</h4>
            <div className="grid grid-cols-1 gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-[20px] bg-black/40 dark:bg-white/5 backdrop-blur-md border border-[#c9a96e]/25 shadow-[0_8px_30px_rgba(201,169,110,0.04)] hover:shadow-[0_12px_40px_rgba(201,169,110,0.08)] transition-transform transform hover:-translate-y-2 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg">
                    {skill.icon}
                  </div>
                  <div>
                    <span className="text-white font-bold">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-2xl text-gray-900 dark:text-white font-medium mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Tools</h4>
            <div className="grid grid-cols-1 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-[20px] bg-black/40 dark:bg-white/5 backdrop-blur-md border border-[#c9a96e]/25 shadow-[0_8px_30px_rgba(201,169,110,0.04)] hover:shadow-[0_12px_40px_rgba(201,169,110,0.08)] transition-transform transform hover:-translate-y-2 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg">
                    {tool.icon}
                  </div>
                  <div>
                    <span className="text-white font-bold">{tool.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
