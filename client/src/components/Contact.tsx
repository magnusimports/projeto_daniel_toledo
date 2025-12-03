import { motion } from "framer-motion";
import { MessageCircle, Instagram, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/5 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-5xl md:text-6xl uppercase mb-6 leading-none">
              Pronto para <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                Transformar?
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Entre em contato e agende sua avaliação física. Vamos juntos traçar o melhor caminho para alcançar seus objetivos.
            </p>

            <div className="space-y-6">
              <a 
                href="https://wa.me/5562999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 border border-border bg-card hover:border-primary transition-all group"
              >
                <div className="bg-primary/10 p-3 rounded-none group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold uppercase text-lg">WhatsApp</h3>
                  <p className="text-muted-foreground text-sm">Entre em contato direto</p>
                </div>
                <ArrowRight className="ml-auto w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a 
                href="https://instagram.com/daniel.toledo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 border border-border bg-card hover:border-primary transition-all group"
              >
                <div className="bg-primary/10 p-3 rounded-none group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold uppercase text-lg">Instagram</h3>
                  <p className="text-muted-foreground text-sm">Acompanhe dicas e resultados</p>
                </div>
                <ArrowRight className="ml-auto w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <div className="flex items-center gap-4 p-6 border border-border bg-card">
                <div className="bg-secondary p-3 rounded-none">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold uppercase text-lg">Email</h3>
                  <p className="text-muted-foreground text-sm">daniel.toledo@email.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-0" />
            <img 
              src="/images/daniel-shout.jpg" 
              alt="Daniel Toledo Training" 
              className="w-full h-[600px] object-cover grayscale contrast-125 relative z-10 border-2 border-border"
            />
            
            {/* Decorative Text */}
            <div className="absolute -bottom-12 -right-12 z-20">
              <span className="font-display font-bold text-9xl text-transparent stroke-text opacity-10">
                START
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
