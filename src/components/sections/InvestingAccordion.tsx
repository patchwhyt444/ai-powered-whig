import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const InvestingAccordion = () => {
  return (
    <section id="investing" className="container py-16 md:py-24">
      <h2 className="text-3xl font-bold">Start Investing</h2>
      <p className="mt-2 text-muted-foreground max-w-2xl">Four proven strategies to build and diversify your real estate portfolio.</p>

      <div className="mt-8 rounded-xl border bg-card p-4 md:p-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="fix-flips">
            <AccordionTrigger>Fix & Flips</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deal analysis and ARV guidance</li>
                <li>Trusted contractor and lender network</li>
                <li>List and sell for maximum ROI</li>
              </ul>
              <div className="mt-4 space-y-3 text-muted-foreground">
                <p>We run a concierge service for our fix and flip investors by sourcing the deal, connecting you with our hard/private money lenders, bringing in our vetted contractors, and helping facilitate the renovation process.</p>
                <p>It’s ready — all at a reasonable commission to put more money back in your pocket.</p>
                <p>For seasoned investors, we’ll bring you more deals, give access to our resources, and fit into your operation as you see fit — still for an affordable commission.</p>
                <p>The more deals you do with us, the more our commission drops.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="long-term">
            <AccordionTrigger>Long-Term Rentals</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cash flow and cap rate targeting</li>
                <li>Neighborhood and tenant strategy</li>
                <li>Property management referrals</li>
              </ul>
              <div className="mt-4 space-y-3 text-muted-foreground">
                <p>For our long-term rental clients, we start with a consultation to understand your goals.</p>
                <p>We help line up financing and manually underwrite potential properties until we find exactly what you’re looking for based on your cash flow and appreciation objectives.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="short-mid">
            <AccordionTrigger>Short/Mid-Term Rentals</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Furnished rental setup and compliance</li>
                <li>Revenue optimization and pricing</li>
                <li>Cleaning and maintenance vendors</li>
              </ul>
              <div className="mt-4 space-y-3 text-muted-foreground">
                <p>We begin with a consultation to set expectations around returns, operations, and risk.</p>
                <p>We then source and underwrite properties using STR data platforms like AIRDNA and Furnish Finder to assess cash flow potential, occupancy rates, turnover costs, and more.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="multi-commercial">
            <AccordionTrigger>Multi-Family / Commercial</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Underwriting and syndication support</li>
                <li>Off-market sourcing</li>
                <li>Brokerage and transaction management</li>
              </ul>
              <div className="mt-4 space-y-3 text-muted-foreground">
                <p>We’ll start with a consultation to understand your goals, then search both on-market and off-market through our vendor network to find suitable properties.</p>
                <p>We underwrite and support throughout the transaction, ensuring it aligns with your intended exit strategy.</p>
                <p>We also list multifamily and commercial properties at a very low commission.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default InvestingAccordion;
