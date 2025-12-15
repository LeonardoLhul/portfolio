
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
    const { language } = useLanguage();
    const [text, setText] = useState('');

    const rolesPT = ['Desenvolvedor', 'Programador', 'Entusiasta de Dados'];
    const rolesEN = ['Developer', 'Programmer', 'Data Enthusiast'];
    const roles = language === 'pt' ? rolesPT : rolesEN;

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `#${sectionId}`);
        }
    };

    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);


    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex];
            const updatedText = isDeleting
                ? currentRole.substring(0, text.length - 1)
                : currentRole.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === currentRole) {
                setTimeout(() => setIsDeleting(true), 2000);
                setTypingSpeed(100);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
                setTypingSpeed(150);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex, roles, typingSpeed]);

    const greeting = language === 'pt' ? 'Olá, meu nome é ' : 'Hello, my name is ';
    const name = language === 'pt' ? 'Leonardo' : 'Leonardo';
    const mainTitle = language === 'pt' ? 'Eu construo coisas para a web.' : 'I build things for the web.';
    const intro = language === 'pt' ? 'Eu sou um' : 'I am a';
    const description = language === 'pt'
        ? 'Desenvolvo aplicações web modernas, rápidas e funcionais, sempre buscando unir design limpo, performance e inteligência de dados.'
        : 'I develop modern, fast, and functional web applications, always striving to combine clean design, performance, and data intelligence.';
    const ctaButton = language === 'pt' ? 'Veja meus projetos' : 'View my projects';

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center text-center">
            <div className="max-w-4xl ">
                <h2 className="font-semibold tracking-wider mb-2 flex gap-2 justify-center text-center">
                    <span className="text-indigo-400">
                        {greeting}
                    </span>
                    <span className="text-white">
                        {name}
                    </span>
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">
                    {mainTitle}
                </h1>
                <h3 className="text-2xl md:text-4xl font-medium text-slate-400 mb-8">
                    {intro} <span className="text-white border-b-4 border-indigo-500">{text}</span>
                    <span className="animate-ping">|</span>
                </h3>
                <p className="max-w-2xl mx-auto text-slate-400 mb-10 text-lg">
                    {description}
                </p>
                <a
                    className="bg-indigo-600 text-white font-bold py-3 px-8 cursor-pointer rounded-md hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105"
                    onClick={(e) => handleNavClick(e, 'projects')}
                >
                    {ctaButton}
                </a>
            </div>
        </section>
    );
};

export default Hero;
