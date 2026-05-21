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
  const closeMenu = () => setIsOpen(false);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full h-[78px] flex items-center justify-between px-[5%] z-50 bg-white/75 backdrop-blur-md border-b border-slate-200/60 shadow-[0_2px_15px_-3px_rgba(15,23,42,0.04)] transition-all duration-300">
      <Link to="/" className="flex items-center relative z-10" onClick={closeMenu}>
        <picture>
          <source media="(max-width: 768px)" srcSet={logoShort} />
          <img 
            src={logoLong} 
            alt="Phaenicio" 
            className="h-[52px] w-auto transition-all duration-300 hover:opacity-90 max-md:h-[42px] filter drop-shadow-sm" 
          />
        </picture>
      </Link>

      <div 
        id="mobile-navigation" 
        className={`flex gap-8 items-center relative z-10 
          max-md:fixed max-md:top-[78px] max-md:left-0 max-md:w-full max-md:h-[calc(100vh-78px)] 
          max-md:bg-white/98 max-md:backdrop-blur-xl max-md:flex-col max-md:justify-center 
          max-md:gap-8 max-md:transition-all max-md:duration-300 max-md:ease-out
          ${isOpen ? 'max-md:translate-x-0 max-md:opacity-100' : 'max-md:translate-x-full max-md:opacity-0 pointer-events-none md:pointer-events-auto'}`}
      >
        {[
          { to: "/", label: "Home", end: true },
          { to: "/about", label: "About" },
          { to: "/services", label: "Services" },
          { to: "/contact", label: "Contact" },
          { to: "/user-guide", label: "User Guide" }
        ].map((link) => (
          <NavLink 
            key={link.to}
            to={link.to} 
            end={link.end}
            className={({ isActive }) => `
              text-sm tracking-wide font-semibold transition-all duration-200 relative py-2
              max-md:text-xl
              ${isActive 
                ? 'text-accent font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent' 
                : 'text-text hover:text-text-h after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-200'}`}
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}
        
        <a 
          href="https://github.com/phaenicio" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm tracking-wide font-semibold transition-colors duration-200 text-text hover:text-accent flex items-center gap-1.5 max-md:text-xl"
          onClick={closeMenu}
        >
          <FiGithub className="text-base" />
          <span>GitHub</span>
        </a>

        {/* Try Zosterix Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1 bg-primary text-white text-sm font-semibold rounded-lg px-4 h-10 transition-all duration-200 hover:bg-primary-hover active:scale-[0.98] shadow-sm hover:shadow-[0_8px_16px_rgba(10,15,45,0.15)] max-md:h-[48px] max-md:text-base max-md:w-[240px] max-md:justify-center cursor-pointer"
          >
            <span>Try Zosterix</span>
            <FiChevronDown className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50 animate-fade-in max-md:relative max-md:right-auto max-md:left-0 max-md:w-[240px] max-md:mt-4 max-md:border-slate-100 max-md:shadow-none">
              <a 
                href="https://zosterix.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 px-4 py-3 text-sm text-text-h hover:bg-slate-50 transition-colors"
                onClick={() => { setIsDropdownOpen(false); closeMenu(); }}
              >
                <FiGlobe className="text-accent text-lg" />
                <div className="text-left">
                  <p className="font-semibold m-0">Zosterix Web Portal</p>
                  <p className="text-xs text-text-muted m-0">Research networking hub</p>
                </div>
              </a>
              <Link 
                to="/user-guide" 
                className="flex items-center gap-3 px-4 py-3 text-sm text-text-h hover:bg-slate-50 transition-colors"
                onClick={() => { setIsDropdownOpen(false); closeMenu(); }}
              >
                <FiBook className="text-accent text-lg" />
                <div className="text-left">
                  <p className="font-semibold m-0">User Documentation</p>
                  <p className="text-xs text-text-muted m-0">Quick starts & guides</p>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      <button 
        className="hidden max-md:flex items-center justify-center relative z-10 bg-slate-100/80 hover:bg-slate-200/80 text-text-h w-10 h-10 rounded-lg cursor-pointer transition-colors" 
        onClick={toggleMenu} 
        aria-label="Toggle menu" 
        aria-expanded={isOpen} 
        aria-controls="mobile-navigation"
      >
        {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
      </button>
    </nav>
  );
};

export default Navbar;
