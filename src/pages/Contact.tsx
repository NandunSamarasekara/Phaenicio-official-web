import { FiMail, FiMessageCircle, FiSend, FiClock, FiActivity } from 'react-icons/fi';
import { Card } from '../components/patterns/Card';
import contactRegistryLog from '../assets/contact-registry-log.png';

const Contact = () => {
  const channels = [
    {
      icon: <FiMail size={20} />,
      title: "Administrative Registry",
      text: "Coordinate direct integrations, academic verification loops, supervisor credentials, or partner registries.",
      info: "registry@phaenicio.com"
    },
    {
      icon: <FiClock size={20} />,
      title: "Response Latency",
      text: "Guaranteed SLA response times for verified research node coordinators, lab groups, and universities.",
      info: "Under 24 Hours SLA"
    },
    {
      icon: <FiActivity size={20} />,
      title: "Operations Status",
      text: "Our global databases, consensus networks, verification profiles, and Zosterix portals are online.",
      info: "All Systems Operational"
    }
  ];

  return (
    <div className="flex flex-col animate-in fade-in duration-700 pt-[140px] pb-20 bg-transparent min-h-screen relative text-left">
      
      {/* Top Section: Double Column Showcase (Mirrors About.tsx and Services.tsx structures) */}
      <section className="relative w-full px-6 py-12 md:py-20 max-w-6xl mx-auto">
        <div className="grid w-full items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          
          {/* Left Column: Overlapping Visual Communication Desk Block */}
          <div className="relative order-2 lg:order-1 lg:sticky lg:top-28">
            <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 bg-[#130A0A] p-2 shadow-xl">
              <img 
                src={contactRegistryLog} 
                alt="Secure Communications Channel Log" 
                className="w-full h-auto rounded-[1.6rem] object-cover"
              />
            </div>
            
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur sm:left-auto sm:w-72">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Operations Desk</p>
                <p className="mt-1 text-sm font-bold text-slate-950">Monitored 24/7 / SLA Active</p>
              </div>
            </div>
          </div>

          {/* Right Column: Title and Inquiry Form */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Get in Touch</p>
              <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl md:text-6xl leading-[1.02] font-display">
                Direct channels for researchers.
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-slate-655 font-normal mt-4">
                We configure direct communication tunnels for university departments, institutional supervisors, and registry applicants. Use the form below to transmit your payload details.
              </p>
            </div>

            {/* Inquiry Form Card */}
            <Card variant="glass-light" hoverable={false} className="p-6 md:p-8 mt-4">
              <form
                className="relative z-10 flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider pl-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-white border border-slate-250 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red transition-all placeholder:text-slate-400"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider pl-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white border border-slate-250 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red transition-all placeholder:text-slate-400"
                      placeholder="jane@university.edu"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-700 uppercase tracking-wider pl-1">Subject Area</label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      className="w-full bg-white border border-slate-250 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red transition-all appearance-none cursor-pointer"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Select an inquiry type...</option>
                      <option value="General inquiry">General Inquiry</option>
                      <option value="Research partnership">Institutional / Research Partnership</option>
                      <option value="Zosterix feedback">Zosterix Platform Feedback</option>
                      <option value="Technical support">Compute Node & Technical Support</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider pl-1">Message payload</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white border border-slate-250 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red transition-all placeholder:text-slate-400 min-h-[140px] resize-y"
                    placeholder="Detail your requirements, timeline, or feedback here..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full mt-2 py-3.5 bg-slate-950 text-white rounded-full font-bold text-sm transition-all duration-300 hover:bg-brand-red active:scale-[0.98] shadow-sm flex items-center justify-center gap-2 group cursor-pointer hover:-translate-y-0.5 hover:scale-[1.01]"
                >
                  <span>Transmit Inquiry</span>
                  <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </Card>
          </div>

        </div>
      </section>

      {/* Structured Communication Channels Grid (Mirrors Methodology Pillars on About.tsx) */}
      <section className="py-20 px-6 md:px-12 bg-transparent relative border-t border-slate-200/40">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red font-mono block mb-2">Desks</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-display">Communication Routing</h2>
            <p className="text-sm text-slate-500 font-medium mt-2">Get in touch directly with our specific teams according to your inquiry payload.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((chan, i) => (
              <Card 
                key={i} 
                variant="glass-light"
                className="flex flex-col justify-between group p-6"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-red mb-6 group-hover:bg-slate-950 group-hover:text-white transition-all duration-300">
                    {chan.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-950 font-display">{chan.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">{chan.text}</p>
                </div>
                <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between text-xs font-bold font-mono">
                  <span className="text-slate-400 uppercase">Routing Info</span>
                  {chan.info.includes('@') ? (
                    <a href={`mailto:${chan.info}`} className="text-brand-red hover:underline">{chan.info}</a>
                  ) : (
                    <span className="text-slate-900">{chan.info}</span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Tech Footer */}
      <footer className="max-w-6xl mx-auto w-full px-6 mt-10 pt-6 border-t border-slate-200/60 flex justify-between items-center text-[10px] font-mono tracking-widest text-slate-400 uppercase">
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-slate-500"></span>
          </span>
          PHAENICIO_COMM_LINK
        </div>
        <div className="flex items-center gap-2 text-brand-red font-bold">
          SECURE_CHANNEL_ESTABLISHED
        </div>
      </footer>

    </div>
  );
};

export default Contact;