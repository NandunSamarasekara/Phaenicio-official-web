// import { Link } from 'react-router-dom';
import { FiTarget, FiCpu, FiUsers, FiGlobe, FiDatabase, FiArrowRight } from 'react-icons/fi';

const About = () => {
  return (
    <div className="flex flex-col fade-in pt-[78px] bg-white">
      
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 mb-6">
            Pioneering Research Infrastructure
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-slate-950 text-balance">
            Building the <br className="hidden sm:block" /> 
            <span className="bg-gradient-to-r from-accent via-indigo-600 to-primary bg-clip-text text-transparent">
              Next Frontier of Discovery.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto text-pretty">
            We empower specialized scientific, technical, and academic communities by providing the precision-driven orchestration tools they need to collaborate without friction.
          </p>
        </div>
      </header>

      {/* Mission Statement Panel */}
      <section className="py-20 px-[5%]">
        <div className="max-w-5xl mx-auto">
          <div className="p-10 md:p-14 rounded-[2rem] border border-slate-200 bg-slate-50 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="md:w-1/3">
                <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block font-mono">Our Mission</span>
                <h2 className="text-2xl font-bold text-slate-950">Why we build.</h2>
              </div>
              <div className="md:w-2/3 border-l-2 border-accent/20 pl-6 md:pl-10">
                <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed tracking-tight text-pretty">
                  "Meaningful progress happens at the intersection of specialized knowledge and purpose-built technology. We build the bridges that connect international research environments."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars (Clean Grid) */}
      <section className="py-16 px-[5%] bg-white border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950">How We Operate</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">We strip away administrative friction so researchers can focus entirely on raw science.</p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
            {[
              { 
                icon: <FiTarget />, 
                title: "Precision Engineering", 
                text: "Academic environments require absolute stability. Every infrastructure component we deploy is engineered for security, fault tolerance, and exact data fidelity." 
              },
              { 
                icon: <FiCpu />, 
                title: "Intelligent Automation", 
                text: "Our nodes leverage AI to automate tedious workflows—from structural formatting and citation matching to methodology bias checks." 
              },
              { 
                icon: <FiUsers />, 
                title: "Decentralized Networks", 
                text: "We don't build general social networks. We develop domain-specific hubs that strictly adhere to the rigorous peer-review standards of true academia." 
              }
            ].map((pillar, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-950">{pillar.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Mesh Network Panel (Dark Premium Section) */}
      <section className="py-24 px-[5%]">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 items-center bg-slate-950 text-white rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-slate-900/20">
          
          {/* Ambient Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="col-span-6 max-lg:col-span-12 relative z-10">
            <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse-dot"></span>
              Mesh Network Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-white text-balance">
              Decentralized Global Clusters
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8 text-pretty">
              Phaenicio operates as a synchronized global engine. Our compute nodes and validation registries are distributed across high-availability regions, facilitating sub-second metadata synchronization worldwide.
            </p>
            
            <div className="space-y-4 font-mono text-xs text-slate-300 bg-slate-900/50 p-5 rounded-xl border border-white/5">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-slate-800 rounded-lg text-accent"><FiGlobe /></div>
                <div>
                  <p className="font-bold text-white mb-0.5">North America Region</p>
                  <p className="text-slate-500">Primary Registry & Edge Node</p>
                </div>
              </div>
              <div className="w-px h-4 bg-slate-800 ml-4"></div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-slate-800 rounded-lg text-indigo-400"><FiDatabase /></div>
                <div>
                  <p className="font-bold text-white mb-0.5">Asia-Pacific Region</p>
                  <p className="text-slate-500">Systems Engineering & Compute Hub</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-6 max-lg:col-span-12 relative z-10 flex justify-center lg:justify-end">
            {/* High-Tech Node Connection Visual */}
            <div className="w-full max-w-[380px] bg-slate-900 border border-slate-800 p-1.5 rounded-2xl shadow-xl">
              <div className="bg-slate-950 rounded-xl p-5 border border-white/5">
                <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono mb-6 border-b border-white/5 pb-3">
                  <span>SSL_TUNNEL_ACTIVE</span>
                  <span className="text-emerald-500">LATENCY: 42ms</span>
                </div>
                
                <div className="flex justify-between items-center py-4">
                  {/* Node 1 */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full border-2 border-accent/30 bg-accent/10 flex items-center justify-center relative">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse-dot"></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">EST_REGISTRY</span>
                  </div>

                  {/* Animated Connection Line */}
                  <div className="flex-grow flex items-center justify-center relative px-4">
                    <div className="h-[1px] w-full bg-slate-800 absolute"></div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-accent to-indigo-500 absolute animate-pulse"></div>
                    {/* Packet moving left to right */}
                    <svg className="w-full h-4 absolute" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <circle r="2" fill="#fff" filter="drop-shadow(0 0 2px rgba(255,255,255,0.8))">
                        <animateMotion dur="2s" repeatCount="indefinite" path="M0 5 L100 5" />
                      </circle>
                    </svg>
                  </div>

                  {/* Node 2 */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full border-2 border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center relative">
                      <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse-dot" style={{ animationDelay: '1s' }}></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">SLST_COMPUTE</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-center">
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                    Secure tunnels connecting research repositories 24/7 across intercontinental data centers.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Flagship Ecosystem (CTA) */}
      <section className="py-20 px-[5%] bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 block">Flagship Platform</span>
          <h2 className="text-3xl font-extrabold tracking-tight mb-6 text-slate-950">The Zosterix Ecosystem</h2>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Zosterix is a dedicated environment for researchers to document findings, match with academic supervisors, and validate methodology bias. It is the direct embodiment of our mission to enhance scientific transparency.
          </p>

          <a 
            href="https://zosterix.phaenicio.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-950 text-white rounded-full font-semibold transition-all duration-300 hover:bg-slate-800 shadow-lg shadow-slate-950/15 group"
          >
            <span>Explore Zosterix</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default About;