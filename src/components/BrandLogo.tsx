import { Link } from "react-router-dom";

const BrandLogo = ({ className = "h-10 w-auto" }: { className?: string }) => {
  return (
    <Link to="/" className="inline-flex items-center gap-3">
      <img
        src="/lovable-uploads/2ba1a4bd-668f-449a-84f8-3ac52ab3c5d6.png"
        alt="White House Investment Group gold logo"
        className={className}
        loading="lazy"
      />
      <span className="sr-only">White House Investment Group</span>
    </Link>
  );
};

export default BrandLogo;
