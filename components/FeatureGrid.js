export default function FeatureGrid() {
  const cards = [
    {
      title: "Guidati da professionisti",
      text: "Programmi personalizzati, tecnica corretta e motivazione costante per risultati reali.",
      img: "card1.jpg",
    },
    {
      title: "Palestra completa e dinamica",
      text: "Sala pesi, attrezzature moderne, area cardio e functional. Spazi per ogni disciplina.",
      img: "card2.jpg",
    },
    {
      title: "Allenati con la community",
      text: "Un ambiente serio, energico e stimolante. Qui non molli a metà.",
      img: "card3.jpg",
    },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {cards.map((c, idx) => (
        <div
          key={c.title}
          className={`overflow-hidden rounded-xl shadow-soft ${idx === 1 ? "bg-brand-red text-white" : "bg-white"}`}
        >
          <div className="relative h-48">
            <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/15" />
          </div>
          <div className="p-6">
            <h3 className="font-heading uppercase tracking-wide text-xl">{c.title}</h3>
            <p className={`mt-3 text-sm leading-relaxed ${idx === 1 ? "text-white/85" : "text-black/70"}`}>
              {c.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
