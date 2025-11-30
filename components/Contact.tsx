
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();

  const title = language === 'pt' ? "Vamos Conversar!" : "Let's Talk!";
  const subtitle = language === 'pt' 
    ? "Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou apenas quer dizer olá, sinta-se à vontade para entrar em contato."
    : "I'm always open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out.";
  const emailButton = language === 'pt' ? "Mande um Email" : "Send an Email";
  const footer = language === 'pt' 
    ? "Desenvolvido por Leonardo Lhul Aguiar."
    : "Developed by Leonardo Lhul Aguiar.";

  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="max-w-xl mx-auto text-slate-400 mb-8 text-lg">
        {subtitle}
      </p>
      <a
        href="mailto:joao.silva.dev@email.com"
        className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 mb-12"
      >
        {emailButton}
      </a>
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/joaosilvadev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.212.687-.474 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.58 9.58 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.637.7 1.025 1.6 1.025 2.688 0 3.837-2.337 4.687-4.562 4.937.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"/></svg>
        </a>
        <a href="https://linkedin.com/in/joaosilvadev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.5 7H6v10h2.5V7zM7.25 5.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM17.5 7H15v3.25c0 .75-.25 1.25-1 1.25s-1-.5-1-1.25V7h-2.5v10H13V12c0-1 .5-2 2-2s2 1 2 2v5h2.5V7z"/></svg>
        </a>
      </div>
      <footer className="mt-24 text-slate-500">
        <p>{footer}</p>
      </footer>
    </section>
  );
};

export default Contact;
