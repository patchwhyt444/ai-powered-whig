
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WhoWeAre = () => {
  const coreValues = [
    {
      title: "Relationships Over Revenue",
      description: "Long-term partnerships built on trust and mutual success."
    },
    {
      title: "Charismatic",
      description: "Passionate advocates who bring energy to every transaction."
    },
    {
      title: "Legacy",
      description: "Building generational wealth through strategic real estate investments."
    },
    {
      title: "Evolve",
      description: "Continuously adapting to market changes and opportunities."
    },
    {
      title: "Excellence",
      description: "Uncompromising commitment to exceptional service and results."
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Who We Are
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                White House Investment Group is a veteran-owned, family-run real estate investment company founded by Patrick, who was born and raised in Darien, GA. After graduating high school, he served in the United States Army, where he discovered a passion for real estate—binging BiggerPockets, devouring books, earning his license, and investing himself. Helping investors across fix & flips, long-term rentals, short-term rentals, and commercial assets revealed a gap: too few agents truly understood investors. That gap inspired the creation of White House Investment Group.
              </p>
              <p className="text-lg text-muted-foreground">
                Our investor-first approach focuses on cap rates, BRRRR strategies, value-add opportunities, and creative financing. We provide concierge service for new investors while offering seamless support for seasoned professionals.
              </p>
            </div>
            <div className="relative">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/lovable-uploads/7ded6667-e8cc-44ac-9ff0-cd5377ea0372.png"
                    alt="White House Investment Group family photo"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="container py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Credentials Section */}
        <section className="container py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built on Service, Proven by Results</h2>
            <p className="text-lg text-muted-foreground">
              Licensed representation across fix & flips, long-term rentals, short/mid-term rentals, multifamily, and commercial investments.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/lovable-uploads/2ba1a4bd-668f-449a-84f8-3ac52ab3c5d6.png"
                    alt="White House Investment Group office"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Why We Built WHIG</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We saw a gap in the market where investors needed more than just a realtor—they needed a true partner who understood the investment game from every angle.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2"></div>
                  <span>Underwriting you can trust with transparent, data-driven analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2"></div>
                  <span>Access to both on-market and off-market deal flow through our network</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2"></div>
                  <span>Concierge service for new investors, seamless support for pros</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16 md:py-24">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Build Your Next Win</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to take your real estate investing to the next level? Let's discuss your goals and create a strategy that works.
            </p>
            <Button asChild variant="gold" size="xl">
              <a href="#book">Book a Consultation</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WhoWeAre;
