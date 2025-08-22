import { useEffect } from "react";

const CalendlyCTA = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="book" className="bg-muted/30 border-y">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Book a Free Investor Consultation</h2>
          <p className="mt-2 text-muted-foreground">Pick a time that works best for you. We'll discuss goals and create an action plan.</p>
          <div className="mt-8 w-full rounded-xl border bg-background overflow-hidden">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/patrick-whitehouseinvestmentgroup/30min?primary_color=e6d661"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyCTA;