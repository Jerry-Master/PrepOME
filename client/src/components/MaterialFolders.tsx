import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

export interface MaterialFolder<T> {
  id: string;
  /** Título bajo la carpeta, p. ej. "Curso 2026–27" */
  title: string;
  /** Texto corto en la tapa de la carpeta, p. ej. "26–27" */
  badge: string;
  /** Subtítulo en la cabecera del panel abierto */
  subtitle?: string;
  /** Qué asoma de la carpeta: hojas con fórmulas o libros de tapa dura */
  kind?: 'papers' | 'books';
  items: T[];
}

interface MaterialFoldersProps<T> {
  folders: MaterialFolder<T>[];
  /** Cómo pintar cada material (se reutiliza la tarjeta MaterialItem) */
  renderItem: (item: T, index: number) => React.ReactNode;
  /** Carpeta abierta al cargar la página (opcional) */
  defaultOpenId?: string | null;
}

const CLOSE_MS = 320;

// Fórmulas que asoman en las hojas: cada carpeta de curso usa un juego distinto
const FORMULA_SETS: string[][] = [
  ['∑ 1/n² = π²/6', 'n! > 2ⁿ', 'a² + b² = c²', '(a+b)² ≥ 4ab'],
  ['φ² = φ + 1', '√2 ∉ ℚ', 'p | ab ⇒ p | a', 'Fₙ₊₂ = Fₙ₊₁ + Fₙ'],
  ['1 + 2 + … + n = n(n+1)/2', 'C(n,k) = C(n,n−k)', 'x + 1/x ≥ 2', 'aᵖ ≡ a (mod p)'],
];

function MaterialFolders<T>({ folders, renderItem, defaultOpenId = null }: MaterialFoldersProps<T>) {
  const visible = folders.filter((f) => f.items.length > 0);
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);
  const [closing, setClosing] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const close = () => {
    if (!openId || closing) return;
    setClosing(true);
    timer.current = window.setTimeout(() => {
      setOpenId(null);
      setClosing(false);
    }, CLOSE_MS);
  };

  const toggle = (id: string) => {
    if (closing) return;
    if (openId === id) close();
    else setOpenId(id);
  };

  let paperIdx = 0;
  const open = visible.find((f) => f.id === openId);

  return (
    <div className="flex flex-col gap-7">
      <div className="folder-grid">
        {visible.map((f) => {
          const isOpen = f.id === openId && !closing;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => toggle(f.id)}
              aria-expanded={f.id === openId}
              aria-label={`${f.title} (${f.items.length} materiales)`}
              aria-controls={`folder-panel-${f.id}`}
              className={`folder group flex flex-col text-left rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 ${isOpen ? 'is-open' : ''}`}
            >
              <div className="folder-art" aria-hidden="true">
                <div className="folder-tab bg-primary" />
                <div className="folder-back bg-primary" />
                {f.kind === 'books' ? (
                  <div className="folder-books">
                    <div className="folder-book folder-book-1"><b /></div>
                    <div className="folder-book folder-book-2"><b /></div>
                    <div className="folder-book folder-book-3"><b /></div>
                  </div>
                ) : (
                  (() => {
                    const [a, b, c, d] = FORMULA_SETS[paperIdx++ % FORMULA_SETS.length];
                    return (
                      <>
                        <div className="folder-paper folder-paper-1">
                          <span className="folder-fx folder-fx-a text-primary">{a}</span>
                          <span className="folder-fx folder-fx-b" style={{ color: '#c2553f' }}>{b}</span>
                        </div>
                        <div className="folder-paper folder-paper-2">
                          <span className="folder-fx folder-fx-c text-primary">{c}</span>
                          <span className="folder-fx folder-fx-d" style={{ color: '#2f7a5b' }}>{d}</span>
                        </div>
                      </>
                    );
                  })()
                )}
                <div className="folder-front bg-primary">
                  <span className="folder-badge text-primary-foreground">{f.badge}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {open && (
        <div
          key={open.id}
          id={`folder-panel-${open.id}`}
          className={`folder-panel flex flex-col gap-5 ${closing ? 'is-closing' : ''}`}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-heading font-bold text-xl leading-tight">{open.title}</h3>
              {open.subtitle && <p className="text-sm text-muted-foreground">{open.subtitle}</p>}
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar carpeta"
              title="Cerrar carpeta"
              className="inline-flex items-center justify-center h-9 px-3 rounded-md border bg-background hover:bg-muted transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="folder-cards">
            {open.items.map((item, i) => (
              <div key={i} className="folder-card" style={{ animationDelay: `${90 + i * 70}ms` }}>
                {renderItem(item, i)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MaterialFolders;
