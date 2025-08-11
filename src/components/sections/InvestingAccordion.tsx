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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default InvestingAccordion;
