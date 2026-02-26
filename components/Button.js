import Link from "next/link";

const variants = {
  primary: "bg-brand-red text-white hover:bg-brand-redHover",
  outline: "border border-brand-red text-brand-red hover:bg-brand-red hover:text-brand-white",
  white: "border border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-red",
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
