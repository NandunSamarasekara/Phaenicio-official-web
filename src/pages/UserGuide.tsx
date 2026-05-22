import { useState, useEffect } from 'react';
import { FiBook, FiUser, FiGlobe, FiShare2, FiZap, FiArrowRight } from 'react-icons/fi';

const UserGuide = () => {
  const sections = [
    { id: 'getting-started', title: 'Getting Started', icon: <FiBook /> },
    { id: 'profile-setup', title: 'Profile Setup', icon: <FiUser /> },
    { id: 'networking', title: 'Research Networking', icon: <FiGlobe /> },
    { id: 'sharing', title: 'Knowledge Sharing', icon: <FiShare2 /> },
    { id: 'advanced', title: 'Advanced Tools', icon: <FiZap /> },
  ];

  const [activeSection, setActiveSection] = useState('getting-started');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex flex-col fade-in pt-[78px] bg-white min-h-screen">
      
      {/* Shared Animations & Patterns */}
      <style>{`
        .hero-grid {
          background-image: linear-gradient(to right, rgb(226 232 240 / 0.6) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgb(226 232 240 / 0.6) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(circle at 50% 10%, black, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at 50% 10%, black, transparent 80%);
        }
      `}</style>

      {/* Hero Header */}
      <header className="relative pt-20 pb-16 px-[5%] overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="absolute inset-0 pointer-events-none hero-grid z-0"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-gradient-to-b from-accent/5 to-transparent blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-800 mb-6 uppercase tracking-wider shadow-sm">
            Phaenicio User Guide
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-950 text-balance">
            Zosterix <br className="hidden sm:block" /> 
            <span className="bg-gradient-to-r from-accent via-indigo-600 to-primary bg-clip-text text-transparent">
              System Documentation.
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto text-pretty">
            A comprehensive guide to establishing peer profiles, configuring secure computing environments, and utilizing analytics tools within the Zosterix Research Grid.
          </p>
        </div>
      </header>

      {/* Main Layout Grid */}
      <div className="max-w-7xl mx-auto px-[5%] py-16 w-full grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16 items-start">
        
        {/* ScrollSpy Navigation Sidebar */}
        <aside className="sticky top-28 h-fit hidden lg:block text-left">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
              Directory Setup
            </h3>
            <nav className="flex flex-col relative">
              {/* Active Indicator Line */}
              <div 
                className="absolute left-0 w-[2px] bg-accent transition-all duration-300 ease-out rounded-full"
                style={{
                  top: `${sections.findIndex(s => s.id === activeSection) * 44}px`,
                  height: '40px',
                  marginTop: '2px'
                }}
              />
              
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <a 
                    key={section.id} 
                    href={`#${section.id}`} 
                    className={`group flex items-center gap-3 py-2.5 px-4 rounded-lg transition-all text-sm font-semibold h-[44px]
                      ${isActive 
                        ? 'text-accent bg-white shadow-sm border border-slate-100 ml-2' 
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/50 border border-transparent'}`}
                  >
                    <span className={`text-[15px] transition-colors ${isActive ? 'text-accent' : 'text-slate-400 group-hover:text-slate-600'}`}>
                      {section.icon}
                    </span>
                    <span>{section.title}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Documentation Flow */}
        <main className="text-left w-full max-w-3xl">
          
          {/* Section 1 */}
          <section id="getting-started" className="mb-20 scroll-mt-32 group">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-accent text-lg">
                <FiBook />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">Getting Started</h2>
            </div>
            
            <p className="text-[15px] text-slate-600 leading-relaxed mb-8">
              Welcome to Zosterix. This guide will walk you through the key operations of the research ecosystem, ensuring complete integrity, peer-to-peer security, and metadata alignment.
            </p>
            
            <div className="p-8 rounded-[1.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 bg-slate-950 text-white rounded-lg text-xs font-bold font-mono tracking-tighter">01</span>
                <h3 className="text-lg font-bold text-slate-950">Initial Access</h3>
              </div>
              <p className="text-[15px] text-slate-600 leading-relaxed mb-5">
                Open the grid portal via the secure web gateway or redirect directly from your institutional single-sign-on (SSO) client portal.
              </p>
              <a 
                href="https://zosterix.phaenicio.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-accent hover:bg-white hover:border-accent/30 transition-all group/link"
              >
                <span>Launch zosterix.phaenicio.com</span>
                <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </section>

          {/* Section 2 */}
          <section id="profile-setup" className="mb-20 scroll-mt-32 group">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-accent text-lg">
                <FiUser />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">Profile Setup</h2>
            </div>

            <p className="text-[15px] text-slate-600 leading-relaxed mb-8">
              Your profile acts as your peer identity ledger. Ensuring verified tags increases your matching velocity for supervisors and cross-border research grants.
            </p>
            
            <div className="space-y-5">
              <div className="p-8 rounded-[1.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-7 h-7 bg-slate-950 text-white rounded-lg text-xs font-bold font-mono tracking-tighter">02</span>
                  <h3 className="text-lg font-bold text-slate-950">Identity Ledger Synchronization</h3>
                </div>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  Connect your unique ORCID iD and verified institutional email. Our synchronization node will pull your existing publications, citations, and journal history automatically.
                </p>
              </div>

              <div className="p-8 rounded-[1.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-7 h-7 bg-slate-950 text-white rounded-lg text-xs font-bold font-mono tracking-tighter">03</span>
                  <h3 className="text-lg font-bold text-slate-950">Domain Tagging</h3>
                </div>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  Select precise scientific tags (e.g., <span className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">Quantum_Entanglement</span>, <span className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">Semantic_Parsing</span>). The matching orchestration engine parses these nodes to suggest peer mentors.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="networking" className="mb-20 scroll-mt-32 group">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-accent text-lg">
                <FiGlobe />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">Research Networking</h2>
            </div>

            <p className="text-[15px] text-slate-600 leading-relaxed mb-8">
              Zosterix bridges isolated institutional silos, introducing a direct communication channel for international academic workflows.
            </p>
            
            <div className="p-8 rounded-[1.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 bg-slate-950 text-white rounded-lg text-xs font-bold font-mono tracking-tighter">04</span>
                <h3 className="text-lg font-bold text-slate-950">Mentor Discovery</h3>
              </div>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                Browse verified supervisor directories, select communication modes, and send structured engagement proposals containing research abstracts and methodology files.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sharing" className="mb-20 scroll-mt-32 group">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-accent text-lg">
                <FiShare2 />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">Knowledge Sharing</h2>
            </div>

            <p className="text-[15px] text-slate-600 leading-relaxed mb-8">
              Share findings, methodologies, and preprint reviews. Our publication nodes are optimized for indexing across standard scientific indexes.
            </p>
            
            <div className="p-8 rounded-[1.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 bg-slate-950 text-white rounded-lg text-xs font-bold font-mono tracking-tighter">05</span>
                <h3 className="text-lg font-bold text-slate-950">Preprint Publications</h3>
              </div>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                Create structured research logs or write comprehensive methodological reviews. Publications are discoverable across all regional gateways.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="advanced" className="mb-12 scroll-mt-32 group">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-accent text-lg">
                <FiZap />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">Advanced Tools</h2>
            </div>

            <p className="text-[15px] text-slate-600 leading-relaxed mb-8">
              Leverage Phaenicio's computing grid logic to validate integrity indexes and bias factors directly within your drafts.
            </p>
            
            <div className="p-8 rounded-[1.5rem] bg-slate-950 border border-slate-800 shadow-xl relative overflow-hidden">
              {/* Dark mode card for advanced tools */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-7 h-7 bg-accent/20 text-accent border border-accent/30 rounded-lg text-xs font-bold font-mono tracking-tighter">06</span>
                  <h3 className="text-lg font-bold text-white">AI-Powered Validation Scan</h3>
                </div>
                <p className="text-[15px] text-slate-400 leading-relaxed mb-5">
                  Submit data columns or textual methods drafts to the validation gateway. The algorithm tests for structure format errors, anomaly spikes, and citation gaps.
                </p>
                <div className="w-full bg-slate-900 rounded-lg p-3 font-mono text-[10px] text-slate-300 border border-slate-800 flex flex-col gap-1">
                   <p className="text-accent">&gt; init validation_scan --target "methodology_v2.pdf"</p>
                   <p className="text-slate-500">Scanning structure... OK</p>
                   <p className="text-slate-500">Verifying citations... OK</p>
                   <p className="text-emerald-400">&gt; Process complete. Integrity Index: 98.2%</p>
                </div>
              </div>
            </div>
          </section>
          
        </main>
      </div>
    </div>
  );
};

export default UserGuide;