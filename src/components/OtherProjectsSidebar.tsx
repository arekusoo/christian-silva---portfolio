import { Link } from 'react-router-dom';
import { DATA, Lang } from '../data';
import { Sparkles } from 'lucide-react';

interface OtherProjectsSidebarProps {
  currentSlug: string;
  lang: Lang;
}

export default function OtherProjectsSidebar({ currentSlug, lang }: OtherProjectsSidebarProps) {
  const t = DATA[lang];
  
  // Filter out the current project being viewed
  const otherProjects = t.projects.filter(p => p.slug !== currentSlug);

  return (
    <aside className="hidden fhd:flex w-80 fixed top-6 right-6 bottom-6 sidebar-floating p-6 flex-col gap-5 z-40">
      <div className="flex items-center gap-2 pb-2 border-b border-white/5 shrink-0">
        <Sparkles size={16} className="text-emerald-400" />
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          {lang === 'pt' ? 'Outros projetos' : 'Other projects'}
        </h3>
      </div>
      
      <div className="flex-1 flex flex-col gap-3.5 overflow-y-auto pr-1 select-none">
        {otherProjects.map((project) => (
          <Link 
            key={project.id} 
            to={`/project/${project.slug}`}
            className="organic-card p-4 group cursor-pointer block !rounded-[12px]"
          >
            <div className="space-y-2.5">
              <h4 className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] font-bold text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}

