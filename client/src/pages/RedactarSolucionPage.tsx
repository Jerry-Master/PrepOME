import React from 'react';
import { ExternalLink } from 'lucide-react';
import HashLink from '@/components/HashLink';
import MathText from '@/components/MathText';

const t = String.raw;
const IMG = 'material/redactar/';

// ---------- Componentes de maquetación ----------

const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 mb-12">
    <h2 className="font-heading font-bold text-2xl text-foreground mb-4">{title}</h2>
    {children}
  </section>
);

const Prose: React.FC<{ children: string }> = ({ children }) => (
  <MathText className="text-slate-800">{children}</MathText>
);

const Problem: React.FC<{ children: string }> = ({ children }) => (
  <div className="border rounded-lg bg-muted p-4 mb-4">
    <MathText className="[&>p:last-child]:mb-0">{children}</MathText>
  </div>
);

const Solution: React.FC<{ kind: 'bad' | 'good'; title?: string; children: React.ReactNode }> = ({ kind, title, children }) => {
  const bad = kind === 'bad';
  return (
    <div className="mb-6">
      <p className="font-bold mb-2 text-foreground">
        {title ?? (bad ? 'Cómo no escribir la solución:' : 'Cómo escribir la solución:')}
      </p>
      <div className={`border-l-4 rounded-r-lg p-4 ${bad ? 'border-red-400 bg-red-50' : 'border-green-500 bg-green-50'} [&>p:last-child]:mb-0`}>
        {children}
      </div>
    </div>
  );
};

const Figure: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <figure className="flex justify-center mb-4">
    <img src={`${IMG}${src}`} alt={alt} loading="lazy" className="max-w-full h-auto border bg-white" />
  </figure>
);

const Credit: React.FC<{ children: string }> = ({ children }) => (
  <p className="text-sm italic text-slate-800 mb-6">
    {children.split(/\*\*([^*]+)\*\*/g).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))}
  </p>
);

// ---------- Índice ----------

const sections = [
  { id: 'plan', title: 'Ten un plan' },
  { id: 'lectores', title: 'Los lectores no son intérpretes' },
  { id: 'espacio', title: 'U s a   e l   e s p a c i o' },
  { id: 'atras', title: 'sárta aicah asneiP, escribe hacia delante' },
  { id: 'nombres', title: 'Nombra tus personajes' },
  { id: 'dibujo', title: 'Una imagen vale más que mil palabras' },
  { id: 'mentes', title: 'Lectores de soluciones, no de mentes' },
  { id: 'lemas', title: 'Sigue los lemas' },
  { id: 'casos', title: 'Casuística rigurosa' },
  { id: 'revisa', title: 'Corección' },
  { id: 'sujetalibros', title: 'Sujetalibros' }
];

const RedactarSolucionPage: React.FC = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-heading font-bold text-3xl text-foreground mb-2">Cómo redactar una solución</h1>
      <p className="text-sm text-slate-800 mb-6">
        Traducción al español del artículo{' '}
        <a
          href="https://artofproblemsolving.com/blog/articles/how-to-write-a-solution"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline inline-flex items-center"
        >
          “How to Write a Solution”
          <ExternalLink size={12} className="ml-1" />
        </a>{' '}
        de Art of Problem Solving. Todos los derechos del texto original pertenecen a sus autores. Las imágenes de
        soluciones manuscritas se mantienen en inglés, tal como aparecen en el original.
      </p>

      <Prose>{t`
¡Has descubierto la solución al problema, fantástico! Pero todavía no has terminado. Tanto si escribes soluciones para una competición, una revista, un foro o simplemente para presumir ante tus amigos, debes dominar el arte de comunicar tu solución con claridad.

Las ideas brillantes y las soluciones ingeniosas a los problemas valen muy poco si no sabes comunicarlas. En este artículo exploramos muchos aspectos de cómo escribir una solución con claridad. A continuación tienes un índice; cada apartado incluye un ejemplo de “cómo no escribirla” solución y otro de “cómo escribirla” solución. Un tema común a todos los puntos es que **cada vez que obligas a un lector con experiencia a pensar para seguir tu solución, pierdes.**

Al leer las secciones de “cómo escribirla”, quizá pienses que algunas están redactadas con demasiado detalle. Es cierto: algunas podrían condensarse, y algunos de los pasos que hemos demostrado podrían citarse sin demostración. Sin embargo, es mucho mejor demostrar demasiado que demostrar demasiado poco. Rara vez un lector se quejará de que una solución es demasiado fácil de entender o demasiado agradable a la vista.

Una advertencia: muchos de los problemas que usamos como ejemplo son extremadamente difíciles. Los principiantes, e incluso los estudiantes de nivel intermedio, no deberían desanimarse si les cuesta resolverlos por su cuenta.
`}</Prose>

      <div className="bg-muted p-6 rounded-lg mb-12">
        <h2 className="font-heading font-bold text-xl mb-3">Índice</h2>
        <ul className="list-disc pl-5 space-y-1">
          {sections.map(s => (
            <li key={s.id}>
              <HashLink to={`/redactar-solucion#${s.id}`} className="text-primary hover:underline">
                {s.title}
              </HashLink>
            </li>
          ))}
        </ul>
      </div>

      {/* ---------------- Ten un plan ---------------- */}
      <Section id="plan" title="Ten un plan">
        <Prose>{t`
Tu objetivo al escribir una solución clara es evitar que el lector tenga que pensar. Debes expresar tus ideas con claridad y concisión. El lector experimentado nunca debería preguntarse hacia dónde vas ni por qué es cierta cualquier afirmación que hagas. El primer paso para escribir una solución clara es tener un plan. Haz un esquema sencillo de tu solución: incluye los elementos que necesitarás definir y el orden en que escribirás las partes importantes. El esquema te ayudará a no olvidar nada y a poner los pasos en un orden fácil de seguir.

**Este es un problema de ejemplo:**
`}</Prose>
        <Problem>{t`
Una esfera de radio \(r\) está inscrita en un tetraedro. Los planos tangentes a esta esfera y paralelos a las caras del tetraedro cortan cuatro tetraedros pequeños del tetraedro original; estos tetraedros pequeños tienen esferas inscritas de radios \(a, b, c, d\). Demuestra que:

$$a + b + c + d = 2r$$
`}</Problem>
        <Prose>{t`Esta es una solución que parece corta pero es bastante difícil de leer.`}</Prose>

        <Solution kind="bad">
          <MathText>{t`
Sea \(ABCD\) nuestro tetraedro. El tetraedro pequeño que contiene al vértice A es semejante al tetraedro grande. Como la cara de este tetraedro paralela a la cara \(BCD\) es tangente a la esfera inscrita en \(ABCD\), la distancia entre \(BCD\) y esta cara paralela del tetraedro pequeño es \(2r\). Llamemos a ese tetraedro pequeño \(AXYZ\). Por tanto, la altura desde \(A\) en \(AXYZ\) es \(h_a - 2r\), donde \(h_a\) es la longitud de la altura desde \(A\) hasta la cara \(BCD\). Así, la razón entre las alturas desde \(A\) en \(AXYZ\) y en \(ABCD\) es \((h_a- 2r)/h_a\). Como estos dos tetraedros son semejantes con razón \(a/r\) (pues esa es la razón entre longitudes correspondientes, a saber, los radios de las esferas inscritas), tenemos \(a/r =\) \((h_a- 2r)/h_a\). El volumen del tetraedro es \([A]h_a/3\), donde \([A]\) es el área del triángulo \(BCD\). El volumen del tetraedro también se puede escribir \(rS/3\), donde \(S\) es el área de la superficie de \(ABCD\). Podemos demostrarlo tomando \(I\) como el centro de la esfera inscrita. Entonces el volumen del tetraedro es la suma de los volúmenes de los tetraedros \(IABC\), \(IABD\), \(IBCD\) e \(IACD\). El volumen de \(IABC\) es \(r[D]/3\), donde \([D]\) se define como definimos \([A]\) antes. De forma similar podemos hallar los volúmenes de las otras 3 piezas. Al sumarlos todos, obtenemos
\[ \text{Volumen de } ABCD = ([A] + [B] + [C] + [D]) r/3 = rS/3.\]

Igualamos esto a nuestra otra expresión del volumen y obtenemos \(h_a= rS/[A]\). Si reordenamos nuestra ecuación anterior, tenemos \(a = r - 2r^2/ h_a\). Entonces podemos sustituir la expresión de \(h_a\) que acabamos de hallar y obtener:

$$a = r - 2r[A]/S.$$

Si definimos \([B]\), \([C]\) y \([D]\) igual que definimos \([A]\), podemos usar el mismo argumento para obtener:

$$b = r - 2r[B]/S,$$$$c = r - 2r[C]/S,$$$$d = r - 2r[D]/S.$$

Sumando estas y nuestra expresión para \(a\), obtenemos:

$$a + b + c + d = 4r - 2r\cdot([A]+[B]+[C]+[D])/S = 2r,$$

como queríamos.
`}</MathText>
        </Solution>
        <Credit>(Método general de solución encontrado por el miembro de la comunidad **zabelman** en la clase de Geometría Olímpica.)</Credit>

        <Prose>{t`
El principal problema de la solución anterior es de organización. Hemos definido las variables después de que aparecieran. A mitad de la solución nos desviamos para demostrar que el volumen de \(ABCD\) es \(rS/3\). A veces escribíamos ecuaciones importantes dentro de los párrafos en lugar de destacarlas poniéndolas en su propia línea.

Si hacemos un esquema antes de escribir la solución, no tendremos estos problemas. Podemos listar lo que necesitamos definir, decidir qué elementos conviene demostrar antes de la demostración principal (los llamamos lemas) y enumerar los pasos importantes para saber qué destacar.

Nuestro borrador con el esquema podría contener lo siguiente:
`}</Prose>
        <Problem>{t`
Cosas que definir: \(ABCD\), \(h_a\), \(S\), \([A]\), \(AXYZ.\)

Orden de lo que demostrar:

1. Volumen de \(ABCD = rS/3\) (lema)

2. Probar que la altura de \(AXYZ\) es \(h_a - 2r\)

3. Usar la semejanza para obtener \(a = r - 2r^2/h_a\)

4. Igualar volúmenes para obtener \(1/h_a= [A]/(rS)\)

5. Sustituir \(4\) en \(3\) y sumar
`}</Problem>
        <Prose>{t`Esta lista parece obvia una vez escrita, pero si te lanzas a escribir la solución sin planificar, puede que te saltes elementos y tengas que encajarlos a la fuerza, como hicimos en nuestra solución de “cómo no escribirla”.`}</Prose>

        <Solution kind="good">
          <MathText>{t`
Sea \(ABCD\) el tetraedro original. Definimos:

\([A]\) = el área de la cara de \(ABCD\) opuesta a \(A\)

\(h_a\) = la longitud de la altura desde \(A\) hasta \(BCD\)

\(S\) = el área de la superficie de \(ABCD\)

\(AXYZ\) = uno de los tetraedros pequeños formados como se ha descrito

Definimos \([B]\), \([C]\), \([D]\) y \(h_b\), \(h_c\), \(h_d\) de forma similar.

**Lema 1:** El volumen del tetraedro \(ABCD\) es \(rS/3\).

**Demostración:** Sea \(I\) el centro de la esfera inscrita. El volumen de \(ABCD\) es la suma de los volúmenes de los tetraedros \(IABC\), \(IABD\), \(IBCD\) e \(IACD\). El volumen de \(IABC\) es \(r[D]/3\), ya que la altura desde \(I\) hasta \(ABC\) es un radio de la esfera inscrita en \(ABCD\). De forma similar podemos hallar los volúmenes de las otras tres piezas. Sumando estos cuatro tetraedros obtenemos:

\[ \text{Volumen de } ABCD = ([A] + [B] + [C] + [D])r/3 = rS/3\]

como queríamos.

Como la cara \(XYZ\) del tetraedro pequeño \(AXYZ\) es paralela a la cara \(BCD\), el tetraedro \(AXYZ\) es semejante a \(ABCD\). La razón entre longitudes correspondientes de estos tetraedros es igual a la razón entre los radios de sus esferas inscritas, es decir, \(a/r\). Como \(XYZ\) es tangente a la esfera inscrita en \(ABCD\), la distancia entre \(BCD\) y \(XYZ\) es \(2r\). Por tanto, la altura desde \(A\) hasta \(XYZ\) es \(h_a - 2r\). Así, la razón entre las alturas desde \(A\) en los dos tetraedros es \((h_a - 2r)/h_a\). Por lo tanto,

$$a/r = (h_a - 2r)/h_a,$$

o, equivalentemente,

$$a = r - 2r^2/h_a. \tag{1}$$

El volumen del tetraedro es \(h_a[A]/3\). Igualándolo a la expresión del Lema 1 se obtiene:

$$h_a = rS/[A],$$

y sustituyendo esto en la ecuación \((1)\), llegamos a:

$$a = r - 2r[A]/S.$$

Por el mismo argumento, tenemos:

$$b = r - 2r[B]/S,$$$$c = r - 2r[C]/S,$$$$d = r - 2r[D]/S.$$

Sumando estas y nuestra expresión para \(a\), obtenemos:

$$a + b + c + d = 4r - 2r\cdot ([A]+[B]+[C]+[D])/S = 2r,$$

como queríamos.
`}</MathText>
        </Solution>
        <Credit>(Método general de solución encontrado por el miembro de la comunidad **zabelman** en la clase de Geometría Olímpica.)</Credit>
      </Section>

      {/* ---------------- Lectores no intérpretes ---------------- */}
      <Section id="lectores" title="Los lectores no son intérpretes">
        <Prose>{t`
Lo primero que ve el lector en tu hoja no es la estructura de tu solución. Tampoco es la respuesta ni las palabras que has elegido. Es cómo está colocada la solución en el papel. Si el lector tiene que descifrar garabatos, lo perderás. Lo ideal es componer tu solución con un programa como LaTeX. Sin embargo, en la mayoría de los concursos no tendrás el lujo de poder usar un ordenador y tendrás que escribirla a mano. Hay unas cuantas reglas generales muy importantes al escribir una solución a mano. Muchas son obvias, otras no tanto. Debes seguirlas todas.
`}</Prose>
        <ol className="list-decimal pl-6 space-y-2 text-slate-800 mb-6">
          <li>Usa papel en blanco. No uses papel cuadriculado ni rayado: las líneas suelen dificultar la lectura. No uses nunca papel arrancado de un cuaderno de anillas.</li>
          <li>Respeta los márgenes. Si empiezas con un folio completamente en blanco, dibuja los márgenes en los cuatro lados (arriba, abajo, izquierda y derecha). Haz los márgenes de al menos 1,25 cm, y preferiblemente de 2,5 cm.</li>
          <li>Escribe en horizontal; nunca gires la escritura al llegar al final de una línea para meter un poco más de información. Siempre puedes empezar una línea nueva o una página nueva.</li>
          <li>Deja espacio arriba para un “Página _ de _” de modo que el lector sepa cuántas páginas hay y en cuál está. Probablemente no sepas cuántas páginas escribirás al empezar, pero puedes rellenarlo al terminar. Si llegas al final de una página y la solución debe continuar en otra, escribe “Continúa” al final de esa página para que el lector sepa que no hemos terminado. (Esto también ayuda a saber si falta alguna página.)</li>
          <li>No escribas en cursiva ligada. Escribe con las letras separadas, y escribe claro.</li>
          <li>Usa bolígrafo. Si debes usar lápiz, no borres - las manchas de la goma ensucian la hoja.</li>
          <li>Cuando cometas un error que quieras omitir, tacha una sola línea sobre él y sigue adelante. Si es un bloque grande, dibuja una ‘X’ sobre él y continúa. No emborrones bloques grandes de texto.</li>
          <li>Si te dejaste algo y quieres añadirlo al final, pon un símbolo sencillo, como un (*), en el punto donde quieras que se considere añadido el nuevo texto, y deja una breve nota, como “Demostración abajo”. Más abajo puedes escribir “(*) Anexo:” y continuar con la demostración. No uses un montón de flechas para dirigir al lector por toda la página.</li>
        </ol>

        <Problem>{t`
**Problema:** Sea \(S(n)\) la suma de las cifras de \(n\). Halla

$$S(S(S(4444^{4444}))).$$

(Fuente: IMO 1975)
`}</Problem>
        <Prose>{t`
A continuación hay dos soluciones. Ninguna es perfecta en su presentación; cuando se trabaja con presión de tiempo, es difícil escribir demostraciones con un aspecto impecable. Seguramente encontrarás la segunda mucho más agradable de leer. Cuando escribas soluciones, ten presentes los consejos anteriores y recuerda: “Si no se puede leer, no está bien”.
`}</Prose>

        <p className="font-bold mb-2 text-foreground">Cómo no escribir la solución:</p>
        <Figure src="bad1.gif" alt="Primera página de una solución manuscrita desordenada (en inglés)" />
        <Figure src="bad2.gif" alt="Segunda página de una solución manuscrita desordenada (en inglés)" />
        <Prose>{t`Esa solución es un desastre. La de abajo me llevó el mismo tiempo escribirla y es mucho más fácil de leer.`}</Prose>
        <p className="font-bold mb-2 text-foreground">Cómo escribir la solución:</p>
        <Figure src="good1.gif" alt="Primera página de una solución manuscrita ordenada (en inglés)" />
        <Figure src="good2.gif" alt="Segunda página de una solución manuscrita ordenada (en inglés)" />
      </Section>

      {/* ---------------- Usa el espacio ---------------- */}
      <Section id="espacio" title="U s a   e l   e s p a c i o">
        <div className="font-mono text-sm text-slate-800 bg-muted rounded-lg p-4 mb-4 overflow-x-auto whitespace-pre">
{`imaginaquetratasdeleerunparrafodetextoquenotienepuntuacionnimayusculasysoloel
espaciojustoparaquebrarlaslineasdemodoquenoestropeelosnavegadoresesdificilde
leeryenseguidadecidirasquenomerecelapenaleerloyteirasaleeralgodistintonote
daracuentadeloterriblementedificilqueesescribirasiesdificilporquecuandoestas
acostumbradoaescribirconclaridadyusandoespacioypuntuacionyestructuradefrases
sehacemuydificilescribirsinelloigualmenteunavezquetehayasacostumbradoausar
correctamenteelespacioalescribirtussolucionesseratuinstintoyencontrarasdificil
escribirunademostracionindescifrable`}
        </div>
        <Prose>{t`Cuando escribas tu solución, debes:`}</Prose>
        <ol className="list-decimal pl-6 space-y-2 text-slate-800 mb-6">
          <li>Dar a cada definición o ecuación importante su propia línea.</li>
          <li>No enterrar demasiado álgebra en un párrafo. Puedes escribir línea tras línea de álgebra, pero pon cada paso en su propia línea. No amontones el álgebra dentro de un párrafo.</li>
          <li>Etiquetar con mucha claridad las ecuaciones, fórmulas, lemas o casos que vayas a usar más adelante.</li>
          <li>Recordar que siempre hay más papel.</li>
        </ol>

        <Problem>{t`
**Problema:** Sea \(p(x)\) un polinomio de grado \(98\) tal que \(p(n) = 1/n\) para \(n =\) \(1, 2, 3,\) \(4, \ldots , 99\). Determina \(p(100)\).
`}</Problem>
        <Prose>{t`Que te diviertas leyendo esta solución.`}</Prose>
        <Solution kind="bad">
          <MathText>{t`
Sea \(r(x) =\) \(x (p(x) - 1/x)\) \(= x p(x) - 1.\) Como \(p(x)\) es un polinomio de grado \(98\), \(r(x)\) es un polinomio de grado \(99\). Como \(r(x) =\) \(x (p(x) - 1/x),\) y sabemos que \((p(x) - 1/x) = 0\) para \(x = 1,\) \(2, 3, \ldots , 99\), \(r(x)\) tiene raíces \(1, 2, \ldots, 99.\) Como \(r(x)\) tiene grado \(99\), estas son las únicas raíces de \(r(x)\), que por tanto debe tener la forma \(r(x) =\) \(c(x - 1)(x - 2)\) \((x - 3) \cdots (x - 99)\) para cierta constante \(c\). Para hallar \(c,\) primero tomamos \(x = 0\) en la ecuación \(r(x) =\) \(x p(x) - 1,\) lo que da \(r(0) = -1.\) Tomando \(x = 0\) en \(r(x) =\) \(c(x - 1)(x - 2)\) \((x - 3) \cdots (x - 99)\) obtenemos \(r(0) = -c(99!);\) por tanto, \(c = 1/99!.\) Así, tenemos \(r(x) =\) \((x - 1)(x - 2)\) \((x - 3) \cdots (x - 99)/99!.\) Podemos combinar las ecuaciones \(r(x) =\) \(x p(x) - 1\) y \(r(x) =\) \((x - 1)(x - 2)\) \((x - 3) \cdots (x - 99)/99!\) y tomar \(x = 100\) para hallar \(100p(100) - 1 =\) \( (100 - 1)(100 - 2)\) \((100 - 3) \ldots(100 - 99)/99!,\) así que \(100p(100) - 1 =\) \( 99!/99! = 1,\) luego \(p(100) = 1/50.\)
`}</MathText>
        </Solution>
        <Prose>{t`Aquí tienes la misma solución, con casi las mismas palabras.`}</Prose>
        <Solution kind="good">
          <MathText>{t`
Sea

\[ r(x)=x(p(x)-1/x)=xp(x)-1.\tag{1} \]

Como \(p(x)\) es un polinomio de grado \(98\), \(r(x)\) es un polinomio de grado \(99\). Como \(r(x) =\) \(x (p(x) - 1/x)\), y sabemos que \((p(x) - 1/x) = 0\) para \(x = \) \(1, 2,\) \(3, \ldots, 99,\) \(r(x)\) tiene raíces \(1, 2, \ldots , 99.\) Como \(r(x)\) tiene grado \(99\), estas son las únicas raíces de \(r(x)\), que por tanto debe tener la forma:

\[ r(x)=c(x-1)(x-2)(x-3)\cdots(x-99) \tag{2} \]

para cierta constante \(c\). Para hallar \(c\), primero tomamos \(x = 0\) en la ecuación \((1)\), lo que da \(r(0) = -1.\) Tomando \(x = 0\) en \((2)\) obtenemos \(r(0) = -c(99!)\); por tanto, \(c = 1/99!\). Así, tenemos:

$$r(x)=(x-1)(x-2)(x-3)\cdots(x-99)/99! \tag{3}$$

Podemos combinar las ecuaciones \((1)\) y \((3)\) y tomar \(x = 100\) para hallar

\[100p(100) - 1 = (100 - 1)(100 - 2)(100 - 3) \cdots (100 - 99)/99!\]\[100p(100) - 1 = 99!/99! = 1\]\[p(100) = 1/50.\]
`}</MathText>
        </Solution>
        <Prose>{t`¿Cuál preferirías leer?`}</Prose>
      </Section>

      {/* ---------------- Piensa hacia atrás ---------------- */}
      <Section id="atras" title="sárta aicah asneiP, escribe hacia delante">
        <Prose>{t`El siguiente es un fragmento de un libro de cocina que nunca se escribió:`}</Prose>
        <blockquote className="border-l-4 border-muted pl-4 italic text-slate-800 mb-4">
          “Averiguar cómo hacer una tortilla es fácil. Cualquiera que haya comido una tortilla sabe que normalmente se hace con varios huevos rellenos de diversos alimentos como jamón, pimientos, cebolla y beicon, y a menudo se cocina con queso. El hecho de que todos estos ingredientes acaben dentro del huevo significa que deberíamos empezar cocinando los huevos extendidos en una sartén y luego añadir los ingredientes. Entonces podemos doblar parte del huevo sobre los ingredientes para atraparlos dentro. Si necesitáramos que algunos ingredientes estuvieran precocinados, podríamos hacerlo antes de añadirlos a los huevos…”
        </blockquote>
        <Prose>{t`
Una cosa es averiguar cómo hacer una tortilla. Otra es explicárselo a alguien. Empezar nuestra explicación desde el principio es mucho más claro que empezar por la tortilla terminada.
`}</Prose>
        <blockquote className="border-l-4 border-muted pl-4 italic text-slate-800 mb-4">
          “Prepara las verduras y demás ingredientes que quieras para rellenar la tortilla. Bate los huevos. Empieza a cocinar los huevos. Añade el relleno en el centro de forma que parte del huevo pueda doblarse sobre los ingredientes. Cuando la tortilla esté cerrada, sigue cocinándola y dale la vuelta hasta que los huevos se vean bien cocidos.”
        </blockquote>
        <Prose>{t`
Al lector no le importa cómo el autor descubrió la forma de cocinar una tortilla. Solo quiere saber cómo hacerla.

Piensa en las soluciones como si fueran recetas. Empieza por el principio y avanza. Enumera los ingredientes y explica cómo y cuándo añadirlos a la olla.

Aquí va un ejemplo práctico.
`}</Prose>
        <Problem>{t`
**Problema:** Sean \(a\), \(b\) y \(c\) las longitudes de los lados de un triángulo. Demuestra que

$$a^2(-a + b + c) + b^2(a - b + c) + c^2(a + b - c)\leq 3abc.$$
`}</Problem>
        <Prose>{t`Esta solución puede ser una buena forma de ver cómo se nos podría ocurrir una solución desde cero, pero no es una demostración especialmente bien escrita:`}</Prose>
        <Solution kind="bad">
          <MathText>{t`
Observamos que la desigualdad contiene los factores \((-a + b + c)\), \((a - b + c)\) y \((a + b - c)\). Estos factores apuntan a usar la desigualdad triangular, así que parece natural dejar los factores como están e invocar que cada uno es no negativo. Como cada uno de estos tres factores está multiplicado por el cuadrado de la longitud de un lado, quizá sea posible manipular la desigualdad hasta obtener algo que involucre estos factores no negativos de la desigualdad triangular multiplicados por cuadrados perfectos. Entonces podríamos argumentar que esta suma también debe ser no negativa. Empezamos pasando \(3abc\) al miembro izquierdo:

$$a^2(-a + b + c) + b^2(a - b + c) + c^2 (a + b - c) - 3abc \le 0.$$

Si viéramos \(3abc\) como la suma de \(3\) términos, cada uno producto de \(ab\), \(bc\) o \(ca\) por uno de los factores de la desigualdad triangular, empezamos a tener una idea de cómo se puede reorganizar la desigualdad. Como la desigualdad es cíclica, parece natural tomar estos productos de manera que se preserve la naturaleza cíclica. Por ejemplo, multiplicamos \(ab\) por \((a + b - c)\) porque \(a\) y \(b\) tienen el mismo signo en \((a + b - c)\):

\begin{align*}
ab (a + b - c) &= a^2b +ab^2 -abc \ge 0, \\
ab (-a + b +c) &= -abc + b^2c + bc^2 \ge 0, \\
ca (a - b + c) &=a^2c -abc + ac^2 \ge 0.
\end{align*}

Vemos el \(-3abc\) en la suma de estos productos. Examinando los demás términos de

\[ab(a + b - c) = a^2b + ab^2 - abc,\]

notamos que \(a^2b + ab^2\) son factores que surgirían de \((a - b)^2(a + b - c) \). Desarrollando las partes al cuadrado de expresiones como \((a-b)^2(a+b-c)\) obtenemos

\begin{align*}
(a - b)^2(a + b - c) &= a^2(a + b - c) - 2ab(a + b - c) + b^2(a + b - c) \ge 0, \\
(b - c)^2(-a + b + c) &= b^2(-a + b + c) - 2bc(-a + b + c) + c^2(-a + b + c) \ge 0, \\
(c - a)^2(a - b + c) &= c^2(a - b + c) - 2ca(a - b + c) + a^2(a - b + c) \ge 0.\end{align*}

Sumando estas desigualdades empezamos a ver cómo toma forma la desigualdad:

\begin{align*}
&a^2(a + b - c + a - b + c) + b^2(a + b - c - a + b + c) + c^2(-a + b + c + a - b + c) \\
&- 2a^2b - 2ab^2 + 2abc + 2abc - 2b^2c - 2bc^2 - 2a^2c + 2abc - 2ac^2  \\
&= a^2(2a - 2b - 2c) + b^2(-2a + 2b - 2c) + c^2(-2a - 2b + 2c) + 6abc \ge 0.
\end{align*}

Multiplicar esta desigualdad por \(-1/2\) invierte el signo de la desigualdad y nos da

$$a^2(-a + b + c) + b^2(a - b + c) + c^2(a + b - c) - 3abc \ge 0.$$

Sumando \(3abc\) a ambos miembros obtenemos

$$a^2(-a + b + c) + b^2(a - b + c) + c^2(a + b - c) \ge 3abc$$

y hemos terminado.
`}</MathText>
        </Solution>
        <Prose>{t`El estilo “libro de cocina” es más fácil de leer y mucho más convincente.`}</Prose>
        <Solution kind="good">
          <MathText>{t`
Según la desigualdad triangular, la suma de dos lados cualesquiera de un triángulo es al menos tan grande como la longitud del tercero. Por tanto, tenemos las desigualdades

\begin{align*}
a - b - c&\leq0, \\
b - c - a&\leq0, \\
c - a - b&\leq0.
\end{align*}

Al multiplicarlas por cuadrados perfectos, cada miembro izquierdo sigue siendo no positivo, así que

\begin{align*}
(b - c)^2(a - b - c)&\leq0, \\
(c - a)^2(b - c - a)&\leq0, \\
(a - b)^2(c - a - b)&\leq0,
\end{align*}

o, lo que es lo mismo,

\begin{align*}
(b^2 - 2bc + c^2)(a - b - c)&\leq0, \\
(c^2- 2ac + a^2)(b - c - a) &\leq 0, \\
(a^2 - 2ab + b^2)(c - a - b)&\leq0.
\end{align*}

Sumando estas desigualdades obtenemos

\begin{align*}
&a^2(a + b - c + a - b + c) + b^2(a + b - c - a + b + c) + c^2(-a + b + c + a - b + c) \\
&- 2a^2b - 2ab^2 + 2abc + 2abc - 2b^2c - 2bc^2 - 2a^2c + 2abc - 2ac^2  \\
&= a^2(2a - 2b - 2c) + b^2(-2a + 2b - 2c) + c^2(-2a - 2b + 2c) + 6abc \ge 0.
\end{align*}

Sumando \(6abc\) a ambos miembros y dividiendo entre \(2\) tenemos la desigualdad deseada

$$a^2(-a + b + c) + b^2(a - b + c) + c^2(a + b - c)\leq3abc.$$
`}</MathText>
        </Solution>
      </Section>

      {/* ---------------- Nombres ---------------- */}
      <Section id="nombres" title="Nombra tus personajes">
        <Prose>{t`
Un vehículo grande de cáscara fina para un ave joven, creado por un enorme pájaro hembra, estaba sentado sobre un muro. El gran vehículo de cáscara fina para un ave joven, creado por un enorme pájaro hembra, sufrió una gran caída. Todos los caballos del gran hombre que vivía en un gran castillo que gobernaba sobre la gente de la tierra y todos los hombres del gran hombre que vivía en un gran castillo que gobernaba sobre la gente de la tierra no pudieron volver a juntar el gran vehículo de cáscara fina para un ave joven, creado por un enorme pájaro hembra.

Las demostraciones se parecen mucho a los cuentos. Al escribir una solución, tu trabajo es contar una historia matemática de una manera que tu público entienda y disfrute. En lugar de hablar de “un gran vehículo de cáscara fina para un ave joven creado por un enorme pájaro hembra”, llamamos a ese huevo grande “Humpty Dumpty” y contamos la historia. Del mismo modo, una demostración bien escrita suele consistir en dar nombre a las cantidades o ideas importantes que intervienen en la historia de tu solución. Nombrar a tus personajes también puede ayudarte a encontrar soluciones, así que no es algo que debas dejar para el momento de escribir la demostración.

Cuando nombres a tus personajes, hazlo de forma simple y clara, y escríbelo al principio, para que el lector sepa exactamente dónde ir a ver quién es ese tal \(n\) y qué representa esa función \(f(x)\).

Veamos un ejemplo.
`}</Prose>
        <Problem>{t`
**Problema:** Demuestra que para cualquier conjunto de \(100\) enteros existe algún subconjunto tal que la suma de sus elementos es múltiplo de \(100\).
`}</Problem>
        <Prose>{t`La solución de abajo es difícil de leer porque los enteros y las sumas que son la clave de la solución permanecen sin nombre.`}</Prose>
        <Solution kind="bad">
          <MathText>{t`
Supongamos que ponemos los números de nuestro conjunto en cierto orden fijo. Si empezamos desde el principio, hay \(100\) sumas que podemos formar simplemente sumando a partir del primer número. Podríamos sumar los \(2\) primeros números, o los primeros \(4\), los primeros \(57\), o los que sean. Si una de estas sumas es múltiplo de \(100\), hemos terminado. Si ninguna de las sumas es múltiplo de \(100\), entonces necesitamos considerar los restos que deja cada uno de estos términos al dividirlo entre \(100\). Hay \(100\) restos en total, pues hay \(100\) sumas. Como ninguno de ellos es \(0\), hay como mucho \(99\) restos distintos entre estos \(100\) restos. Por tanto, dos de estos restos deben ser iguales, ya que si no hubiera al menos dos iguales solo podría haber \(99\) restos en total (pues sabemos que ninguno es cero). Ahora tomamos la diferencia entre las dos sumas que tienen el mismo resto al dividirlas entre \(100\). Esta diferencia debe tener resto \(0\) al dividirla entre \(100\). Supongamos que hemos restado la suma con menos números de la que tiene más números. Al tomar esta diferencia, todos los números de la segunda suma se cancelan con números de la primera suma, porque cada suma consiste en sumar números de nuestro conjunto empezando por el primero, pero la segunda suma es más corta. Debido a esta cancelación, la diferencia de estas dos sumas que tienen el mismo resto al dividirlas entre \(100\) da como resultado una suma de números del conjunto original. Hemos demostrado que esta diferencia tiene resto \(0\) al dividirla entre \(100\), así que esta es nuestra suma deseada de números del conjunto que es divisible entre \(100\).
`}</MathText>
        </Solution>
        <Prose>{t`La solución de abajo es fácil de leer porque los protagonistas tienen nombre. En concreto, damos nombre a los enteros del conjunto y a las sumas de los elementos de los subconjuntos que examinamos. Estos nombres nos permiten seguir a los personajes a lo largo de la historia. También permiten al autor describirlos de forma más completa y concisa.`}</Prose>
        <Solution kind="good">
          <MathText>{t`
Llamemos a los \(100\) enteros \(n_1,\) \(n_2,\) \(\ldots,\) \(n_{100}\). Sea \(S_k = n_1 + n_2 + \dots + n_k\) para \(k = 1,\) \(2, \dots, 100.\)

**Caso 1:** Si \(S_1, S_2,\dots, S_{100}\) son todos distintos módulo \(100\), entonces exactamente uno de ellos debe ser múltiplo de \(100\).

**Caso 2:** En caso contrario, las \(100\) sumas \(S_k\) tienen como mucho \(99\) restos distintos módulo \(100\) y, por el Principio del Palomar, dos de las sumas \(S_k\) tienen el mismo resto módulo \(100\).

Esto significa que existen enteros \(j\) y \(k\), con \(0 < j < k < 101\), tales que

$$S_k \equiv S_j \pmod{100};$$

por tanto,

$$S_k - S_j \equiv 0 \pmod{100}.$$

Consideremos ahora el subconjunto con elementos \(n_{j+1},\) \(n_{j+2},\) \(\ldots,\) \(n_k\). La suma de los elementos de este subconjunto es

\begin{align*}
& n_{j+1} + n_{j+2} + \dots + n_k \\
& = (n_1 + n_2 + \dots + n_k) - (n_1 + n_2 + \dots + n_j) \\
& = S_k - S_j \equiv 0 \pmod{100}.
\end{align*}

Por tanto, esta suma es múltiplo de \(100\) y hemos terminado.
`}</MathText>
        </Solution>
      </Section>

      {/* ---------------- Dibujo ---------------- */}
      <Section id="dibujo" title="Una imagen vale más que mil palabras">
        <Prose>{t`
Cuando escribas la solución de un problema de geometría, o de cualquier problema que involucre un dibujo, debes incluir el diagrama. Si no lo incluyes, a menudo obligas al corrector a dibujarlo por ti. Incluso si el diagrama viene dado en el enunciado, debes incluirlo en tu solución. Si haces que tu lector tenga que buscar un diagrama en otro sitio, es muy probable que pierdas su atención.

Dibuja tu diagrama con precisión. Usa un programa de geometría si estás tecleando tu solución con el ordenador, o usa regla y compás si la escribes a mano.

Este es un ejemplo.
`}</Prose>
        <Problem>{t`
**Problema:** Se coloca un punto \(D\) en el lado \(BC\) del triángulo \(ABC\). Se inscriben circunferencias en \(ABD\) y en \(ACD\). Su tangente exterior común (distinta de \(BC\)) corta a \(AD\) en \(K\). Demuestra que la longitud de \(AK\) es independiente de \(D\).
`}</Problem>
        <Prose>{t`Esta es una solución sin diagrama.`}</Prose>
        <Solution kind="bad">
          <MathText>{t`
Sean \(O\) y \(O'\) nuestras circunferencias. Sean \(M\) y \(M'\) puntos de \(O\) y \(O'\) tales que \(MM'\) es la tangente común que pasa por \(K\). Sean \(L\) y \(L'\) los puntos donde \(AD\) corta a las circunferencias \(O\) y \(O'\), respectivamente. Sean \(N\) y \(N'\) los puntos donde \(BC\) corta a las circunferencias \(O\) y \(O'\), respectivamente. Demostraremos que \(AK = \) \({(AB + AC - BC)}/2\) y, por tanto, que la longitud de \(AK\) es independiente de \(D\). Como las tangentes desde un punto a una circunferencia son iguales, tenemos tanto \(DN = DL\) como \(DN' = DL'\). Por tanto,

$$NN' = DN + DN' = DL + DL' = 2DL + LL'.$$

De forma similar, tenemos

$$MM' = MK + KM' = KL + KL' = 2KL' + LL'.$$

Como \(MM' = NN'\) por simetría, concluimos que \(KL = DL\). Por tanto,

$$MM' = NN' = DL + LL' + KL' = KD.$$

Podemos calcular \(NN'\), y por tanto \(KD\), en términos de \(AD\) y los lados del triángulo:

\begin{align*}
DN &= {(AB + AD + BD)}/2 - AB \\
DN' &= {(AC + AD + CD)}/2 - AC
\end{align*}

Por tanto,

$$NN' = ND + DN' = AD + {BC}/2 - {AC}/2 - {AB}/2.$$

Como \(NN' = KD\), tenemos

$$AD - KD = AK = {(AC + AB - BC)}/2,$$

como queríamos. Como \(A\), \(B\) y \(C\) son independientes de \(D\), concluimos que la longitud \(AK\) es independiente de \(D\).
`}</MathText>
        </Solution>
        <Credit>(Método de solución encontrado por el miembro de la comunidad **3cnfsat** en la clase de Geometría Olímpica.)</Credit>

        <Prose>{t`Esta es una solución que incluye el diagrama:`}</Prose>
        <p className="font-bold mb-2 text-foreground">Cómo escribir la solución:</p>
        <Figure src="geompic2.gif" alt="Triángulo ABC con el punto D en BC, las dos circunferencias inscritas y su tangente común" />
        <Solution kind="good" title=" ">
          <MathText>{t`
Sean \(O\) y \(O'\) nuestras circunferencias. Sean \(M\) y \(M'\) puntos de \(O\) y \(O'\) tales que \(MM'\) es la tangente común que pasa por \(K\). Sean \(L\) y \(L'\) los puntos donde \(AD\) corta a las circunferencias \(O\) y \(O'\), respectivamente. Sean \(N\) y \(N'\) los puntos donde \(BC\) corta a las circunferencias \(O\) y \(O'\), respectivamente. Demostraremos que \(AK = \) \({(AB + AC - BC)}/2\) y, por tanto, que la longitud de \(AK\) es independiente de \(D\). Como las tangentes desde un punto a una circunferencia son iguales, tenemos tanto \(DN = DL\) como \(DN' = DL'\). Por tanto,

$$NN' = DN + DN' = DL + DL' = 2DL + LL'.$$

De forma similar, tenemos

$$MM' = MK + KM' = KL + KL' = 2KL' + LL'.$$

Como \(MM' = NN'\) por simetría, concluimos que \(KL = DL\). Por tanto,

$$MM' = NN' = DL + LL' + KL' = KD.$$

Podemos calcular \(NN'\), y por tanto \(KD\), en términos de \(AD\) y los lados del triángulo:

\begin{align*}
DN &= {(AB + AD + BD)}/2 - AB \\
DN' &= {(AC + AD + CD)}/2 - AC
\end{align*}

Por tanto,

$$NN' = ND + DN' = AD + {BC}/2 - {AC}/2 - {AB}/2.$$

Como \(NN' = KD\), tenemos

$$AD - KD = AK = {(AC + AB - BC)}/2,$$

como queríamos. Como \(A\), \(B\) y \(C\) son independientes de \(D\), concluimos que la longitud \(AK\) es independiente de \(D\).
`}</MathText>
        </Solution>
        <Credit>(Método de solución encontrado por el miembro de la comunidad **3cnfsat** en la clase de Geometría Olímpica.)</Credit>

        <Prose>{t`
En nuestra solución anterior usamos el hecho de que la longitud de los segmentos desde un vértice de un triángulo (como el vértice \(D\) del triángulo \(ABD\) de arriba) hasta los puntos de tangencia de la circunferencia inscrita con los lados del triángulo que salen de ese vértice (los segmentos \(DN\) y \(DL\) de arriba) es igual al semiperímetro del triángulo menos el lado opuesto. Aplicando este principio para hallar la longitud \(DN\) en el triángulo \(ABD\) obtenemos:

$$DN = (AB + AD + BD)/2 - AB$$

Si no te resulta familiar este hecho, intenta demostrarlo tú mismo (y escribir una solución bonita). Todo buen geómetra recurre a este hecho con la misma facilidad con que recurre al Teorema de Pitágoras.
`}</Prose>
      </Section>

      {/* ---------------- Mentes ---------------- */}
      <Section id="mentes" title="Lectores de soluciones, no de mentes">
        <Prose>{t`
Una solución completa no significa solo una respuesta correcta. Debes justificar cada paso notable de tu solución. Un lector experimentado nunca debería preguntarse “¿por qué es cierto eso?” mientras lee tu solución. Tampoco debería quedarle ninguna duda de si sabes por qué es cierto.

No siempre está claro qué pasos puedes suponer que el lector entiende y cuáles tienes que explicar. Aquí tienes algunas pautas:
`}</Prose>
        <ol className="list-decimal pl-6 space-y-2 text-slate-800 mb-6">
          <li><MathText>{t`Si puedes citar un teorema que tiene nombre, no necesitas demostrarlo. Puedes citar el teorema y seguir adelante, como en: “Por el Teorema de Pitágoras, \(AC = 3\)”.`}</MathText></li>
          <li><MathText>{t`Si estás muy seguro de que el paso es bien conocido pero no sabes cómo se llama, puedes decir: “Por un teorema bien conocido, el área de \(ABC\) es igual a \(rs\), donde \(r\) es el inradio y \(s\) es el semiperímetro”. También puedes omitir lo de “por un teorema bien conocido”, en particular para resultados extremadamente comunes como el que acabamos de citar. (Si no conoces ese resultado, intenta demostrarlo por tu cuenta.)`}</MathText></li>
          <li>Si sigues sin estar seguro de si debes demostrar un paso o suponerlo conocido, tienes que decidir. Si puedes demostrarlo en una o dos líneas, adelante. Si va a costar mucho trabajo demostrarlo pero sabes cómo hacerlo, al menos esboza la demostración (y da una más completa si tienes tiempo). Si estás en un concurso y no tienes ni idea de cómo demostrarlo, cítalo y sigue adelante. Quizá tengas suerte y sea un “teorema bien conocido”. Si estás escribiendo un texto con fines educativos y no sabes demostrarlo, tu texto no está terminado hasta que lo resuelvas.</li>
          <li><MathText>{t`Cuando escribas una cadena de pasos algebraicos, cada paso debe seguirse de forma evidente del anterior. No escribas algo como: “Por tanto, tenemos \[x^2(x - 4) + {(x + 1)}^2 + 5x - 4(x + 2) = -2,\] así que \(x=1\) es la única solución”. Debes incluir pasos simples y claros que dejen patente que lo anterior equivale a \((x - 1)^3 = 0\).`}</MathText></li>
          <li><MathText>{t`Puedes invocar la simetría o la analogía cuando los casos son exactamente iguales. Por ejemplo, supón que quieres demostrar que el área de cualquier triángulo \(ABC\) viene dada por \[ [ABC] = (ab \sin C + bc \sin A + ac \sin B)/6,\] donde \(a = BC\), \(b = AC\), \(c = AB\), y \([ABC]\) es el área de \(ABC\). Si demuestras que \[[ABC] = (ab/2)(\sin C),\] entonces puedes escribir simplemente: “De forma análoga, tenemos \[[ABC] = (bc/2)(\sin A) = (ac/2)(\sin B)."\]`}</MathText></li>
          <li>Ante la duda, explícalo. Muchas de las soluciones presentadas en este artículo tienen un poco de exceso de detalle. Es mejor demostrar demasiado que demasiado poco.</li>
        </ol>

        <Prose>{t`Este es un problema de ejemplo:`}</Prose>
        <Problem>{t`
**Problema:** Halla todas las soluciones enteras de la ecuación

$$(m^2 + 1)(n^2 + 1) + 2(m - n)(1 - mn) = 4(mn + 1).$$

(Problema de **Titu Andreescu**.)
`}</Problem>
        <Prose>{t`Esto es totalmente inaceptable:`}</Prose>
        <Solution kind="bad" title="Cómo no escribir la solución 1:">
          <MathText>{t`$$(1, 2), (-3, 0), (0, 3), (-2, -1), (1, 0), (-3, 2), (0, -1), (-2, 3)$$`}</MathText>
        </Solution>
        <Prose>{t`Lo anterior es una respuesta, no una solución. Esta “solución” carece de cualquier prueba de que estas soluciones realmente funcionan, y no demuestra que no haya otras soluciones. Además, no acerca al lector a entender la solución.`}</Prose>
        <Solution kind="bad" title="Cómo no escribir la solución 2:">
          <MathText>{t`La ecuación dada se reordena como $$(m + 1)(n - 1) = \pm 2,$$ así que las soluciones son \[(1, 2), (-3, 0), (0, 3), (-2, -1), (1, 0), (-3, 2), (0, -1), (-2, 3).\]`}</MathText>
        </Solution>
        <Prose>{t`Esta solución es mejor que la primera; un lector motivado al menos entrevé un camino hacia la solución, pero no está nada claro cómo la ecuación original se reordena en la ecuación dada, ni cómo se siguen las soluciones mostradas.`}</Prose>
        <Solution kind="good">
          <MathText>{t`
Desarrollamos el primer término y el miembro derecho y luego reagrupamos términos:

$$(m^2 + 1)(n^2 + 1) + 2(m - n)(1 - mn) = 4(mn + 1)$$
$$m^2n^2 + m^2 + n^2+ 1 + 2(m - n)(1 - mn) = 4mn + 4$$
$$m^2n^2 - 2mn + 1 + m^2 - 2mn + n^2 + 2(m - n)(1 - mn) = 4$$
$$(mn - 1)^2 + (m - n)^2 - 2(m - n)(mn - 1) = 4$$

El miembro izquierdo es el cuadrado de \([(mn - 1) - (m - n)]\), así que tenemos:

$$[(mn - 1) - (m - n)]^2 = 4$$
$$[mn - m + n - 1]^2 = 4$$
$$[(m + 1)(n - 1)]^2 = 4$$
$$(m + 1)(n - 1) = \pm2$$

**Caso 1:** Para \((m + 1)(n - 1) = 2\), tenemos los sistemas de ecuaciones:

\begin{align*}
m + 1 &= 1 \\
n - 1 &= 2 \\
&(0, 3)
\end{align*}

\begin{align*}
m + 1 &= 2 \\
n - 1 &= 1 \\
&(1, 2)
\end{align*}

\begin{align*}
m + 1 &= -1 \\
n - 1 &= -2 \\
&(-2, -1)
\end{align*}

\begin{align*}
m + 1 &= -2 \\
n - 1 &= -1 \\
&(-3, 0)
\end{align*}

**Caso 2:** Para \((m + 1)(n - 1) = -2\), tenemos los sistemas de ecuaciones:

\begin{align*}
m + 1 &= 1 \\
n - 1 &= -2 \\
&(0, -1)
\end{align*}

\begin{align*}
m + 1 &= -2 \\
n - 1 &= 1 \\
&(-3, 2)
\end{align*}

\begin{align*}
m + 1 &= -1 \\
n - 1 &= 2 \\
&(-2, 3)
\end{align*}

\begin{align*}
m + 1 &= 2 \\
n - 1 &= -1 \\
&(1, 0)
\end{align*}

Por tanto, las soluciones son \((1, 2),\) \((-3, 0),\) \((0, 3),\) \((-2, -1),\) \((1, 0),\) \((-3, 2),\) \((0, -1),\) \((-2, 3).\)
`}</MathText>
        </Solution>
      </Section>

      {/* ---------------- Lemas ---------------- */}
      <Section id="lemas" title="Sigue los lemas">
        <Prose>{t`
A menudo tendrás que demostrar varios resultados preliminares antes de abordar el problema principal. Al escribir una demostración, solemos separar estas partes de la demostración principal etiquetando cada una como “Lema” y delimitando con claridad el lema y su demostración del resto de la solución.

Este es un problema de ejemplo con soluciones que emplean lemas. Hemos exagerado un poco el nivel de detalle al escribir la solución con lemas para destacar cuánto podemos clarificar las soluciones con ellos. Esta solución es bastante más fácil de leer al dividir claramente el argumento en piezas.
`}</Prose>
        <Problem>{t`
**Problema:** Desde el vértice \(A\) del triángulo \(ABC\) se trazan las perpendiculares \(AM\) y \(AN\) a las bisectrices de los ángulos exteriores del triángulo en \(B\) y en \(C\). Demuestra que \(MN\) es igual a la mitad del perímetro de \(ABC\).
`}</Problem>
        <p className="font-bold mb-2 text-foreground">Cómo no escribir la solución:</p>
        <Figure src="fangeom3.gif" alt="Triángulo ABC con las bisectrices exteriores en B y C, los puntos M y N, y la recta MN" />
        <Solution kind="bad" title=" ">
          <MathText>{t`
Sea \(J\) el punto en que la recta paralela a \(BC\) por \(A\) corta a la recta \(BM\). Sea \(K\) el punto en que la recta paralela a \(AB\) por \(J\) corta a la recta \(BC\). Sean \(X\) e \(Y\) los puntos en que \(MN\) corta a \(AB\) y a \(AC\), respectivamente. Como \(JK \parallel AB\) y \(AJ \parallel BK\), \(JKBA\) es un paralelogramo. Como

$$ \angle{ABM} = (\angle A + \angle C)/2.$$

Del triángulo rectángulo \(BAM\), obtenemos

$$\angle BAM = 90^\circ - \angle ABM = \angle B/2.$$

Como \(AJ \parallel BC\), tenemos \(\angle JAB = \angle B\), así que \(MA\) es bisectriz de \(\angle BAJ\). Por tanto, \(\angle JAM =\) \(\angle BAM\) y los triángulos \(BAM\) y \(JAM\) son congruentes por ALA (ángulo-lado-ángulo). Así, \(AJ = AB\) y el paralelogramo \(JKBA\) es un rombo. Las diagonales de un rombo se cortan en su punto medio, así que los triángulos \(AMJ\) y \(KMB\) son congruentes. Por tanto, las alturas desde \(M\) hasta \(AJ\) y \(BK\) son iguales y \(M\) equidista de las rectas \(AJ\) y \(BK\). Por simetría, esto también es cierto para \(N\). Así, \(MN \parallel BC\) y \(MN\) equidista de \(AJ\) y \(BC\). Como \(MX \parallel BK\), \(\triangle AMX \sim \triangle AKB\). Como \(AM =\) \(AK/2\), tenemos \(MX =\) \(KB/2\). Como \(JKBA\) es un rombo, \(KB = AB\), así que \(MX =\) \(AB/2\), como queríamos. Por simetría, también tenemos \(NY =\) \(AC/2\). Como \(XY\) es la paralela media de \(ABC\) paralela al lado \(BC\), tenemos \(XY =\) \(BC/2\). Por tanto,

$$MN = MX + XY + YN = AB/2 + AC/2 + BC/2,$$

como queríamos.
`}</MathText>
        </Solution>
        <Credit>(Método de solución encontrado por el miembro de la comunidad **fanzha** en la clase de Geometría Olímpica.)</Credit>

        <p className="font-bold mb-2 text-foreground">Cómo escribir la solución:</p>
        <Figure src="fangeom3.gif" alt="Triángulo ABC con las bisectrices exteriores en B y C, los puntos M y N, y la recta MN" />
        <Solution kind="good" title=" ">
          <MathText>{t`
Sea \(J\) el punto en que la recta paralela a \(BC\) por \(A\) corta a la recta \(BM\). Sea \(K\) el punto en que la recta paralela a \(AB\) por \(J\) corta a la recta \(BC\). Sean \(X\) e \(Y\) los puntos en que \(MN\) corta a \(AB\) y a \(AC\), respectivamente.

Demostraremos que \(MX = AB/2\), \(XY = BC/2\) e \(YN = AC/2\), de lo cual se sigue el resultado deseado.

**Lema 1:** \(JKBA\) es un rombo.

**Demostración:** Como \(JK \parallel AB\) y \(AJ \parallel BK\), \(JKBA\) es un paralelogramo. Por tanto, solo necesitamos demostrar que un par de lados consecutivos son iguales para concluir que \(JKBA\) es un rombo.

Como \(\angle ABM\) es la mitad del ángulo exterior \(ABK\), tenemos

$$\angle ABM = \frac{1}{2}(\angle A + \angle C).$$

Del triángulo rectángulo \(BAM\), obtenemos

$$\angle BAM = 90^\circ - \angle ABM = \angle B/2.$$

Como \(AJ \parallel BC\), tenemos \(\angle JAB = \angle B\), así que \(MA\) es bisectriz de \(\angle BAJ.\) Por tanto, \(\angle JAM = \angle BAM\) y los triángulos \(BAM\) y \(JAM\) son congruentes por ALA (ángulo-lado-ángulo). Así, \(AJ = AB\) y el paralelogramo \(JKBA\) es un rombo.

**Lema 2:** \(MN \parallel BC\) y \(MN\) equidista de las rectas \(AJ\) y \(BC\).

**Demostración:** Las diagonales de un rombo se cortan en su punto medio, así que los triángulos \(AMJ\) y \(KMB\) son congruentes. Por tanto, las alturas desde \(M\) hasta \(AJ\) y \(BK\) son iguales y \(M\) equidista de las rectas \(AJ\) y \(BK\). Por simetría, esto también es cierto para \(N\). Así, \(MN \parallel BC\) y \(MN\) equidista de \(AJ\) y \(BC\).

**Lema 3:** \(MX = AB/2.\)

**Demostración:** Como \(MX \parallel BK\), \(\triangle AMX \sim \triangle AKB.\) Como \(AM = AK/2\), tenemos \(MX = KB/2.\) Como \(JKBA\) es un rombo (Lema 1), \(KB = AB,\) así que \(MX = AB/2\), como queríamos.

Por simetría, también tenemos \(NY = AC/2\) a partir del Lema 3. Como \(XY\) es la paralela media de \(ABC\) paralela al lado \(BC\), tenemos \(XY = BC/2.\) Por tanto,

$$MN = MX + XY + YN = AB/2 + AC/2 + BC/2,$$

como queríamos.
`}</MathText>
        </Solution>
      </Section>

      {/* ---------------- Casos ---------------- */}
      <Section id="casos" title="Casuística rigurosa">
        <Prose>{t`
A veces la solución de un problema se reduce a investigar unos pocos casos distintos. En tu solución, debes identificar los casos con claridad y demostrar que cubren todas las posibilidades.

A continuación se muestra un caso de ejemplo:
`}</Prose>
        <Problem>{t`
**Problema:** ¿Cuántos enteros positivos de 3 cifras cumplen que una de sus cifras es igual al producto de las otras 2?

(Este problema proviene del curso Introduction to Counting & Probability de Art of Problem Solving.)
`}</Problem>
        <Prose>{t`Aquí hay dos soluciones:`}</Prose>
        <Solution kind="bad">
          <MathText>{t`
Están los 9 de las centenas. Están \(248\), \(284\), \(482\), \(428\), \(824\) y \(842\). Están \(339\), \(933\) y \(393\). Está \(236\), y otros 5 como los de \(248\). También hay 3 números como \(224\). Además, están \(111\) y \(122\) y \(133\) y \(144\) y así sucesivamente. Cada uno de esos se puede ordenar de 3 maneras, excepto el \(111\), que solo se puede ordenar de una. Así que hay 52.
`}</MathText>
        </Solution>
        <Prose>{t`
La solución anterior es corta y la respuesta es correcta, pero no está nada claro que se hayan descubierto todas las posibilidades. Además, es bastante difícil ver que hemos encontrado exactamente 52 soluciones: el lector se ve obligado a ir contando por su cuenta.

La solución de abajo cubre con claridad todos los casos posibles y no deja dudas de que el total es 52.
`}</Prose>
        <Solution kind="good">
          <MathText>{t`
Dividimos nuestra investigación en casos según la menor cifra de cada número.

**Caso 1:** La menor cifra es \(0\).

Si la menor cifra es \(0\), entonces el número debe contener un segundo \(0\). Por tanto, este caso consiste en números de la forma \(n00\), donde \(1 \leq n \leq 9\) es cualquier cifra de \(1\) a \(9\). Hay, pues, \(9\) números con menor cifra \(0\) que cumplen el enunciado.

**Caso 2:** La menor cifra es \(1\).

Si la menor cifra es \(1\), el número debe ser de la forma \(nn1\), o permutaciones de esta forma (es decir, \(n1n\) o \(1nn\)). Sin embargo, estas \(3\) permutaciones coinciden cuando \(n = 1\). Por tanto, tenemos \(3\) permutaciones para cada \(2 \leq n \leq 9\) y solo \(1\) para \(n = 1\), lo que da un total de \(1 + 3(8) = \mathbf{25}\) números con menor cifra \(1\) que cumplen el enunciado.

**Caso 3:** La menor cifra es \(2\).

Si la menor cifra es \(2\), entonces el número es de la forma \(2mn\), donde \(n = 2m\), y permutaciones de esta forma. Nuestras únicas opciones son \((m,n) = (2,4)\), que nos da \(3\) números \((224, 242, 422)\), \((m,n) = (3,6)\), que nos da \(6\) números (permutaciones de \(236\)), y \((m,n) = (4,8)\), que también nos da \(6\) números. Por tanto, hay \(3 + 6 + 6 = \mathbf{15}\) números con menor cifra \(2\).

**Caso 4:** La menor cifra es \(3\).

Hay \(3\) soluciones en este caso: \(339\), \(393\), \(933\).

**Caso 5:** La menor cifra es mayor que \(3\).

Si la menor cifra es mayor que \(3\), el menor producto que podemos formar con dos de las cifras es \(4(4) = 16\), que no es un número de una cifra. Por tanto, no hay números que cumplan el enunciado con menor cifra mayor que \(3\).

Como todo número de 3 cifras cae en exactamente uno de estos casos, concluimos que hay

$$9 + 25 + 15 + 3 = 52$$

números que cumplen el enunciado.
`}</MathText>
        </Solution>
      </Section>

      {/* ---------------- Revisa ---------------- */}
      <Section id="revisa" title="Corección">
        <Prose>{t`
Comunicr idas complejas no es facl y pude ser aun más difícl cúando no editamos la presentación de esas ideas pra nuestra audiensia. Conviene orgnizar nuestro trabajo de manras fáciles leer pra asgurarnos de que el publco capta la ida, y de que decmos lo que queremos decr.

Si yo escribiera siempre así, nadie leería nunca nada de lo que escribo.

Revisa y edita tu trabajo. Asegurarte de que has escrito de una forma que exprese tus ideas con claridad y rigor es lo segundo más importante, solo por detrás de tener la respuesta correcta.

Asegúrate de que tus ecuaciones y desigualdades usan las variables como pretendes. No quieres escribir “abc + bcd” cuando querías decir “abd + acd”. Esto no solo dificulta descifrar el resto de tu demostración, sino que también puede estropear tus propios cálculos.

Practica escribiendo demostraciones. Todos cometemos de vez en cuando errores de ortografía o de gramática, pero los efectos de los errores se multiplican y demasiados de ellos hacen ilegibles incluso buenas ideas. Recuerda que “la práctica hace al maestro”.
`}</Prose>
        <Problem>{t`
**Problema:** \(x\), \(y\) y \(z\) son números reales tales que
\[x + y + z = 5 \quad\text{y}\quad xy + yz + zx = 3.\]
Determina, con demostración, el mayor valor que puede tomar cualquiera de los tres números.
`}</Problem>
        <Prose>{t`Si todas las demostraciones estuvieran escritas tan mal, lloraría:`}</Prose>
        <Solution kind="bad">
          <MathText>{t`
Manipularemos las ecuaciones dadas para usar el hecho de que el cuadrado de cualquier número real es negativo:

$$(x + y)^2 = (5 - z)^2,$$

$$xy = 3 - z(x + y) = 3 - z(5 - z).$$

Ahora nos damos cuenta de que

$$0 \leq (x - y)^2 = (x + y)^2 - 4xy.$$

Podemos sustituir tanto \(x + y\) como \(xy\), lo que nos da una desigualdad que involucra solo la variable \(z\):

$$0 \leq (x + y)^2 - 4xy = 25 - 10z + z^2 - 12 + 20z - 4z^2 = 3z^2 + 10z + 13.$$

Como esta desigualdad se cumple para \(z\), podemos determinar todos los valores posibles de \(z\):

$$0 \geq -3z^2 + 10z + 13 = -(z + 1)(3z - 13).$$

La desigualdad se cumple cuando \(-1 \geq z \geq 13/3.\)

Como las ecuaciones dadas para \(x\), \(y\) y \(z\) se pueden manipular para dar la misma desigualdad cuadrática en \(x\), \(y\) o \(z\), cada uno tiene un mínimo de \(13/3\). Esto ocurre cuando \(x = y = 13\) y \(z = 13/3.\)
`}</MathText>
        </Solution>
        <Prose>{t`Los correctores serán más felices leyendo esta solución:`}</Prose>
        <Solution kind="good">
          <MathText>{t`
Manipularemos las ecuaciones dadas para usar el hecho de que el cuadrado de cualquier número real es no negativo:

$$(x + y)^2 = (5 - z)^2,$$

$$xy = 3 - z(x + y) = 3 - z(5 - z).$$

Ahora nos damos cuenta de que

$$0 \leq (x - y)^2 = (x + y)^2 - 4xy.$$

Podemos sustituir tanto \(x + y\) como \(xy\), lo que nos da una desigualdad que involucra solo la variable \(z\):

$$0 \leq (x + y)^2 - 4xy = 25 - 10z + z^2 - 12 + 20z - 4z^2 = -3z^2 + 10z + 13.$$

Como esta desigualdad se cumple para \(z\), podemos determinar todos los valores posibles de \(z\):

$$0 \leq -3z^2 + 10z + 13 = -(z + 1)(3z - 13).$$

La desigualdad se cumple cuando \(-1 \leq z \leq 13/3.\)

Como las ecuaciones dadas para \(x\), \(y\) y \(z\) se pueden manipular para formar esta misma desigualdad cuadrática en \(x\), \(y\) o \(z\), cada uno tiene un valor máximo posible de \(13/3\). Este máximo se alcanza cuando \(x = y = 1/3\) y \(z = 13/3.\)
`}</MathText>
        </Solution>
      </Section>

      {/* ---------------- Sujetalibros ---------------- */}
      <Section id="sujetalibros" title="Sujetalibros">
        <Prose>{t`
En nuestras oficinas tenemos varias estanterías llenas de libros de matemáticas. Cuando no hay sujetalibros en ambos extremos, con el tiempo los libros de los extremos se caen. Luego se caen más, luego más, y resulta un fastidio encontrar y sacar libros sin tirar los demás por todas partes.

De forma similar, cuando tienes una solución complicada, debes poner “sujetalibros” a tu solución para que el lector no se pierda por el medio. Empieza diciendo qué vas a hacer, luego hazlo, y después di lo que hiciste. Explicar tu método general antes de aplicarlo es especialmente importante con técnicas estándar como la reducción al absurdo o la inducción. Por ejemplo, podrías empezar con: “Demostraremos por reducción al absurdo que hay infinitos números primos. Supongamos lo contrario, que hay exactamente \(n\) primos …”.

Cuando termines tu solución, deja claro que has terminado. Enuncia el resultado final, que debería decir que has hecho exactamente lo que pedía el problema, por ejemplo: “Por tanto, hemos demostrado por reducción al absurdo que hay infinitos números primos”. También puedes decorar el final de las demostraciones con elementos como \(\mathrm{QED}\) o \(\square\) o algún otro carácter, como \(\spadesuit\).

Este es un problema de ejemplo:
`}</Prose>
        <Problem>{t`
**Problema:** Sea \(I\) el incentro del triángulo \(ABC.\) Demuestra que

$$(IA)(IB)(IC) = 4Rr^2,$$

donde \(R\) es el circunradio de \(ABC\) y \(r\) es el inradio de \(ABC.\)
`}</Problem>
        <Credit>(Problema de **Sam Vandervelde**, de la **Mandelbrot Competition**. Recuerda que el incentro de un triángulo es el centro de la circunferencia inscrita en el triángulo. El inradio es el radio de esa circunferencia. El circunradio es el radio de la circunferencia que pasa por los vértices de ABC.)</Credit>
        <Prose>{t`Como este es nuestro último problema, hemos incluido muchos de nuestros “qué no hacer” en la solución de “cómo no escribirla”. Buena suerte armando el rompecabezas.`}</Prose>
        <Solution kind="bad">
          <MathText>{t`
Del triángulo \(AIC\) tenemos \(\angle AIC = 180^\circ - \angle ACI - \angle CAI = 180^\circ - \alpha/2 - \gamma/2 = 180^\circ - (180^\circ - \beta)/2 = 90^\circ + \beta/2\) y del triángulo \(EBC\) tenemos \(\angle EBC = \angle ABC + \angle ABQ = \beta + (180^\circ - \beta) / 2 = 90^\circ + \beta/2,\) así que \(\angle AIC = \angle EBC.\) Por tanto, \(\triangle AIC \sim \triangle EBC\) por semejanza Ángulo-Ángulo. Por simetría, concluimos \(\triangle BIC \sim \triangle EAC.\) \([AIE] = (AI)(AE)/2 = (x)(by/z)/2 = bxy/2z, [AIC] = br/2,\) y \([EBC] = [AIC](BC/IC)^2 = (br/2)(a/z)^2 = a^2br/2z^2,\) así que \([EABC] = bxy/2z + br/2 + a^2br/2z^2 = axy/2z + ar/2 + ab^2r/2z^2.\) Por tanto, \((b-a)(xy/2z + r + abr/2z^2) = 0.\) Si \(b = a,\) entonces \(ab - z^2 = xyz/r\) se sigue del Teorema de Pitágoras y del Teorema de la Bisectriz. En caso contrario, \(ab - z^2 = xyz/r\) se sigue inmediatamente. Trazamos la altura \(IE\) de \(AIC.\) \([EIC] = (z^2/2) \sin \gamma = r(s-c) / 2,\) y \([ABC] = (ab/2) \sin \gamma = rs,\) así que \([(ab - z^2)/2]\sin \gamma = rc.\) Entonces la Ley de los Senos y la ecuación anterior nos dan el resultado.
`}</MathText>
        </Solution>
        <Prose>{t`Corta, fea y completamente incomprensible.`}</Prose>

        <p className="font-bold mb-2 text-foreground">Cómo escribir la solución:</p>
        <Figure src="xyz1.gif" alt="Triángulo ABC con incentro I, bisectrices exteriores en A y B que se cortan en E" />
        <Solution kind="good" title=" ">
          <MathText>{t`
Sean

\(a = BC, b = AC, c = AB\)

\(s = \frac{1}{2}(a+b+c)\)

\(\alpha = \angle BAC, \beta = \angle ABC, \gamma = \angle ACB\)

\([ABC] = \) área del polígono \(ABC\)

\(x = IA, y = IB, z = IC\)

Sea \(E\) el punto de corte de las bisectrices exteriores de los ángulos \(A\) y \(B\) del triángulo \(ABC\), como se muestra. El punto \(E\) equidista de las rectas \(AB, AC\) y \(BC\), así que también está en la bisectriz \(CI\). Demostraremos

\[
[EACB] = \frac{bxy}{2z} + \frac{br}{2} + \frac{a^2br}{2z^2} = \frac{axy}{2z} + \frac{ar}{2} + \frac{ab^2r}{2z^2} \tag{1},
\]

y

\[
\frac{1}{2}(\sin \gamma)(ab - z^2) = rc. \tag{2}
\]

A partir de \((1)\) demostraremos que \(ab - z^2 = \frac{xyz}{r},\) que combinaremos con \((2)\) y con relaciones conocidas del triángulo para demostrar el resultado deseado.

**Lema 1:** \(\triangle AIC \sim \triangle EBC\) y \(\triangle BIC \sim \triangle EAC.\)

**Demostración:** Por simetría, los dos resultados son equivalentes. Demostraremos el primero. Como \(CI\) es bisectriz de \(\angle ACB\), tenemos \(\angle ACI = \angle BCE.\) Del triángulo \(AIC\) tenemos

$$ \angle AIC = 180^\circ - \angle ACI - \angle CAI = 180^\circ - \alpha/2 - \gamma/2 = 180^\circ - (180^\circ - \beta)/2 = 90^\circ + \beta/2$$

y del triángulo \(EBC\) tenemos

$$\angle EBC = \angle ABC + \angle ABQ = \beta + (180^\circ - \beta)/2 = 90^\circ + \beta/2,$$

así que \(\angle AIC = \angle EBC.\) Por tanto, \(\triangle AIC \sim \triangle EBC\) por semejanza Ángulo-Ángulo. Por simetría, concluimos \(\triangle BIC \sim \triangle EAC. \ \spadesuit \)

**Lema 2:** \([EACB] = \dfrac{bxy}{2z} + \dfrac{br}{2} + \dfrac{a^2br}{2z^2} = \dfrac{axy}{2z} + \dfrac{ar}{2} + \dfrac{ab^2r}{2z^2}.\)

**Demostración:** Hallamos el área de \(EACB\) descomponiéndola en piezas:

$$[EACB] = [AIE] + [AIC] + [EBC]$$

Primero abordamos \([AIE]\) mostrando que es un triángulo rectángulo con catetos \(x\) y \(\frac{by}{z}\). Del Lema 1, tenemos \(\triangle BIC \sim \triangle EAC.\) Por tanto, \(\frac{AE}{IB} = \frac{AC}{IC}\), es decir,

$$AE = AC \frac{IB}{IC} = \frac{by}{z}.$$

Como \(\angle IAB = \alpha / 2\) y \(\angle BAE = (180^\circ - \alpha)/2 = 90^\circ - \alpha/2,\) tenemos \(\angle IAE = 90^\circ.\) Por tanto,

$$[AIE] = \frac{(AI)(AE)}{2} = \frac{(x)(by/z)}{2} = \frac{bxy}{2z}. \tag{3}$$

Para el triángulo \(AIC\) notamos que la altura desde \(I\) hasta \(AC\) es el inradio de \(ABC\), así que

$$[AIC] = \frac{br}{2}. \tag{4}$$

Por último, como \(\triangle AIC \sim \triangle EBC\), tenemos

$$[EBC] = [AIC]\left(\frac{BC}{IC}\right)^2 = \frac{br}{2}\left(\frac{a}{z}\right)^2 = \frac{a^2br}{2z^2}. \tag{5} $$

Sumando \((3), (4)\) y \((5)\) obtenemos

$$[EACB] = \frac{bxy}{2z} + \frac{br}{2} + \frac{a^2br}{2z^2}. \tag{6}$$

Por simetría, notamos que \([EACB]\) también es igual a nuestra expresión en \((6)\) intercambiando \(a\) y \(b\) e intercambiando \(x\) e \(y\). Por tanto, tenemos lo deseado:

$$[EACB] = \frac{bxy}{2z} + \frac{br}{2} + \frac{a^2br}{2z^2} = \frac{axy}{2z} + \frac{ar}{2} + \frac{ab^2r}{2z^2}. \ \spadesuit $$

**Lema 3:** \(ab - z^2 = \dfrac{xyz}{r}.\)

**Demostración:** Reordenar nuestro resultado del Lema 2 da

$$ \frac{bxy}{2z} + \frac{br}{2} + \frac{a^2br}{2z^2} - \frac{axy}{2z} - \frac{ar}{2} - \frac{ab^2r}{2z^2} = 0$$

$$ \left(\frac{bxy}{2z} - \frac{axy}{2z}\right) + \left(\frac{br}{2} - \frac{ar}{2}\right) + \left(\frac{a^2br}{2z^2} - \frac{ab^2r}{2z^2}\right) = 0$$

$$(b - a)\frac{xy}{2z} + (b - a)\frac{r}{2} - (b - a)\frac{abr}{2z^2} = 0$$

$$(b-a)\left(\frac{xy}{2z} + \frac{r}{2} - \frac{abr}{2z^2}\right) = 0$$

Por tanto, uno de los factores de este producto es igual a \(0\).

**Caso 1:** \(b - a = 0.\)
`}</MathText>
        </Solution>

        <Figure src="xyz2.gif" alt="Triángulo isósceles ABC con a = b, incentro I y pie D de la bisectriz desde C" />
        <Solution kind="good" title=" ">
          <MathText>{t`
Si \(b = a\), entonces \(ABC\) es isósceles y \(\alpha = \beta.\) Por tanto, la prolongación de la bisectriz \(CI\) es perpendicular a \(AB\) en el punto \(D\), como se muestra. Como \(I\) es el incentro de \(ABC\) e \(ID \perp AB\), tenemos \(ID = r\), ya que \(ID\) es un inradio de \(ABC\). Además,

$$\angle IAB = \alpha/2 = \beta/2 = \angle IBA,$$

así que \(IB = IA\) (es decir, \(x = y\)). Por tanto, la ecuación que queremos demostrar, \(ab - z^2 = \frac{xyz}{r},\) es en este caso equivalente a

$$a^2 - z^2 = \frac{x^2z}{r} \tag{7}.$$

De los triángulos rectángulos \(CAD\) e \(IAD\), tenemos

$$(c/2)^2 + r^2 = x^2 \tag{8}$$

$$(c/2)^2 + (z + r)^2 = a^2 \tag{9}.$$

El Teorema de la Bisectriz nos da \(\frac{a}{z} = \frac{AC}{CI} = \frac{AD}{DI} = \frac{c/2}{r}\), o sea,

$$\frac{c}{2} = \frac{ar}{z} \tag{10}$$

Sustituyendo \((10)\) en \((8)\) se obtiene

$$\frac{a^2r^2}{z^2} + r^2 = x^2$$

$$a^2r^2 + r^2z^2 = x^2z^2$$

$$\frac{r}{z}(a^2 + z^2) = \frac{x^2z}{r} \tag{11}$$

Sustituyendo \((10)\) en \((9)\) resulta

$$\frac{a^2r^2}{z^2} + (z+r)^2 = a^2$$

$$a^2r^2 + z^2(z + r)^2 = a^2z^2$$

$$z^2(z+r)^2 = a^2z^2 - a^2r^2$$

$$z^2(z+r)^2 = a^2(z^2 - r^2)$$

$$z^2(z+r) = a^2(z-r)$$

$$a^2r + z^2r = a^2z - z^3$$

$$\frac{r}{z}(a^2 + z^2) = a^2 - z^2 \tag{12}$$

Combinando \((11)\) y \((12)\) obtenemos lo deseado: \(a^2 - z^2 = \frac{x^2z}{r}.\)

**Caso 2:** \(\dfrac{xy}{2z} + \dfrac{r}{2} - \dfrac{abr}{2z^2} = 0.\)

Multiplicando esta ecuación por \(\frac{2z^2}{r}\) se obtiene

$$ \frac{xyz}{r} + z^2 - ab = 0,$$

de lo cual se sigue inmediatamente que \(ab - z^2 = \frac{xyz}{r}.\)

Por tanto, el lema queda demostrado. \(\spadesuit\)

**Lema 4:** \(\frac{1}{2}(\sin \gamma)(ab - z^2) = rc.\)

**Demostración:**
`}</MathText>
        </Solution>

        <Figure src="xyz3.gif" alt="Triángulo ABC con el incentro I y la perpendicular IF a BC" />
        <Solution kind="good" title=" ">
          <MathText>{t`
Trazamos la altura \(IF\) perpendicular a \(BC\), como se muestra. Usamos las siguientes relaciones conocidas del triángulo:

$$CF = s - c$$

$$[ABC] = \frac{1}{2}ab \sin \gamma = rs$$

Igual que \([ABC] = \frac{1}{2}ab \sin \gamma,\) tenemos

\begin{align*}
[CIF] &= \frac{1}{2}(CF)(IC) \sin(\gamma/2) \\
&= \frac{1}{2}z \cos(\gamma/2)(z) \sin(\gamma/2) \\
&= \frac{1}{2}z^2 \cos(\gamma/2) \sin(\gamma/2) \\
&= \frac{1}{4}z^2 \sin \gamma,
\end{align*}

donde en el último paso hemos usado \(\sin 2\gamma = 2 \sin \gamma \cos \gamma\) (aplicado al ángulo \(\gamma/2\)).

Como \(CFI\) es rectángulo, tenemos \([CFI] = \frac{1}{2}r(s-c).\) Por tanto, tenemos dos expresiones para \([ABC] - 2[CFI]\):

$$\frac{1}{2}ab \sin \gamma - 2 \cdot \frac{1}{4}z^2 \sin \gamma = rs - 2 \frac{r(s-c)}{2}$$
$$\frac{1}{2}(ab - z^2) \sin \gamma = rc,$$

como queríamos. \(\spadesuit\)

Ahora completamos nuestra demostración. Dividiendo el resultado del Lema 4 entre \(\frac{1}{2} \sin \gamma\) se obtiene

$$ab - z^2 = \frac{2rc}{\sin \gamma}.$$

Como el Lema 3 nos da \(ab - z^2 = \frac{xyz}{r}\) y la Ley de los Senos extendida nos da \(\sin \gamma = \frac{c}{2R}\), la ecuación anterior se convierte en

$$\frac{xyz}{r} = \frac{2rc}{c/2R}$$

$$\frac{xyz}{r} = 4Rr$$

$$xyz = 4Rr^2$$

Por tanto, hemos demostrado que si \(I\) es el incentro del triángulo \(ABC\), se tiene

$$(IA)(IB)(IC) = 4Rr^2,$$

donde \(R\) es el circunradio de \(ABC\) y \(r\) es el inradio de \(ABC\).

Observa que hemos demostrado algunos resultados intermedios que probablemente no hacía falta demostrar, como el hecho de que \(E\) está en la semirrecta \(CI\), cuando los resultados eran rápidos y fáciles de probar. Otros los enunciamos sin más, como \([ABC]=rs\), pues sus demostraciones son más largas y creemos que pueden citarse como resultados conocidos sin demostración.
`}</MathText>
        </Solution>

        <Prose>{t`
La demostración anterior es bastante intimidante. Lo que nuestra solución no da es ninguna pista de cómo podríamos haber llegado a ella. Si no la encontraste por tu cuenta, intenta averiguar cómo se te podría haber ocurrido ahora que la has visto.
`}</Prose>
      </Section>

      <div className="bg-muted p-6 rounded-lg">
        <p className="text-sm text-slate-800 mb-2">
          Traducción no oficial con fines educativos. Hemos corregido en la traducción algunas erratas menores del original (por ejemplo, en el desarrollo del Lema 3 de la última solución).
        </p>
        <HashLink to="/material" className="text-primary hover:underline">
          ← Volver a Material de preparación
        </HashLink>
      </div>
    </div>
  );
};

export default RedactarSolucionPage;
