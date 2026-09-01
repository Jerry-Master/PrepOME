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
  speaker?: string;
}

const CalendarEvent: React.FC<EventProps> = ({ date, title, description, location, link, important = false, idx, speaker }) => {
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
      {speaker && (
        <p className="text-sm text-muted-foreground text-right mt-2">
          <span className="font-medium">{/\sy\s|,/.test(speaker) ? 'Ponentes:' : 'Ponente:'}</span> {speaker}
        </p>
      )}
    </div>
  );
};

const CalendarPage: React.FC = () => {
  // Datos de los eventos
  const facultadCiencias = "Facultad de Ciencias UGR (ubicación orientativa, puede cambiar ligeramente)";

  const events = [
    {
      date: '3 octubre 2026',
      title: 'Sesión de preparación: Introducción I',
      description: 'Notación y fundamentos: se introducirán las convenciones y bases necesarias para abordar los problemas olímpicos.',
      location: facultadCiencias,
      important: true,
      speaker: 'Jose y Pablo'
    },
    {
      date: '10 octubre 2026',
      title: 'Sesión de preparación: Introducción II',
      description: 'Estrategias comunes y técnicas de redacción de soluciones.',
      location: facultadCiencias,
      important: true,
      speaker: 'Antonio'
    },
    {
      date: '17 octubre 2026',
      title: 'Sesión de preparación: Combinatoria',
      description: 'Invariantes y coloración.',
      location: facultadCiencias,
      important: true
    },
    {
      date: '24 octubre 2026',
      title: 'Sesión de preparación: Álgebra I',
      description: 'Polinomios e inducción.',
      location: facultadCiencias,
      important: true
    },
    {
      date: '31 octubre 2026',
      title: 'Sesión de preparación: Geometría I',
      description: '"Angle chasing".',
      location: facultadCiencias,
      important: true
    },
    {
      date: '7 noviembre 2026',
      title: 'Sesión de preparación: Teoría de Números I',
      description: 'Teoremas principales.',
      location: facultadCiencias,
      important: true
    },
    {
      date: '14 noviembre 2026',
      title: 'Sesión de preparación: Álgebra II',
      description: 'Desigualdades.',
      location: facultadCiencias,
      important: true
    },
    {
      date: '21 noviembre 2026',
      title: 'Sesión de preparación: Geometría II',
      description: 'Geometría computacional.',
      location: facultadCiencias,
      important: true
    },
    {
      date: '28 noviembre 2026',
      title: 'Sesión de preparación: Álgebra III',
      description: 'Ecuaciones funcionales.',
      location: facultadCiencias,
      important: true
    },
    {
      date: '5 diciembre 2026',
      title: 'Sesión de preparación: Teoría de Números II',
      description: 'Residuos cuadráticos y "Lifting The Exponent lemma".',
      location: facultadCiencias,
      important: true
    },
    {
      date: '12 diciembre 2026',
      title: 'Sesión de preparación: Resolución de problemas variados',
      description: 'Resolución de problemas variados combinando los temas vistos hasta el momento.',
      location: facultadCiencias,
      important: true,
      speaker: 'Víctor'
    },
    {
      date: '19 diciembre 2026',
      title: 'Sesión de preparación: Resolución de problemas variados',
      description: 'Última sesión de repaso antes del simulacro de la fase local.',
      location: facultadCiencias,
      important: true
    },
    {
      date: 'Enero 2027 (fecha tentativa)',
      title: 'Simulacro de la fase local',
      description: 'Examen de práctica.',
      location: facultadCiencias,
      important: true
    },
    {
      date: 'Enero 2027 (fecha tentativa)',
      title: 'Fase local de la OME',
      description: 'Se convocará a todos los participantes.',
      link: {
        url: "https://www.rsme.es/olimpiada-matematica-espanola/problemas-propuestos-y-resultados/",
        description: "Ver problemas años anteriores",
        external: true
      },
      location: facultadCiencias,
      important: true,
      idx: "local"
    },
    {
      date: 'Febrero 2027 (fecha tentativa)',
      title: 'Fase regional: Olimpiada Matemática Andaluza',
      description: 'La prueba consta de cuatro problemas a realizar en cuatro horas.',
      link: {
        url: "https://web.ujaen.es/eventos/omatematica/oma/",
        description: "Ver edición anterior",
        external: true
      },
      location: 'Sede por confirmar (Andalucía)',
      important: true,
      idx: "autonomico"
    },
    {
      date: 'Marzo 2027 (fecha tentativa)',
      title: 'Fase nacional de la OME',
      description: 'Al igual que en la fase local se compone de dos exámenes de tres problemas que deberán resolverse en tres horas y media cada uno.',
      location: 'Sede por confirmar',
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
      <h1 id="calendario" className="font-heading font-bold text-3xl text-foreground mb-6">Calendario Olimpiada Matemática 2026-2027</h1>

      <p className="text-muted-foreground mb-8">A continuación, presentamos las fechas más importantes relacionadas con la Olimpiada Matemática para el curso 2026-2027. Las fechas exactas pueden estar sujetas a pequeñas variaciones, que serán comunicadas con antelación.</p>
      
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
            speaker={event.speaker}
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
        <p className="text-muted-foreground">Para cualquier duda relacionada con las fechas y ubicaciones, por favor contacta con la organización a través del <a href="mailto:pablomorales@ugr.es" className="text-primary hover:underline">correo electrónico</a> o el formulario de contacto.</p>
      </div>
    </div>
  );
};

export default CalendarPage;