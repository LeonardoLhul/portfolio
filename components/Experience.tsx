
import React from 'react';
import { ExperienceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

const experienceDataPT: ExperienceItem[] = [
  {
    date: '2023 - Presente',
    title: 'Desenvolvedor Full Stack (Estudos e Projetos Pessoais)',
    company: 'Autodidata',
    description: 'Imersão em tecnologias web modernas como React, Node.js, TypeScript e Tailwind CSS. Desenvolvendo projetos full-stack para solidificar o conhecimento e construir um portfólio robusto.',
  },
  {
    date: '2020 - 2023',
    title: 'Analista de Dados',
    company: 'Tech Solutions Inc.',
    description: 'Análise de grandes conjuntos de dados para identificar tendências e insights de negócios. Criação de dashboards interativos e automação de relatórios usando Python (Pandas) e SQL.',
  },
  {
    date: '2019',
    title: 'Bacharel em Ciência da Computação',
    company: 'Universidade Federal de Tecnologia',
    description: 'Graduação com foco em algoritmos, estruturas de dados e fundamentos de engenharia de software.',
  },
];

const experienceDataEN: ExperienceItem[] = [
  {
    date: '2023 - Present',
    title: 'Full Stack Developer (Studies and Personal Projects)',
    company: 'Self-taught',
    description: 'Deep dive into modern web technologies like React, Node.js, TypeScript, and Tailwind CSS. Developing full-stack projects to solidify knowledge and build a robust portfolio.',
  },
  {
    date: '2020 - 2023',
    title: 'Data Analyst',
    company: 'Tech Solutions Inc.',
    description: 'Analysis of large datasets to identify trends and business insights. Creation of interactive dashboards and report automation using Python (Pandas) and SQL.',
  },
  {
    date: '2019',
    title: 'Bachelor in Computer Science',
    company: 'Federal University of Technology',
    description: 'Graduation focused on algorithms, data structures, and software engineering fundamentals.',
  },
];

const Experience: React.FC = () => {
  const { language } = useLanguage();
  const experienceData = language === 'pt' ? experienceDataPT : experienceDataEN;
  const title = language === 'pt' ? 'Minha Jornada' : 'My Journey';

  return (
    <section id="experience" className="py-24">
      <h2 className="text-3xl font-bold text-center text-white mb-16">
        <span className="border-b-4 border-indigo-500 pb-1">{title}</span>
      </h2>
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute z-0 w-2 h-full bg-slate-800 shadow-md inset-0 left-1/2 -ml-1"></div>
        {experienceData.map((item, index) => (
          <div key={index} className="relative z-10">
            <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <div className="md:w-1/2"></div>
              <div className="md:w-1/2">
                <div className={`bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700 hover:border-indigo-500 transition-colors duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <p className="text-sm text-indigo-400 mb-1">{item.date}</p>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-md font-semibold text-slate-300 mb-3">{item.company}</p>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </div>
            </div>
            <div className="rounded-full bg-indigo-500 border-4 border-slate-900 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
