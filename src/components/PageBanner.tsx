import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageBanner({ title, breadcrumb }: { title: string; breadcrumb: string }) {
  return (
    <div className="relative overflow-hidden bg-green-primary pt-32 pb-20 md:pt-36 md:pb-24 text-white">
      {/* Background Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-primary via-green-primary/95 to-green-primary/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-semibold tracking-wider text-white/60 uppercase">
          <Link to="/" className="hover:text-amber-primary transition-colors">
            Home
          </Link>
          <ChevronRight size={10} className="text-amber-primary/80" />
          <span className="text-amber-primary">{breadcrumb}</span>
        </nav>

        {/* Title */}
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  );
}
