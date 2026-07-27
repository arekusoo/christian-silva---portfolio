import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { DATA, Lang } from '../data';

interface SeeAlsoProjectsProps {
  currentSlug: string;
  lang: Lang;
}

export default function SeeAlsoProjects({ currentSlug, lang }: SeeAlsoProjectsProps) {
  const navigate = useNavigate();
  const t = DATA[lang];
  
  // Filter out the current project being viewed and limit to 2 projects
  const otherProjects = t.projects.filter(p => p.slug !== currentSlug).slice(0, 2);

  return (
    <section className="w-full space-y-6">
      <div className="flex items-center">
        <h3 className="text-xl font-bold text-white tracking-tight">
          {t.common.seeAlso || (lang === 'pt' ? 'Veja também' : 'See also')}
        </h3>
      </div>

      <div className="flex flex-col gap-5">
        {otherProjects.map((project) => (
          <div
            key={project.id}
            className="organic-card p-4 group cursor-pointer w-full transition-all duration-300 hover:border-white/20"
            onClick={() => {
              navigate(`/project/${project.slug}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative overflow-hidden rounded-[1rem]">
              <img 
                src={project.thumb} 
                alt={project.title}
                className="project-thumb transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute top-2.5 right-2.5 p-2 bg-black/50 backdrop-blur-xl rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                <ExternalLink size={13} className="text-white" />
              </div>
            </div>
            <div className="p-3 space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="text-base font-bold text-white leading-snug">{project.title}</h4>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-bold text-gray-500 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
