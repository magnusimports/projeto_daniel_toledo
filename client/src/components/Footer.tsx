import { Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Daniel Toledo Logo" className="h-10 w-auto object-contain" />
          </div>

          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2025 Daniel Toledo Personal Trainer. Todos os direitos reservados.
          </p>

          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/danieltoledomtor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/@DanielToledoPersonal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="mailto:danieltoledopersonal@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
