import { FiGlobe, FiDatabase, FiSearch, FiLayers, FiArrowRight } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 'zosterix',
      title: 'Zosterix Research Grid',
      badge: 'Flagship Platform',
      icon: <FiGlobe />,
      description: 'Our flagship global research networking platform. Enables students, researchers, and supervisors to verify academic identities, publish research journals/blogs, seek mentorship, and collaborate through secure discussion structures.',
      link: 'https://zosterix.com',
      actionText: 'Access Zosterix Grid'
    },
    {
      id: 'compute',
      title: 'Compute Nodes & Cloud Grid',
      badge: 'High-Performance Computing',
      icon: <FiDatabase />,
      description: 'Distributed high-performance computing clusters tailored for scientific simulations, dataset modeling, and advanced data rendering. Optimized for research teams working with large-scale data pipelines.',
      link: '/contact',
      actionText: 'Request Node Access'
    },
    {
      id: 'indexing',
      title: 'AI Academic Indexing & Semantic Search',
      badge: 'Information Orchestration',
      icon: <FiSearch />,
      description: 'Next-generation semantic indexing that connects institutional knowledge, preprints, and research blogs across border silos, enabling fast discovery of relevant work and expertise tags.',
      link: '/contact',
      actionText: 'Request Integration'
    },
    {
      id: 'consulting',
      title: 'Cross-Border Architecture Consulting',
      badge: 'Specialized Systems',
      icon: <FiLayers />,
      description: 'Bespoke systems architecting and technical advisory for universities and research departments. We help design secure, compliant cross-border data vaults and grant submission pipelines.',
      link: '/contact',
      actionText: 'Consult with Founders'
    }
  ];

  return (
    <div className="page-shell text-center fade-in">
      <header className="page-header">
        <div className="badge">
          Phaenicio Ecosystem
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-text-h">
          Our Services <br /> & Platforms
        </h1>
        <p className="page-lead">
          Purpose-built digital infrastructure, compute grids, and intelligence layers for scientific and academic communities.
        </p>
      </header>

      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6 mt-8 max-md:grid-cols-1 text-left">
        {services.map((service) => (
          <article 
            key={service.id} 
            className="premium-card p-8 bg-white flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-200 rounded text-[11px] font-semibold text-text-h uppercase tracking-wider">
                  {service.badge}
                </span>
                <span className="text-2xl text-accent bg-slate-50 w-10 h-10 rounded-lg flex items-center justify-center border border-slate-200">
                  {service.icon}
                </span>
              </div>
              <h2 className="text-xl font-bold text-text-h mb-3">{service.title}</h2>
              <p className="text-sm text-text leading-relaxed mb-6">{service.description}</p>
            </div>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <a 
                href={service.link}
                target={service.link.startsWith('http') ? '_blank' : '_self'}
                rel={service.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:text-accent-hover transition-colors"
              >
                <span>{service.actionText}</span>
                <FiArrowRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Services;
