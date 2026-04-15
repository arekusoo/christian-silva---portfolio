import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink,
  CheckCircle2,
  Calendar,
  Layout,
  Search,
  X,
  Users,
  Target,
  FileText,
  Palette,
  Zap,
  Globe,
  Menu
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { DATA, Lang } from './data';

import { toast } from 'sonner';

export default function ProjectPage() {
  const { id } = useParams();
  const [lang, setLang] = useState<Lang>('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (id !== 'super-monitoria' && id !== 'super-monitoria-slug') { // Fallback check
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center p-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-white">Projeto em Construção</h1>
          <p className="text-gray-400">O conteúdo detalhado para este projeto está sendo preparado.</p>
          <Link to="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
            <ArrowLeft size={20} /> Voltar ao Portfólio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative font-sans bg-brand-bg overflow-x-hidden">
      {/* --- Background Glow --- */}
      <div className="bg-glow top-[-10%] left-[-10%] bg-[radial-gradient(circle,_rgba(16,185,129,0.8)_0%,_rgba(16,185,129,0.1)_70%,_transparent_100%)] opacity-[0.25]" />

      {/* --- Mobile Header --- */}
      <div className="lg:hidden fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-[60] bg-brand-bg/80 backdrop-blur-xl border-b border-white/5">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-white bg-white/5 rounded-xl border border-white/10"
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
      <main className="flex-1 lg:ml-[24rem] p-8 lg:p-16 space-y-24 pt-32 lg:pt-16 max-w-5xl mx-auto">
        
        {/* --- Navigation & Header --- */}
        <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Link to="/" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all">
              <ArrowLeft size={18} />
            </div>
            <span className="text-sm font-medium">Voltar ao Portfólio</span>
          </Link>
          <button 
            onClick={() => toast.error('Este protótipo foi descontinuado pela UFAM e não está mais disponível.')}
            className="w-full sm:w-auto px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-bold opacity-30 cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            Ver Protótipo <ExternalLink size={16} />
          </button>
        </nav>

        {/* --- Hero Section --- */}
        <header className="space-y-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest"
            >
              UX/UI Design & Branding
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold text-white tracking-tight"
            >
              Super Monitoria
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="aspect-[16/9] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="https://arekusoo.github.io/public/banner1.png" 
              alt="Super Monitoria Hero"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-white/5">
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Ano</p>
              <p className="text-white font-medium">2023</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Função</p>
              <p className="text-white font-medium">UX/UI Designer</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Cliente</p>
              <p className="text-white font-medium">Instituição de Ensino</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Ferramentas</p>
              <p className="text-white font-medium">Figma, MUI</p>
            </div>
          </div>
        </header>

        {/* --- Overview --- */}
        <section className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-white">Visão Geral</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Este projeto define-se por um sistema de monitoria para alunos, monitores, coordenadores e professores. 
              O objetivo é oferecer uma plataforma online para facilitar a comunicação e o acompanhamento das atividades 
              de monitoria em uma instituição de ensino. Participei como Designer de UI e UX, além de definir conceitos de branding.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Objetivos</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400 text-sm">
                <div className="mt-1 shrink-0"><CheckCircle2 size={16} className="text-emerald-400" /></div>
                Conhecer os papéis envolvidos e as necessidades de cada um.
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <div className="mt-1 shrink-0"><CheckCircle2 size={16} className="text-emerald-400" /></div>
                Desenvolver um sistema digital que auxilie os papéis de acordo com suas necessidades.
              </li>
            </ul>
          </div>
        </section>

        {/* --- Methodology --- */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">Metodologia</h2>
            <p className="text-gray-400">Utilizamos um processo de 5 etapas para garantir a melhor experiência.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Entender', icon: <Search size={24} /> },
              { title: 'Analisar', icon: <Users size={24} /> },
              { title: 'Criar', icon: <Palette size={24} /> },
              { title: 'Prototipar', icon: <Layout size={24} /> },
              { title: 'Validar', icon: <Zap size={24} /> },
            ].map((item, i) => (
              <div key={i} className="organic-card p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-bold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Step 1: Entender --- */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 border border-white/10">
              <Search size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Entender</h2>
          </div>
          <div className="organic-card p-8 space-y-6">
            <p className="text-gray-400 leading-relaxed">
              Na primeira etapa foi realizado o entendimento do projeto e dos usuários. Com o auxílio de uma <strong>Matriz CSD</strong>, guiamos os participantes e alinhamos as expectativas. Mapeamos dúvidas cruciais:
            </p>
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                "Qual a necessidade de uma plataforma digital?",
                "Como o processo é feito hoje e qual o impacto do digital?",
                "Qual o público-alvo e suas necessidades reais?"
              ].map((q, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10 text-sm text-gray-300 italic">
                  "{q}"
                </div>
              ))}
            </div>
            <p className="text-gray-400 leading-relaxed">
              Aplicamos formulários para alunos, monitores e professores, além de uma pesquisa de similares (Benchmarking) com análise SWOT de produtos como <strong>Toolzz Mentor, Mentor Cruise e Trello</strong>.
            </p>
          </div>
        </section>

        {/* --- Step 2: Analisar --- */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 border border-white/10">
              <Users size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Analisar</h2>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2"><Users size={20} className="text-emerald-400" /> Personas</h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {[
                { name: "Pedro", age: 20, role: "Aluno de Eng. Software", need: "Sistema fácil, notificações automáticas e integração com calendário.", image: "https://arekusoo.github.io/public/Pedro.png" },
                { name: "Luana", age: 23, role: "Monitora de C. Computação", need: "Gerenciamento eficiente das sessões e contato direto com alunos.", image: "https://arekusoo.github.io/public/Luana.png" },
                { name: "Gabriela", age: 35, role: "Professora de Eng. Software", need: "Acompanhamento de desempenho e gestão de monitores da disciplina.", image: "https://arekusoo.github.io/public/Gabriela.png" },
                { name: "Juliano", age: 40, role: "Coordenador Acadêmico", need: "Relatórios detalhados e gestão de disciplinas/professores.", image: "https://arekusoo.github.io/public/Juliano.png" }
              ].map((persona, i) => (
                <div key={i} className="organic-card p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-white font-bold text-lg">{persona.name}</h4>
                      <p className="text-emerald-400 text-xs font-medium">{persona.role} • {persona.age} anos</p>
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-white/5">
                      {persona.image ? (
                        <img 
                          src={persona.image} 
                          alt={persona.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <Users size={18} className="text-gray-500" />
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    <strong>Necessidade:</strong> {persona.need}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2"><Target size={20} className="text-emerald-400" /> Análise SWOT (Toolzz Mentor)</h3>
            
            <div className="w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-xl">
              <img 
                src="https://www.toolzz.com.br/bannerai-minimal.png" 
                alt="Toolzz AI Solution Banner" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl">
                  <h4 className="text-emerald-400 font-bold mb-2">Forças</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Personalização avançada</li>
                    <li>• Recursos específicos para monitoria</li>
                    <li>• Interface intuitiva</li>
                  </ul>
                </div>
                <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl">
                  <h4 className="text-blue-400 font-bold mb-2">Oportunidades</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Crescimento do mercado EAD</li>
                    <li>• Integrações com ferramentas de produtividade</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-3xl">
                  <h4 className="text-red-400 font-bold mb-2">Fraquezas</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Dependência total de internet</li>
                    <li>• Integrações limitadas com apps populares</li>
                  </ul>
                </div>
                <div className="p-6 bg-orange-500/5 border border-orange-500/10 rounded-3xl">
                  <h4 className="text-orange-400 font-bold mb-2">Ameaças</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Novas tecnologias e soluções rápidas</li>
                    <li>• Mudança constante no mercado tech</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2"><Zap size={20} className="text-emerald-400" /> Requisitos de Usabilidade</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Facilidade de uso e navegação intuitiva",
                "Feedback constante do sistema",
                "Compatibilidade com dispositivos móveis",
                "Notificações automáticas por e-mail",
                "Facilitar contato entre usuários"
              ].map((req, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  {req}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Step 3: Criar --- */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 border border-white/10">
              <Palette size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Criar</h2>
          </div>

          {/* Branding Banner */}
          <div className="w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://arekusoo.github.io/public/painel.png" 
              alt="Branding Panel" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Identidade Visual</h3>
              <p className="text-gray-400 leading-relaxed">
                O nome <strong>Super Monitoria</strong> faz referência aos "heróis" (monitores) que ajudam os alunos. 
                A marca foi construída para transmitir confiança, dinamismo e modernidade no ambiente educacional.
              </p>
              <p className="text-gray-400 text-sm">
                Utilizamos a família tipográfica <strong>Inter</strong> por seu caráter retangular e moderno, 
                complementando a marca sem competir com ela.
              </p>
            </div>
            <div className="organic-card p-12 flex items-center justify-center bg-white/5 border-white/10">
              <img 
                src="https://arekusoo.github.io/public/superlogo.png" 
                alt="Super Monitoria Logo Final" 
                className="max-w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Style Guide */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2"><Palette size={20} className="text-emerald-400" /> Style Guide</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Primary */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Primary</p>
                <div className="space-y-2">
                  {[
                    { name: 'Base', hex: '#65B95E' },
                    { name: 'Light', hex: '#70D268' },
                    { name: 'Dark', hex: '#51A94A' }
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 bg-white/5 rounded-xl border border-white/5">
                      <div className="w-10 h-10 rounded-lg shrink-0" style={{ backgroundColor: c.hex }} />
                      <div>
                        <p className="text-white text-xs font-bold">{c.name}</p>
                        <p className="text-gray-500 text-[10px] font-mono uppercase">{c.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Secondary</p>
                <div className="space-y-2">
                  {[
                    { name: 'Base', hex: '#2D2D2C' },
                    { name: 'Light', hex: '#535353' },
                    { name: 'Dark', hex: '#101010' }
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 bg-white/5 rounded-xl border border-white/5">
                      <div className="w-10 h-10 rounded-lg shrink-0 border border-white/10" style={{ backgroundColor: c.hex }} />
                      <div>
                        <p className="text-white text-xs font-bold">{c.name}</p>
                        <p className="text-gray-500 text-[10px] font-mono uppercase">{c.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Others */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Others</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'Paper', hex: '#F6F7F6' },
                    { name: 'Grey', hex: '#ECEDEA' },
                    { name: 'Txt', hex: '#2D2D2C' },
                    { name: 'Icon', hex: '#535353' },
                    { name: 'Label', hex: '#777777' },
                    { name: 'Border', hex: '#B1B5AE' }
                  ].map((c, i) => (
                    <div key={i} className="p-2 bg-white/5 rounded-xl border border-white/5">
                      <div className="w-full h-8 rounded-md mb-2 border border-white/10" style={{ backgroundColor: c.hex }} />
                      <p className="text-white text-[9px] font-bold truncate">{c.name}</p>
                      <p className="text-gray-500 text-[8px] font-mono uppercase">{c.hex}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contrast & Signs */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Contrast & Signs</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'White', hex: '#FFFFFF' },
                    { name: 'Black', hex: '#000000' },
                    { name: 'Warning', hex: '#F2C94C' },
                    { name: 'Error', hex: '#EB5757' }
                  ].map((c, i) => (
                    <div key={i} className="p-2 bg-white/5 rounded-xl border border-white/5">
                      <div className="w-full h-8 rounded-md mb-2 border border-white/10" style={{ backgroundColor: c.hex }} />
                      <p className="text-white text-[9px] font-bold truncate">{c.name}</p>
                      <p className="text-gray-500 text-[8px] font-mono uppercase">{c.hex}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Step 4: Prototipar --- */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 border border-white/10">
              <Layout size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Prototipar</h2>
          </div>

          <div className="space-y-8">
            <p className="text-gray-400 leading-relaxed">
              Utilizamos a biblioteca <strong>MUI (Material UI)</strong> como base para o desenvolvimento, 
              ajustando os componentes para a identidade visual da marca. Focamos em performance e componentização.
            </p>

            {/* Flows Image */}
            <div className="w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-xl">
              <img 
                src="https://arekusoo.github.io/public/fluxos.png" 
                alt="Exemplos de fluxos: Nova conta, recuperação de senha e login" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-white font-bold flex items-center gap-2"><FileText size={18} className="text-emerald-400" /> Fluxos do Aluno</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Visualizar disciplinas do semestre</li>
                  <li>• Agendamento direto da tela principal</li>
                  <li>• Gestão de agendamentos pendentes</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-bold flex items-center gap-2"><FileText size={18} className="text-emerald-400" /> Fluxos do Monitor</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Aceitar solicitações de alunos</li>
                  <li>• Confirmar sessões ocorridas</li>
                  <li>• Configurar disponibilidade no sistema</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- Step 5: Validar --- */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 border border-white/10">
              <Zap size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Validar</h2>
          </div>

          <div className="organic-card p-8 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Testes de Usabilidade</h3>
              <p className="text-gray-400 leading-relaxed">
                Realizamos testes online com jovens de 18 a 25 anos. Validamos duas interfaces para a listagem de disciplinas.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl space-y-4">
                <h4 className="text-emerald-400 font-bold">Aprendizados Positivos</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Blocos de informação ajudam na leitura</li>
                  <li>• Interface 2 obteve melhor pontuação de facilidade</li>
                  <li>• Fluxos de agendamento foram intuitivos</li>
                </ul>
              </div>
              <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-3xl space-y-4">
                <h4 className="text-red-400 font-bold">Pontos de Melhoria</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Listas longas de monitores cansam o usuário</li>
                  <li>• Ícones sem texto (apenas hover) geram confusão</li>
                  <li>• Excesso de botões pode dispersar a atenção</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- Gallery --- */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center">Galeria do Projeto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { src: "https://arekusoo.github.io/public/2.png", label: "Disciplina e Monitores" },
              { src: "https://arekusoo.github.io/public/3.png", label: "Agendamentos" },
              { src: "https://arekusoo.github.io/public/5.png", label: "Modal de Confirmação" },
              { src: "https://arekusoo.github.io/public/6.png", label: "Modal de Disponibilidade" }
            ].map((img, i) => (
              <div key={i} className="group space-y-4">
                <div className="rounded-[2rem] overflow-hidden border border-white/10 group-hover:border-emerald-500/30 transition-all shadow-2xl bg-white/5">
                  <img 
                    src={img.src} 
                    alt={img.label} 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                  {img.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Footer CTA --- */}
        <footer className="py-24 text-center space-y-8 border-t border-white/5">
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">Gostou deste projeto?</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Estou disponível para novos desafios e colaborações em produtos digitais.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-all">
              Vamos Conversar
            </button>
            <Link to="/" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all">
              Ver outros projetos
            </Link>
          </div>
        </footer>

      </main>
    </div>
  );
}
