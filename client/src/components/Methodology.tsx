import { motion } from "framer-motion";
import { Brain, Activity, Target, Microscope } from "lucide-react";

export default function Methodology() {
  const methods = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Inteligência Articular",
      description: "Execução de movimentos com técnica aprimorada, respeitando a biomecânica individual e prevenindo lesões.",
      image: "/images/methodology-1.jpg"
    },
    {
      icon: <Activity className="w-10 h-10" />,
      title: "Execução Eficiente",
      description: "Otimização do treino para máxima eficiência. Resultados melhores em menos tempo, sem comprometer sua saúde.",
      image: "/images/methodology-2.jpg"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Acompanhamento",
      description: "Suporte contínuo e ajustes constantes no seu programa de treino baseados em evidências científicas.",
      image: "/images/hero-bg.jpg"
    },
    {
      icon: <Microscope className="w-10 h-10" />,
      title: "Especialização em Lipedema",
      description: "Protocolos específicos que auxiliam no controle da condição e melhoria da qualidade de vida.",
      image: "/images/lipedema-bg.jpg"
    }
  ];

  return (
    <section id="methodology" className="py-24 bg-secondary/5 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-4">
            Minha <span className="text-primary">Metodologia</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Combinação de ciência, experiência prática e atenção individualizada para resultados sustentáveis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden border border-border bg-card"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-background/90 group-hover:bg-background/70 transition-colors duration-500 z-10" />
                <img
                  src={method.image}
                  alt={method.title}
                  className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col p-6">
                <div className="mb-auto text-primary group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display font-bold text-xl uppercase mb-3 text-foreground group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {method.description}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
