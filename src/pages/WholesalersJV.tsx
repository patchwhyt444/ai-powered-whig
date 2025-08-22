import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const WholesalersJV = () => {
  useEffect(() => {
    const title = "Wholesalers JV | White House Investment Group";
    const description =
      "Wholesaling laws are changing—stay compliant by partnering with a licensed agent. Submit your deal, we handle dispo, and we close and split the fee.";

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

  return (
    <>
      <Header />
      <main>
        {/* Top Banner / Legal Compliance Note — VERBATIM */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,hsl(var(--brand-gold)/0.15),transparent)]"
          />
          <div className="container mt-10">
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Wholesaling Laws Are Changing — Stay Compliant by Partnering with a Licensed Agent
                </h2>
                <p className="mt-4 text-base leading-relaxed">
                  As more states — including parts of North Carolina — begin cracking down on unlicensed wholesaling, working with a licensed agent is no longer optional… it's smart business. At White House Investment Group, we offer compliant, win-win JV opportunities that allow you to legally dispo deals without risking fines or violations. We charge a reasonable JV fee, handle communication with buyers, and make sure both sides of the deal are protected.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Headline & Intro — VERBATIM */}
        <section className="py-12 sm:py-16">
          <div className="container max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Let's JV and Close More Deals Together
            </h1>
            <p className="mt-5 text-lg leading-relaxed">
              Got a great deal but need help finding a buyer or getting it across the finish line? Let's team up. We specialize in dispo, underwriting, and closing — so you can focus on locking up more properties while we handle the back end.
            </p>
          </div>
        </section>

        {/* How It Works (3 cards) — VERBATIM */}
        <section className="pb-8">
          <div className="container grid gap-6 sm:gap-8 md:grid-cols-3">
            {[{
              title: "Submit Your Deal",
              desc: "Send us the details of your property — we'll underwrite it, verify the numbers, and evaluate it fast.",
            },{
              title: "We Handle the Dispo",
              desc: "We'll market it to our active buyer list, schedule walkthroughs, and negotiate the best exit strategy.",
            },{
              title: "We Close and Split the Fee",
              desc: "Once it closes, we split the assignment — simple, fast, and fully transparent.",
            }].map((item, i) => (
              <Card key={i}>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What We're Looking For — VERBATIM */}
        <section className="py-12">
          <div className="container">
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold">Ideal JV Deals We're Looking For</h2>
                <ul className="mt-6 space-y-3 list-disc pl-6 text-base">
                  <li>Off-market residential or commercial properties</li>
                  <li>Assignable or under-contract deals (clean paperwork)</li>
                  <li>NC and surrounding market deals</li>
                  <li>Distressed, inherited, vacant, or value-add opportunities</li>
                  <li>Sellers open to creative finance</li>
                </ul>
                <p className="mt-6 text-base">Not sure if your deal qualifies? Submit it anyway — we'll give you feedback fast.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* JV Deal Submission Form (card) */}
        <section id="jv-form" className="scroll-mt-24 py-8 sm:py-12 bg-muted/30">
          <div className="container">
            <Card>
              <CardContent className="p-6 sm:p-8">
                <header>
                  <h2 className="text-2xl sm:text-3xl font-extrabold">Submit a Deal to JV</h2>
                  <p className="mt-2 text-base">Provide the details below and we'll follow up promptly.</p>
                </header>

                <form 
                  action="https://formsubmit.co/website-leads.fa2cb08e.whig-crm.whitehouseinvestmentgroupcom@item-create.podio.com" 
                  method="POST" 
                  encType="multipart/form-data" 
                  className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="flex flex-col">
                    <label htmlFor="full_name" className="text-sm font-medium">Full Name*</label>
                    <Input id="full_name" name="full_name" type="text" required className="mt-2" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number*</label>
                    <Input id="phone" name="phone" type="tel" required className="mt-2" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-medium">Email*</label>
                    <Input id="email" name="email" type="email" required className="mt-2" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="property_address" className="text-sm font-medium">Property Address*</label>
                    <Input id="property_address" name="property_address" type="text" required className="mt-2" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="asking_price" className="text-sm font-medium">Asking Price</label>
                    <Input id="asking_price" name="asking_price" type="text" className="mt-2" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="estimated_arv" className="text-sm font-medium">Estimated ARV</label>
                    <Input id="estimated_arv" name="estimated_arv" type="text" className="mt-2" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="estimated_repairs" className="text-sm font-medium">Estimated Repairs</label>
                    <Input id="estimated_repairs" name="estimated_repairs" type="text" className="mt-2" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="contract_status" className="text-sm font-medium">Contract Status</label>
                    <select id="contract_status" name="contract_status" className={selectClasses + " mt-2"} defaultValue="Not under contract">
                      <option>Not under contract</option>
                      <option>Under contract</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 flex flex-col">
                    <label htmlFor="notes" className="text-sm font-medium">Notes (deal details, seller situation, or terms)</label>
                    <textarea id="notes" name="notes" rows={5} className="mt-2 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm"></textarea>
                  </div>
                  <div className="md:col-span-2 flex flex-col">
                    <label htmlFor="files" className="text-sm font-medium">Upload: Photos, contract, supporting docs</label>
                    <input id="files" name="files" type="file" multiple className="mt-2 block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90" />
                  </div>

                  {/* Hidden fields for FormSubmit configuration */}
                  <input type="hidden" name="_subject" value="New submission from Wholesaler JV page" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={window.location.origin + "/wholesalers-jv?success=true"} />

                  <div className="md:col-span-2">
                    <Button type="submit" variant="gold" size="lg">Submit Your Deal Now</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer CTA — VERBATIM */}
        <section className="pb-16">
          <div className="container">
            <Card>
              <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-center sm:text-left">
                  Let's close more deals — the right way.
                </h3>
                <Button asChild variant="gold" size="lg">
                  <a href="#jv-form">Submit Your Deal Now</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WholesalersJV;