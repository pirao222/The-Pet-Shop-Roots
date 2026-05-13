const WA_LINK = `https://wa.me/5561998512002?text=${encodeURIComponent('Olá! Gostaria de agendar um serviço.')}`;

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Apresentação"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600&q=80&auto=format&fit=crop"
          alt="Cachorro feliz e saudável"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchpriority="high"
        />
        {/* Multi-layer overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-moss-900/80 via-moss-800/65 to-moss-700/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-moss-950/60 via-transparent to-transparent" />
        {/* Decorative organic shapes */}
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-moss-600/20 blur-3xl" aria-hidden="true" />
        <div className="absolute top-20 -right-20 h-96 w-96 rounded-full bg-terra-500/15 blur-3xl" aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-32 sm:px-8 sm:py-36 lg:py-44">
        <div className="max-w-3xl">

          {/* Badge */}
          <span
            className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-beige-200 ring-1 ring-white/20 mb-6"
            aria-label="Pet Shop localizado no Noroeste, Brasília"
          >
            🌿 Noroeste · Brasília
          </span>

          {/* Headline */}
          <h1 className="animate-fade-up delay-100 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Cuidado de raiz para<br />
            <span className="text-terra-300 italic">quem você ama</span>
          </h1>

          <p className="animate-fade-up delay-200 mt-6 max-w-xl text-base leading-relaxed text-beige-200 sm:text-lg">
            No <strong className="text-white font-semibold">The Pet Shop Roots</strong> seu pet recebe banho, tosa e creche com toda atenção e carinho que merece — num ambiente seguro, natural e acolhedor.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-300 mt-9 flex flex-wrap gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 shadow-xl"
              aria-label="Agendar serviço pelo WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar agora
            </a>
            <a href="#servicos" className="btn-outline-white text-base px-8 py-4">
              Ver serviços
            </a>
          </div>

          {/* Social proof pills */}
          <div className="animate-fade-up delay-400 mt-12 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-2" aria-hidden="true">
              {['🐶','🐱','🐾','😊'].map((emoji, i) => (
                <span key={i} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur text-lg ring-2 ring-white/40">
                  {emoji}
                </span>
              ))}
            </div>
            <p className="text-sm text-beige-200 font-medium">
              +500 pets atendidos com amor ❤️
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
        <svg className="h-6 w-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
