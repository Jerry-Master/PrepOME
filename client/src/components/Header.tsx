import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import HashLink from './HashLink';
import logoOme from '../assets/logoOMEgrande-276x300.jpg';
import logoUgr from '../assets/ugr-horizontal-color.svg';
import logoUgrMobile from '../assets/ugr-mobile.svg';
import { getIsMobile } from './utils'

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(getIsMobile());

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Close mobile menu on window resize
      if (!isMobile && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen, isMobile]);

  // Define navigation links - usando el formato adecuado para el enrutamiento basado en hash
  const navLinks = [
    { text: '¿Qué es?', href: '/que-es' },
    { text: '¿Quiénes somos?', href: '/quien-es' },
    { text: 'Calendario', href: '/calendario' },
    { text: 'Material', href: '/material' },
    { text: 'Enlaces', href: '/enlaces' },
    { text: 'Contacto', href: '#footer' }, // Esto es un enlace de ancla, por lo que se mantiene como #
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <HashLink to="/" className="flex items-center gap-4">
            <img 
              src={logoOme}
              alt="Olimpiada Matemática Española" 
              className="h-14"
            />
            {isMobile ? 
              <img 
                src={logoUgrMobile}
                alt="Universidad de Granada" 
                className="h-14"
              /> :
              <img 
                src={logoUgr}
                alt="Universidad de Granada" 
                className="h-14"
              />
            }
          </HashLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              link.href === '#footer' ? (
                <a
                  key={index}
                  href={link.href}
                  className="font-heading font-medium text-neutral-dark hover:text-primary transition-colors duration-200"
                >
                  {link.text}
                </a>
              ) : (
                <HashLink
                  key={index}
                  to={link.href}
                  className="font-heading font-medium text-neutral-dark hover:text-primary transition-colors duration-200"
                >
                  {link.text}
                </HashLink>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-neutral-dark focus:outline-none"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} pt-2 pb-4`}>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              link.href === '#footer' ? (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading font-medium py-2 text-neutral-dark hover:text-primary transition-colors duration-200"
                >
                  {link.text}
                </a>
              ) : (
                <HashLink
                  key={index}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading font-medium py-2 text-neutral-dark hover:text-primary transition-colors duration-200"
                >
                  {link.text}
                </HashLink>
              )
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
