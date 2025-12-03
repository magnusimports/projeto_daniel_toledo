import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    "16 anos de experiência em Educação Física",
    "Certificação internacional como Personal Trainer",
    "Especialista em Inteligência Articular",
    "Pesquisador em tratamento de lipedema",
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-[-20deg] translate-x-1/2" />
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 border-2 border-primary p-2">
              <img
                src="/images/daniel-arms-crossed.jpg"
                alt="Daniel Toledo"
                className="w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 -z-0" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-6">
              Sobre <span className="text-primary">Mim</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Sou graduado em Educação Física pela Universidade Estadual de Goiás (UEG) e atuo há 16 anos na área. 
                Como servidor público federal, coordeno a academia do Instituto União Regional Trabalho (18ª Região).
              </p>
              <p>
                Atualmente estou em especialização em <strong className="text-white">Inteligência Articular e Execução Eficiente</strong> com 
                mentoria de Maurício Medeiros (Evitor). Minha abordagem é focada em treinos personalizados que 
                respeitam a biomecânica individual.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
