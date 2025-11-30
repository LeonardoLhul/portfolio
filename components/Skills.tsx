
import React from 'react';
import { Skill } from '../types';
import { useLanguage } from '../context/LanguageContext';

const skillsData: Skill[] = [
  { name: 'React', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/><path d="m16.892 9.034-2.128 1.23a3.036 3.036 0 0 0-1.764.12l-1.425-2.468a7.962 7.962 0 0 1 5.317 1.118zM7.108 14.966l2.128-1.23a3.036 3.036 0 0 0 1.764-.12l1.425 2.468a7.962 7.962 0 0 1-5.317-1.118zM9.575 7.784l1.425 2.468a3.036 3.036 0 0 0-.12 1.764L9.65 13.24a7.962 7.962 0 0 1-1.118-5.317l1.043-.139z"/></svg> },
  { name: 'TypeScript', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm12 4h-2.5v10h-2V7H10V5h7v2zM8 7H6v10h4v-2H8V7z"/></svg> },
  { name: 'JavaScript', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M3 3h18v18H3V3zm15 3h-2.5v10h-2V6H11V4h7v2zM9 6H4v5h3.5v1H6v2h1.5v3h2V6z"/></svg> },
  { name: 'Node.js', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M21.932 9.682s-.361-1.018-1.43-1.267c-1.07-.248-2.628-.154-2.628-.154l.32 1.839s1.396-.03 2.01.481c.613.511.458 1.43.458 1.43l-2.62-.01V19.5l-2.488-3.327-2.355 3.327V11.961l5.448.012s.58-1.66-1.026-2.127c-1.605-.467-3.61-.312-3.61-.312L12 2l-1.932 7.523s-2.005-.155-3.61.312c-1.606.467-1.026 2.127-1.026 2.127l5.448-.012V19.5L7.523 16.17 5.168 19.5V12.02l-2.62.01s-.155-.919.458-1.43c.614-.511 2.01-.481 2.01-.481l.32-1.839s-1.558-.094-2.628.154c-1.07.249-1.43 1.267-1.43 1.267L3.102 22h17.796l-1.966-12.318z"/></svg> },
  { name: 'Python', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-4 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm1-8.5v-1h-6v4h2v-1h2v-1h-2v-1h4zm-5 4v1h6v-4h-2v1h-2v1h2v1h-4z"/></svg> },
  { name: 'SQL', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 2a9 9 0 0 0-9 9v2c0 2.21 1.79 4 4 4h2v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h2a4 4 0 0 0 4-4v-2a9 9 0 0 0-9-9zm-5 9v2c0 1.1-.9 2-2 2s-2-.9-2-2v-2a7 7 0 0 1 7-7h2v2H7a5 5 0 0 0-5 5zm14-2c0 1.1-.9 2-2 2s-2-.9-2-2v-2a5 5 0 0 0-5-5h-2V4h2a7 7 0 0 1 7 7v2z"/></svg> },
  { name: 'Tailwind CSS', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg> },
  { name: 'Git', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="m21.706 11.292-8-8a1.01 1.01 0 0 0-1.414 0l-8 8a.999.999 0 0 0 0 1.414l8 8a.999.999 0 0 0 1.414 0l8-8a.999.999 0 0 0 0-1.414zM13 18.586V13h-2v5.586L6.414 14l-1.414 1.414L12 22.414l7-7-1.414-1.414L13 18.586zM12 1.586l5.586 5.586L13 11.586V6h-2v5.586L6.414 7.172 5 8.586 12 1.586z"/></svg> },
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
            className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-indigo-600/30"
          >
            <div className="text-indigo-400 mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
