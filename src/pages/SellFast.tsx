import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const SellFast = () => {
  const [success, setSuccess] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const title = "Sell Your Property Fast | White House Investment Group";
    const description =
      "Sell your house as-is with no repairs, no commissions, and flexible closing timelines. Get a fair, fast offer within 24–48 hours.";

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

  const selectClasses =
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm";

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Let the form submit naturally to FormSubmit
    setSuccess(true);
    window.setTimeout(() => setSuccess(false), 6000);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero: Left copy + Right form */}
        <section id="hero" className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,hsl(var(--brand-gold)/0.15),transparent)]" />
          <div className="container py-12 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left */}
            <div className="space-y-6 relative z-[1]">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Need To Sell Your Property Fast? Get a Top-Value Offer.
              </h1>
              <p className="text-lg text-muted-foreground">
                No commissions or realtor fees. Sell as-is. No repairs or staging. Get an offer in 24–48 hours.
              </p>
              <div className="flex items-center gap-4">
                <Button asChild variant="gold" size="lg">
                  <a href="#seller-form">Get My Cash Offer</a>
                </Button>
                <a href="tel:(910) 207-5470" className="text-sm font-semibold underline underline-offset-4">
                  Call: (910) 207-5470
                </a>
              </div>
            </div>

            {/* Right form */}
            <Card className="relative z-[1]">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold">Get Your No-Obligation Offer</h2>
                <p className="mt-1 text-sm text-muted-foreground">We’ll never share your info.</p>

                <form 
                  id="seller-form" 
                  ref={formRef} 
                  onSubmit={onSubmit} 
                  className="mt-6 space-y-5" 
                  action="https://formsubmit.co/website-leads.fa2cb08e.whig-crm.whitehouseinvestmentgroupcom@item-create.podio.com"
                  method="POST"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold">First Name</label>
                      <Input id="firstName" name="firstName" required className="mt-2" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold">Last Name</label>
                      <Input id="lastName" name="lastName" required className="mt-2" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold">Phone</label>
                      <Input id="phone" name="phone" type="tel" required className="mt-2" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold">Email</label>
                      <Input id="email" name="email" type="email" required className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold">Property Address</label>
                    <Input id="address" name="address" required className="mt-2" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="why" className="block text-sm font-semibold">Why are you selling?</label>
                      <select id="why" name="why" required className={selectClasses + " mt-2"} defaultValue="">
                        <option value="" disabled>Select one</option>
                        <option>Financial Reasons</option>
                        <option>Unwanted Property</option>
                        <option>Preventing Foreclosure</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="condition" className="block text-sm font-semibold">Condition?</label>
                      <select id="condition" name="condition" required className={selectClasses + " mt-2"} defaultValue="">
                        <option value="" disabled>Select one</option>
                        <option>Phenomenal</option>
                        <option>Average</option>
                        <option>Needs Some Work</option>
                        <option>Terrible</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold">How quickly would you like to sell?</label>
                      <select id="timeline" name="timeline" required className={selectClasses + " mt-2"} defaultValue="">
                        <option value="" disabled>Select one</option>
                        <option>1–2 Months</option>
                        <option>3–6 Months</option>
                        <option>6+ Months</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="occupied" className="block text-sm font-semibold">Is the property occupied?</label>
                      <select id="occupied" name="occupied" required className={selectClasses + " mt-2"} defaultValue="">
                        <option value="" disabled>Select one</option>
                        <option>Vacant</option>
                        <option>Owner Occupied</option>
                        <option>Tenant Occupied</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="assist" className="block text-sm font-semibold">Do you need any additional assistance?</label>
                    <select id="assist" name="assist" required className={selectClasses + " mt-2"} defaultValue="">
                      <option value="" disabled>Select one</option>
                      <option>Cash Advance</option>
                      <option>Moving Assistance</option>
                      <option>Seller Rent-Back</option>
                      <option>Right of Refusal</option>
                      <option>None</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="price" className="block text-sm font-semibold">Asking Price (optional)</label>
                    <Input id="price" name="price" className="mt-2" />
                  </div>

                  <div>
                    <label htmlFor="photos" className="block text-sm font-semibold">Property Photos (optional)</label>
                    <input id="photos" name="photos" type="file" multiple accept="image/*" className="mt-2 block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90" />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox 
                      id="smsConsent" 
                      checked={smsConsent}
                      onCheckedChange={(checked) => setSmsConsent(checked === true)}
                      required
                    />
                    <label htmlFor="smsConsent" className="text-sm leading-relaxed cursor-pointer">
                      By checking this box, I consent to receive SMS from White House Investment Group in accordance with our{" "}
                      <Link to="/privacy-policy" className="text-primary underline underline-offset-2 hover:opacity-80">
                        Privacy Policy
                      </Link>
                      {" "}and Term of Condition
                    </label>
                  </div>
                  
                  {/* Hidden fields for FormSubmit configuration */}
                  <input type="hidden" name="smsConsent" value={smsConsent ? "yes" : "no"} />
                  <input type="hidden" name="_subject" value="New submission from Sell Fast page" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={window.location.origin + "/sell-fast?success=true"} />

                  <div className="flex items-center gap-4 pt-2">
                    <Button type="submit" variant="gold" size="lg">Get My Offer</Button>
                    <a href="tel:(910) 207-5470" className="text-sm font-semibold underline underline-offset-4">Or call (910) 207-5470</a>
                  </div>

                  {success && (
                    <p className="text-sm font-semibold text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
                      Thank you! Your request has been received. We’ll reach out shortly.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Homes & Situations We Help */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold">Homes &amp; Situations We Help</h2>
              <p className="mt-3 text-muted-foreground">We purchase properties as-is, no realtor fees or closing costs, on your timeline.</p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: "Foreclosure / Tax Issues", desc: "Avoid auctions and penalties." },
                { title: "Tired Landlord", desc: "Sell with or without tenants." },
                { title: "Inherited Property", desc: "Fast, respectful solutions." },
                { title: "Distressed House", desc: "No repairs required." },
                { title: "Divorce", desc: "Discrete and fair options." },
                { title: "Vacant / Problem Tenants", desc: "We handle the headaches." },
                { title: "Expensive Repairs", desc: "We buy as-is, any condition." },
                { title: "Relocation", desc: "Pick your closing date." },
              ].map((item, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-extrabold">How It Works</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-5">
              {[
                { step: 1, title: "Request an Offer", desc: "Fill out the form or call (910) 207-5470 for a quick analysis." },
                { step: 2, title: "Review Options", desc: "Compare multiple offer types — cash or creative finance." },
                { step: 3, title: "Sign & Close", desc: "Pick your closing date. Paid by wire, check, or certified funds." },
              ].map((s, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-extrabold">
                      {s.step}
                    </div>
                    <h3 className="mt-4 font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose WHIG */}
        <section className="py-12 md:py-20">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Why Choose WHIG</h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "No commissions or fees", desc: "Keep more of your equity with transparent, fair offers." },
                { title: "No repairs or cleaning", desc: "Sell exactly as-is. We handle everything after closing." },
                { title: "Close in as little as 7–14 days", desc: "Flexible timelines that match your schedule." },
                { title: "Flexible solutions", desc: "Cash, Seller Finance, or Subject-To — tailored to your goals." },
                { title: "Transparent, veteran-owned, local", desc: "Proudly serving North Carolina with integrity." },
              ].map((item, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-extrabold">What Sellers Say</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-5">
              {[
                { location: "North Carolina", quote: "Smooth and fast. They handled everything and we closed ahead of schedule." },
                { location: "Fayetteville, NC", quote: "Got multiple options and chose what worked best for us. No surprises." },
                { location: "Raleigh, NC", quote: "Professional, honest, and quick. Highly recommend WHIG." },
              ].map((t, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-muted" />
                      <div>
                        <p className="text-sm font-semibold">Verified Seller</p>
                        <p className="text-xs text-muted-foreground">{t.location}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm">“{t.quote}”</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20">
          <div className="container text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Offer?</h2>
            <p className="text-lg text-muted-foreground mb-8">Privacy-first and no-obligation offers. Sell on your terms.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="gold" size="xl">
                <a href="#seller-form">Get My Cash Offer</a>
              </Button>
              <Button asChild variant="goldOutline" size="xl">
                <a href="tel:(910) 207-5470">Call (910) 207-5470</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SellFast;
