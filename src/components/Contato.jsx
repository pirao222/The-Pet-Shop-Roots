import { useState } from 'react';

const WA_LINK = `https://wa.me/5561998512002?text=`;

export default function Contato() {
  const [form, setForm] = useState({ nome: '', pet: '', servico: '', mensagem: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.nome.trim()) e.nome = 'Por favor, informe seu nome.';
    if (!form.pet.trim()) e.pet = 'Por favor, informe o nome do seu pet.';
    if (!form.servico) e.servico = 'Selecione um serviço.';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    const msg = `Olá! Me chamo ${form.nome} e gostaria de agendar ${form.servico} para o meu pet ${form.pet}.${form.mensagem ? ' ' + form.mensagem : ''}`;
    window.open(WA_LINK + encodeURIComponent(msg), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleChange = (field) => (ev) => {
    setForm((p) => ({ ...p, [field]: ev.target.value }));
    setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const inputCls = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-moss-800 placeholder-moss-400 shadow-sm
     transition-all duration-200 outline-none min-h-[44px]
     focus:ring-2 focus:ring-moss-500 focus:border-moss-500
     ${errors[field] ? 'border-terra-400 ring-1 ring-terra-300' : 'border-moss-200 hover:border-moss-300'}`;

  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="bg-beige-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left: Info */}
          <div>
            <span className="inline-block rounded-full bg-moss-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-moss-700 mb-4">
              Fale conosco
            </span>
            <h2 id="contato-heading" className="section-title">
              Pronto para agendar?<br />
              <span className="text-terra-500 italic">Estamos aqui!</span>
            </h2>
            <p className="section-subtitle max-w-sm">
              Preencha o formulário e redirecionaremos você direto para o nosso WhatsApp com todas as informações.
            </p>

            {/* Contact details */}
            <ul className="mt-8 space-y-5" role="list" aria-label="Informações de contato">
              <li className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xl" aria-hidden="true">
                  💬
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-moss-500 font-semibold">WhatsApp</p>
                  <a
                    href={`https://wa.me/5561998512002`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-moss-800 hover:text-terra-600 transition-colors"
                  >
                    +55 61 99851-2002
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-xl" aria-hidden="true">
                  📸
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-moss-500 font-semibold">Instagram</p>
                  <a
                    href="https://instagram.com/thepetshoproots"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-moss-800 hover:text-terra-600 transition-colors"
                  >
                    @thepetshoproots
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-beige-200 text-xl" aria-hidden="true">
                  📍
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-moss-500 font-semibold">Endereço</p>
                  <address className="not-italic text-sm font-semibold text-moss-800 leading-snug">
                    SHCNW CRNW Quadra 510 Bloco A,<br />
                    Loja 10 Edif. Sunset – Noroeste<br />
                    Brasília, DF · 70688-100
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Form */}
          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-moss-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                <span className="text-6xl animate-wiggle" aria-hidden="true">🐾</span>
                <h3 className="font-display text-2xl font-bold text-moss-800">Ótimo! Vamos conversar!</h3>
                <p className="text-sm text-moss-600 max-w-xs">
                  Você será redirecionado para o WhatsApp. Aguardamos você lá!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ nome: '', pet: '', servico: '', mensagem: '' }); }}
                  className="btn-secondary mt-2"
                >
                  Novo agendamento
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Formulário de agendamento">
                <h3 className="font-display text-xl font-bold text-moss-800 mb-6">Solicitar agendamento</h3>

                <div className="space-y-4">
                  {/* Nome */}
                  <div>
                    <label htmlFor="nome" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-moss-600">
                      Seu nome <span className="text-terra-500" aria-label="campo obrigatório">*</span>
                    </label>
                    <input
                      id="nome"
                      type="text"
                      autoComplete="name"
                      placeholder="Ex.: Maria Silva"
                      value={form.nome}
                      onChange={handleChange('nome')}
                      className={inputCls('nome')}
                      aria-required="true"
                      aria-describedby={errors.nome ? 'erro-nome' : undefined}
                      aria-invalid={!!errors.nome}
                    />
                    {errors.nome && (
                      <p id="erro-nome" role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-terra-500">
                        <svg className="h-3 w-3 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                        </svg>
                        {errors.nome}
                      </p>
                    )}
                  </div>

                  {/* Pet */}
                  <div>
                    <label htmlFor="pet" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-moss-600">
                      Nome do pet <span className="text-terra-500" aria-label="campo obrigatório">*</span>
                    </label>
                    <input
                      id="pet"
                      type="text"
                      placeholder="Ex.: Rex, Luna, Bolinha..."
                      value={form.pet}
                      onChange={handleChange('pet')}
                      className={inputCls('pet')}
                      aria-required="true"
                      aria-describedby={errors.pet ? 'erro-pet' : undefined}
                      aria-invalid={!!errors.pet}
                    />
                    {errors.pet && (
                      <p id="erro-pet" role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-terra-500">
                        <svg className="h-3 w-3 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                        </svg>
                        {errors.pet}
                      </p>
                    )}
                  </div>

                  {/* Serviço */}
                  <div>
                    <label htmlFor="servico" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-moss-600">
                      Serviço desejado <span className="text-terra-500" aria-label="campo obrigatório">*</span>
                    </label>
                    <select
                      id="servico"
                      value={form.servico}
                      onChange={handleChange('servico')}
                      className={inputCls('servico') + ' cursor-pointer'}
                      aria-required="true"
                      aria-describedby={errors.servico ? 'erro-servico' : undefined}
                      aria-invalid={!!errors.servico}
                    >
                      <option value="">Selecione um serviço...</option>
                      <option value="Banho">🛁 Banho</option>
                      <option value="Tosa">✂️ Tosa</option>
                      <option value="Banho + Tosa">✨ Banho + Tosa</option>
                      <option value="Creche">🏡 Creche</option>
                    </select>
                    {errors.servico && (
                      <p id="erro-servico" role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-terra-500">
                        <svg className="h-3 w-3 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                        </svg>
                        {errors.servico}
                      </p>
                    )}
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="mensagem" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-moss-600">
                      Observações <span className="text-moss-400 font-normal normal-case tracking-normal">(opcional)</span>
                    </label>
                    <textarea
                      id="mensagem"
                      rows={3}
                      placeholder="Raça, tamanho, alguma necessidade especial..."
                      value={form.mensagem}
                      onChange={handleChange('mensagem')}
                      className={`${inputCls('mensagem')} min-h-[88px] resize-none`}
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full mt-6 text-base py-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enviar via WhatsApp
                </button>

                <p className="mt-3 text-center text-xs text-moss-400">
                  Ao enviar, você será redirecionado para o WhatsApp.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
