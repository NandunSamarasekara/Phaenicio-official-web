import { Link } from 'react-router-dom';
import { FiArrowLeft, FiLock, FiShield, FiCpu, FiEye } from 'react-icons/fi';
import { Card } from '../components/patterns/Card';

const Privacy = () => {
  const sections = [
    { id: 'overview', title: '1. Overview' },
    { id: 'data-collection', title: '2. Data We Collect' },
    { id: 'data-usage', title: '3. Data Usage & Purpose' },
    { id: 'retention', title: '4. Data Retention & Erasure' },
    { id: 'security', title: '5. Security & Sovereignty' },
    { id: 'rights', title: '6. Your Legal Rights' },
    { id: 'contact', title: '7. Contact Us' },
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
          <span className="text-slate-400 text-xs font-mono tracking-wide uppercase">Document ID: PH-POL-024A</span>
        </div>

        {/* Hero Section of Document */}
        <header className="relative mb-12 p-8 md:p-12 rounded-2xl bg-white border border-slate-200 shadow-sm text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 mb-6 shadow-sm">
            <FiShield size={14} className="text-brand-red" />
            <span>Core Privacy Standard</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-4 font-display">Privacy Policy</h1>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-slate-500 text-sm font-medium">
            <p>LAST MODIFIED: <span className="text-slate-700 font-semibold font-mono">MAY 23, 2026</span></p>
            <p>COMPLIANCE LEVEL: <span className="text-brand-red font-semibold">GDPR & CCPA COMPLIANT</span></p>
          </div>
        </header>

        {/* Double-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
          
          {/* Left Column: Sticky Side Navigation */}
          <aside className="hidden lg:block sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 pl-2">Document Sections</h3>
            <nav className="flex flex-col gap-1">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollIntoView(sec.id)}
                  className="w-full text-left text-sm font-semibold py-2 px-3 rounded-xl text-slate-650 hover:text-slate-950 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  {sec.title}
                </button>
              ))}
            </nav>
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-4 text-xs">
              <div>
                <p className="font-bold text-slate-900 mb-1">Need help?</p>
                <p className="text-slate-500 leading-relaxed font-normal">Contact our Data Protection officer via security channels.</p>
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
            
            {/* Key Highlights */}
            <Card variant="glass-light" hoverable={false} className="p-8 text-left">
              <h3 className="text-lg font-bold text-slate-950 mb-4 flex items-center gap-2">
                <FiEye className="text-brand-red" />
                Quick Privacy Summary
              </h3>
              <p className="text-sm text-slate-600 mb-6 font-normal leading-relaxed">
                We believe in complete transparency. Below is a high-level breakdown of how we protect your personal and research data:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-bold text-slate-950 mb-1.5">No Commercialization</h4>
                  <p className="text-slate-600 font-normal leading-relaxed text-xs">We do not sell, rent, or trade your personal information. Your metadata stays within secure registries.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 mb-1.5">Granular Autonomy</h4>
                  <p className="text-slate-600 font-normal leading-relaxed text-xs">You control the visibility of all preprints, drafts, and research logs. You can delete your records permanently.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 mb-1.5">Decentralized Storage</h4>
                  <p className="text-slate-600 font-normal leading-relaxed text-xs">Your scientific files are verified cryptographically and distributed across secure, local verification hubs.</p>
                </div>
              </div>
            </Card>

            {/* Main Reading Panel */}
            <article className="p-8 md:p-12 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-12 text-left text-slate-655 text-base leading-relaxed font-normal">
              
              {/* Section 1: Overview */}
              <section id="overview" className="scroll-mt-32 space-y-4">
                <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3 font-display border-b border-slate-100 pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  1. Overview
                </h2>
                <p>
                  Phaenicio ("we," "our," or "us") builds precision computing grids and research discovery networks. We are committed to safeguarding the privacy and security of users participating in our digital platforms, including Zosterix.
                </p>
                <p>
                  This Privacy Policy describes how we handle, protect, and process data across our official domains. By using our services, you consent to the operations described herein.
                </p>
              </section>

              {/* Section 2: Data We Collect */}
              <section id="data-collection" className="scroll-mt-32 space-y-4">
                <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3 font-display border-b border-slate-100 pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  2. Data We Collect
                </h2>
                <p>
                  To maintain the integrity of our scientific networks, we collect minimal data required to verify professional identity and operate secure verification registries:
                </p>
                
                <div className="overflow-x-auto mt-4 border border-slate-200 rounded-xl">
                  <table className="min-w-full divide-y divide-slate-200 text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-3 text-left font-bold text-slate-700 uppercase tracking-wider text-xs">Data Category</th>
                        <th className="px-6 py-3 text-left font-bold text-slate-700 uppercase tracking-wider text-xs">Specific Elements Collected</th>
                        <th className="px-6 py-3 text-left font-bold text-slate-700 uppercase tracking-wider text-xs">Primary Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      <tr>
                        <td className="px-6 py-4 font-semibold text-slate-950">Identity</td>
                        <td className="px-6 py-4">ORCID iDs, institutional affiliations, full names, academic email addresses.</td>
                        <td className="px-6 py-4 text-slate-600">Verification of researcher status and academic credential validation.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-slate-950">Metadata</td>
                        <td className="px-6 py-4">Client configuration logs, network identifiers (IP addresses), nodes.</td>
                        <td className="px-6 py-4 text-slate-600">Load balancing, routing compute loads, and securing networks.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-slate-950">Content</td>
                        <td className="px-6 py-4">Preprint papers, discussions, forum logs, peer reviews, citation lists.</td>
                        <td className="px-6 py-4 text-slate-600">Cooperative indexing, grid sharing, and scientific discovery.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Data Usage & Purpose */}
              <section id="data-usage" className="scroll-mt-32 space-y-6">
                <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3 font-display border-b border-slate-100 pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  3. Data Usage & Purpose
                </h2>
                <p>
                  We process your data strictly to support the technical functioning of the Zosterix research grids under the following mandates:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                  <Card variant="glass-light" className="p-6 flex flex-col gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      <FiLock size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-950 text-base mb-1">Grid Security</h4>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">Securing compute nodes and protecting intellectual properties from unauthorized access.</p>
                    </div>
                  </Card>
                  
                  <Card variant="glass-light" className="p-6 flex flex-col gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      <FiCpu size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-950 text-base mb-1">AI Orchestration</h4>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">Refining research structures and automating format checks without violating ownership.</p>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Section 4: Data Retention */}
              <section id="retention" className="scroll-mt-32 space-y-4">
                <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3 font-display border-b border-slate-100 pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  4. Data Retention & Erasure
                </h2>
                <p>
                  We adhere to strict data-minimization practices. Personal identifiers linked with verified research profiles are retained only as long as the accounts remain active. Academic preprints and logs are cryptographically sealed, and you retain the right to request erasure of your data at any time via our secure channels.
                </p>
                <p>
                  Upon receiving an erasure request, we permanently de-identify associated metadata and purge account credentials from our active caches within 30 business days.
                </p>
              </section>

              {/* Section 5: Security & Sovereignty */}
              <section id="security" className="scroll-mt-32 space-y-4">
                <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3 font-display border-b border-slate-100 pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  5. Security & Sovereignty
                </h2>
                <p>
                  All database segments and verification registries implement end-to-end transport encryption (TLS 1.3) and AES-256 state encryption at rest. We leverage micro-segmentation inside our database partitions to guarantee that no node failure can spill metadata or research state between border nodes.
                </p>
              </section>

              {/* Section 6: Legal Rights */}
              <section id="rights" className="scroll-mt-32 space-y-4">
                <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3 font-display border-b border-slate-100 pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  6. Your Legal Rights
                </h2>
                <p>
                  Under international privacy structures (including GDPR, CCPA, and APPI), users are entitled to specific guarantees:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong className="text-slate-950">Right of Access:</strong> You can download a complete dump of all logs and content associated with your ORCID profile at any time.</li>
                  <li><strong className="text-slate-950">Right to Portability:</strong> Transfer your data structures smoothly to another peer network in standard JSON formats.</li>
                  <li><strong className="text-slate-950">Right to Object:</strong> Restrict automated processing of preprint citation trees.</li>
                </ul>
              </section>

              {/* Section 7: Contact Us */}
              <section id="contact" className="scroll-mt-32 space-y-4 pb-4">
                <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3 font-display border-b border-slate-100 pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  7. Contact Us
                </h2>
                <p>
                  If you have any questions regarding our cryptographic integrity systems, data protocols, or this policy, please reach out to the founders through our <Link to="/contact" className="text-brand-red hover:underline underline-offset-4 font-bold">contact portal</Link>.
                </p>
              </section>

            </article>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Privacy;