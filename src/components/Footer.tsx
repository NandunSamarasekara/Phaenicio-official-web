import { Link } from 'react-router-dom';
import logo from '../assets/phaenicio.svg';
import { FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="pt-20 pb-12 px-[5%] border-t border-slate-200 bg-white/30 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-10 mb-16 max-md:flex max-md:flex-col max-md:gap-12">
          <div className="col-span-5 text-left max-w-sm">
            <div className="flex items-center gap-3 mb-5 font-bold text-xl text-text-h">
              <img src={logo} alt="Phaenicio Logo" className="h-8 w-auto" />
              <span className="font-display tracking-tight">Phaenicio</span>
            </div>
            <p className="text-sm text-text leading-relaxed mb-6">
              Precision digital infrastructure for global research ecosystems. Empowering decentralized academic networks and scientific collaboration.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/phaenicio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-text hover:text-accent hover:border-accent hover:bg-slate-50 transition-all"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <Link 
                to="/contact" 
                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-text hover:text-accent hover:border-accent hover:bg-slate-50 transition-all"
                aria-label="Contact Us"
              >
                <FiMail />
              </Link>
            </div>
          </div>

          <div className="col-span-7 grid grid-cols-3 gap-8 max-sm:grid-cols-2 text-left">
            <div className="flex flex-col">
              <h4 className="font-bold text-text-h mb-5 uppercase text-[11px] tracking-wider font-display opacity-80">Platform</h4>
              <ul className="flex flex-col gap-3">
                <li><Link to="/features" className="text-text hover:text-accent transition-colors text-sm font-medium">Features</Link></li>
                <li><Link to="/solutions" className="text-text hover:text-accent transition-colors text-sm font-medium">Solutions</Link></li>
                <li><a href="https://zosterix.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition-colors text-sm font-medium">Zosterix Portal</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-text-h mb-5 uppercase text-[11px] tracking-wider font-display opacity-80">Resources</h4>
              <ul className="flex flex-col gap-3">
                <li><Link to="/user-guide" className="text-text hover:text-accent transition-colors text-sm font-medium">User Guide</Link></li>
                <li><Link to="/blog" className="text-text hover:text-accent transition-colors text-sm font-medium">Blog</Link></li>
                <li><Link to="/contact" className="text-text hover:text-accent transition-colors text-sm font-medium">Partnerships</Link></li>
              </ul>
            </div>
            <div className="flex flex-col max-sm:col-span-2">
              <h4 className="font-bold text-text-h mb-5 uppercase text-[11px] tracking-wider font-display opacity-80">Company</h4>
              <ul className="flex flex-col gap-3">
                <li><Link to="/about" className="text-text hover:text-accent transition-colors text-sm font-medium">About Us</Link></li>
                <li><Link to="/contact" className="text-text hover:text-accent transition-colors text-sm font-medium">Contact</Link></li>
                <li><Link to="/security" className="text-text hover:text-accent transition-colors text-sm font-medium">Security</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-slate-200 text-xs text-text-muted font-medium max-md:flex-col max-md:gap-4">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Phaenicio. Engineered for scientific discovery.
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
