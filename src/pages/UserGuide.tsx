import { useState, useEffect } from 'react';
import { FiBook, FiUser, FiGlobe, FiShare2, FiZap } from 'react-icons/fi';

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
      rootMargin: '-20% 0px -60% 0px', // Triggers when the section occupies the center-top region of the viewport
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
    <div className="page-shell max-w-7xl grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 fade-in">
      {/* ScrollSpy Navigation Sidebar */}
      <aside className="sticky top-28 h-fit hidden md:block text-left">
        <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted mb-5 font-mono">On This Page</h3>
        <nav className="flex flex-col gap-1 border-l border-slate-200">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a 
                key={section.id} 
                href={`#${section.id}`} 
                className={`group flex items-center gap-3 py-2.5 px-4 -ml-px border-l-2 transition-all text-sm font-semibold
                  ${isActive 
                    ? 'text-accent border-accent bg-slate-100/50 rounded-r-lg' 
                    : 'text-text border-transparent hover:text-text-h hover:border-slate-300 hover:bg-slate-50 rounded-r-lg'}`}
              >
                <span className={`text-base transition-colors ${isActive ? 'text-accent' : 'text-text-muted group-hover:text-text-h'}`}>
                  {section.icon}
                </span>
                <span>{section.title}</span>
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Main Documentation Flow */}
      <main className="text-left w-full max-w-3xl">
        <header className="relative premium-card p-10 md:p-12 bg-white mb-12 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="badge">Phaenicio User Guide</div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-text-h">
              Zosterix <br /> 
              <span className="bg-gradient-to-r from-accent to-indigo-600 bg-clip-text text-transparent">
                Documentation.
              </span>
            </h1>
            <p className="text-base text-text leading-relaxed max-w-lg font-medium">
              A comprehensive system guide to establishing peer profiles, configuring computing environments, and utilizing analytics tools in the Zosterix Research Grid.
            </p>
          </div>
        </header>

        {/* Sections */}
        <section id="getting-started" className="mb-16 scroll-mt-28">
          <h2 className="text-2xl font-extrabold tracking-tight mb-6 border-b border-slate-200 pb-3 text-text-h">
            Getting Started
          </h2>
          <p className="text-sm text-text leading-relaxed mb-6">
            Welcome to Zosterix. This guide will walk you through the key operations of the research ecosystem, ensuring complete integrity, peer-to-peer security, and metadata alignment.
          </p>
          <div className="premium-card p-6 bg-white hover:border-accent/30">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-accent text-white rounded-full text-xs font-bold mb-4 font-mono">1</span>
            <h3 className="text-lg font-bold mb-2 text-text-h">Initial Access</h3>
            <p className="text-sm text-text leading-relaxed">
              Open the grid portal via <a href="https://zosterix.com" target="_blank" rel="noopener noreferrer" className="text-accent underline font-semibold">zosterix.com</a> or redirect from your institutional single-sign-on (SSO) client portal.
            </p>
          </div>
        </section>

        <section id="profile-setup" className="mb-16 scroll-mt-28">
          <h2 className="text-2xl font-extrabold tracking-tight mb-6 border-b border-slate-200 pb-3 text-text-h">
            Profile Setup
          </h2>
          <p className="text-sm text-text leading-relaxed mb-6">
            Your profile acts as your peer identity ledger. Ensuring verified tags increases your matching velocity for supervisors and cross-border research grants.
          </p>
          <div className="space-y-4">
            <div className="premium-card p-6 bg-white hover:border-accent/30">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-accent text-white rounded-full text-xs font-bold mb-4 font-mono">2</span>
              <h3 className="text-lg font-bold mb-2 text-text-h">Identity Ledger Synchronization</h3>
              <p className="text-sm text-text leading-relaxed">
                Connect your unique ORCID iD and verified institutional email. Our synchronization node will pull your existing publications, citations, and journal history automatically.
              </p>
            </div>
            <div className="premium-card p-6 bg-white hover:border-accent/30">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-accent text-white rounded-full text-xs font-bold mb-4 font-mono">3</span>
              <h3 className="text-lg font-bold mb-2 text-text-h">Domain Tagging</h3>
              <p className="text-sm text-text leading-relaxed">
                Select precise scientific tags (e.g., Quantum Entanglement, Semantic Parsing, Clinical Trial Data). The matching orchestration engine parses these nodes to suggest peer mentors.
              </p>
            </div>
          </div>
        </section>

        <section id="networking" className="mb-16 scroll-mt-28">
          <h2 className="text-2xl font-extrabold tracking-tight mb-6 border-b border-slate-200 pb-3 text-text-h">
            Research Networking
          </h2>
          <p className="text-sm text-text leading-relaxed mb-6">
            Zosterix bridges isolated institutional silos, introducing a direct communication channel for international academic workflows.
          </p>
          <div className="premium-card p-6 bg-white hover:border-accent/30">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-accent text-white rounded-full text-xs font-bold mb-4 font-mono">4</span>
            <h3 className="text-lg font-bold mb-2 text-text-h">Mentor Discovery</h3>
            <p className="text-sm text-text leading-relaxed">
              Browse verified supervisor directories, select communication modes, and send structured engagement proposals containing research abstracts and methodology files.
            </p>
          </div>
        </section>

        <section id="sharing" className="mb-16 scroll-mt-28">
          <h2 className="text-2xl font-extrabold tracking-tight mb-6 border-b border-slate-200 pb-3 text-text-h">
            Knowledge Sharing
          </h2>
          <p className="text-sm text-text leading-relaxed mb-6">
            Share findings, methodologies, and preprint reviews. Our publication nodes are optimized for indexing across standard indexes.
          </p>
          <div className="premium-card p-6 bg-white hover:border-accent/30">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-accent text-white rounded-full text-xs font-bold mb-4 font-mono">5</span>
            <h3 className="text-lg font-bold mb-2 text-text-h">Preprint Publications</h3>
            <p className="text-sm text-text leading-relaxed">
              Create structured research logs or write comprehensive methodological reviews. Publications are discoverable across all regional gateways.
            </p>
          </div>
        </section>

        <section id="advanced" className="mb-24 scroll-mt-28">
          <h2 className="text-2xl font-extrabold tracking-tight mb-6 border-b border-slate-200 pb-3 text-text-h">
            Advanced Tools
          </h2>
          <p className="text-sm text-text leading-relaxed mb-6">
            Leverage Phaenicio's computing grid logic to validate integrity indexes and bias factors.
          </p>
          <div className="premium-card p-6 bg-white hover:border-accent/30">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-accent text-white rounded-full text-xs font-bold mb-4 font-mono">6</span>
            <h3 className="text-lg font-bold mb-2 text-text-h">AI-Powered Validation Scan</h3>
            <p className="text-sm text-text leading-relaxed">
              Submit data columns or textual methods drafts to the validation gateway. The algorithm tests for structure format errors, anomaly spikes, and citation gaps.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserGuide;
