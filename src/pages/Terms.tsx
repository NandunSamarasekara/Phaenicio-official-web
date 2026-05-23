import { Link } from 'react-router-dom';
import { FiArrowLeft, FiFileText, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { Card } from '../components/patterns/Card';

const Terms = () => {
  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'representation', title: '2. User Representation' },
    { id: 'integrity', title: '3. System Integrity & Abuse' },
    { id: 'intellectual-property', title: '4. Intellectual Property' },
    { id: 'warranties', title: '5. Disclaimer & Warranties' },
    { id: 'liability', title: '6. Limitation of Liability' },
    { id: 'contact', title: '7. Contact Support' },
  ];

  const scrollIntoView = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col animate-in fade-in duration-700 pt-[140px] pb-20 bg-slate-50/50 min-h-screen relative">
      
      {/* Page Layout Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex justify-between items-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-655 hover:text-slate-955 transition-all duration-300 bg-white px-5 py-2.5 border border-slate-200 hover:border-slate-300 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </Link>
          <span className="text-slate-400 text-xs font-mono tracking-wide uppercase">Document ID: PH-TOS-024A</span>
        </div>

        {/* Hero Section of Document */}
        <header className="relative mb-12 p-8 md:p-12 rounded-2xl bg-white border border-slate-200 shadow-sm text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 mb-6 shadow-sm">
            <FiFileText size={14} className="text-brand-red" />
            <span>Usage Agreement</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-4 font-display">Terms of Service</h1>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-slate-500 text-sm font-medium">
            <p>LAST MODIFIED: <span className="text-slate-700 font-semibold font-mono">MAY 23, 2026</span></p>
            <p>TARGET ENTITIES: <span className="text-brand-red font-semibold">ALL COMPUTE & RESEARCH NODES</span></p>
          </div>
        </header>

        {/* Double-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
          
          {/* Left Column: Sticky Side Navigation */}
          <aside className="hidden lg:block sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 pl-2">Agreement Sections</h3>
            <nav className="flex flex-col gap-1">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollIntoView(sec.id)}
                  className="w-full text-left text-sm font-semibold py-2 px-3 rounded-xl text-slate-655 hover:text-slate-955 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  {sec.title}
                </button>
              ))}
            </nav>
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-4 text-xs">
              <div>
                <p className="font-bold text-slate-900 mb-1">Contractual Inquiries?</p>
                <p className="text-slate-500 leading-relaxed font-normal">Contact our licensing desk for institutional SLA agreements.</p>
              </div>
              <Link 
                to="/contact" 
                className="w-full py-2 bg-slate-950 text-white rounded-xl font-bold text-center hover:bg-brand-red transition-all"
              >
                Inquire
              </Link>
            </div>
          </aside>

          {/* Right Column: Full Document Reading Pane */}
          <div className="space-y-8">
            
            {/* Key Summary Panel */}
            <Card variant="glass-light" hoverable={false} className="p-8 text-left">
              <h3 className="text-lg font-bold text-slate-950 mb-4 flex items-center gap-2">
                <FiCheckCircle className="text-brand-red" />
                Agreement Summary Notes
              </h3>
              <p className="text-sm text-slate-600 mb-6 font-normal leading-relaxed">
                By participating in the Phaenicio grid or Zosterix network, you consent to these fundamental commitments:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-bold text-slate-950 mb-1.5">No Impersonation</h4>
                  <p className="text-slate-600 font-normal leading-relaxed text-xs">You represent your academic credentials honestly. No spoofing ORCID identifiers or peer review authority.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 mb-1.5">No Grid Abuse</h4>
                  <p className="text-slate-600 font-normal leading-relaxed text-xs">Compute nodes are for scientific calculations only. Crypto mining or network attacks result in automatic node banning.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 mb-1.5">Your IP Stays Yours</h4>
                  <p className="text-slate-600 font-normal leading-relaxed text-xs">You retain full copyrights on all datasets and drafts. We only hold rendering and distribution hosting rights.</p>
                </div>
              </div>
            </Card>

            {/* Main Reading Panel */}
            <article className="p-8 md:p-12 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-12 text-left text-slate-655 text-base leading-relaxed font-normal">
              
              {/* Section 1: Acceptance */}
              <section id="acceptance" className="scroll-mt-32 space-y-4">
                <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3 font-display border-b border-slate-100 pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or using the scientific and compute networks operated by Phaenicio (including the Zosterix platform, registries, and API portals), you agree to be bound by these Terms of Service. If you do not agree, you must immediately terminate access.
                </p>
              </section>

              {/* Section 2: Representation */}
              <section id="representation" className="scroll-mt-32 space-y-4">
                <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3 font-display border-b border-slate-100 pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  2. User Representation & Verification
                </h2>
                <p>
                  To maintain academic integrity inside our shared registries:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <Card variant="glass-light" className="p-6 flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-950 mb-1">Academic Authenticity</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">Users must represent themselves with accurate professional credentials. Impersonation of other researchers, peer reviewers, or academic supervisors is strictly prohibited and subject to account termination.</p>
                    </div>
                  </Card>
                  <Card variant="glass-light" className="p-6 flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-950 mb-1">OAuth Verification</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">Integrations such as ORCID OAuth authorization must reflect authentic and verified ownership of associated credentials.</p>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Section 3: Integrity & Abuse */}
              <section id="integrity" className="scroll-mt-32 space-y-4">
                <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3 font-display border-b border-slate-100 pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  3. System Integrity & Registry Abuse
                </h2>
                <p>
                  Phaenicio operates high-performance metadata registries and consensus systems. You agree not to perform actions that compromise the availability or speed of these systems.
                </p>
                
                <div className="p-6 rounded-xl bg-amber-50/50 border border-amber-200 flex flex-col sm:flex-row gap-4 text-amber-900 mt-6 relative overflow-hidden group">
                  <div className="w-10 h-10 rounded-lg bg-amber-100/50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                    <FiAlertCircle size={20} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-slate-950 text-base mb-1">Strict Abuse Policy</h4>
                    <p className="text-sm text-slate-700 leading-relaxed text-pretty font-normal">Tampering with cryptographic verification systems, introducing malicious code payloads, conducting network registry attacks, or interfering with metadata indexes will result in immediate bans and potential legal inquiries.</p>
                  </div>
                </div>
              </section>

              {/* Section 4: Intellectual Property */}
              <section id="intellectual-property" className="scroll-mt-32 space-y-4">
                <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3 font-display border-b border-slate-100 pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  4. Intellectual Property Rights
                </h2>
                <p>
                  You retain ownership of any research drafts, datasets, and methodologies you publish or process through Zosterix. Phaenicio does not claim ownership over user-submitted assets. 
                </p>
                <p>
                  However, you grant us a limited, global, non-exclusive, sub-licensable license to host, format, extract metadata structures, and render your publications as necessary to sustain our cooperative academic indexing networks and peer grids.
                </p>
              </section>

              {/* Section 5: Disclaimer */}
              <section id="warranties" className="scroll-mt-32 space-y-4">
                <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3 font-display border-b border-slate-100 pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  5. Disclaimer of Warranties
                </h2>
                <p>
                  Phaenicio services are provided "as is" and "as available" without warranties of any kind, whether express or implied. We do not guarantee that academic collaborations will result in specific publications, or that data compute allocations will operate without temporary interruptions.
                </p>
              </section>

              {/* Section 6: Limitation of Liability */}
              <section id="liability" className="scroll-mt-32 space-y-4">
                <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3 font-display border-b border-slate-100 pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  6. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, Phaenicio and its founders shall not be liable for any indirect, incidental, special, exemplary, or consequential damages arising out of the use or inability to use the compute nodes, loss of research datasets, or unauthorized intrusions.
                </p>
              </section>

              {/* Section 7: Contact */}
              <section id="contact" className="scroll-mt-32 space-y-4 pb-4">
                <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3 font-display border-b border-slate-100 pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  7. Contact Support
                </h2>
                <p>
                  For legal inquiries regarding licensing, compute usage agreements, or general services, please contact our core engineering team via the <Link to="/contact" className="text-brand-red hover:underline underline-offset-4 font-bold">contact form</Link>.
                </p>
              </section>

            </article>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Terms;