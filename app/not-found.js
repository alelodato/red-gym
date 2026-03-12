import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-red flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <img
            src="/logo-negativo.png"
            alt="Red Gym"
            className="h-16 w-auto mx-auto mb-8"
          />
        </div>
        
        <h1 className="font-heading uppercase text-white text-6xl sm:text-8xl mb-4">
          404
        </h1>
        
        <h2 className="font-heading uppercase text-white text-2xl sm:text-3xl mb-4">
          Pagina non trovata
        </h2>
        
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          La pagina che stai cercando non esiste o è stata spostata. 
          Torna alla homepage o contattaci se hai bisogno di aiuto.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="white">
            Torna alla Home
          </Button>
          <Button href="/contact" variant="white">
            Contattaci
          </Button>
        </div>
      </div>
    </div>
  );
}