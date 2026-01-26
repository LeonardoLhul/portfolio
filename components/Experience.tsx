
import React from 'react';
import { ExperienceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

const experienceDataPT: ExperienceItem[] = [
  {
    date: 'Freelance',
    title: 'Desenvolvedor',
    company: 'Startip - Agência de Marketing',
    description: 'Criação de uma landing page para uma agência de marketing digital utilizando React, Tailwind CSS e TypeScript. O projeto focou em design responsivo, otimização de performance e experiência do usuário para aumentar a conversão de visitantes em clientes.',
  },
  {
    date: '10/2025 – Presente',
    title: 'Analista de Dados',
    company: 'Prometeon Tyre Group',
    description: 'Atuação com análise de dados aplicada à produção, utilizando Dremio e Grafana para monitoramento de indicadores e otimização de processos. Responsável por coleta, tratamento e visualização de informações visando tomada de decisão baseada em dados.',
  },
  {
    date: '10/2024 – 10/2025',
    title: 'Analista de Suporte',
    company: 'Prometeon Tyre Group',
    description: 'Instalação de softwares, manutenção de hardware, backup de usuários e suporte à infraestrutura de rede. ',
  },
  {
    date: '04/2024 – 10/2024',
    title: 'Estagiário de TI',
    company: 'Prometeon Tyre Group',
    description: 'Apoio na análise e testes de dispositivos, requisições de notas fiscais e liberação de usuários em sistemas e computadores. ',
  }
];

const experienceDataEN: ExperienceItem[] = [
  {
    date: 'Freelance',
    title: 'Developer',
    company: 'Startip - Marketing Agency',
    description: 'Development of a landing page for a digital marketing agency using React, Tailwind CSS, and TypeScript. The project focused on responsive design, performance optimization, and user experience to increase the conversion of visitors into clients.',
  },
  {
    date: '10/2025 – Present',
    title: 'Data Analyst',
    company: 'Prometeon Tyre Group',
    description: 'Data analysis in the production area using Dremio and Grafana for KPI monitoring and process optimization. Responsible for data collection, cleaning and visualization to support decision making.',
  },
  {
    date: '10/2024 – 10/2025',
    title: 'Support Analyst',
    company: 'Prometeon Tyre Group',
    description: 'Software installation, hardware maintenance, backups and support for network infrastructure.',
  },
  {
    date: '04/2024 – 10/2024',
    title: 'IT Intern',
    company: 'Prometeon Tyre Group',
    description: 'Assisted with device testing, invoice requests and user configuration on systems and computers.',
  }
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
