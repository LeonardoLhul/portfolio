
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const title = language === 'pt' ? "Vamos Conversar!" : "Let's Talk!";
  const subtitle = language === 'pt' 
    ? "Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou apenas quer dizer olá, sinta-se à vontade para entrar em contato."
    : "I'm always open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out.";
  
  const formLabels = language === 'pt' ? {
    name: 'Nome',
    email: 'Email',
    message: 'Mensagem',
    send: 'Enviar',
    sending: 'Enviando...',
    success: 'Mensagem enviada com sucesso!',
    error: 'Erro ao enviar. Tente novamente.'
  } : {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    sending: 'Sending...',
    success: 'Message sent successfully!',
    error: 'Error sending message. Try again.'
  };

  const footer = language === 'pt' 
    ? "Desenvolvido por Leonardo Lhul Aguiar."
    : "Developed by Leonardo Lhul Aguiar.";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xnnejkqy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="max-w-xl mx-auto text-slate-400 mb-12 text-lg">
        {subtitle}
      </p>

      <div className="max-w-md mx-auto mb-12 bg-slate-800 rounded-lg p-8 border border-slate-700">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-left text-slate-300 font-medium mb-2">
              {formLabels.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-slate-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500"
              placeholder={formLabels.name}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-left text-slate-300 font-medium mb-2">
              {formLabels.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-slate-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500"
              placeholder={formLabels.email}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-left text-slate-300 font-medium mb-2">
              {formLabels.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-slate-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500 resize-none"
              placeholder={formLabels.message}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-500 disabled:bg-indigo-800 disabled:cursor-not-allowed transition-colors duration-300"
          >
            {isSubmitting ? formLabels.sending : formLabels.send}
          </button>

          {submitStatus === 'success' && (
            <div className="bg-green-900/30 border border-green-600 text-green-300 px-4 py-2 rounded-md text-sm">
              {formLabels.success}
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-900/30 border border-red-600 text-red-300 px-4 py-2 rounded-md text-sm">
              {formLabels.error}
            </div>
          )}
        </form>
      </div>

      <div className="flex justify-center space-x-6">
        <a href="https://github.com/LeonardoLhul" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70">
          <img src="/assets/projects/github.png" alt="GitHub" className="w-8 h-8" /> 
        </a>
        <a href="https://linkedin.com/in/lhulaguiar" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70">
          <img src="/assets/projects/linkedin.png" alt="LinkedIn" className="w-8 h-8" /> 
        </a>
      </div>
      <footer className="mt-24 text-slate-500">
        <p>{footer}</p>
      </footer>
    </section>
  );
};

export default Contact;
