import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import InvestingAccordion from "@/components/sections/InvestingAccordion";
import Testimonials from "@/components/sections/Testimonials";
import CalendlyCTA from "@/components/sections/CalendlyCTA";
import Footer from "@/components/layout/Footer";

const Index = () => {
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'White House Investment Group',
    url: typeof window !== 'undefined' ? window.location.origin : 'https://example.com',
    logo: '/lovable-uploads/2ba1a4bd-668f-449a-84f8-3ac52ab3c5d6.png'
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <InvestingAccordion />
        <Testimonials />
        <CalendlyCTA />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
    </>
  );
};

export default Index;
