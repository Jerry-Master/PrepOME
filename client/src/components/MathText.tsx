import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Delimitadores admitidos: $$...$$, \[...\] y \begin{align*}...\end{align*} (fórmula en línea propia), \(...\) (fórmula en el texto).
// En el texto, **negrita** y __cursiva__. Las líneas en blanco separan párrafos.
const MATH_RE = /\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\)|(\\begin\{(align|equation)\*?\}[\s\S]+?\\end\{\5\*?\})/g;

const renderMath = (tex: string, displayMode: boolean) =>
  katex.renderToString(tex, { displayMode, throwOnError: false, strict: 'ignore' });

const renderInlineText = (text: string, keyPrefix: string) =>
  text.split(/(\*\*[\s\S]+?\*\*|__[\s\S]+?__)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('__') && part.endsWith('__') && part.length > 4) {
      return <em key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</em>;
    }
    return <React.Fragment key={`${keyPrefix}-${i}`}>{part}</React.Fragment>;
  });

type Inline = { kind: 'text' | 'math'; value: string };

interface MathTextProps {
  children: string;
  className?: string;
}

const MathText: React.FC<MathTextProps> = ({ children, className = '' }) => {
  const blocks: React.ReactNode[] = [];
  let inline: Inline[] = [];

  const flushParagraph = () => {
    const hasContent = inline.some(item => item.kind === 'math' || item.value.trim() !== '');
    if (hasContent) {
      const key = blocks.length;
      blocks.push(
        <p key={key} className="mb-4 leading-relaxed">
          {inline.map((item, i) =>
            item.kind === 'math' ? (
              <span key={i} dangerouslySetInnerHTML={{ __html: item.value }} />
            ) : (
              <React.Fragment key={i}>{renderInlineText(item.value, `${key}-${i}`)}</React.Fragment>
            )
          )}
        </p>
      );
    }
    inline = [];
  };

  const pushText = (text: string) => {
    const paragraphs = text.split(/\n[ \t]*\n/);
    paragraphs.forEach((chunk, i) => {
      if (i > 0) flushParagraph();
      if (chunk !== '') inline.push({ kind: 'text', value: chunk.replace(/\s*\n\s*/g, ' ') });
    });
  };

  let last = 0;
  for (const match of Array.from(children.matchAll(MATH_RE))) {
    pushText(children.slice(last, match.index));
    last = (match.index ?? 0) + match[0].length;

    if (match[3] !== undefined) {
      inline.push({ kind: 'math', value: renderMath(match[3], false) });
    } else {
      flushParagraph();
      blocks.push(
        <div
          key={blocks.length}
          className="mb-4 overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: renderMath((match[1] ?? match[2] ?? match[4]).trim(), true) }}
        />
      );
    }
  }
  pushText(children.slice(last));
  flushParagraph();

  return <div className={className}>{blocks}</div>;
};

export default MathText;
