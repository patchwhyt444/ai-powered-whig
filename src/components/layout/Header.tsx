
import { useState } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Start Investing", href: "#investing" },
    { label: "Who We Are", href: "/who-we-are" },
    { label: "About Us", href: "/about" },
    { label: "Sell Fast", href: "/sell-fast" },
    { label: "Buyers List", href: "#buyers" },
    { label: "Wholesalers JV", href: "#wholesalers" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <nav className="container flex items-center justify-between py-4">
        <BrandLogo />
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.href.startsWith('#') ? (
              <a key={item.label} href={item.href} className="text-sm font-medium hover:opacity-80 transition-opacity">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} to={item.href} className="text-sm font-medium hover:opacity-80 transition-opacity">
                {item.label}
              </Link>
            )
          ))}
          <Button asChild variant="gold" size="lg">
            <a href="#book">Book Consultation</a>
          </Button>
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open Menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-background border-t">
          <div className="container py-4 grid gap-4">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a key={item.label} href={item.href} className="py-2" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.href} className="py-2" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              )
            ))}
            <Button asChild variant="gold" size="lg">
              <a href="#book" onClick={() => setOpen(false)}>Book Consultation</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
