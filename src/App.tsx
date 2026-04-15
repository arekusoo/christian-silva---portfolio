/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectPage from './ProjectPage';
import UniProjectPage from './UniProjectPage';
import AmorDeBichoProjectPage from './AmorDeBichoProjectPage';
import { DATA, Lang } from './data';
import { 
  Mail, 
  Linkedin, 
  GraduationCap, 
  Briefcase, 
  Globe,
  ArrowRight,
  ExternalLink,
  Sparkles,
  MessageCircle,
  Phone,
  AtSign,
  Download,
  Menu,
  X,
  Bot,
  ArrowUp
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';

import Sidebar from './components/Sidebar';

import { Toaster } from 'sonner';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[100] p-4 bg-white text-black rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <ArrowUp size={24} />
    </motion.button>
  );
};

function Home() {
  const [lang, setLang] = useState<Lang>('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const t = DATA[lang];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative font-sans">
      {/* --- Background Glow --- */}
      <div className="bg-glow top-[-10%] left-[-10%] bg-[radial-gradient(circle,_rgba(16,185,129,0.8)_0%,_rgba(16,185,129,0.1)_70%,_transparent_100%)] opacity-[0.45]" />
      <div className="bg-glow bottom-[-20%] right-[-20%] bg-blue-400/10 opacity-20" />

      {/* --- Mobile Header --- */}
      <div className="lg:hidden fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-[60] bg-brand-bg/80 backdrop-blur-xl border-b border-white/5">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-white bg-white/5 rounded-full border border-white/10"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <button 
          onClick={() => setLang(l => l === 'pt' ? 'en' : 'pt')}
          className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] text-white hover:bg-white/10 transition-all flex items-center gap-2"
        >
          <Globe size={14} />
          {lang === 'pt' ? 'EN' : 'PT'}
        </button>
      </div>

      {/* --- Sidebar --- */}
      <Sidebar 
        lang={lang} 
        setLang={setLang} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      {/* --- Main Content --- */}
      <main className="flex-1 lg:ml-[24rem] p-8 lg:p-16 space-y-32 pt-32 lg:pt-16">
        {/* Header / Lang Switcher (Desktop Only) */}
        <header className="hidden lg:flex justify-end">
          <button 
            onClick={() => setLang(l => l === 'pt' ? 'en' : 'pt')}
            className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] text-white hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <Globe size={14} />
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </header>

        {/* Hero Section */}
        <motion.section 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12 text-center lg:text-left"
        >
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl">
              {t.cta}
            </h2>
            
            {/* Merged Differentials */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start text-gray-500 text-sm font-medium">
              {t.differentials.map((diff, i) => (
                <span key={i} className="flex items-center gap-4">
                  {diff}
                  {i < t.differentials.length - 1 && <span className="w-1 h-1 bg-white/20 rounded-full" />}
                </span>
              ))}
            </div>
          </div>

          <button className="cta-button flex items-center gap-3 mx-auto lg:mx-0">
            {t.ctaButton}
            <ArrowRight size={20} />
          </button>
        </motion.section>

        {/* Skills Chips */}
        <section id="skills">
          <h2 className="section-title">{lang === 'pt' ? 'Habilidades' : 'Skills'}</h2>
          <div className="flex flex-wrap gap-3">
            {t.skills.map((skill, i) => (
              <motion.span 
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="skill-chip"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2 className="section-title">{lang === 'pt' ? 'Experiência' : 'Experience'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.experience.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="organic-card p-10 space-y-6"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    <p className="text-gray-500 text-sm font-medium">{exp.period}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-gray-200">{exp.role}</p>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-gray-400 text-sm leading-relaxed flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 shrink-0 mt-1.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white tracking-tight">{lang === 'pt' ? 'Projetos' : 'Projects'}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatePresence mode="popLayout">
              {t.projects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="organic-card p-5 group cursor-pointer"
                  onClick={() => {
                    const slug = project.title.toLowerCase().replace(/\s+/g, '-');
                    navigate(`/project/${slug}`);
                  }}
                >
                  <div className="relative overflow-hidden rounded-[1.5rem]">
                    <img 
                      src={project.thumb} 
                      alt={project.title}
                      className="project-thumb transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 p-3 bg-black/50 backdrop-blur-xl rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                      <ExternalLink size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 pb-10 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm font-medium flex items-center justify-center gap-2">
            {lang === 'pt' ? 'Feito com ❤️ e ' : 'Made with ❤️ and '}
            <Bot size={16} className="text-emerald-500" />
          </p>
        </footer>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Toaster position="top-center" richColors />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/uni" element={<UniProjectPage />} />
        <Route path="/project/amor-de-bicho" element={<AmorDeBichoProjectPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}
