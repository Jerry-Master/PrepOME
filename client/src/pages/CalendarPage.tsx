import React from 'react';
import { ExternalLink } from 'lucide-react';
import HashLink from '@/components/HashLink';

interface LinkProps {
  url: string;
  description: string;
  external: boolean;
}

// Componente para mostrar un evento del calendario
interface EventProps {
  date: string;
  title: string;
  description: string;
  location?: string;
  link?: LinkProps;
  important?: boolean;
  idx?: string;
}

const CalendarEvent: React.FC<EventProps> = ({ date, title, description, location, link, important = false, idx }) => {
  return (
    <div id={idx} className={`scroll-mt-20 border-l-4 ${important ? 'border-primary' : 'border-muted'} pl-4 py-4`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h3 className="font-heading font-bold text-xl">{title}</h3>
        <span className={`text-sm font-medium ${important ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'} px-3 py-1 rounded-full mb-2 md:mb-0`}>
          {date}
        </span>
      </div>
      <p className="text-muted-foreground mb-2">{description}</p>
      {location && (
        <p className="text-sm text-muted-foreground">
          <span className="font-medium">Ubicación:</span> {location}
        </p>
      )}
      {link && link.external && (
        <a
          href={link.url} target="_blank"
          rel="noopener noreferrer" 
          className="text-sm text-primary hover:underline flex items-center"
        >
          {link.description}
          <ExternalLink size={12} className="ml-1" />
        </a>
      )}
      {link && !link.external && (
        <HashLink
          to={link.url} 
          className="text-sm text-primary hover:underline flex items-center"
        >
          {link.description}
          <ExternalLink size={12} className="ml-1" />
        </HashLink>
      )}
    </div>
  );
};

const CalendarPage: React.FC = () => {
  // Datos de los eventos
  const events = [
    {
      date: 'Septiembre 2025 - Marzo 2026',
      title: 'Sesiones de preparación',
      description: 'Se proporcionará un calendario más detallado de las sesiones de preparación. De manera tentativa, habrá sesiones todos los sábados, descansando un sábado cada mes.',
      link: {
        url: "/#subscription",
        description: "Suscríbete para estar informado",
        external: false
      },
      location: "Facultad de Ciencias UGR",
      important: true
    },
    {
      date: 'Enero 2026',
      title: 'Fase local de la OME',
      description: 'La prueba consta de dos exámenes de tres horas y medias con tres problemas cada uno.',
      link: {
        url: "https://www.rsme.es/olimpiada-matematica-espanola/problemas-propuestos-y-resultados/",
        description: "Ver problemas años anteriores",
        external: true
      },
      important: true,
      idx: "local"
    },
    {
      date: 'Febrero 2026',
      title: 'Fase regional: Olimpiada Matemática Andaluza',
      description: 'La prueba consta de cuatro problemas a realizar en cuatro horas.',
      link: {
        url: "https://web.ujaen.es/eventos/omatematica/oma/",
        description: "Ver edición anterior",
        external: true
      },
      location: 'Por decidir.',
      important: true,
      idx: "autonomico"
    },
    {
      date: 'Marzo - Mayo 2026',
      title: 'Fase nacional de la OME',
      description: 'Al igual que en la fase local se compone de dos exámenes de tres problemas que deberán resolverse en tres horas y media cada uno.',
      location: 'Por decidir.',
      link: {
        url: "http://ome2025.uniovi.es/",
        description: "Ver edición anterior",
        external: true
      },
      important: true,
      idx: "nacional"
    }
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 id="calendario" className="font-heading font-bold text-3xl text-foreground mb-6">Calendario Olimpiada Matemática 2025-2026</h1>
      
      <p className="text-muted-foreground mb-8">A continuación, presentamos las fechas más importantes relacionadas con la Olimpiada Matemática para el curso 2025-2026. Las fechas exactas pueden estar sujetas a pequeñas variaciones, que serán comunicadas con antelación.</p>
      
      <div className="grid grid-cols-1 gap-y-6 mb-12">
        {events.map((event, index) => (
          <CalendarEvent 
            key={index}
            date={event.date}
            title={event.title}
            description={event.description}
            location={event.location}
            link={event.link}
            important={event.important}
            idx={event.idx}
          />
        ))}
      </div>
      
      <div className="bg-muted p-6 rounded-lg">
        <h2 className="font-heading font-bold text-xl mb-4">Información adicional</h2>
        <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
          <li>Las fechas específicas de la Fase Local pueden variar ligeramente según la comunidad autónoma.</li>
          <li>La participación en la Fase Nacional está sujeta a los criterios de selección establecidos por cada comunidad autónoma.</li>
          <li>La selección para la Olimpiada Internacional se realizará entre los finalistas de la Fase Nacional.</li>
        </ul>
        <p className="text-muted-foreground">Para cualquier duda relacionada con las fechas y ubicaciones, por favor contacta con la organización a través del <a href="mailto:olimpiada@ugr.es" className="text-primary hover:underline">correo electrónico</a> o el formulario de contacto.</p>
      </div>
    </div>
  );
};

export default CalendarPage;