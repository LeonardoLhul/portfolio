
import React, { useState } from 'react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

const projectsDataPT: Project[] = [
  {
    title: "Startip",
    description: "Landing page para uma Agência de marketing.",
    longDescription: "Desenvolvimento de landing page para agência de marketing, utilizando Figma (UI/UX), React, Vite, JavaScript e TailwindCSS. Implementação de formulário funcional e integração direta com WhatsApp para captação de leads.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    imageUrl: "./assets/projects/startip.png",
    liveUrl: "https://agenciastartip.com.br/",

  },

];

const projectsDataEN: Project[] = [
  {
    title: "Startip",
    description: "Landing page for a Marketing Agency.",
    longDescription: "Development of a landing page for a marketing agency using Figma (UI/UX), React, Vite, JavaScript, and TailwindCSS. Implementation of a functional form and direct WhatsApp integration for lead generation. ",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    imageUrl: "./assets/projects/startip.png",
    liveUrl: "https://agenciastartip.com.br/",
  },
  
];

const ProjectCard: React.FC<{ project: Project; onOpenModal: () => void; language: 'pt' | 'en' }> = ({ project, onOpenModal, language }) => (
  <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg group transform transition-transform duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-indigo-500">
    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-slate-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="bg-slate-700 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full center">{tag}</span>
        ))}
      </div>
      <button onClick={onOpenModal} className="w-full text-center bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-500 transition-colors duration-300">
        {language === 'pt' ? 'Ver Detalhes' : 'View Details'}
      </button>
    </div>
  </div>
);

const ProjectModal: React.FC<{ project: Project; onClose: () => void; language: 'pt' | 'en' }> = ({ project, onClose, language }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
    <div className="bg-slate-800 rounded-lg shadow-2xl max-w-2xl w-full relative border border-slate-700" onClick={(e) => e.stopPropagation()}>
      <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl">&times;</button>
      <img src={project.imageUrl} alt={project.title} className="w-full h-100 object-cover rounded-t-lg mb-1" />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-white mb-3">{project.title}</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-slate-700 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <p className="text-slate-400 mb-6">{project.longDescription}</p>
        <div className="flex gap-4">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-500 transition-colors duration-300">{language === 'pt' ? 'Ver Online' : 'View Online'}</a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-slate-600 text-white font-bold py-2 px-4 rounded-md hover:bg-slate-500 transition-colors duration-300">{language === 'pt' ? 'Código Fonte' : 'Source Code'}</a>}
        </div>
      </div>
    </div>
  </div>
);


const Projects: React.FC = () => {
  const { language } = useLanguage();
  const projectsData = language === 'pt' ? projectsDataPT : projectsDataEN;
  const title = language === 'pt' ? 'Projetos' : 'Projects';
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-bold text-center text-white mb-16">
        <span className="border-b-4 border-indigo-500 pb-1">{title}</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} onOpenModal={() => setSelectedProject(project)} language={language} />
        ))}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} language={language} />}
    </section>
  );
};

export default Projects;
