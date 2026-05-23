import { FiTarget, FiCpu, FiUsers, FiGlobe, FiDatabase, FiShield, FiTrendingUp } from 'react-icons/fi';
import { Card } from '../components/patterns/Card';
import hasithaImg from '../assets/hasitha.jpg';
import nandunImg from '../assets/nandun.jpg';

const About = () => {
  const pillars = [
    { 
      icon: <FiTarget size={20} />, 
      title: "Precision Engineering", 
      text: "Academic environments require absolute stability. Every infrastructure component we deploy is engineered for security, fault tolerance, and exact data fidelity." 
    },
    { 
      icon: <FiCpu size={20} />, 
      title: "Intelligent Automation", 
      text: "Our nodes leverage AI to automate tedious workflows—from structural formatting and citation matching to methodology bias checks." 
    },
    { 
      icon: <FiUsers size={20} />, 
      title: "Decentralized Networks", 
      text: "We don't build general social networks. We develop domain-specific hubs that strictly adhere to the rigorous peer-review standards of true academia." 
    },
    { 
      icon: <FiShield size={20} />, 
      title: "Absolute Security", 
      text: "Data sovereignty is paramount. We implement enterprise-grade encryption and granular access controls to protect sensitive research assets." 
    },
    { 
      icon: <FiGlobe size={20} />, 
      title: "Global Accessibility", 
      text: "Our tools are designed to bridge geographic divides, ensuring researchers everywhere have access to the same robust computational resources." 
    },
    { 
      icon: <FiTrendingUp size={20} />, 
      title: "Scalable Infrastructure", 
      text: "From small lab groups to international consortiums, our systems dynamically scale to meet the computational demands of any research phase." 
    }
  ];

  return (
    <div className="flex flex-col animate-in fade-in duration-700 pt-[140px] pb-20 bg-transparent relative text-left">
      
      {/* Top Section: Double Column Team Showcase (Inspired by About.astro) */}
      <section className="relative w-full px-6 py-12 md:py-20 max-w-6xl mx-auto">
        <div className="grid w-full items-center gap-12 md:grid-cols-[0.95fr_1.05fr]">
          
          {/* Left Column: Overlapping Visual Team Block */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-xl flex gap-1 p-2">
              <div className="w-1/2 h-full rounded-2xl overflow-hidden relative">
                <img 
                  src={nandunImg} 
                  alt="Nandun Samarasekara" 
                  className="h-full w-full object-cover filter grayscale hover:grayscale-0 transition duration-500" 
                />
              </div>
              <div className="w-1/2 h-full rounded-2xl overflow-hidden relative">
                <img 
                  src={hasithaImg} 
                  alt="Hasitha Erandika" 
                  className="h-full w-full object-cover filter grayscale hover:grayscale-0 transition duration-500" 
                />
              </div>
            </div>
            
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur sm:left-auto sm:w-72">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Founders & Engineers</p>
                <p className="mt-1 text-sm font-bold text-slate-950">Sri Lanka-based, building globally</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Title */}
          <div className="order-1 flex flex-col gap-6 md:order-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">About Phaenicio</p>
            <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl md:text-6xl leading-[1.02] font-display">
              Careful systems engineering from a focused core team.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-655 font-normal">
              We are a Sri Lanka-based team that turns complex academic challenges into clean, structured software platforms. We care about simple user flows, verified database structures, reliable compute networks, and system decisions that make sense for long-term research scaling.
            </p>
            
            <div className="grid gap-3 sm:grid-cols-2 mt-4">
              <div className="rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm">
                <p className="text-sm font-bold text-slate-950 font-display">Decentralized focus</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 font-medium">We design federated structures that empower individual universities and nodes to keep ownership of datasets.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm">
                <p className="text-sm font-bold text-slate-950 font-display">Academic rigor</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 font-medium">Every tool, peer interface, and registry is optimized for verification, preventing spoofing and data manipulation.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Structured Core Pillars Grid */}
      <section className="py-20 px-6 md:px-12 bg-transparent relative border-t border-slate-200/40">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red font-mono block mb-2">Methodology</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-display">How We Operate</h2>
            <p className="text-sm text-slate-500 font-medium mt-2">We build custom protocols that strip away complexity, leaving room for raw scientific output.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <Card 
                key={i} 
                variant="glass-light"
                className="flex flex-col group p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-red mb-6 group-hover:bg-slate-950 group-hover:text-white transition-all duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-950 font-display">{pillar.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow font-normal">{pillar.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Federated Registry Panel */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#130A0A] p-8 md:p-12 flex flex-col items-center text-center shadow-xl">
            <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-red mb-6">
               <FiDatabase size={24} />
            </div>

            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mb-6 font-mono">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span>
              Federated Registry Architecture
            </span>
            
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-white max-w-3xl font-display">
              Global Federated Registries
            </h2>
            
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl font-normal mb-8">
              Phaenicio operates as a synchronized global engine. Our validation registries are indexed across academic institutions, facilitating instant metadata verification and publication lookups worldwide.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;