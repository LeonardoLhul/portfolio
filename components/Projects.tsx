
import React, { useState } from 'react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

const projectsDataPT: Project[] = [
  {
    title: "InsightDash - Data Visualization",
    description: "Uma dashboard dinâmica que transforma dados brutos em visualizações interativas.",
    longDescription: "InsightDash é um projeto que une minhas habilidades de análise de dados e desenvolvimento frontend. Construído com React e D3.js, ele permite que usuários façam upload de arquivos CSV e gerem automaticamente gráficos interativos, explorando os dados de forma intuitiva. O projeto utiliza um backend em Node.js para processar os dados de forma eficiente.",
    tags: ["React", "D3.js", "Node.js", "Data Viz"],
    imageUrl: "https://picsum.photos/seed/project1/500/300",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "CodeConnect - Rede Social para Devs",
    description: "Plataforma social completa para desenvolvedores compartilharem projetos e ideias.",
    longDescription: "CodeConnect é uma aplicação full-stack construída com o MERN stack (MongoDB, Express, React, Node.js). Possui autenticação de usuários, criação de posts, sistema de comentários e um chat em tempo real utilizando WebSockets. É um projeto complexo que demonstra competências em desenvolvimento backend e frontend, além de gerenciamento de banco de dados NoSQL.",
    tags: ["MERN", "Socket.io", "JWT", "Full-Stack"],
    imageUrl: "https://picsum.photos/seed/project2/500/300",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfólio com AI Assistant",
    description: "Este próprio portfólio, com um assistente AI integrado usando a API do Gemini.",
    longDescription: "Para demonstrar minhas habilidades com APIs modernas e criar uma experiência de usuário única, integrei um chatbot AI neste portfólio. Utilizando a API do Google Gemini, o assistente pode responder perguntas sobre minhas habilidades, projetos e experiência. O frontend foi construído com React, TypeScript e Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Gemini API"],
    imageUrl: "https://picsum.photos/seed/project3/500/300",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const projectsDataEN: Project[] = [
  {
    title: "InsightDash - Data Visualization",
    description: "A dynamic dashboard that transforms raw data into interactive visualizations.",
    longDescription: "InsightDash is a project that combines my data analysis and frontend development skills. Built with React and D3.js, it allows users to upload CSV files and automatically generate interactive charts, exploring data intuitively. The project uses a Node.js backend to process data efficiently.",
    tags: ["React", "D3.js", "Node.js", "Data Viz"],
    imageUrl: "https://picsum.photos/seed/project1/500/300",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "CodeConnect - Social Network for Devs",
    description: "Complete social platform for developers to share projects and ideas.",
    longDescription: "CodeConnect is a full-stack application built with the MERN stack (MongoDB, Express, React, Node.js). It features user authentication, post creation, a comment system, and real-time chat using WebSockets. It's a complex project that demonstrates proficiency in backend and frontend development, as well as NoSQL database management.",
    tags: ["MERN", "Socket.io", "JWT", "Full-Stack"],
    imageUrl: "https://picsum.photos/seed/project2/500/300",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio with AI Assistant",
    description: "This very portfolio, with an integrated AI assistant using the Gemini API.",
    longDescription: "To demonstrate my skills with modern APIs and create a unique user experience, I integrated an AI chatbot into this portfolio. Using the Google Gemini API, the assistant can answer questions about my skills, projects, and experience. The frontend was built with React, TypeScript, and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Gemini API"],
    imageUrl: "https://picsum.photos/seed/project3/500/300",
    liveUrl: "#",
    githubUrl: "#",
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
                    <span key={tag} className="bg-slate-700 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
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
      <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-t-lg" />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
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
