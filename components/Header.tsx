
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = language === 'pt' 
    ? ['Sobre', 'Experiência', 'Habilidades', 'Certificados', 'Projetos', 'Contato']
    : ['About', 'Experience', 'Skills', 'Certificates', 'Projects', 'Contact'];

  const navIds = ['about', 'experience', 'skills', 'certificates','projects', 'contact'];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '#hero');
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto flex items-center justify-between p-4 px-6 md:px-12">
        <a
          href="#hero"
          onClick={handleLogoClick}
          className="text-2xl font-bold text-white tracking-wider cursor-pointer hover:text-indigo-400 transition-colors duration-300"
        >
         {'<'}<span className="text-indigo-400"><span className="text-indigo-400">/</span></span>{'>'}
        </a>
        {/* Mobile language toggle (visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            aria-label="Toggle language"
            className="ml-3 px-3 py-1 bg-indigo-600 text-white rounded-md text-sm"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href={`#${navIds[index]}`}
              onClick={(e) => handleNavClick(e, navIds[index])}
              className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 font-medium cursor-pointer"
            >
              {link}
            </a>
          ))}
          <button
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            className="ml-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md font-medium transition-colors duration-300"
          >
            {language === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
