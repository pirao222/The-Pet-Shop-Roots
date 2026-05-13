const HORARIOS = [
  { dia: 'Segunda – Sexta', hora: '08:00 – 18:00' },
  { dia: 'Sábado',          hora: '08:00 – 16:00' },
  { dia: 'Domingo',         hora: 'Fechado' },
];

const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.4!2d-47.9165!3d-15.7477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3af4e5b7a9c5%3A0x0!2sSHCNW%20CRNW%20Quadra%20510%20Bloco%20A%20Loja%2010%2C%20Noroeste%2C%20Bras%C3%ADlia%2C%20DF%2C%2070688-100!5e0!3m2!1spt-BR!2sbr!4v1700000000000';

export default function Localizacao() {
  return (
    <section
      id="localizacao"
      aria-labelledby="localizacao-heading"
      className="bg-beige-100 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-moss-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-moss-700 mb-4">
            Onde estamos
          </span>
          <h2 id="localizacao-heading" className="section-title">
            Localização &<br />
            <span className="text-terra-500 italic">Horários</span>
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Estamos no coração do Noroeste, em Brasília. Fácil acesso e estacionamento disponível!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10 items-start">

          {/* Map */}
          <div className="lg:col-span-3 overflow-hidden rounded-3xl shadow-xl ring-1 ring-moss-200">
            <iframe
              title="Localização The Pet Shop Roots no Google Maps"
              src={MAPS_EMBED}
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Mapa mostrando a localização do The Pet Shop Roots no Noroeste, Brasília"
            />
          </div>

          {/* Info panel */}
          <aside className="lg:col-span-2 flex flex-col gap-6">

            {/* Address card */}
            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-moss-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-terra-100 text-2xl" aria-hidden="true">
                  📍
                </span>
                <h3 className="font-semibold text-moss-800">Endereço completo</h3>
              </div>
              <address className="not-italic text-sm text-moss-600 leading-relaxed">
                SHCNW CRNW Quadra 510 Bloco A,<br />
                Loja 10 Edif. Sunset<br />
                <strong className="text-moss-700">Noroeste – Brasília, DF</strong><br />
                CEP: 70688-100
              </address>
              <a
                href="https://maps.google.com/?q=SHCNW+CRNW+Quadra+510+Bloco+A+Loja+10+Noroeste+Brasilia"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-moss-600 hover:text-terra-600 transition-colors"
                aria-label="Abrir endereço no Google Maps"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Abrir no Google Maps
              </a>
            </div>

            {/* Hours card */}
            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-moss-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-moss-100 text-2xl" aria-hidden="true">
                  🕐
                </span>
                <h3 className="font-semibold text-moss-800">Horários de funcionamento</h3>
              </div>
              <dl className="space-y-2.5">
                {HORARIOS.map(({ dia, hora }) => (
                  <div key={dia} className="flex items-center justify-between text-sm">
                    <dt className="text-moss-600">{dia}</dt>
                    <dd className={`font-semibold ${hora === 'Fechado' ? 'text-terra-500' : 'text-moss-800'}`}>
                      {hora}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Quick action */}
            <a
              href={`https://wa.me/5561998512002?text=${encodeURIComponent('Olá! Gostaria de agendar um serviço.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center w-full"
              aria-label="Agendar agora pelo WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar pelo WhatsApp
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
