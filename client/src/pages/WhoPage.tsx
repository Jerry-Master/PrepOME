import React from 'react';
import { ExternalLink } from 'lucide-react';
import HashLink from '../components/HashLink';
import ImageWithDescription from '../components/ImageWithDescription';
import pablo from '../assets/pablo_morales.jpg'
import jose from '../assets/jose.jpg'

const AboutPage: React.FC = () => {
  return (
    <section id="quienes-somos" className="text-muted-foreground mb-4">
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-heading font-bold text-3xl text-foreground mb-6">¿Quiénes somos?</h1>
      
      <div className="prose max-w-none">
        <p className="text-muted-foreground mb-4">
        Somos un grupo de <strong>antiguos participantes</strong> en las olimpiadas matemáticas que actualmente trabajamos o estudiamos en Granada en diferentes ámbitos científico-técnicos. Puedes saber más sobre nosotros<HashLink 
                to={'#nosotros'} 
                className="no-underline hover:underline inline-flex items-center ml-1"
              >
                aquí
                <ExternalLink size={12} className="ml-1" />
              </HashLink>
        </p>
        
        <p className="text-muted-foreground mb-4">
        Nuestra propia experiencia nos ha demostrado que, como en tantas otras cosas, la participación en las olimpiadas es mucho <strong>más gratificante si se hace acompañado.</strong> Acompañado por un grupo de mentores o guías que conozcan la disciplina, así como por otros compañeros que compartan nuestras inquietudes.
        </p>

        <p className="text-muted-foreground mb-4">
        Motivados por ello, vamos a ofrecer sesiones de preparación para la olimpiada matemática durante el curso 2025-2026. Comenzaremos al principio del curso (septiembre de 2025), y continuaremos hasta la fase nacional de la olimpiada (alrededor de marzo o abril de 2026). Para los seleccionados a nivel nacional, existe una preparación específica de cara a la fase internacional. Puedes encontrar un calendario aproximado<HashLink 
                to={'/calendario'} 
                className="no-underline hover:underline inline-flex items-center ml-1"
              >
                aquí
                <ExternalLink size={12} className="ml-1" />
              </HashLink>
        </p>

        <p className="text-muted-foreground mb-4">
        Por norma general, las sesiones serán los sábados por la mañana, tendrán una duración de tres horas, y se realizarán en la facultad de ciencias de la Universidad de Granada. Consistirán en la resolución de problemas de otras ediciones, aprendiendo los resultados y técnicas más útiles en este tipo de problemas. Estas sesiones no tienen ningún coste económico para los participantes.
        </p>

        <p className="text-muted-foreground mb-4">
        <strong>¡Suscríbete<HashLink 
                to={'/#subscription'} 
                className="no-underline hover:underline inline-flex items-center ml-1"
              >
                aquí
                <ExternalLink size={12} className="ml-1" />
              </HashLink>, no te pierdas las notificaciones más importantes!</strong>
        </p>        
      </div>

      <h1 id="nosotros" className="scroll-mt-20 font-heading font-bold text-3xl text-foreground mb-6">El equipo</h1>
      <div>
        <ImageWithDescription
          imageUrl={pablo}
          altText="Pablo Morales Álvarez"
          description="Pablo Morales Álvarez es profesor e investigador en el departamento de Estadística e Investigación Operativa de la Universidad de Granada. Pablo obtuvo dos medallas de bronce en la fase nacional de la olimpiada matemática, en 2009 y 2010. Después estudió el grado en Matemáticas, y se especializó en modelos probabilísticos de inteligencia artificial. Durante su carrera ha tenido la suerte de conocer diversos centros de investigación en España, Estados Unidos (Northwestern University) y Reino Unido (Universidad de Cambridge y Microsoft Research Cambridge). Además de las matemáticas y la informática, a Pablo le encanta la naturaleza, la montaña, y pasar tiempo con su familia y amigos."
          quote="“Creo que las olimpiadas matemáticas son una vía estupenda para conocer a otras personas con inquietudes similares y empezar a plantearse una trayectoria profesional en ámbitos científico-técnicos”"
        />
        
        <ImageWithDescription
          imageUrl={jose}
          altText="Jose Pérez Cano"
          description="Jose Pérez Cano es un ingeniero de visión artificial de una empresa coreana. En 2018 ganó varias medallas en olimpiadas de física y matemáticas y una mención de honor en la IMO. Estudió matemáticas y ciencia e ingeniería de datos en el CFIS en Barcelona mientras mantenía su afición a las olimpiadas. Después investigó en la Universidad de Granada y la Politécnica de Cataluña antes de dar el salto a la industria. Su nombre aparece en los créditos de la película nominada a los Oscars 2024: La Sociedad de la nieve en la sección de Machine Learning. Además de trabajar también le gusta el gimnasio, la lectura, las películas, cocinar y viajar."
        />
      </div>
    </div>
    </section>
  );
};

export default AboutPage;