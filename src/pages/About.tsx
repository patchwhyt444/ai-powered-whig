import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  useEffect(() => {
    const title = "About Us | White House Investment Group";
    const description =
      "Veteran-owned, investor-focused real estate team. Serving investors and homeowners with tailored solutions to create wealth, solve problems, and strengthen communities.";

    document.title = title;

    const upsertMeta = (selector: string, create: () => HTMLMetaElement) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      return el;
    };

    const descMeta = upsertMeta('meta[name="description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    });
    descMeta.setAttribute("content", description);

    const ogTitle = upsertMeta('meta[property="og:title"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:title");
      return m;
    });
    ogTitle.setAttribute("content", title);

    const ogDesc = upsertMeta('meta[property="og:description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:description");
      return m;
    });
    ogDesc.setAttribute("content", description);

    const canonicalId = "canonical-link";
    let link = document.getElementById(canonicalId) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.id = canonicalId;
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = window.location.href;
  }, []);

  const coreValues = [
    { title: "Relationships Over Revenue", description: "Trust-first partnerships that prioritize long-term success over short-term wins." },
    { title: "Charismatic", description: "We bring energy, clarity, and advocacy to every interaction and negotiation." },
    { title: "Legacy", description: "We build durable strategies that create multi-generational wealth." },
    { title: "Evolve", description: "We adapt quickly to market shifts and capitalize on new opportunities." },
    { title: "Excellence", description: "Uncompromising standards and consistent follow-through from start to finish." },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">About Us</h1>
              <p className="text-lg text-muted-foreground">
                We’re a veteran-owned, family-run real estate group delivering investor-first representation and fast, creative selling options for homeowners. Whether you’re scaling with cap rate targets, BRRRR, value-add, or creative finance—or you need a simple, certain solution to sell—we provide concierge guidance and execution.
              </p>
            </div>
            <div className="relative">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/lovable-uploads/7ded6667-e8cc-44ac-9ff0-cd5377ea0372.png"
                    alt="White House Investment Group team photo"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Two-Column Cards */}
        <section className="container pb-12 md:pb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Investors */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-3">For Investors</h2>
                <p className="text-muted-foreground mb-4">We help you find, analyze, acquire, and exit with confidence—leveraging data-driven underwriting and a boots-on-the-ground network.</p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Deal sourcing across on- and off-market channels</li>
                  <li>Underwriting with transparent, investor-first metrics</li>
                  <li>Contractor and property management network</li>
                  <li>Financing guidance and creative capital stacks</li>
                  <li>Exit planning and portfolio strategy</li>
                </ul>
                <Button asChild variant="gold" size="lg">
                  <a href="#book">Book a Consultation</a>
                </Button>
              </CardContent>
            </Card>

            {/* Homeowners */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-3">For Homeowners</h2>
                <p className="text-muted-foreground mb-4">Fast, flexible selling solutions designed to solve problems and protect equity—without the hassle.</p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Cash offers with flexible timelines</li>
                  <li>Seller finance and creative terms</li>
                  <li>Subject-to and assumption options</li>
                  <li>Foreclosure prevention strategies</li>
                  <li>Concierge support from offer to closing</li>
                </ul>
                <Button asChild variant="outline" size="lg" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-background">
                  <a href="/sell-fast">Get a Cash Offer</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="container py-12 md:py-16">
          <Card>
            <CardContent className="p-8 md:p-10">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                Our mission is to empower real estate investors and homeowners with tailored solutions that create wealth, solve problems, and strengthen communities. We deliver value through expert guidance, innovative strategies, and a relentless commitment to our core values — building relationships over revenue, leading with charisma, creating lasting legacies, continuously evolving, and upholding excellence in every interaction.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Core Values Grid */}
        <section className="container py-12 md:py-16">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {coreValues.map((value, i) => (
              <Card key={i} className="text-left">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="container py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8">Investing, selling, or both — we’ll build the plan and execute.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="gold" size="xl">
                <a href="#book">Book a Consultation</a>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-background">
                <a href="/sell-fast">Get a Cash Offer</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
