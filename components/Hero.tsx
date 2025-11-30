
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
    const { language } = useLanguage();
    const [text, setText] = useState('');
    
    const rolesPT = ['Developer', 'Programador', 'Entusiasta de Dados'];
    const rolesEN = ['Developer', 'Programmer', 'Data Enthusiast'];
    const roles = language === 'pt' ? rolesPT : rolesEN;
    
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

    const greeting = language === 'pt' ? 'Olá, meu nome é Leonardo' : 'Hello, my name is Leonardo';
    const mainTitle = language === 'pt' ? 'Eu construo coisas para a web.' : 'I build things for the web.';
    const intro = language === 'pt' ? 'Eu sou um' : 'I am a';
    const description = language === 'pt'
        ? 'Sou um analista de dados em transição para a carreira de desenvolvimento, apaixonado por criar soluções web modernas e eficientes.'
        : 'I am a data analyst transitioning to a development career, passionate about creating modern and efficient web solutions.';
    const ctaButton = language === 'pt' ? 'Veja meus projetos' : 'View my projects';

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center text-center">
            <div className="max-w-4xl">
                <h2 className="text-indigo-400 font-semibold tracking-wider mb-2">{greeting}</h2>
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
                    href="#projects"
                    className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105"
                >
                    {ctaButton}
                </a>
            </div>
        </section>
    );
};

export default Hero;
