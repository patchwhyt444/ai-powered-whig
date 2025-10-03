import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - White House Investment Group";
    
    const upsertMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    upsertMeta('description', 'Privacy Policy for White House Investment Group. Learn how we collect, use, and protect your personal information.');
    upsertMeta('og:title', 'Privacy Policy - White House Investment Group');
    upsertMeta('og:description', 'Privacy Policy for White House Investment Group. Learn how we collect, use, and protect your personal information.');

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
  }, []);

  return (
    <>
      <Header />
      <main className="container py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <p>
            This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">What personal information do we collect from the people that visit our blog, website or app?</h2>
            <p>When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number or other details to help you with your experience.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">When do we collect information?</h2>
            <p>We collect information from you when you register on our site, fill out a form, Use Live Chat or enter information on our site. Provide us with feedback on our products or services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">How do we use your information?</h2>
            <p>We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
              <li>To improve our website in order to better serve you.</li>
              <li>To allow us to better service you in responding to your customer service requests.</li>
              <li>To administer a contest, promotion, survey or other site feature.</li>
              <li>To quickly process your transactions.</li>
              <li>To ask for ratings and reviews of services or products.</li>
              <li>To follow up with them after correspondence (live chat, email or phone inquiries).</li>
              <li>To send marketing materials and other product information through calls, emails, and text messages.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">How do we protect your information?</h2>
            <p>We do not use vulnerability scanning and/or scanning to PCI standards. We only provide articles and information. We never ask for credit card numbers. We use regular Malware Scanning.</p>
            <p className="mt-4">Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.</p>
            <p className="mt-4">We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information. For your convenience we may store your credit card information kept for more than 60 days in order to expedite future orders, and to automate the billing process.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Do we use 'cookies'?</h2>
            <p>Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>
            <p className="mt-4">We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Understand and save user's preferences for future visits.</li>
              <li>Keep track of advertisements.</li>
              <li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.</li>
            </ul>
            <p className="mt-4">You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.</p>
            <p className="mt-4">If you turn cookies off, Some of the features that make your site experience more efficient may not function properly. It won't affect the user's experience that make your site experience more efficient and may not function properly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Third-party disclosure</h2>
            <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.</p>
            <p className="mt-4">However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Third-party links</h2>
            <p>Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Google</h2>
            <p>Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. <a href="https://support.google.com/adwordspolicy/answer/1316548?hl=en" className="text-primary underline" target="_blank" rel="noopener noreferrer">https://support.google.com/adwordspolicy/answer/1316548?hl=en</a></p>
            <p className="mt-4">We use Google AdSense Advertising on our website. Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.</p>
            <p className="mt-4">We have implemented the following:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Remarketing with Google AdSense</li>
              <li>Google Display Network Impression Reporting</li>
              <li>Demographics and Interests Reporting</li>
            </ul>
            <p className="mt-4">We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.</p>
            <p className="mt-4"><strong>Opting out:</strong> Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">California Online Privacy Protection Act</h2>
            <p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared.</p>
            <p className="mt-4">According to CalOPPA, we agree to the following:</p>
            <p className="mt-4">Users can visit our site anonymously. Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website. Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.</p>
            <p className="mt-4">You will be notified of any Privacy Policy changes on our Privacy Policy Page.</p>
            <p className="mt-4">Can change your personal information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>By emailing us</li>
              <li>By calling us</li>
              <li>By logging in to your account</li>
              <li>By chatting with us or by sending us a support ticket</li>
            </ul>
            <p className="mt-4"><strong>How does our site handle Do Not Track signals?</strong> We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.</p>
            <p className="mt-4"><strong>Does our site allow third-party behavioral tracking?</strong> It's also important to note that we allow third-party behavioral tracking.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">COPPA (Children Online Privacy Protection Act)</h2>
            <p>When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.</p>
            <p className="mt-4">We do not specifically market to children under the age of 13 years old. Do we let third-parties, including ad networks or plug-ins collect PII from children under 13?</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Fair Information Practices</h2>
            <p>The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.</p>
            <p className="mt-4">In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Within 7 business days</li>
            </ul>
            <p className="mt-4">We will notify the users via in-site notification within 7 business days.</p>
            <p className="mt-4">We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">CAN SPAM Act</h2>
            <p>The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.</p>
            <p className="mt-4">We collect your email address in order to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Send information, respond to inquiries, and/or other requests or questions</li>
              <li>Send you additional information related to your product and/or service</li>
              <li>Market to our mailing list or continue to send emails to our clients after the original transaction has occurred.</li>
            </ul>
            <p className="mt-4">To be in accordance with CANSPAM, we agree to the following:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Not use false or misleading subjects or email addresses.</li>
              <li>Identify the message as an advertisement in some reasonable way.</li>
              <li>Include the physical address of our business or site headquarters.</li>
              <li>Monitor third-party email marketing services for compliance, if one is used.</li>
              <li>Honor opt-out/unsubscribe requests quickly.</li>
              <li>Allow users to unsubscribe by using the link at the bottom of each email.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;