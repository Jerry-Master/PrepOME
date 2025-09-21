import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
// import instagramLogo from '../assets/instagram.svg';
// import twitterLogo from '../assets/twitter.svg';
// import tiktokLogo from '../assets/tiktok.svg';
import { getIsMobile } from './utils'

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile());
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  return (
    <footer id="footer" className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {
            !isMobile && 
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Olimpiada Matemática</h3>
              <p className="text-primary-foreground/90 mb-4">Promoviendo el talento matemático en estudiantes de toda España desde hace más de 50 años.</p>
              {/* <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground/90 hover:text-[#f57c00] transition-colors duration-200" aria-label="Instagram">
                  <img src={instagramLogo} alt="Instagram" width="24" height="24" style={{ filter: "invert(1)" }}/>
                </a>
                <a href="#" className="text-primary-foreground/90 hover:text-[#f57c00] transition-colors duration-200" aria-label="Twitter">
                  <img src={twitterLogo} alt="Twitter" width="24" height="24" style={{ filter: "invert(1)" }}/>
                </a>
                <a href="#" className="text-primary-foreground/90 hover:text-[#f57c00] transition-colors duration-200" aria-label="TikTok">
                  <img src={tiktokLogo} alt="TikTok" width="24" height="24" style={{ filter: "invert(1)" }}/>
                </a>
              </div> */}
            </div>
          }
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Contacto</h3>
            <p className="flex items-start mb-3">
              <MapPin className="mt-1 mr-3 text-[#f57c00]" size={18} />
              <span className="text-primary-foreground/90">Av. de Fuente Nueva, s/n, Beiro, 18071 Granada</span>
            </p>
            <p className="flex items-center mb-3">
              <Mail className="mr-3 text-[#f57c00]" size={18} />
              <a href="mailto:pablomorales@ugr.es" className="text-primary-foreground/90 hover:text-[#f57c00] transition-colors duration-200">pablomorales@ugr.es</a>
            </p>
            {/* <p className="flex items-center">
              <Phone className="mr-3 text-[#f57c00]" size={18} />
              <span className="text-primary-foreground/90">+34 900 123 456</span>
            </p> */}
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/90 mb-4 md:mb-0">
              © 2025 Jose Pérez Cano. Todos los derechos reservados.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/90 hover:text-[#f57c00] transition-colors duration-200 text-sm">Política de privacidad</a>
              <a href="#" className="text-primary-foreground/90 hover:text-[#f57c00] transition-colors duration-200 text-sm">Términos y condiciones</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
