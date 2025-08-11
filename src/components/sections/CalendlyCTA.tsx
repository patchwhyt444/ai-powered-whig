const CalendlyCTA = () => {
  return (
    <section id="book" className="bg-muted/30 border-y">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Book a Free Investor Consultation</h2>
          <p className="mt-2 text-muted-foreground">Pick a time that works best for you. We’ll discuss goals and create an action plan.</p>
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl border bg-background">
            <iframe
              title="Book a consultation with WHIG"
              src="https://calendly.com/YOUR-CALENDLY-USER/consultation"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyCTA;
