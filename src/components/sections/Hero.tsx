import { Button } from "@/components/ui/button";
import renovationHero from "@/assets/renovation-hero.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <img src={renovationHero} alt="Home being renovated background" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25" aria-hidden />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,hsl(var(--brand-gold)/0.2),transparent)]" />
      <div className="container grid md:grid-cols-2 gap-10 py-16 md:py-24 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Empowering Investors. Maximizing Returns.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            At White House Investment Group, we as licensed realtors empower both new and experienced investors to achieve exceptional returns through strategic real estate investing. Our expertise spans fix & flips, long-term rentals, short- and mid-term rentals, multi-family, and commercial investments.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild variant="gold" size="xl">
              <a href="#book">Book a Consultation</a>
            </Button>
            <Button asChild variant="goldOutline" size="xl">
              <a href="#investing">Explore Services</a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-xl border p-6 shadow-[var(--shadow-soft)] bg-card">
            <h3 className="text-xl font-semibold">Seller Services</h3>
            <p className="mt-2 text-muted-foreground">
              Need to sell your property fast in NC? We help distressed owners with fair, fast solutions.
            </p>
            <div className="mt-6">
              <Button asChild variant="gold" size="lg">
                <a href="/sell-fast">Learn about selling fast</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
