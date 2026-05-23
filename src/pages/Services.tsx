import { FiGlobe, FiCpu, FiShield, FiUsers, FiLock, FiDatabase, FiArrowRight } from 'react-icons/fi';
import { Card } from '../components/patterns/Card';
import servicesRegistryLog from '../assets/services-registry-log.png';

const Services = () => {
  const capabilities = [
    {
      icon: <FiGlobe size={20} />,
      title: "Academic Identity Registry",
      text: "Integrates ORCID authentication protocols to verify peer identities and maintain clean author credentials across research environments."
    },
    {
      icon: <FiUsers size={20} />,
      title: "Supervisor Portals",
      text: "Secures communication pipelines between students and academic supervisors, facilitating organized draft review cycles."
    },
    {
      icon: <FiLock size={20} />,
      title: "Cryptographic Sealing",
      text: "Locks preprint metadata and citation indexes in immutable registries, protecting research from early disclosure or alterations."
    },
    {
      icon: <FiCpu size={20} />,
      title: "Federated Registry Indexes",
      text: "Partitions and routes directory searches across regional networks, balancing the indexing lookup load dynamically."
    },
    {
      icon: <FiDatabase size={20} />,
      title: "Sovereign Storage",
      text: "Allows universities to maintain complete database ownership locally while advertising indexing trees on the shared network."
    },
    {
      icon: <FiShield size={20} />,
      title: "Secure Data Tunnels",
      text: "Implements TLS 1.3 and end-to-end encryption for large dataset uploads, preventing packet inspections."
    }
  ];

  return (
    <div className="flex flex-col animate-in fade-in duration-700 pt-[140px] pb-20 bg-transparent relative text-left">
      
      {/* Top Section: Double Column Showcase (Mirrors About.tsx structure) */}
      <section className="relative w-full px-6 py-12 md:py-20 max-w-6xl mx-auto">
        <div className="grid w-full items-center gap-12 md:grid-cols-[0.95fr_1.05fr]">
          
          {/* Left Column: Overlapping Visual Registry Console Block */}
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 bg-[#130A0A] p-2 shadow-xl">
              <img 
                src={servicesRegistryLog} 
                alt="Registry Logs Monitored" 
                className="w-full h-auto rounded-[1.6rem] object-cover"
              />
            </div>
            
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur sm:left-auto sm:w-72">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Platform State</p>
                <p className="mt-1 text-sm font-bold text-slate-950">Zosterix Core / v1.4.2-stable</p>
              </div>
            </div>
          </div>

          {/* Right Column: Platform Description */}
          <div className="order-1 flex flex-col gap-6 md:order-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Phaenicio Ecosystem</p>
            <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl md:text-6xl leading-[1.02] font-display">
              Specialized registries & compute for research.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-655 font-normal">
              Our flagship platform, Zosterix, serves as a secure collaboration network. We strip away administrative friction, securing dataset flows and metadata registries so researchers, students, and advisors can focus entirely on verified science.
            </p>
            
            <div className="pt-2">
              <a 
                href="https://zosterix.phaenicio.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-950 text-white rounded-full text-sm font-semibold transition hover:bg-brand-red group/link"
              >
                <span>Access Zosterix Grid</span>
                <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Structured Capabilities Grid (Mirrors Methodology Pillars on About.tsx) */}
      <section className="py-20 px-6 md:px-12 bg-transparent relative border-t border-slate-200/40">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red font-mono block mb-2">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-display">Infrastructure Features</h2>
            <p className="text-sm text-slate-500 font-medium mt-2">Every protocol is designed to provide secure, frictionless academic collaboration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <Card 
                key={i} 
                variant="glass-light"
                className="flex flex-col group p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-red mb-6 group-hover:bg-slate-950 group-hover:text-white transition-all duration-300">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-950 font-display">{cap.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow font-normal">{cap.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Services;