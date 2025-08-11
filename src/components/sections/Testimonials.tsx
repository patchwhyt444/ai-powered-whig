const Testimonials = () => {
  const items = [
    {
      quote:
        "WHIG helped me acquire two rentals in Fayetteville that cash flow from day one. Professional and fast!",
      name: "Marcus R.",
    },
    {
      quote:
        "Their fix-and-flip guidance took the guesswork out. We sold above list in a week.",
      name: "Danielle K.",
    },
    {
      quote: "Incredible investor-focused agents. The JV network is unmatched.",
      name: "Jorge S.",
    },
  ];

  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-3xl font-bold">What Investors Say</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <article key={i} className="rounded-xl border bg-card p-6 shadow-[var(--shadow-soft)]">
            <p className="text-base">“{t.quote}”</p>
            <p className="mt-4 text-sm text-muted-foreground">{t.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
