import React from 'react';
import HeroSection from '../components/HeroSection';
import SubscriptionBanner from '../components/SubscriptionBanner';
import HashLink from '@/components/HashLink';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <SubscriptionBanner />
      
      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">¿Qué es la Olimpiada Matemática?</h2>
              <p className="text-muted-foreground mb-4">La Olimpiada Matemática Española (OME) es una competición de resolución de problemas matemáticos dirigida a estudiantes de bachillerato (y últimos cursos de la ESO).</p>
              <p className="text-muted-foreground">El objetivo principal es estimular el estudio de las matemáticas entre los jóvenes y servir como medio para la detección y el estímulo del talento matemático.</p>
              <HashLink to="/que-es" className="inline-block mt-4 text-primary font-semibold hover:underline">Leer más →</HashLink>
            </div>
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Beneficios de participar</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Desarrollo de habilidades de resolución de problemas</li>
                <li>Reconocimiento académico a nivel nacional</li>
                <li>Posibilidad de representar a España en competiciones internacionales</li>
                <li>Premios y becas para los mejores clasificados</li>
              </ul>
              <HashLink to="/que-es#beneficios" className="inline-block mt-4 text-primary font-semibold hover:underline">Ver todos los beneficios →</HashLink>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Events */}
      <section className="bg-muted py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-foreground text-center mb-12">Próximas fechas importantes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary text-primary-foreground text-center py-3">
                <span className="font-heading font-bold text-lg">Enero 2027*</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-2">Fase Local</h3>
                <p className="text-muted-foreground">Primera fase de la olimpiada.</p>
                <HashLink to="/calendario#local" className="inline-block mt-2 text-primary font-semibold text-sm hover:underline">Más información</HashLink>
              </div>
            </div>
            
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary text-primary-foreground text-center py-3">
                <span className="font-heading font-bold text-lg">Febrero 2027*</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-2">Fase Autonómica</h3>
                <p className="text-muted-foreground">Clasificados compiten a nivel de comunidad autónoma.</p>
                <HashLink to="/calendario#autonomico" className="inline-block mt-2 text-primary font-semibold text-sm hover:underline">Más información</HashLink>
              </div>
            </div>
            
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary text-primary-foreground text-center py-3">
                <span className="font-heading font-bold text-lg">Marzo - Mayo 2027*</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-2">Fase Nacional</h3>
                <p className="text-muted-foreground">Final nacional con los mejores clasificados del país.</p>
                <HashLink to="/calendario#nacional" className="inline-block mt-2 text-primary font-semibold text-sm hover:underline">Más información</HashLink>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">* Fechas tentativas, pendientes de confirmación oficial.</p>

          <div className="text-center mt-10">
            <HashLink to="/calendario" className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md">
              Ver calendario completo
            </HashLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
