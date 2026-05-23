import { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX, FiGithub } from 'react-icons/fi';
import logoLong from '../assets/phaenicio-long.svg';
import logoShort from '../assets/phaenicio.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close menu on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center py-4 md:py-6 px-[5%] pointer-events-none" ref={menuRef}>
      {/* Ambient Radial Gradient behind navbar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] md:w-[600px] h-[80px] md:h-[120px] bg-primary/5 rounded-full blur-[40px] md:blur-[60px] pointer-events-none -z-10" />

      <nav className="pointer-events-auto w-full max-w-5xl h-14 md:h-16 flex items-center justify-between px-6 bg-white/70 backdrop-blur-md border border-white/20 rounded-full shadow-sm shadow-slate-100/50 transition-all duration-300 relative">
        
        {/* Logo Section */}
        <Link 
          to="/" 
          className="flex items-center relative z-20 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full" 
          onClick={closeMenu}
        >
          <picture className="flex items-center">
            <source media="(max-width: 768px)" srcSet={logoShort} />
            <img 
              src={logoLong} 
              alt="Phaenicio" 
              className="h-9 md:h-10 w-auto transition-transform duration-300 hover:scale-[1.02] drop-shadow-sm" 
            />
          </picture>
        </Link>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex gap-1 items-center bg-slate-900/5 p-1 rounded-full border border-slate-900/[0.03]">
          {navLinks.map((link) => (
            <NavLink 
              key={link.to}
              to={link.to} 
              end={link.end}
              className={({ isActive }) => `
                text-xs md:text-sm font-medium tracking-wide transition-all duration-200 px-4 py-1.5 rounded-full outline-none
                ${isActive 
                  ? 'bg-white text-primary shadow-sm font-semibold' 
                  : 'text-slate-600 hover:text-slate-950 hover:bg-white/40'}
              `}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        
        {/* Actions for Desktop */}
        <div className="hidden md:flex gap-4 items-center">
          {/* GitHub Link */}
          <a 
            href="https://github.com/phaenicio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-950 transition-all duration-200 p-2 rounded-full hover:bg-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-primary"
            title="GitHub"
          >
            <FiGithub className="text-lg" />
          </a>

          {/* Direct CTA */}
          <a 
            href="https://zosterix.phaenicio.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-neutral-dark text-white text-xs font-semibold rounded-full px-5 h-9 transition-all duration-200 hover:bg-primary hover:scale-[1.02] active:scale-[0.98] shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary cursor-pointer font-display"
          >
            Try Zosterix
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="hidden max-md:flex items-center justify-center relative z-20 bg-slate-50 hover:bg-slate-100 text-slate-950 w-9 h-9 rounded-full cursor-pointer transition-colors border border-slate-200/50 outline-none focus-visible:ring-2 focus-visible:ring-primary" 
          onClick={toggleMenu} 
          aria-label={isOpen ? "Close menu" : "Open menu"} 
          aria-expanded={isOpen} 
        >
          {isOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
        </button>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 mt-2 bg-white/90 backdrop-blur-xl border border-slate-200/50 rounded-3xl shadow-xl shadow-slate-100/40 p-6 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto">
            <div className="flex flex-col gap-1.5 items-center">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.to}
                  to={link.to} 
                  end={link.end}
                  className={({ isActive }) => `
                    text-base font-semibold transition-all duration-200 px-5 py-2.5 rounded-full outline-none w-full text-center
                    ${isActive ? 'bg-primary text-white' : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/60'}
                  `}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            
            <div className="h-px bg-slate-100 w-full" />
            
            <div className="flex flex-col gap-3 items-center w-full">
              {/* GitHub Link */}
              <a 
                href="https://github.com/phaenicio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors duration-200 text-slate-600 hover:text-slate-950 flex items-center justify-center gap-2 w-full py-2 rounded-full hover:bg-slate-50"
                onClick={closeMenu}
              >
                <FiGithub className="text-lg" />
                <span>GitHub</span>
              </a>
              
              {/* Try Zosterix CTA */}
              <a 
                href="https://zosterix.phaenicio.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-neutral-dark hover:bg-primary text-white text-sm font-semibold rounded-full w-full py-3 transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer font-display"
                onClick={closeMenu}
              >
                Try Zosterix
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;