import { FiTarget, FiCpu, FiUsers, FiAward, FiGlobe } from 'react-icons/fi';

const About = () => {
  return (
    <div className="page-shell fade-in">
      <header className="page-header">
        <div className="badge">
          Pioneering Research Infrastructure
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight leading-[1.08] mb-5 text-text-h">
          Phaenicio: Building <br /> 
          <span className="bg-gradient-to-r from-accent to-indigo-600 bg-clip-text text-transparent">
            the Next Frontier.
          </span>
        </h1>
        <p className="page-lead">
          Empowering specialized scientific, technical, and academic communities through precision-driven orchestration tools.
        </p>
      </header>

      <section className="text-left space-y-16">
        {/* Mission Statement Panel */}
        <div className="p-10 md:p-12 premium-card text-center bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl"></div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block font-mono">Our Mission</span>
          <p className="text-2xl text-text-h font-medium leading-relaxed tracking-tight max-w-4xl mx-auto">
            We believe meaningful progress occurs at the intersection of specialized knowledge and purpose-built technology. We build digital infrastructure that bridges international research environments, facilitating cross-border collaboration and secure scientific computing.
          </p>
        </div>

        {/* Core Pillars */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight mb-8 text-text-h text-center">Core Pillars of Our Philosophy</h2>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {[
              { 
                icon: <FiTarget />, 
                title: "Precision Engineering", 
                text: "We provide the stability required for navigating complex academic environments. Every system we deploy is engineered with absolute precision and security." 
              },
              { 
                icon: <FiCpu />, 
                title: "Intelligent Automation", 
                text: "Our nodes leverage AI orchestration to automate the formatting, validation, and citation matching of research, letting experts focus entirely on raw science." 
              },
              { 
                icon: <FiUsers />, 
                title: "Decentralized Networks", 
                text: "Rather than general social solutions, we develop domain-specific hubs that respect the strict validation and peer review cycles of true academic ecosystems." 
              }
            ].map((pillar, i) => (
              <div key={i} className="premium-card p-8 bg-white flex flex-col items-start">
                <div className="text-2xl text-accent mb-5 bg-slate-50 border border-slate-200 w-12 h-12 rounded-xl flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-h">{pillar.title}</h3>
                <p className="text-sm text-text leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Mesh Network Panel */}
        <div className="grid grid-cols-12 gap-8 items-center bg-slate-900 text-white rounded-3xl p-10 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-accent/15 pointer-events-none"></div>
          
          <div className="col-span-7 max-lg:col-span-12 relative z-10 text-left">
            <span className="text-xs uppercase font-mono tracking-widest text-accent font-bold block mb-4">Mesh Network Architecture</span>
            <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-white">Decentralized Global Clusters</h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Phaenicio operates as a synchronized global engine. Our compute nodes and validation registries are distributed across high-availability regions, facilitating secure cross-border research pipelines and sub-second metadata synchronization.
            </p>
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <FiGlobe className="text-accent text-lg" />
                <span>Primary Registry & Edge Node — North America Region</span>
              </div>
              <div className="flex items-center gap-3">
                <FiAward className="text-accent text-lg" />
                <span>Systems Engineering & Compute Node — Asia-Pacific Region</span>
              </div>
            </div>
          </div>
          
          <div className="col-span-5 max-lg:col-span-12 relative z-10 flex justify-center">
            {/* Visual Node Connection Representation */}
            <div className="w-full max-w-[320px] bg-slate-800/80 border border-slate-700/60 p-6 rounded-2xl">
              <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono mb-4 border-b border-slate-700/50 pb-2">
                <span>EST REGISTRY</span>
                <span>SLST COMPUTE</span>
              </div>
              <div className="flex justify-between items-center py-4 font-mono text-sm text-slate-200">
                <span className="bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700">Node Alpha</span>
                <span className="h-[2px] bg-accent/40 flex-grow mx-3 relative">
                  <span className="absolute w-2 h-2 bg-accent rounded-full -top-[3px] left-1/2 -translate-x-1/2 animate-ping"></span>
                </span>
                <span className="bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700">Node Beta</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-sans mt-3 text-center">
                Secure SSL Tunnel connects research repositories 24/7.
              </p>
            </div>
          </div>
        </div>

        {/* Flagship Ecosystem */}
        <div className="max-w-3xl mx-auto text-center pt-8">
          <h2 className="text-2xl font-extrabold tracking-tight mb-6 text-text-h">The Zosterix Ecosystem</h2>
          <div className="flex flex-col gap-6 text-base text-text leading-relaxed">
            <p>
              Zosterix stands as our flagship initiative—a testament to our commitment to the global research community. As a dedicated environment for researchers to document findings, match with academic supervisors, and validate methodology bias, it embodies our mission to enhance scientific transparency.
            </p>
            <p>
              Through a growing pipeline of specialized platforms, we are cultivating a diverse digital infrastructure that respects the nuances of every professional field we enter.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
