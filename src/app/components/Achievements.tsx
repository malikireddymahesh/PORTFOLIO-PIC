import React from 'react';
import { motion } from 'motion/react';
import { Award, Trophy, Star } from 'lucide-react';

const achievements = [
  {
    icon: <Award className="w-8 h-8 text-[#c9a96e]" />,
    title: 'NSS Digital & Department Coordinator',
    description: 'Serving as the NSS Digital and Department Coordinator at Vignan College, managing photography, social media presence, event documentation, and coordinating departmental activities and digital initiatives.',
  },
  {
    icon: <Trophy className="w-8 h-8 text-[#c9a96e]" />,
    title: 'Google Agentathon Participation',
    description: 'Participated in the Google Agentathon, collaborating on AI-driven solutions, applying problem-solving skills, and exploring innovative agent-based technologies in a competitive environment.',
  },
  {
    icon: <Star className="w-8 h-8 text-[#c9a96e]" />,
    title: 'Certifications',
    description: 'Earned multiple certifications in programming, web development, databases, and emerging technologies, continuously enhancing technical knowledge and professional skills.',
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-gray-50 dark:bg-[#151515] relative overflow-hidden border-y border-gray-300 dark:border-white/5">
      {/* Background soft glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c9a96e] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.02]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#c9a96e] font-medium tracking-[0.2em] uppercase text-sm mb-4">Milestones</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Achievements
          </h3>
          <div className="w-20 h-px bg-[#c9a96e]/50 mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-200 dark:bg-white/5 backdrop-blur-md border border-gray-300 dark:border-white/10 rounded-2xl p-8 hover:bg-gray-300 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-[#151515] border border-gray-300 dark:border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black/20 dark:shadow-black/20 group-hover:border-[#c9a96e]/30 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl text-gray-900 dark:text-white font-medium mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
