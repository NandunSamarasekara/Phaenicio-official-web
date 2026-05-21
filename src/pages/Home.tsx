import { Link } from 'react-router-dom';
import logo from '../assets/phaenicio.svg';
import { FiArrowRight, FiActivity, FiCpu, FiCompass, FiBookOpen, FiGlobe, FiGrid } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="flex flex-col fade-in pt-[78px]">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-[5%] overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-[45%] h-[70%] bg-gradient-to-bl from-accent/5 via-transparent to-transparent blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 items-center">
          <div className="col-span-7 max-lg:col-span-12 text-left">
            <div className="badge">
              Global Compute Infrastructure
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-text-h">
              Engineering the <br />
              <span className="bg-gradient-to-r from-accent via-indigo-600 to-primary bg-clip-text text-transparent">
                Future of Knowledge.
              </span>
            </h1>
            <p className="text-lg text-text leading-relaxed mb-8 max-w-xl">
              Phaenicio builds precision-driven digital infrastructure. We create specialized orchestration platforms that empower researchers, universities, and scientists to cross institutional boundaries and accelerate human discovery.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#zosterix" 
                className="px-6 py-3.5 bg-primary text-white rounded-lg font-semibold transition-all duration-300 hover:bg-primary-hover active:scale-[0.98] shadow-md hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2 group"
              >
                <span>Discover Zosterix</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                to="/about" 
                className="px-6 py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-text-h rounded-lg font-semibold transition-all duration-200 hover:bg-slate-50 flex items-center gap-2"
              >
                Our Mission
              </Link>
            </div>
          </div>

          <div className="col-span-5 max-lg:col-span-12 flex justify-center">
            {/* Unique, premium glassmorphic visual panel centered on the brand logo */}
            <div className="relative w-full max-w-[420px] aspect-square rounded-[32px] border border-white/60 bg-white/30 shadow-premium flex items-center justify-center p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-premium-hover group overflow-hidden">
              {/* Dynamic glowing background circles */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-accent/10 via-indigo-600/5 to-transparent blur-3xl pointer-events-none group-hover:scale-105 transition-transform duration-1000"></div>
              
              {/* Live SVG Background Animation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#6366f1" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#0a0f2d" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                
                {/* Clean, minimalist orbital rings around the logo */}
                <circle cx="160" cy="160" r="115" stroke="rgba(226, 232, 240, 0.4)" strokeWidth="1" />
                <circle cx="160" cy="160" r="85" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1.5" strokeDasharray="4 8" />
                <circle cx="160" cy="160" r="55" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="1" />
                
                {/* Arc tracks for animated flow */}
                <path d="M 45 160 A 115 115 0 0 1 275 160" stroke="url(#orbit-grad)" strokeWidth="2" strokeLinecap="round" />
                <path d="M 105 160 A 55 55 0 0 0 215 160" stroke="url(#orbit-grad)" strokeWidth="1.5" strokeLinecap="round" />
                
                {/* Orbiting particles/nodes (CSS and SVG animated) */}
                <circle cx="0" cy="0" r="5" fill="url(#glow-grad)" className="filter drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                  <animateMotion dur="7s" repeatCount="indefinite" path="M 160 45 A 115 115 0 1 1 159.9 45 Z" />
                </circle>
                
                <circle cx="0" cy="0" r="4" fill="#3b82f6" className="filter drop-shadow-[0_0_6px_rgba(59,130,246,0.4)]">
                  <animateMotion dur="10s" repeatCount="indefinite" path="M 160 75 A 85 85 0 1 0 160.1 75 Z" />
                </circle>
                
                <circle cx="0" cy="0" r="3" fill="#6366f1">
                  <animateMotion dur="5s" repeatCount="indefinite" path="M 160 105 A 55 55 0 1 1 159.9 105 Z" />
                </circle>

                {/* Sub-connections */}
                <line x1="160" y1="45" x2="160" y2="75" stroke="rgba(59, 130, 246, 0.06)" strokeWidth="1" />
                <line x1="45" y1="160" x2="105" y2="160" stroke="rgba(59, 130, 246, 0.06)" strokeWidth="1" />
              </svg>

              {/* Centered Brand Logo (fully visible and prominent) */}
              <div className="relative z-10 w-full max-w-[240px] flex justify-center items-center p-6 bg-white/40 rounded-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={logo} 
                  alt="Phaenicio Logo" 
                  className="w-full h-auto drop-shadow-[0_12px_24px_rgba(15,23,42,0.16)] select-none pointer-events-none" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Spotlight - Zosterix */}
      <section id="zosterix" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-[5%] relative z-10 text-left">
          <div className="mb-16">
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded mb-4">Flagship Infrastructure</span>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-text-h">Zosterix Research Grid</h2>
            <p className="text-lg text-text max-w-2xl">
              A global research networking and compute environment breaking down institutional silos.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-8 items-stretch mb-12">
            {/* Primary spotlight column */}
            <div className="col-span-7 max-lg:col-span-12 premium-card p-10 flex flex-col justify-between">
              <div>
                <span className="text-accent text-3xl mb-6 block"><FiGlobe /></span>
                <h3 className="text-2xl font-bold mb-4 text-text-h">Global Research Networking</h3>
                <p className="text-base text-text leading-relaxed mb-6">
                  Connect with academic peers, domain-expert mentors, and institutional supervisors worldwide. Zosterix provides the secure infrastructure needed to collaborate on high-sensitivity data sets, share findings, and bridge the academic-to-enterprise pipeline.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-text-h mb-6 max-sm:grid-cols-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Verified Peer Identity (ORCID)
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Secure Mentorship Portals
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Structured Discussion Pipelines
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Cross-Border Working Groups
                  </div>
                </div>
              </div>
              <a 
                href="https://zosterix.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-black transition-colors w-fit text-sm"
              >
                Access Zosterix Grid
              </a>
            </div>

            {/* Interactive Sidebar Node representation */}
            <div className="col-span-5 max-lg:col-span-12 premium-card p-8 bg-slate-50 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/5 rounded-full blur-2xl"></div>
              
              <div>
                <h4 className="text-sm font-bold text-text-h mb-4 uppercase tracking-wider font-mono">Live Network Stats</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-text-muted">Research Compute Nodes</span>
                      <span className="text-xs font-bold text-accent">Active</span>
                    </div>
                    <p className="text-2xl font-extrabold text-text-h font-display">1,402</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-xl border border-slate-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-text-muted">Data Exchange Velocity</span>
                      <span className="text-xs font-bold text-emerald-600">+14.2%</span>
                    </div>
                    <p className="text-2xl font-extrabold text-text-h font-display">42.8 TB/s</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="text-xs text-text leading-relaxed">
                  Nodes are synchronized across multiple secure data regions to ensure fault tolerance and ultra-low latency compute pipelines.
                </p>
              </div>
            </div>
          </div>

          {/* Three Feature Cards with Custom Premium Mockups */}
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {[
              { 
                icon: <FiCpu />, 
                title: "AI-Powered Validation", 
                text: "Ensure methodology and data integrity. Our verification engines detect anomalies, check structure formats, and flag bias vectors in draft papers.",
                mockup: (
                  <div className="w-full bg-slate-900 rounded-lg p-3.5 font-mono text-[10px] text-slate-300 border border-slate-800">
                    <div className="flex items-center gap-1.5 mb-2 border-b border-slate-800 pb-1.5 text-slate-500">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="ml-1 text-[9px]">validation-engine.sh</span>
                    </div>
                    <p className="text-emerald-400">&gt; RUNNING metodology_audit.py</p>
                    <p className="text-slate-400">Scan: 48,291 parameters... OK</p>
                    <p className="text-emerald-400">Result: 99.4% Integrity Index</p>
                  </div>
                )
              },
              { 
                icon: <FiBookOpen />, 
                title: "Knowledge Ecosystem", 
                text: "Share research insights through professional journals and blogs. Connect abstracts to peer discovery index systems across global networks.",
                mockup: (
                  <div className="w-full bg-white rounded-lg p-4 border border-slate-200 shadow-sm text-left">
                    <span className="px-2 py-0.5 bg-indigo-50 border border-indigo-100 rounded text-[9px] font-semibold text-accent uppercase">Publication</span>
                    <h5 className="font-bold text-xs mt-2 mb-1 text-text-h">Decentralized Compute Pipelines</h5>
                    <p className="text-[10px] text-text-muted">A systematic review of low-latency research architecture.</p>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                      <div className="bg-accent h-full w-[85%]"></div>
                    </div>
                  </div>
                )
              },
              { 
                icon: <FiActivity />, 
                title: "Advanced Analytics", 
                text: "Monitor citation impact, network connections, and compute usage. Gain absolute visibility of research performance with custom dashboards.",
                mockup: (
                  <div className="w-full bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] text-text-muted font-bold">Citation Growth</span>
                      <span className="text-[9px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">+18.4%</span>
                    </div>
                    {/* SVG Line Sparkline */}
                    <svg className="w-full h-10 text-accent" viewBox="0 0 100 40">
                      <path d="M0,35 Q15,20 30,28 T60,10 T90,5 L100,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M0,35 Q15,20 30,28 T60,10 T90,5 L100,5 L100,40 L0,40 Z" fill="rgba(59,130,246,0.05)" />
                    </svg>
                  </div>
                )
              }
            ].map((feature, i) => (
              <div key={i} className="premium-card p-8 flex flex-col justify-between h-full bg-white">
                <div>
                  <div className="w-12 h-12 mb-6 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-xl text-accent">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-text-h">{feature.title}</h4>
                  <p className="text-sm text-text leading-relaxed mb-6">{feature.text}</p>
                </div>
                <div className="mt-auto pt-2">
                  {feature.mockup}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Vision Section */}
      <section className="py-24 px-[5%] text-left bg-slate-50 border-b border-slate-200 relative">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-bold block mb-4">Our Vision</span>
          <p className="text-2xl text-text-h leading-relaxed font-normal tracking-tight">
            "At Phaenicio, we believe the tools of discovery must match the speed and scale of the research they support. By leveraging AI-powered orchestration and robust micro-computing nodes, we build bridges between complex academic problems and elegant, globally resilient solutions."
          </p>
        </div>
      </section>

      {/* Resources & Support Section */}
      <section className="py-24 px-[5%] bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 items-center">
          <div className="col-span-7 max-lg:col-span-12 text-left">
            <span className="inline-block px-3 py-1 bg-slate-100 text-text-h border border-slate-200 rounded text-xs font-semibold mb-4 uppercase tracking-wider">Resources</span>
            <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-text-h">Ecosystem Guides & Resources</h2>
            <p className="text-base text-text mb-8 leading-relaxed">
              Accelerate your workspace setup with detailed manuals and documentation built for researchers, students, and supervisors.
            </p>

            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
              <Link to="/user-guide" className="premium-card p-6 flex flex-col justify-between hover:border-accent bg-white">
                <div>
                  <FiBookOpen className="text-2xl text-accent mb-4" />
                  <h4 className="text-base font-bold mb-2 text-text-h">User Guide</h4>
                  <p className="text-xs text-text leading-relaxed">Step-by-step guides to establish validated identities and connect with global supervisors.</p>
                </div>
                <div className="text-xs text-accent font-semibold flex items-center gap-1 mt-4">
                  <span>Explore Guides</span> <FiArrowRight />
                </div>
              </Link>
              <Link to="/contact" className="premium-card p-6 flex flex-col justify-between hover:border-accent bg-white">
                <div>
                  <FiCompass className="text-2xl text-accent mb-4" />
                  <h4 className="text-base font-bold mb-2 text-text-h">Partnerships</h4>
                  <p className="text-xs text-text leading-relaxed">Framework details for university departments, research labs, and grant agencies.</p>
                </div>
                <div className="text-xs text-accent font-semibold flex items-center gap-1 mt-4">
                  <span>Contact Founders</span> <FiArrowRight />
                </div>
              </Link>
            </div>
          </div>
          
          <div className="col-span-5 max-lg:hidden">
            {/* Visual illustration box using HTML layout instead of flat illustration file */}
            <div className="premium-card p-8 bg-slate-50 border border-slate-200 shadow-premium flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <FiGrid className="text-xl text-accent" />
                <h5 className="font-bold text-sm text-text-h uppercase tracking-wide font-mono">Module Directory</h5>
              </div>
              <div className="space-y-2">
                {['Identity Verification (ORCID)', 'Methodology AI Scanner', 'Compute Node Sync', 'Regional Gateways'].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2.5 bg-white rounded-lg border border-slate-100 text-xs">
                    <span className="font-semibold text-text-h">{item}</span>
                    <span className="px-2 py-0.5 bg-indigo-50 text-[10px] text-accent font-semibold rounded">Verified</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-[5%] text-center bg-primary text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight mb-5">Join the Future of Discovery</h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Be part of a growing ecosystem dedicated to scientific, academic, and technical excellence. Let's build the infrastructure of tomorrow together.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-xl font-semibold text-base transition-all duration-200 hover:bg-accent-hover active:scale-[0.98] shadow-lg shadow-accent/25"
          >
            <span>Get in touch</span>
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
