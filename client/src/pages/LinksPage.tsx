import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LinkItemProps {
  title: string;
  description: string;
  url: string;
  category: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ title, description, url }) => {
  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-card">
      <h3 className="font-heading font-bold text-lg mb-2 flex items-center">
        {title}
        <a href={url} target="_blank" rel="noopener noreferrer" className="ml-2 text-primary hover:text-primary/80">
          <ExternalLink size={16} />
        </a>
      </h3>
      <p className="text-muted-foreground text-sm mb-3">{description}</p>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-sm text-primary hover:underline flex items-center"
      >
        Visitar sitio web
        <ExternalLink size={12} className="ml-1" />
      </a>
    </div>
  );
};

const LinksPage: React.FC = () => {
  // Datos de los enlaces por categoría
  const links: LinkItemProps[] = [
    {
      title: "Real Sociedad Matemática Española (RSME)",
      description: "Organización que coordina la Olimpiada Matemática Española a nivel nacional.",
      url: "https://www.rsme.es/",
      category: "national"
    },
    {
      title: "International Mathematical Olympiad (IMO)",
      description: "Sitio oficial de la Olimpiada Internacional de Matemáticas, competición anual para estudiantes preuniversitarios.",
      url: "https://www.imo-official.org/",
      category: "international"
    },
    {
      title: "Art of Problem Solving (AOPS)",
      description: "Comunidad en línea con recursos, foros y cursos para la preparación de olimpiadas matemáticas.",
      url: "https://artofproblemsolving.com/",
      category: "resources"
    },
    {
      title: "RSME Olimpiada",
      description: "Sección específica de la RSME dedicada a las Olimpiadas Matemáticas, con problemas y resultados de ediciones anteriores.",
      url: "https://www.rsme.es/actividades/olimpiada-matematica-espanola/",
      category: "national"
    },
    {
      title: "Estalmat",
      description: "Proyecto para la detección y el estímulo del talento precoz en matemáticas.",
      url: "https://www.estalmat.org/",
      category: "national"
    },
    {
      title: "Olimpiada Matemática Iberoamericana",
      description: "Competición regional que reúne a estudiantes de países de Iberoamérica.",
      url: "https://www.rsme.es/olimpiada-iberoamericana-de-matematicas/",
      category: "international"
    },
    {
      title: "IMO Compendium",
      description: "Recopilación de problemas y soluciones de olimpiadas internacionales de matemáticas.",
      url: "https://www.imomath.com/",
      category: "resources"
    },
    {
      title: "European Girls' Mathematical Olympiad",
      description: "Olimpiada matemática internacional para estudiantes femeninas.",
      url: "https://www.egmo.org/",
      category: "international"
    },
    {
      title: "Apuntes UGR",
      description: "Recursos de preparación de olimpiadas (Pascual Jara).",
      url: "https://wpd.ugr.es/~olimpiada/index.php",
      category: "resources"
    },
    {
      title: "Competición Matemática Mediterránea",
      description: "Competición europea a la que solo se accede por invitación.",
      url: "https://mural.uv.es/rorunu/cmm/",
      category: "international"
    },
    {
      title: "Math Summer Camp",
      description: "Campamento de verano de matemáticas en Barcelona.",
      url: "https://www.apotema.cat/convocatoria-math-summer-camp-2024/",
      category: "camps"
    },
    {
      title: "PROMYS",
      description: "Campamento de verano de matemáticas en Reino Unido.",
      url: "https://promys.org/",
      category: "camps"
    }
  ];

  // Filtrar enlaces por categoría
  const nationalLinks = links.filter(link => link.category === 'national');
  const internationalLinks = links.filter(link => link.category === 'international');
  const resourceLinks = links.filter(link => link.category === 'resources');
  const campsLinks = links.filter(link => link.category === 'camps');

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-heading font-bold text-3xl text-foreground mb-6">Enlaces de interés</h1>
      
      <p className="text-muted-foreground mb-8">
        A continuación encontrarás una colección de enlaces a sitios web relacionados con las olimpiadas matemáticas y el estudio avanzado de las matemáticas. Estos recursos pueden ser de gran utilidad para tu preparación y para ampliar tus conocimientos.
      </p>
      
      {/* Organizaciones nacionales */}
      <section className="mb-10">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Organizaciones nacionales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nationalLinks.map((link, index) => (
            <LinkItem 
              key={index}
              title={link.title}
              description={link.description}
              url={link.url}
              category={link.category}
            />
          ))}
        </div>
      </section>
      
      {/* Olimpiadas internacionales */}
      <section className="mb-10">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Olimpiadas internacionales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {internationalLinks.map((link, index) => (
            <LinkItem 
              key={index}
              title={link.title}
              description={link.description}
              url={link.url}
              category={link.category}
            />
          ))}
        </div>
      </section>
      
      {/* Recursos y plataformas de aprendizaje */}
      <section className="mb-10">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Recursos y plataformas de aprendizaje</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resourceLinks.map((link, index) => (
            <LinkItem 
              key={index}
              title={link.title}
              description={link.description}
              url={link.url}
              category={link.category}
            />
          ))}
        </div>
      </section>

      {/* Campamentos */}
      <section className="mb-10">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Campamentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {campsLinks.map((link, index) => (
            <LinkItem 
              key={index}
              title={link.title}
              description={link.description}
              url={link.url}
              category={link.category}
            />
          ))}
        </div>
      </section>
      
      {/* Nota informativa */}
      <div className="bg-muted p-6 rounded-lg">
        <h3 className="font-heading font-bold text-lg mb-2">¿Conoces algún otro recurso útil?</h3>
        <p className="text-muted-foreground">
          Si conoces algún otro sitio web o recurso que pueda ser de interés para la comunidad de las olimpiadas matemáticas, no dudes en compartirlo con nosotros a través del <a href="mailto:pablomorales@ugr.es" className="text-primary hover:underline">correo electrónico</a>. Valoramos tus sugerencias para mejorar esta sección.
        </p>
      </div>
    </div>
  );
};

export default LinksPage;