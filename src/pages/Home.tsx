import { Link } from 'react-router-dom';
// import logo from '../assets/phaenicio.svg';
import { FiArrowRight, FiActivity, FiCpu, FiCompass, FiBookOpen, FiGlobe, FiGrid } from 'react-icons/fi';

const metrics = [
  { value: "1,402", label: "Active Nodes" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "42TB/s", label: "Data Velocity" },
];

const Home = () => {
  return (
    <div className="flex flex-col fade-in pt-[78px]">
      {/* Custom Styles for Hero Animations */}
      <style>{`
        .hero-grid {
          background-image: linear-gradient(to right, rgb(226 232 240 / 0.6) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgb(226 232 240 / 0.6) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(circle at 50% 28%, black, transparent 75%);
          -webkit-mask-image: radial-gradient(circle at 50% 28%, black, transparent 75%);
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        .animate-pulse-dot {
          animation: pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin 25s linear infinite reverse;
        }
        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .scanner {
          animation: scan-line 3s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-[5%] overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 pointer-events-none hero-grid z-0"></div>
        <div className="absolute top-0 right-0 w-[45%] h-[70%] bg-gradient-to-bl from-accent/5 via-transparent to-transparent blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="col-span-7 max-lg:col-span-12 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-text-h mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot"></span>
              Global Compute Infrastructure
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.05] mb-6 text-slate-950 text-balance">
              Engineering the <br />
              <span className="bg-gradient-to-r from-accent via-indigo-600 to-primary bg-clip-text text-transparent">
                Future of Knowledge.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl text-pretty">
              Phaenicio builds precision-driven digital infrastructure. We create specialized orchestration platforms that empower researchers, universities, and scientists to cross boundaries and accelerate discovery.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#zosterix" 
                className="px-6 py-3.5 bg-slate-950 text-white rounded-full font-semibold transition-all duration-300 hover:bg-slate-800 shadow-lg shadow-slate-950/15 flex items-center gap-2 group"
              >
                <span>Discover Zosterix</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                to="/about" 
                className="px-6 py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 rounded-full font-semibold transition-all duration-200 shadow-sm shadow-slate-200/50 hover:bg-slate-50 flex items-center gap-2"
              >
                Our Mission
              </Link>
            </div>

            <div className="mt-12 grid w-full max-w-xl grid-cols-3 gap-4">
              {metrics.map((metric, i) => (
                <div key={i} className="rounded-2xl border border-slate-200/80 bg-white/60 p-4 text-left shadow-sm shadow-slate-200/40 backdrop-blur-sm">
                  <p className="text-2xl font-bold tracking-tight text-slate-950">{metric.value}</p>
                  <p className="mt-1 text-xs font-medium leading-snug text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Unique Radial Core Dashboard */}
          <div className="col-span-5 max-lg:col-span-12 flex justify-center w-full relative">
            <div className="relative w-full max-w-[520px]" aria-label="Animated central core network">
              {/* Sleek Outer Bezel */}
              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-300/60">
                {/* Deep Dark Tech Interface */}
                <div className="rounded-[1.5rem] bg-slate-950 overflow-hidden relative shadow-inner">
                  
                  {/* Ambient Glows */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-accent/20 blur-[60px] rounded-full pointer-events-none"></div>
                  
                  {/* Dashboard Header */}
                  <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-5 py-4 bg-slate-950/50 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <FiActivity className="text-accent text-lg" />
                      <span className="text-sm font-mono font-bold tracking-wider text-slate-200">ZOSTERIX_CORE</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot"></div>
                      <span className="text-[10px] font-mono font-bold text-emerald-400">SYS.ONLINE</span>
                    </div>
                  </div>

                  {/* Main Network Visual Area */}
                  <div className="relative h-[280px] w-full flex items-center justify-center p-4">
                    
                    {/* SVG Radial Topology */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 280">
                      <defs>
                        <linearGradient id="link-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>

                      {/* Rotating Grid/Radar Rings */}
                      <g className="origin-center animate-spin-slow" style={{ transformOrigin: '200px 140px' }}>
                        <circle cx="200" cy="140" r="80" stroke="rgba(59,130,246,0.15)" strokeWidth="1" fill="none" strokeDasharray="4 6" />
                        <circle cx="200" cy="140" r="110" stroke="rgba(99,102,241,0.1)" strokeWidth="1" fill="none" />
                      </g>

                      <g className="origin-center animate-spin-reverse" style={{ transformOrigin: '200px 140px' }}>
                        <circle cx="200" cy="140" r="50" stroke="rgba(59,130,246,0.3)" strokeWidth="1" fill="none" strokeDasharray="10 4" />
                      </g>

                      {/* Connection Lines to Satellites */}
                      <path d="M200 140 L90 70" stroke="rgba(148,163,184,0.15)" strokeWidth="1.5" />
                      <path d="M200 140 L310 80" stroke="rgba(148,163,184,0.15)" strokeWidth="1.5" />
                      <path d="M200 140 L110 220" stroke="rgba(148,163,184,0.15)" strokeWidth="1.5" />
                      <path d="M200 140 L290 200" stroke="rgba(148,163,184,0.15)" strokeWidth="1.5" />

                      {/* Active Data Streams (Animated Stroke) */}
                      <path d="M90 70 L200 140" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="130" strokeDashoffset="130">
                        <animate attributeName="stroke-dashoffset" values="130;0;130" dur="2.5s" repeatCount="indefinite" />
                      </path>
                      <path d="M310 80 L200 140" stroke="#10b981" strokeWidth="2" fill="none" strokeDasharray="130" strokeDashoffset="130">
                        <animate attributeName="stroke-dashoffset" values="130;0;130" dur="3s" repeatCount="indefinite" />
                      </path>
                      <path d="M110 220 L200 140" stroke="#8b5cf6" strokeWidth="2" fill="none" strokeDasharray="120" strokeDashoffset="120">
                        <animate attributeName="stroke-dashoffset" values="120;0;120" dur="2s" repeatCount="indefinite" />
                      </path>

                      {/* Satellite Nodes */}
                      <circle cx="90" cy="70" r="6" fill="#3b82f6" className="shadow-[0_0_10px_#3b82f6]" />
                      <circle cx="90" cy="70" r="12" stroke="rgba(59,130,246,0.3)" strokeWidth="1" fill="none" />
                      
                      <circle cx="310" cy="80" r="5" fill="#10b981" />
                      <circle cx="310" cy="80" r="10" stroke="rgba(16,185,129,0.3)" strokeWidth="1" fill="none" />
                      
                      <circle cx="110" cy="220" r="7" fill="#8b5cf6" />
                      
                      <circle cx="290" cy="200" r="4" fill="#64748b" />

                      {/* Central Core */}
                      <circle cx="200" cy="140" r="22" fill="url(#link-grad)" />
                      <circle cx="200" cy="140" r="12" fill="#0f172a" />
                      <circle cx="200" cy="140" r="4" fill="#3b82f6" className="animate-pulse-dot" />

                      {/* Data Packets */}
                      <circle r="3" fill="#fff" filter="drop-shadow(0 0 2px rgba(255,255,255,0.8))">
                        <animateMotion dur="2.5s" repeatCount="indefinite" path="M90 70 L200 140" />
                      </circle>
                      <circle r="2" fill="#fff">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M310 80 L200 140" />
                      </circle>
                    </svg>

                    {/* HUD UI Elements over the graphic */}
                    <div className="absolute inset-x-5 bottom-4 flex justify-between items-end pointer-events-none">
                      {/* Left side terminal output */}
                      <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-lg p-2.5 text-[9px] font-mono leading-relaxed">
                        <p className="text-slate-400">&gt; syncing_nodes_global</p>
                        <p className="text-emerald-400">&gt; hash: 0x8F2A...9C</p>
                        <p className="text-slate-400">&gt; validation: <span className="text-white">pass</span></p>
                      </div>

                      {/* Right side telemetry bars */}
                      <div className="flex flex-col gap-2 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg p-2.5">
                        <div className="flex items-center gap-3">
                          <span className="text-[8px] font-mono text-slate-500 w-6">ING</span>
                          <div className="w-16 h-1 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-accent w-[85%]"></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[8px] font-mono text-slate-500 w-6">EGR</span>
                          <div className="w-16 h-1 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 w-[60%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Subtle Scanline Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent h-8 w-full opacity-50 scanner pointer-events-none"></div>
                  </div>
                </div>
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
                href="https://zosterix.phaenicio.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-black transition-colors w-fit text-sm"
              >
                Access Zosterix Grid
              </a>
            </div>

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