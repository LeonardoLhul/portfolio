import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();

  const title = language === 'pt' ? 'Sobre Mim' : 'About Me';

  const paragraphs =
    language === 'pt'
      ? [
          'Olá! Sou Leonardo, um profissional apaixonado por tecnologia e dados. Minha jornada começou como estagiário de TI, evoluiu para a área de Analista de Suporte, onde desenvolvi uma base sólida em resolução de problemas e contato direto com usuários, e hoje atuo como Analista de Dados, transformando informações em insights estratégicos.',
          'Essa base analítica me deu uma perspectiva única sobre lógica e eficiência, que agora aplico na criação de aplicações web. A transição para o desenvolvimento foi um passo natural, impulsionado pela vontade de não apenas analisar, mas também construir as ferramentas que geram impacto.',
          'Hoje, meu foco é desenvolver interfaces intuitivas e sistemas robustos, combinando o melhor dos dois mundos. Estou sempre em busca de novos desafios e tecnologias para aprender.',
        ]
      : [
          "Hello! I'm Leonardo, a professional passionate about technology and data. My journey started as an IT intern, evolved to Support Analyst, where I developed a solid foundation in problem-solving and direct user contact, and today I work as a Data Analyst, transforming information into strategic insights.",
          'This analytical foundation gave me a unique perspective on logic and efficiency, which I now apply to creating web applications. The transition to development was a natural step, driven by the desire to not only analyze but also build tools that make an impact.',
          "Today, my focus is developing intuitive interfaces and robust systems, combining the best of both worlds. I'm always seeking new challenges and technologies to learn.",
        ];

  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        <span className="border-b-4 border-indigo-500 pb-1">{title}</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto px-6">
        {/* FOTO */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>

            <img
              src="/assets/projects/eu.jpg"
              alt="Leonardo Lhul Aguiar"
              className="relative rounded-full shadow-xl w-72 h-72 object-cover"
            />
          </div>
        </div>

        {/* TEXTO */}
        <div className="md:w-2/3 text-lg text-slate-400">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
