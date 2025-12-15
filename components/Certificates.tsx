import React from 'react';
import { Certificatees } from '../types';
import { useLanguage } from '../context/LanguageContext';


const CertificatesData: Certificatees[] = [
  {
    name: 'Database',
    certificateUrl: 'https://www.udemy.com/certificate/UC-db5a15c2-f184-4076-ae1f-158c5c69a676/?trk=public_profile_see-credential',
    icon: <img src="/assets/projects/database.png" alt="Java" className="w-12 h-12" />
  },
  {
    name: 'GitHub',
    certificateUrl: 'https://cursos.alura.com.br/user/lhulaguiar/course/git-github-repositorio-commit-versoes/certificate',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
  },
  {
    name: 'JAVA',
    certificateUrl: 'https://cursos.alura.com.br/user/lhulaguiar/course/java-primeiros-passos/certificate?lang=pt_BR',
    icon: <img src="/assets/projects/java.png" alt="Java" className="w-12 h-12" />
  },
  {
    name: 'Scrum',
    certificateUrl: 'https://cursos.alura.com.br/certificate/lhulaguiar/agile-scrum?lang=pt_BR',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M3 13h2v8H3v-8zm4-8h2v16H7V5zm5-3h2v19h-2V2zm5 5h2v14h-2v-14zm5-2h2v16h-2V5z" /></svg>
  },
];

const Certificates: React.FC = () => {
  const { language } = useLanguage();
  const title = language === 'pt' ? 'Certificados' : 'Certificates';



  return (
    <section id="certificates" className="py-24 bg-slate-900/50 rounded-lg">
      <h2 className="text-3xl font-bold text-center text-white mb-16">
        <span className="border-b-4 border-indigo-500 pb-1">{title}</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {CertificatesData.map((Certificates, index) => (
          <a
            key={Certificates.name}
            href={Certificates.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-indigo-600/30 cursor-pointer"
          >
            <div className="text-indigo-400 mb-4">{Certificates.icon}</div>
            <h3 className="text-lg font-semibold text-white text-center">{Certificates.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );

};

export default Certificates;