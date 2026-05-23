import { Link } from 'react-router-dom';
import { FiArrowRight, FiActivity, FiLock, FiDatabase } from 'react-icons/fi';
import { Card } from '../components/patterns/Card';
import academicRegistryLog from '../assets/academic-registry-log.png';
import zosterixIcon from '../assets/zosterix-icon.svg';

const Home = () => {
  return (
    <div className="flex flex-col pt-[120px] pb-10 animate-in fade-in duration-700 bg-transparent relative text-left">

      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-24 px-6 max-w-6xl mx-auto border-b border-slate-200/40">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Hero Content Left */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
              Research Networks & Registries
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.05] font-display">
              Distributed registries for scientific research.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-655 md:text-lg">
              Phaenicio builds specialized metadata registries and verification networks. We establish secure pipelines between decentralized university departments, ensuring scientific collaborations scale without boundary limits.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#zosterix"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-red sm:w-auto"
              >
                Learn About Zosterix
              </a>
              <Link
                to="/services"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-350 hover:bg-slate-50 sm:w-auto"
              >
                Ecosystem Services
              </Link>
            </div>
          </div>

          {/* Hero Visual Right: Academic Registry Log Image */}
          <div className="w-full relative">
            <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 bg-[#130A0A] p-2 shadow-2xl">
              <img
                src={academicRegistryLog}
                alt="Academic Registry Log Interface showing verified credentials and cryptographic signatures"
                className="w-full h-auto rounded-[1.6rem] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Flagship Spotlight: Zosterix (Unique Product Showcase Layout with Image) */}
      <section id="zosterix" className="py-24 px-6 max-w-6xl mx-auto w-full">
        <Card variant="glass-light" hoverable={false} className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">

            {/* Zosterix Content */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700 font-mono shadow-sm">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span>
                Flagship Platform
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 font-display">Zosterix Registry</h2>
              <p className="text-base text-slate-655 leading-relaxed font-normal">
                Zosterix is our flagship global research environment. Designed as a secure, decentralized workspace, it enables students, supervisors, and researchers to verify academic identities, publish research papers, and share datasets safely.
              </p>

              <div className="space-y-3 text-sm text-slate-700 font-semibold">
                <div className="flex items-center gap-3">
                  <FiActivity className="text-brand-red shrink-0" />
                  <span>Integrated ORCID peer credential verification</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiLock className="text-brand-red shrink-0" />
                  <span>Secure mentorship discussion loops and sealing</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiDatabase className="text-brand-red shrink-0" />
                  <span>Decentralized indexing across secure lab databases</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://zosterix.phaenicio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-950 text-white rounded-full text-sm font-semibold hover:bg-brand-red transition hover:scale-102"
                >
                  <span>Launch Zosterix Portal</span>
                  <FiArrowRight />
                </a>
              </div>
            </div>

            {/* Zosterix Mockup representation with Academic Registry Log Image */}
            <div className="rounded-[1.5rem] overflow-hidden border border-slate-200 bg-white p-2 shadow-md">
              <img
                src={zosterixIcon}
                alt="Academic Registry Log"
                className="w-full h-auto rounded-[1.1rem] object-cover"
              />
            </div>

          </div>
        </Card>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full border-t border-slate-200/40">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red font-mono block mb-2">Capabilities</span>
          <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight font-display">Specialized Registry Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="glass-light" className="p-6">
            <h3 className="text-lg font-bold text-slate-950 mb-3 font-display">High-Performance Registries</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              We coordinate distributed indexing networks, routing scientific publication metadata across local university registries safely.
            </p>
          </Card>

          <Card variant="glass-light" className="p-6">
            <h3 className="text-lg font-bold text-slate-950 mb-3 font-display">Academic Verification</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Using cryptographic hashing and authorized OAuth channels, we ensure that peer credentials are authenticated and untampered with.
            </p>
          </Card>

          <Card variant="glass-light" className="p-6">
            <h3 className="text-lg font-bold text-slate-950 mb-3 font-display">Registry Sovereignty</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              We design custom database profiles allowing institutions to index research metrics locally while sharing verified metadata logs worldwide.
            </p>
          </Card>
        </div>
      </section>

      {/* Clean Call to Action */}
      <section className="py-16 px-6 max-w-5xl mx-auto w-full">
        <div className="rounded-[2rem] border border-slate-200 bg-[#130A0A] p-8 md:p-12 text-white shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red font-mono block">Collaborations</span>
            <h2 className="text-3xl font-extrabold tracking-tight font-display">Ready to secure your research desk?</h2>
            <p className="text-slate-400 text-sm leading-relaxed font-normal">
              Partner with Phaenicio. Establish a verification node at your research institution, or sign up for Zosterix updates.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-sm transition hover:bg-brand-red hover:text-white"
            >
              <span>Contact Registry Desk</span>
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;