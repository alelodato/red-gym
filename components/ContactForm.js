export default function ContactForm() {
  return (
    <form className="rounded-3xl border border-brand-divider/30 bg-brand-white p-8 shadow-soft">
      <p className="font-heading text-2xl">Richiedi informazioni</p>
      <p className="mt-2 text-sm text-brand-black/70">Compila i campi, ti ricontattiamo.</p>

      <div className="mt-6 grid gap-4">
        <input
          className="w-full rounded-2xl border border-brand-divider/30 px-4 py-3 outline-none focus:border-brand-red"
          placeholder="Nome"
          name="name"
        />
        <input
          className="w-full rounded-2xl border border-brand-divider/30 px-4 py-3 outline-none focus:border-brand-red"
          placeholder="Email"
          name="email"
          type="email"
        />
        <input
          className="w-full rounded-2xl border border-brand-divider/30 px-4 py-3 outline-none focus:border-brand-red"
          placeholder="Telefono (opzionale)"
          name="phone"
        />
        <textarea
          className="min-h-[140px] w-full rounded-2xl border border-brand-divider/30 px-4 py-3 outline-none focus:border-brand-red"
          placeholder="Messaggio"
          name="message"
        />
      </div>

      <button className="mt-6 w-full rounded-full bg-brand-red px-6 py-3 font-semibold text-brand-white hover:bg-brand-redDark">
        Invia
      </button>

      <p className="mt-3 text-xs text-brand-black/50">
        (UI pronta: poi lo colleghiamo a email/Web3Forms/Resend.)
      </p>
    </form>
  );
}
