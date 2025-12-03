import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Plans() {
  const plans = [
    {
      name: "Mensal",
      description: "Flexibilidade para começar",
      price2x: "1.560",
      price3x: "2.340",
      features: ["Treino personalizado", "Acompanhamento individual", "Ajustes constantes"],
      highlight: false
    },
    {
      name: "Trimestral",
      description: "Melhor custo-benefício",
      price2x: "1.430",
      price3x: "2.145",
      features: ["Treino personalizado", "Acompanhamento individual", "Ajustes constantes", "Economia de R$ 130/mês"],
      highlight: true
    },
    {
      name: "Semestral",
      description: "Máxima economia",
      price2x: "1.300",
      price3x: "1.950",
      features: ["Treino personalizado", "Acompanhamento individual", "Ajustes constantes", "Economia de R$ 260/mês"],
      highlight: false
    }
  ];

  return (
    <section id="plans" className="py-24 bg-background relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-4">
            Escolha Seu <span className="text-primary">Plano</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Investimento em sua saúde com acompanhamento profissional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 border ${
                plan.highlight 
                  ? "border-primary bg-primary/5" 
                  : "border-border bg-card"
              } group hover:border-primary transition-colors duration-300`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold uppercase tracking-wider skew-x-[-10deg]">
                  <span className="skew-x-[10deg] block">Mais Popular</span>
                </div>
              )}

              <h3 className="font-display font-bold text-2xl uppercase mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-8">{plan.description}</p>

              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">2x por semana</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">R$</span>
                    <span className="text-4xl font-bold text-foreground group-hover:text-primary transition-colors">{plan.price2x}</span>
                    <span className="text-sm text-muted-foreground">/mês</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">3x por semana</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">R$</span>
                    <span className="text-3xl font-bold text-foreground">{plan.price3x}</span>
                    <span className="text-sm text-muted-foreground">/mês</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full font-bold uppercase tracking-wider rounded-none h-12 skew-x-[-5deg] ${
                  plan.highlight 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="skew-x-[5deg] flex items-center justify-center gap-2">
                  Começar Agora <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
