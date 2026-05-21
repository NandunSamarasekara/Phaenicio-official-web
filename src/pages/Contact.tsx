import nandunImg from '../assets/nandun.jpg';
import hasithaImg from '../assets/hasitha.jpg';
import { FiMail, FiMessageCircle, FiLinkedin, FiCompass } from 'react-icons/fi';

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
    <div className="page-shell max-w-7xl fade-in">
      <header className="page-header">
        <div className="badge">
          Direct Line to the Founders
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight leading-[1.08] mb-5 text-text-h">
          Get in <span className="bg-gradient-to-r from-accent to-indigo-600 bg-clip-text text-transparent">Touch.</span>
        </h1>
        <p className="page-lead">
          We are always open to research collaborations, academic feedback, and institutional inquiries about Zosterix.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 text-left items-start">
        {/* Founders Cards */}
        <section className="flex flex-col gap-8">
          <div>
            <h2 className="text-xl font-bold mb-2 text-text-h">Co-Founders</h2>
            <p className="text-sm text-text leading-relaxed">Direct access to the system architects behind Phaenicio.</p>
          </div>
          
          <div className="flex flex-col gap-6">
            {founders.map((founder, index) => (
              <div 
                key={index} 
                className="premium-card p-6 flex items-center gap-6 max-sm:flex-col max-sm:items-start max-sm:gap-4 bg-white"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md border border-slate-100 shrink-0">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold mb-1 text-text-h">{founder.name}</h3>
                  <p className="text-xs text-text-muted mb-4 font-semibold font-mono uppercase tracking-wider">{founder.role}</p>
                  
                  <div className="flex flex-wrap gap-4 text-xs font-mono">
                    <a 
                      href={`mailto:${founder.email}`} 
                      className="flex items-center gap-1.5 text-text hover:text-accent transition-colors underline"
                    >
                      <FiMail /> <span>Email Direct</span>
                    </a>
                    <a 
                      href={founder.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1.5 text-text hover:text-accent transition-colors underline"
                    >
                      <FiLinkedin /> <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex gap-4 items-start">
            <FiCompass className="text-xl text-accent shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-text-h uppercase tracking-wide mb-1 font-mono">Dual-Node Communication</h4>
              <p className="text-xs text-text leading-relaxed">
                Our founders actively divide oversight between Eastern Standard Time (EST) and Sri Lanka Standard Time (SLST). Message routing is optimized automatically.
              </p>
            </div>
          </div>
        </section>

        {/* Message Form */}
        <section>
          <div className="premium-card p-10 max-md:p-6 bg-white">
            <div className="mb-8">
              <div className="w-10 h-10 bg-slate-50 border border-slate-200 text-accent rounded-xl flex items-center justify-center text-xl mb-4">
                <FiMessageCircle />
              </div>
              <h2 className="text-2xl font-bold text-text-h mb-1">Send a Message</h2>
              <p className="text-sm text-text">For partnership proposals, compute nodes or generic inquiry.</p>
            </div>

            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                <div>
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="form-label">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  className="form-input"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General inquiry">General inquiry</option>
                  <option value="Research partnership">Research partnership</option>
                  <option value="Zosterix feedback">Zosterix feedback</option>
                  <option value="Technical support">Technical support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input min-h-[140px] resize-y"
                  placeholder="How can we help you today?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-semibold text-sm transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-200 flex justify-between items-center text-[10px] font-mono tracking-widest text-text-muted uppercase">
        <div>PHAENICIO-COMMUNICATIONS</div>
        <div>SECURE CHANNEL</div>
      </footer>
    </div>
  );
};

export default Contact;
