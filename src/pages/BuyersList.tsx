import { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const BuyersList = () => {
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const title = "Buyers List | White House Investment Group";
    const description =
      "Join WHIG’s VIP Buyers List to receive exclusive, off-market investment deals with comps, repairs, and clear returns.";

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
    e.preventDefault();
    setSuccess(true);
    formRef.current?.reset();
    window.setTimeout(() => setSuccess(false), 6000);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,hsl(var(--brand-gold)/0.15),transparent)]"
          />
          <div className="container py-12 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="space-y-6 relative z-[1]">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Join Our VIP Buyers List
              </h1>
              <p className="text-lg text-muted-foreground">
                Get exclusive, off-market investment deals delivered to your inbox—manually underwritten with comps, repair estimates, and clear exit strategies.
              </p>
              <div className="flex items-center gap-4">
                <Button asChild variant="gold" size="lg">
                  <a href="#buyer-form">Join the Buyer List Now</a>
                </Button>
                <Button asChild variant="goldOutline" size="lg">
                  <a href="#buyer-form">Scroll to Form</a>
                </Button>
              </div>
            </div>

            <Card className="relative z-[1]">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold">What You’ll Receive</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Early access to vetted deals with full numbers, value-add plans, and multiple exit options.
                </p>
                <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Comps and underwriting included</li>
                  <li>Clear repair estimates and returns</li>
                  <li>Cash, creative, and finance-friendly opportunities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-12 md:py-20">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Why Join the WHIG Buyers List</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Exclusive Off-Market Deals",
                  desc: "Bypass the MLS and see curated opportunities before they’re widely marketed.",
                },
                {
                  title: "Manually Underwritten",
                  desc: "Every deal includes comps, repair scopes, and projected returns for informed decisions.",
                },
                {
                  title: "Matched to Your Strategy",
                  desc: "Flip, BRRRR, cash flow rentals, creative finance, multifamily, and commercial—tailored to your buy box.",
                },
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

        {/* Buyer Profile Form */}
        <section id="buyer-form" className="scroll-mt-24 py-12 md:py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold">Tell Us About Your Buy Box</h2>
              <p className="mt-2 text-muted-foreground">
                Complete your profile to receive deals that fit your goals. It takes about two minutes.
              </p>
            </div>

            <Card className="mt-8">
              <CardContent className="p-6 sm:p-8">
                <form
                  ref={formRef}
                  onSubmit={onSubmit}
                  action="{{FORM_POST_URL}}"
                  method="POST"
                  className="space-y-6"
                  noValidate
                >
                  {/* Honeypot */}
                  <div className="hidden">
                    <label htmlFor="company">Company</label>
                    <Input id="company" name="company" />
                  </div>

                  {/* Contact Grid */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold">
                        First Name*
                      </label>
                      <Input id="firstName" name="firstName" required className="mt-2" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold">
                        Last Name*
                      </label>
                      <Input id="lastName" name="lastName" required className="mt-2" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold">
                        Email*
                      </label>
                      <Input id="email" name="email" type="email" required className="mt-2" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold">
                        Phone*
                      </label>
                      <Input id="phone" name="phone" type="tel" required className="mt-2" />
                    </div>
                  </div>

                  {/* Markets */}
                  <div>
                    <label htmlFor="markets" className="block text-sm font-semibold">
                      Markets
                    </label>
                    <Input
                      id="markets"
                      name="markets"
                      placeholder="Fayetteville, Hope Mills, Raeford, Spring Lake, Raleigh/Triangle, …"
                      className="mt-2"
                    />
                  </div>

                  {/* Asset Classes */}
                  <fieldset>
                    <legend className="text-sm font-semibold">Asset Classes</legend>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {["Single Family","Mobile Homes","Multi-family","Self-Storage","Land","Commercial"].map((label) => (
                        <label key={label} className="inline-flex items-center gap-2 text-sm">
                          <input type="checkbox" name="assetClasses[]" value={label} className="h-4 w-4 rounded border-input" />
                          <span>{label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  {/* Exit Strategy */}
                  <fieldset>
                    <legend className="text-sm font-semibold">Exit Strategy</legend>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {["Fix and Flip","Long Term Rental","BRRRR","Subject-To","Seller Financing"].map((label) => (
                        <label key={label} className="inline-flex items-center gap-2 text-sm">
                          <input type="checkbox" name="exitStrategy[]" value={label} className="h-4 w-4 rounded border-input" />
                          <span>{label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-semibold">Ideal Price Range</label>
                    <div className="mt-2 grid gap-3 sm:grid-cols-2">
                      <div>
                        <label htmlFor="priceMin" className="sr-only">
                          Minimum
                        </label>
                        <Input id="priceMin" name="priceMin" type="number" min={0} placeholder="Min" />
                      </div>
                      <div>
                        <label htmlFor="priceMax" className="sr-only">
                          Maximum
                        </label>
                        <Input id="priceMax" name="priceMax" type="number" min={0} placeholder="Max" />
                      </div>
                    </div>
                  </div>

                  {/* Funding + Proof of Funds */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="funding" className="block text-sm font-semibold">
                        Funding
                      </label>
                      <select id="funding" name="funding" className={selectClasses + " mt-2"} defaultValue="">
                        <option value="">Select one</option>
                        <option>Hard Money</option>
                        <option>Private Money</option>
                        <option>Cash</option>
                        <option>Conventional Financing</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="pof" className="block text-sm font-semibold">
                        Proof of Funds
                      </label>
                      <select id="pof" name="proofOfFunds" className={selectClasses + " mt-2"} defaultValue="">
                        <option value="">Select one</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>

                  {/* Volume + Lending + JV */}
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <label htmlFor="perAnnum" className="block text-sm font-semibold">
                        Properties per year
                      </label>
                      <Input id="perAnnum" name="perAnnum" type="number" min={0} placeholder="e.g., 6" className="mt-2" />
                    </div>
                    <div>
                      <label htmlFor="lendPM" className="block text-sm font-semibold">
                        Open to private lending?
                      </label>
                      <select id="lendPM" name="openToLending" className={selectClasses + " mt-2"} defaultValue="">
                        <option value="">Select one</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="jv" className="block text-sm font-semibold">
                        Joint Ventures / Partnerships
                      </label>
                      <select id="jv" name="jvInterest" className={selectClasses + " mt-2"} defaultValue="">
                        <option value="">Select one</option>
                        <option>Yes</option>
                        <option>No</option>
                        <option>Maybe</option>
                      </select>
                    </div>
                  </div>

                  {/* Consent */}
                  <div>
                    <label className="inline-flex items-start gap-3 text-sm">
                      <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 rounded border-input" />
                      <span>
                        I agree to receive deal emails and understand I can unsubscribe anytime.
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="flex items-center gap-4 pt-2">
                    <Button type="submit" variant="gold" size="lg">
                      Join the Buyers List
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      We respect your privacy and never share your information.
                    </p>
                  </div>

                  {success && (
                    <p className="text-sm font-semibold text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
                      Success! Your profile has been received. Check your email for confirmation.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 md:py-20">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-extrabold">How It Works</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                { title: "Submit Your Profile", desc: "Tell us your criteria—takes two minutes." },
                { title: "Receive Tailored Deals", desc: "We send opportunities matching your buy box and returns." },
                { title: "Execute & Grow", desc: "We help underwrite, negotiate, and close with confidence." },
              ].map((s, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h3 className="font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Deal?</h2>
            <p className="text-lg text-muted-foreground mb-8">Join the list and get first-look access.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="gold" size="xl">
                <a href="#buyer-form">Join the Buyer List Now</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BuyersList;
