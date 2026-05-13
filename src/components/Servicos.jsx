const WA_BASE = `https://wa.me/5561998512002?text=`;

const SERVICES = [
  {
    id: 'banho',
    emoji: '🛁',
    title: 'Banho',
    subtitle: 'Higiene & bem-estar',
    desc: 'Banho completo com produtos naturais premium. Inclui lavagem, condicionamento, secagem profissional e perfume especial. Seu pet sai cheiroso e com pelo brilhante.',
    features: ['Produtos hipoalergênicos', 'Secagem cuidadosa', 'Limpeza de ouvidos', 'Corte de unhas'],
    color: 'from-moss-600 to-moss-700',
    accent: 'bg-moss-50 text-moss-700 ring-moss-200',
    btnMsg: 'Olá! Gostaria de agendar um Banho para o meu pet.',
    highlight: false,
  },
  {
    id: 'tosa',
    emoji: '✂️',
    title: 'Tosa',
    subtitle: 'Estilo & cuidado',
    desc: 'Tosa artística ou higiênica realizada por tosadores experientes. Deixamos seu pet elegante, confortável e saudável — de acordo com a raça e preferências.',
    features: ['Tosa artística', 'Tosa higiênica', 'Acabamento perfeito', 'Consultoria de estilo'],
    color: 'from-terra-500 to-terra-600',
    accent: 'bg-terra-50 text-terra-700 ring-terra-200',
    btnMsg: 'Olá! Gostaria de agendar uma Tosa para o meu pet.',
    highlight: true,
  },
  {
    id: 'creche',
    emoji: '🏡',
    title: 'Creche',
    subtitle: 'Diversão & segurança',
    desc: 'Ambiente seguro e estimulante para seu pet enquanto você trabalha. Socialização supervisionada, atividades lúdicas, alimentação e muito carinho o dia todo.',
    features: ['Monitoramento constante', 'Socialização guiada', 'Área de brincadeiras', 'Relatório diário'],
    color: 'from-beige-500 to-beige-600',
    accent: 'bg-beige-50 text-beige-700 ring-beige-200',
    btnMsg: 'Olá! Gostaria de saber mais sobre a Creche para o meu pet.',
    highlight: false,
  },
];

function ServiceCard({ service }) {
  const waLink = WA_BASE + encodeURIComponent(service.btnMsg);
  return (
    <article
      aria-label={`Serviço: ${service.title}`}
      className={`card-service overflow-hidden group ${service.highlight ? 'ring-2 ring-terra-400 shadow-xl' : ''}`}
    >
      {/* Popular badge */}
      {service.highlight && (
        <div className="absolute top-0 right-0 bg-terra-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl" aria-label="Serviço mais popular">
          ⭐ Mais popular
        </div>
      )}

      {/* Colored header strip */}
      <div className={`-mx-8 -mt-8 mb-6 h-2 bg-gradient-to-r ${service.color}`} aria-hidden="true" />

      {/* Icon + Title */}
      <div className="flex items-start gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl ${service.accent} ring-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
          aria-hidden="true"
        >
          {service.emoji}
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-moss-800">{service.title}</h3>
          <p className="text-xs font-semibold uppercase tracking-widest text-moss-500 mt-0.5">{service.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-moss-600">{service.desc}</p>

      {/* Features list */}
      <ul className="mt-5 space-y-2" role="list" aria-label={`Incluído no ${service.title}`}>
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-moss-700">
            <svg className="h-4 w-4 text-moss-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className={service.highlight ? 'btn-primary w-full' : 'btn-secondary w-full'}
          aria-label={`Agendar ${service.title} pelo WhatsApp`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Agendar agora
        </a>
      </div>
    </article>
  );
}

export default function Servicos() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-heading"
      className="bg-beige-100 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-moss-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-moss-700 mb-4">
            Nossos serviços
          </span>
          <h2 id="servicos-heading" className="section-title">
            Tudo que seu pet<br />
            <span className="text-terra-500 italic">precisa e merece</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Escolha o serviço ideal para o seu companheiro e agende em instantes pelo WhatsApp.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => <ServiceCard key={s.id} service={s} />)}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-moss-500 mb-4">Dúvidas sobre qual serviço escolher?</p>
          <a
            href={`https://wa.me/5561998512002?text=${encodeURIComponent('Olá! Gostaria de tirar dúvidas sobre os serviços.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="Falar com especialista pelo WhatsApp"
          >
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}
