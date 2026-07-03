type HeroCard = {
  title: string;
  description: string;
  className?: string;
};

type HeroCardsProps = {
  cards: HeroCard[];
};

export function HeroCards({ cards }: HeroCardsProps) {
  return (
    <div className="relative hidden lg:flex items-center justify-center">
      <div className="relative h-[520px] w-full max-w-[520px]">
        {cards.map((card) => (
          <HeroCard
            key={card.title}
            title={card.title}
            description={card.description}
            className={card.className}
          />
        ))}
      </div>
    </div>
  );
}

type HeroCardProps = HeroCard;

function HeroCard({ title, description, className = "" }: HeroCardProps) {
  return (
    <div
      className={`absolute w-72 rounded-3xl border border-subtle bg-surface/90 p-6 shadow-xl shadow-[color:var(--color-primary-light)]/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${className}`}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light">
        <div className="h-5 w-5 rounded-full bg-primary" />
      </div>

      <h3 className="text-lg font-semibold text-primary">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-secondary">{description}</p>
    </div>
  );
}
