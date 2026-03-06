import Link from "next/link";

const variants = {
  primary: "bg-brand-red text-white hover:bg-brand-redHover lg:shadow-soft overflow-hidden lg:transition-all duration-300 lg:hover:-translate-y-1 lg:hover:shadow-xl",
  outline: "border border-brand-red text-brand-red hover:bg-brand-red hover:text-brand-white lg:shadow-soft overflow-hidden lg:transition-all duration-300 lg:hover:-translate-y-1 lg:hover:shadow-xl",
  white: "border border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-red lg:shadow-soft overflow-hidden lg:transition-all duration-300 lg:hover:-translate-y-1 lg:hover:shadow-xl",
};

export default function Button({ href, children, variant = "primary", className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
