import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const JSONP_ACTION = 'https://preparaomegrx.us2.list-manage.com/subscribe/post-json?u=1fcc04006e8055ccd913fda88&id=9004e6385b&f_id=00e7abe0f0';

function translateMailchimpMsg(msg: string, email: string): string {
  const clean = msg.replace(/<[^>]*>/g, '').replace(/^\d+\s*-\s*/, '').trim().toLowerCase();
  if (clean.includes('invalid email address')) return `El correo ${email} es inválido.`;
  if (clean.includes('already subscribed') || clean.includes('is already a list member')) return `El correo ${email} ya está suscrito.`;
  return 'No se pudo completar la suscripción. Verifica los datos e inténtalo de nuevo.';
}

function subscribeViaJsonp(form: HTMLFormElement): Promise<{ result: string; msg: string }> {
  return new Promise((resolve, reject) => {
    const callbackName = `mc_jsonp_${Date.now()}`;
    const params = new URLSearchParams();
    new FormData(form).forEach((value, key) => params.append(key, value as string));
    params.set('c', callbackName);

    const script = document.createElement('script');
    script.src = `${JSONP_ACTION}&${params.toString()}`;

    const cleanup = () => {
      delete (window as any)[callbackName];
      script.remove();
    };

    (window as any)[callbackName] = (data: { result: string; msg: string }) => {
      resolve(data);
      cleanup();
    };
    script.onerror = () => {
      reject(new Error('network error'));
      cleanup();
    };

    document.body.appendChild(script);
  });
}

const SubscriptionBanner: React.FC = () => {
  const [emailError, setEmailError] = useState(false);
  const [serverMessage, setServerMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('EMAIL') as HTMLInputElement).value;

    if (!EMAIL_REGEX.test(email)) {
      setEmailError(true);
      setServerMessage(null);
      return;
    }
    setEmailError(false);
    setServerMessage(null);
    setSubmitting(true);

    try {
      const data = await subscribeViaJsonp(form);
      if (data.result === 'success') {
        setServerMessage({ type: 'success', text: '¡Gracias por suscribirte!' });
        form.reset();
      } else {
        setEmailError(true);
        setServerMessage({ type: 'error', text: translateMailchimpMsg(data.msg, email) });
      }
    } catch {
      setServerMessage({ type: 'error', text: 'No se pudo enviar el formulario. Inténtalo de nuevo.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="subscription" className="scroll-mt-20 bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">Mantente informado</h2>
          <p className="text-white text-opacity-90">Recibe actualizaciones, materiales y fechas importantes de la preparación de olimpiadas.</p>
        </div>

        <form
          className="flex flex-col gap-4 validate max-w-md mx-auto"
          action="https://preparaomegrx.us2.list-manage.com/subscribe/post?u=1fcc04006e8055ccd913fda88&amp;id=9004e6385b&amp;f_id=00e7abe0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          onSubmit={handleSubmit}
        >
          <div>
            <Input
              type="email"
              name="EMAIL"
              placeholder="Tu correo electrónico"
              className={cn(
                'px-4 py-3 rounded-lg w-full border-0 focus:ring-2 focus:ring-[#f57c00]',
                emailError && 'ring-2 ring-red-500 focus:ring-red-500'
              )}
              onChange={() => {
                if (emailError) setEmailError(false);
                if (serverMessage) setServerMessage(null);
              }}
              required
            />
            {emailError && !serverMessage && (
              <p className="text-red-200 text-xs mt-1 ml-1">Introduce un correo electrónico válido.</p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              name="FNAME"
              placeholder="Nombre"
              className="px-4 py-3 rounded-lg w-full border-0 focus:ring-2 focus:ring-[#f57c00]"
              required
            />
            <Input
              type="text"
              name="LNAME"
              placeholder="Apellidos"
              className="px-4 py-3 rounded-lg w-full border-0 focus:ring-2 focus:ring-[#f57c00]"
              required
            />
          </div>
          <Input
            type="text"
            name="MMERGE3"
            placeholder="Instituto"
            className="px-4 py-3 rounded-lg w-full border-0 focus:ring-2 focus:ring-[#f57c00]"
            required
          />
          <select
            name="MMERGE4"
            defaultValue=""
            required
            className="px-4 py-3 rounded-lg w-full border-0 focus:ring-2 focus:ring-[#f57c00] text-foreground"
          >
            <option value="">Curso</option>
            <option value="2º Bachillerato">2º Bachillerato</option>
            <option value="1º Bachillerato">1º Bachillerato</option>
            <option value="4º ESO">4º ESO</option>
            <option value="3º ESO">3º ESO</option>
            <option value="2º ESO">2º ESO</option>
            <option value="1º ESO">1º ESO</option>
          </select>
          {/* Campo oculto anti-spam */}
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input
              type="text"
              name="b_1fcc04006e8055ccd913fda88_9004e6385b"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
          {serverMessage && (
            <p className={cn('text-xs text-center', serverMessage.type === 'error' ? 'text-red-200' : 'text-green-200')}>
              {serverMessage.text}
            </p>
          )}
          <Button
            type="submit"
            disabled={submitting}
            className="bg-[#f57c00] hover:bg-[#ffad42] text-white font-bold py-3 px-6 rounded-lg shadow self-center disabled:opacity-60"
          >
            {submitting ? 'Enviando...' : 'Suscribirme'}
          </Button>
        </form>
        <p className="text-center text-white text-opacity-70 text-sm mt-4">
          Nos comprometemos a proteger tus datos y no enviar spam.
        </p>
      </div>
    </section>
  );
};

export default SubscriptionBanner;
