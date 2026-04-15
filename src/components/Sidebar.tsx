import { motion, AnimatePresence } from 'motion/react';
import { 
  Linkedin, 
  GraduationCap, 
  Globe,
  MessageCircle,
  Phone,
  AtSign,
  Download,
  Menu,
  X
} from 'lucide-react';
import { DATA, Lang } from '../data';

interface SidebarProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Sidebar({ lang, setLang, isMenuOpen, setIsMenuOpen }: SidebarProps) {
  const t = DATA[lang];

  return (
    <AnimatePresence>
      {(isMenuOpen || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
        <motion.aside 
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className={`lg:w-80 lg:fixed lg:top-8 lg:left-8 lg:bottom-8 sidebar-floating p-10 flex flex-col z-50 fixed inset-0 lg:inset-auto m-0 lg:m-0 bg-brand-bg lg:bg-white/[0.02] w-full ${isMenuOpen ? 'flex' : 'hidden lg:flex'}`}
        >
          <div className="flex flex-col items-center lg:items-start space-y-8 shrink-0">
            <div className="w-full flex justify-end lg:hidden">
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-400">
                <X size={24} />
              </button>
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQHBVSW9lJ_EwQ/profile-displayphoto-scale_400_400/B4DZmmONoAGQAk-/0/1759430375922?e=1776902400&v=beta&t=yLk9Z20HC0riUiTJc7E2en_Y9iXFo2j1ZlzQV4o2v3k" 
                alt={t.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <div className="text-center lg:text-left">
              <h1 className="text-2xl font-bold text-white tracking-tight">{t.name}</h1>
              <p className="text-gray-400 font-medium text-sm mt-1">{t.role}</p>
            </div>
          </div>

          <div className="mt-12 space-y-10 flex-1 overflow-y-auto lg:overflow-visible custom-scrollbar pr-2">
            <section>
              <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <GraduationCap size={12} fill="currentColor" /> {lang === 'pt' ? 'Formação' : 'Education'}
              </h2>
              <ul className="space-y-4">
                {t.education.map((edu, i) => (
                  <li key={i} className="text-sm text-gray-400 leading-snug">
                    {edu}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Phone size={12} fill="currentColor" /> {lang === 'pt' ? 'Contato' : 'Contact'}
              </h2>
              <ul className="space-y-3">
                <li>
                  <a 
                    href={`https://wa.me/${t.contact.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all w-full"
                  >
                    <MessageCircle size={16} fill="currentColor" /> {t.contact.phone}
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${t.contact.email}`}
                    className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all w-full"
                  >
                    <AtSign size={16} /> {t.contact.email}
                  </a>
                </li>
                <li>
                  <a 
                    href={`https://${t.contact.linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all w-full"
                  >
                    <Linkedin size={16} fill="currentColor" /> LinkedIn
                  </a>
                </li>
              </ul>
            </section>

            <button className="w-full py-4 bg-white text-black rounded-full text-sm font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/5">
              <Download size={16} fill="currentColor" />
              {t.downloadCV}
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
