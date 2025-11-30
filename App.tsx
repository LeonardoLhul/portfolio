
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen font-sans leading-relaxed">
      <div className="absolute inset-0 -z-0 h-full w-full bg-slate-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 md:px-12">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
