import { Dumbbell, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-xl tracking-tighter">
              DANIEL<span className="text-primary">TOLEDO</span>
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2025 Daniel Toledo Personal Trainer. Todos os direitos reservados.
          </p>

          <div className="flex gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
