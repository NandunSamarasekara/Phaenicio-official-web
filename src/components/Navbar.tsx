import { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiGlobe, FiBook, FiGithub } from 'react-icons/fi';
import logoLong from '../assets/phaenicio-long.svg';
import logoShort from '../assets/phaenicio.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsDropdownOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
    { to: "/user-guide", label: "User Guide" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[78px] flex items-center justify-between px-[5%] lg:px-12 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm transition-all duration-300">
      
      {/* Logo Section */}
      <Link 
        to="/" 
        className="flex items-center relative z-20 outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm" 
        onClick={closeMenu}
      >
        <picture>
          <source media="(max-width: 768px)" srcSet={logoShort} />
          <img 
            src={logoLong} 
            alt="Phaenicio" 
            className="h-[46px] w-auto transition-transform duration-300 hover:scale-[1.02] max-md:h-[38px] drop-shadow-sm" 
          />
        </picture>
      </Link>

      {/* Navigation Links & Actions */}
      <div 
        id="mobile-navigation" 
        className={`flex gap-8 items-center relative z-10 
          max-md:fixed max-md:top-0 max-md:left-0 max-md:w-full max-md:h-screen 
          max-md:bg-white/95 max-md:backdrop-blur-xl max-md:flex-col max-md:justify-center 
          max-md:gap-6 max-md:transition-all max-md:duration-400 max-md:ease-in-out
          ${isOpen 
            ? 'max-md:translate-y-0 max-md:opacity-100' 
            : 'max-md:-translate-y-4 max-md:opacity-0 pointer-events-none md:pointer-events-auto md:opacity-100 md:translate-y-0'}`}
      >
        {/* Main Links */}
        <div className="flex gap-8 items-center max-md:flex-col max-md:gap-6">
          {navLinks.map((link) => (
            <NavLink 
              key={link.to}
              to={link.to} 
              end={link.end}
              className={({ isActive }) => `
                text-[15px] font-medium tracking-wide transition-colors duration-200 relative py-2 outline-none
                max-md:text-2xl max-md:font-semibold group
                ${isActive ? 'text-accent' : 'text-text hover:text-text-h'}
              `}
              onClick={closeMenu}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {/* Modern animated underline */}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent rounded-full transition-transform duration-300 origin-center 
                    ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>
        
        {/* Divider for Desktop */}
        <div className="hidden md:block w-px h-6 bg-slate-200" />

        {/* GitHub Link */}
        <a 
          href="https://github.com/phaenicio" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[15px] font-medium transition-colors duration-200 text-text hover:text-accent flex items-center gap-2 max-md:text-xl max-md:mt-4 outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-2 py-1"
          onClick={closeMenu}
        >
          <FiGithub className="text-lg" />
          <span>GitHub</span>
        </a>

        {/* Call to Action Dropdown */}
        <div className="relative max-md:mt-4" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
            className="flex items-center gap-2 bg-primary text-white text-[15px] font-medium rounded-lg px-5 h-10 transition-all duration-200 hover:bg-primary-hover active:scale-[0.97] shadow-sm hover:shadow-md outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary max-md:h-12 max-md:text-lg max-md:w-[260px] max-md:justify-center cursor-pointer"
          >
            <span>Try Zosterix</span>
            <FiChevronDown className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-64 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 origin-top-right max-md:relative max-md:right-auto max-md:left-0 max-md:w-[260px] max-md:mt-4 max-md:shadow-none max-md:bg-slate-50/80 max-md:border-none">
              <a 
                href="https://zosterix.phaenicio.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group"
                onClick={closeMenu}
              >
                <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all">
                  <FiGlobe className="text-accent text-lg" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-text-h text-sm m-0">Zosterix Web Portal</p>
                  <p className="text-xs text-text-muted mt-0.5 mb-0">Research networking hub</p>
                </div>
              </a>
              <Link 
                to="/user-guide" 
                className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group"
                onClick={closeMenu}
              >
                <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all">
                  <FiBook className="text-accent text-lg" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-text-h text-sm m-0">User Documentation</p>
                  <p className="text-xs text-text-muted mt-0.5 mb-0">Quick starts & guides</p>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button 
        className="hidden max-md:flex items-center justify-center relative z-20 bg-slate-50 hover:bg-slate-100 text-text-h w-11 h-11 rounded-lg cursor-pointer transition-colors border border-slate-200/50 outline-none focus-visible:ring-2 focus-visible:ring-accent" 
        onClick={toggleMenu} 
        aria-label={isOpen ? "Close menu" : "Open menu"} 
        aria-expanded={isOpen} 
        aria-controls="mobile-navigation"
      >
        {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
      </button>
    </nav>
  );
};

export default Navbar;