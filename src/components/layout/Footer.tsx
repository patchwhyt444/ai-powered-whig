
import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-12 grid gap-8 md:grid-cols-3">
        <div>
          <BrandLogo className="h-8 w-auto" />
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            White House Investment Group is a veteran-owned real estate investment agency helping NC investors and property sellers achieve better outcomes.
          </p>
        </div>
        <nav className="grid gap-2 text-sm">
          <a href="#investing" className="hover:opacity-80">Start Investing</a>
          <Link to="/who-we-are" className="hover:opacity-80">Who We Are</Link>
          <Link to="/about" className="hover:opacity-80">About Us</Link>
          <a href="/sell-fast" className="hover:opacity-80">Sell Fast</a>
          <a href="#buyers" className="hover:opacity-80">Buyers List</a>
          <a href="#wholesalers" className="hover:opacity-80">Wholesalers JV</a>
        </nav>
        <div className="text-sm">
          <p>Fayetteville, NC</p>
          <a href="#book" className="text-primary underline underline-offset-4">Book Consultation</a>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} White House Investment Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
