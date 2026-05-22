import { Link } from 'react-router-dom';
import { FiGlobe, FiDatabase, FiSearch, FiLayers, FiArrowRight } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 'zosterix',
      title: 'Zosterix Research Grid',
      badge: 'Flagship Platform',
      isFlagship: true,
      icon: <FiGlobe />,
      description: 'Our flagship global research networking platform. Enables students, researchers, and supervisors to verify academic identities, publish research journals/blogs, seek mentorship, and collaborate through secure discussion structures.',
      link: 'https://zosterix.phaenicio.com/',
      isExternal: true,
      actionText: 'Access Zosterix Grid'
    },
    {
      id: 'compute',
      title: 'Compute Nodes & Cloud Grid',
      badge: 'High-Performance Computing',
      isFlagship: false,
      icon: <FiDatabase />,
      description: 'Distributed high-performance computing clusters tailored for scientific simulations, dataset modeling, and advanced data rendering. Optimized for research teams working with large-scale data pipelines.',
      link: '/contact',
      isExternal: false,
      actionText: 'Request Node Access'
    },
    {
      id: 'indexing',
      title: 'AI Academic Indexing & Semantic Search',
      badge: 'Information Orchestration',
      isFlagship: false,
      icon: <FiSearch />,
      description: 'Next-generation semantic indexing that connects institutional knowledge, preprints, and research blogs across border silos, enabling fast discovery of relevant work and expertise tags.',
      link: '/contact',
      isExternal: false,
      actionText: 'Request Integration'
    },
    {
      id: 'consulting',
      title: 'Cross-Border Architecture Consulting',
      badge: 'Specialized Systems',
      isFlagship: false,
      icon: <FiLayers />,
      description: 'Bespoke systems architecting and technical advisory for universities and research departments. We help design secure, compliant cross-border data vaults and grant submission pipelines.',
      link: '/contact',
      isExternal: false,
      actionText: 'Consult with Founders'
    }
  ];

  return (
    <div className="flex flex-col fade-in pt-[78px] bg-white min-h-screen">
      
      {/* Shared Animations */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        .animate-pulse-dot {
          animation: pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .hero-grid {
          background-image: linear-gradient(to right, rgb(226 232 240 / 0.6) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgb(226 232 240 / 0.6) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(circle at 50% 10%, black, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at 50% 10%, black, transparent 80%);
        }
      `}</style>

      {/* Hero Section */}
      <header className="relative pt-20 pb-24 px-[5%] overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 pointer-events-none hero-grid z-0"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-gradient-to-b from-accent/5 to-transparent blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 mb-6 uppercase tracking-wider">
            Phaenicio Ecosystem
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-slate-950 text-balance">
            Our Services <br className="hidden sm:block" /> 
            <span className="text-slate-400">& Platforms</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto text-pretty">
            Purpose-built digital infrastructure, compute grids, and intelligence layers for scientific and academic communities.
          </p>
        </div>
      </header>

      {/* Services Grid Section */}
      <section className="py-20 px-[5%] bg-slate-50 flex-grow">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-6 max-lg:grid-cols-1 text-left">
          {services.map((service) => (
            <article 
              key={service.id} 
              className={`p-8 md:p-10 rounded-[2rem] border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                service.isFlagship 
                  ? 'bg-white border-accent/20 shadow-md hover:shadow-xl hover:shadow-accent/5' 
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Flagship Background Glow */}
              {service.isFlagship && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
              )}

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider ${
                    service.isFlagship ? 'bg-accent/10 text-accent border border-accent/20' : 'bg-slate-100 text-slate-600 border border-slate-200'
                  }`}>
                    {service.isFlagship && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot"></span>}
                    {service.badge}
                  </span>
                  
                  <span className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110 ${
                    service.isFlagship ? 'bg-accent text-white shadow-md shadow-accent/20' : 'bg-slate-50 text-slate-700 border border-slate-200'
                  }`}>
                    {service.icon}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-950 mb-4 tracking-tight">{service.title}</h2>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-8">{service.description}</p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-slate-100">
                {service.isExternal ? (
                  <a 
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-indigo-600 transition-colors group/link"
                  >
                    <span>{service.actionText}</span>
                    <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-accent transition-colors group/link"
                  >
                    <span>{service.actionText}</span>
                    <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Services;