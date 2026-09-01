import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import HashLink from './HashLink';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section flex items-center justify-center" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://raw.githubusercontent.com/Jerry-Master/PrepOME/main/client/src/assets/hero-section.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '70vh'
    }}>
      <div className="text-center text-white px-4 md:px-0">
        <h1 className="font-heading font-bold text-3xl md:text-5xl mb-2 md:mb-4">¡Prepárate para la Olimpiada de Matemáticas (curso 2026-2027)!</h1>
        <p className="text-lg md:text-xl mb-6">Sesiones semanales de resolución de problemas para fortalecer tus habilidades.</p>
        <p className="text-lg md:text-xl mb-6">Consulta<HashLink 
                to={'/quien-es#quienes-somos'} 
                className="no-underline hover:underline inline-flex items-center ml-1"
              >
                quiénes somos
                <ExternalLink size={12} className="ml-1" />
              </HashLink>
              y <HashLink 
                to={'/calendario#calendario'} 
                className="no-underline hover:underline inline-flex items-center ml-1"
              >
               nuestro calendario
                <ExternalLink size={12} className="ml-1" />
              </HashLink>
              , y
              <HashLink
                to={'/#subscription'}
                className="no-underline hover:underline inline-flex items-center ml-1"
              >
                facilítanos tu e-mail para mantenerte informado.
                <ExternalLink size={12} className="ml-1" />
              </HashLink>
        </p>
        <HashLink to="/#subscription">
          <Button
            className="bg-[#f57c00] hover:bg-[#ffad42] text-white font-bold py-3 px-6 rounded-lg shadow-lg"
          >
            Mantente informado
          </Button>
        </HashLink>
      </div>
    </section>
  );
};

export default HeroSection;
