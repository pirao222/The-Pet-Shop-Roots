const ITEMS = [
  {
    icon: '🏆',
    title: 'Equipe qualificada',
    desc: 'Profissionais treinados e apaixonados por animais, com anos de experiência no cuidado com pets.',
  },
  {
    icon: '🛡️',
    title: 'Ambiente seguro',
    desc: 'Espaço higienizado, climatizado e projetado para o conforto e a segurança do seu pet.',
  },
  {
    icon: '🌿',
    title: 'Produtos premium',
    desc: 'Utilizamos apenas produtos naturais, dermatologicamente testados e seguros para sua família.',
  },
  {
    icon: '📅',
    title: 'Agendamento fácil',
    desc: 'Marque pelo WhatsApp em segundos. Horários flexíveis para se adaptar à sua rotina.',
  },
  {
    icon: '❤️',
    title: 'Cuidado individualizado',
    desc: 'Cada pet é único. Adaptamos nossos serviços às necessidades específicas do seu companheiro.',
  },
  {
    icon: '🔔',
    title: 'Atualizações em tempo real',
    desc: 'Você recebe fotos e atualizações do seu pet durante a estadia. Nunca fique sem notícias!',
  },
];

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-heading"
      className="bg-moss-800 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-moss-700 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-beige-300 mb-4">
            Por que escolher a Roots
          </span>
          <h2 id="diferenciais-heading" className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Diferenciais que fazem<br />
            <span className="text-terra-300 italic">toda a diferença</span>
          </h2>
          <p className="section-subtitle mt-4 text-beige-300 max-w-2xl mx-auto">
            Combinamos expertise profissional com amor genuíno pelos animais para entregar uma experiência única.
          </p>
        </div>

        {/* Grid */}
        <ul
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Lista de diferenciais"
        >
          {ITEMS.map((item, i) => (
            <li
              key={item.title}
              className="group relative flex gap-4 rounded-2xl bg-moss-700/50 p-6 ring-1 ring-moss-600/50
                         transition-all duration-300 hover:bg-moss-700 hover:ring-moss-500 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-moss-600 text-2xl
                           transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                aria-hidden="true"
              >
                {item.icon}
              </div>
              {/* Text */}
              <div>
                <h3 className="font-semibold text-white text-base">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-beige-300/90">{item.desc}</p>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-terra-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
