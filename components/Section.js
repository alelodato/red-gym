import Container from "./Container";

export default function Section({ children, className = "" }) {
  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
