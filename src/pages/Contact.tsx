import nandunImg from '../assets/nandun.jpg';
import hasithaImg from '../assets/hasitha.jpg';
import { FiMail, FiMessageCircle, FiLinkedin, FiSend, FiActivity } from 'react-icons/fi';

const Contact = () => {
  const founders = [
    {
      name: "Nandun Samarasekara",
      role: "Co-founder & Tech Lead",
      email: "nandunneelaka@gmail.com",
      image: nandunImg,
      linkedin: "https://linkedin.com/in/nandun-samarasekara",
    },
    {
      name: "Hasitha Erandika",
      role: "Co-founder & Systems Architect",
      email: "wickramasinghe.erandika@gmail.com",
      image: hasithaImg,
      linkedin: "https://linkedin.com/in/hasitha-erandika",
    },
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
            Direct Line to the Founders
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-slate-950 text-balance">
            Get in <br className="hidden sm:block" /> 
            <span className="bg-gradient-to-r from-accent via-indigo-600 to-primary bg-clip-text text-transparent">
              Touch.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto text-pretty">
            We are always open to research collaborations, academic feedback, and institutional inquiries about the Zosterix ecosystem.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="py-20 px-[5%] bg-slate-50 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-start text-left">
          
          {/* Left Column: Founders & Comms Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-slate-950 tracking-tight">System Architects</h2>
              <p className="text-sm text-slate-600 leading-relaxed">Direct access to the core team behind Phaenicio.</p>
            </div>
            
            <div className="flex flex-col gap-5">
              {founders.map((founder, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-6 max-sm:flex-col max-sm:items-start group"
                >
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-inner border border-slate-100 shrink-0 relative">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold mb-1 text-slate-950 tracking-tight">{founder.name}</h3>
                    <p className="text-[11px] text-accent mb-4 font-bold font-mono uppercase tracking-wider">{founder.role}</p>
                    
                    <div className="flex flex-wrap gap-4 text-xs font-mono font-medium">
                      <a 
                        href={`mailto:${founder.email}`} 
                        className="flex items-center gap-1.5 text-slate-600 hover:text-accent transition-colors"
                      >
                        <FiMail className="text-sm" /> <span>Direct Email</span>
                      </a>
                      <a 
                        href={founder.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 transition-colors"
                      >
                        <FiLinkedin className="text-sm" /> <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* High-Tech System Status Box */}
            <div className="p-6 bg-slate-950 border border-slate-800 rounded-3xl flex gap-5 items-start relative overflow-hidden mt-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full pointer-events-none"></div>
              
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shrink-0 text-emerald-400 relative z-10">
                <FiActivity />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse-dot"></span>
                  <h4 className="text-[11px] font-bold text-slate-300 uppercase tracking-widest font-mono">Dual-Node Routing</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed text-pretty">
                  Oversight is actively divided between <span className="text-slate-200 font-medium">Eastern Standard Time (EST)</span> and <span className="text-slate-200 font-medium">Sri Lanka Standard Time (SLST)</span>. Message routing is optimized automatically based on current timezone availability.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            {/* Subtle glow behind form */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-accent rounded-xl flex items-center justify-center text-xl mb-6 shadow-sm">
                <FiMessageCircle />
              </div>
              <h2 className="text-3xl font-bold text-slate-950 mb-2 tracking-tight">Send an Inquiry</h2>
              <p className="text-sm text-slate-600">For partnership proposals, compute nodes, or general questions.</p>
            </div>

            <form
              className="relative z-10 flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-slate-400"
                    placeholder="Jane Doe"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-slate-400"
                    placeholder="jane@university.edu"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Subject Area</label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled selected>Select an inquiry type...</option>
                    <option value="General inquiry">General Inquiry</option>
                    <option value="Research partnership">Institutional / Research Partnership</option>
                    <option value="Zosterix feedback">Zosterix Platform Feedback</option>
                    <option value="Technical support">Compute Node & Technical Support</option>
                    <option value="Other">Other</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Message payload</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-slate-400 min-h-[160px] resize-y"
                  placeholder="Detail your requirements, timeline, or feedback here..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full mt-2 py-4 bg-slate-950 text-white rounded-xl font-bold text-sm transition-all duration-300 hover:bg-slate-800 active:scale-[0.98] shadow-lg shadow-slate-950/15 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Transmit Inquiry</span>
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Deep Tech Footer */}
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-200 flex justify-between items-center text-[10px] font-mono tracking-widest text-slate-400 uppercase">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
            PHAENICIO_COMM_LINK
          </div>
          <div className="flex items-center gap-2 text-emerald-600">
            SECURE_CHANNEL_ESTABLISHED
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;