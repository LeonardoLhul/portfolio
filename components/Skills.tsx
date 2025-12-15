import React from 'react';
import { Skill } from '../types';
import { useLanguage } from '../context/LanguageContext';

const skillsData: Skill[] = [
  { name: 'React', icon: <img src="/assets/projects/react.png" alt="React" className="w-12 h-12" /> },
  { name: 'TypeScript', icon: <img src="/assets/projects/typescript.png" alt="TypeScript" className="w-12 h-12" /> },
  { name: 'JavaScript', icon: <img src="/assets/projects/js.png" alt="JavaScript" className="w-12 h-12" /> },
  { name: 'Node.js', icon: <img src="/assets/projects/nodejs.png" alt="Node.js" className="w-12 h-12" /> },
  { name: 'Python', icon: <img src="/assets/projects/python.png" alt="Python" className="w-12 h-12" /> },
  { name: 'SQL', icon: <img src="/assets/projects/database.png" alt="SQL" className="w-12 h-12" /> },
  { name: 'Tailwind CSS', icon: <img src="/assets/projects/TCSS.png" alt="Tailwind CSS" className="w-12 h-9" /> },
  {
    name: 'GitHub',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12 text-indigo-400"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const title = language === 'pt' ? 'Habilidades' : 'Skills';

  return (
    <section id="skills" className="py-24 bg-slate-900/50 rounded-lg">
      <h2 className="text-3xl font-bold text-center text-white mb-16">
        <span className="border-b-4 border-indigo-500 pb-1">{title}</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-indigo-600/30"
          >
            <div className="text-indigo-400 mb-4">
              {skill.icon}
            </div>

            {/* TÍTULO CENTRALIZADO */}
            <h3 className="text-lg font-semibold text-white text-center min-h-[3rem] flex items-center justify-center">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
