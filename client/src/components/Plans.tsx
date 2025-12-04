import { motion } from "framer-motion";
import { Check, ArrowRight, Smartphone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Plans() {
  const onlinePlans = [
    {
      name: "Plano Mensal",
      description: "30 dias de consultoria",
      price: "199,90",
      installments: null,
      features: [
        "Treino personalizado via App",
        "Vídeos demonstrativos dos exercícios",
        "Acompanhamento via WhatsApp",
        "Correção de técnica e execução",
        "Prevenção de lesões"
      ],
      highlight: false
    },
    {
      name: "Plano Trimestral",
      description: "90 dias de consultoria",
      price: "499,90",
      installments: "em até 2x",
      features: [
        "Treino personalizado via App",
        "Vídeos demonstrativos dos exercícios",
        "Acompanhamento via WhatsApp",
        "Correção de técnica e execução",
        "Atualização de treino a cada 6 semanas"
      ],
      highlight: true
    },
    {
      name: "Plano Semestral",
      description: "180 dias de consultoria",
      price: "899,90",
      installments: "em até 4x",
      features: [
        "Treino personalizado via App",
        "Vídeos demonstrativos dos exercícios",
        "Acompanhamento via WhatsApp",
        "Correção de técnica e execução",
        "Ganhe mais de 1 mês de desconto"
      ],
      highlight: false
    }
  ];

  const inPersonPlans = [
    {
      name: "Mensal",
      description: "Flexibilidade para começar",
      price2x: "1.560",
      price3x: "2.340",
      features: ["Treino personalizado presencial", "Acompanhamento individual", "Ajustes constantes da técnica"],
      highlight: false
    },
    {
      name: "Trimestral",
      description: "Melhor custo-benefício",
      price2x: "1.430",
      price3x: "2.145",
      features: ["Treino personalizado presencial", "Acompanhamento individual", "Economia de R$ 130/mês"],
      highlight: true
    },
    {
      name: "Semestral",
      description: "Máxima economia",
      price2x: "1.300",
      price3x: "1.950",
      features: ["Treino personalizado presencial", "Acompanhamento individual", "Economia de R$ 260/mês"],
      highlight: false
    }
  ];

  return (
    <section id="plans" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Consultoria Online Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-6">
              Consultoria <span className="text-primary">Online</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              Treine onde quiser com minha metodologia e acompanhamento profissional.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left mb-16">
              <div className="bg-card p-6 border border-border rounded-lg">
                <Smartphone className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">App Exclusivo</h3>
                <p className="text-sm text-muted-foreground">
                  Treino montado conforme estratégia traçada, com vídeos dos exercícios, séries, repetições e intervalos.
                </p>
              </div>
              <div className="bg-card p-6 border border-border rounded-lg">
                <MessageCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">Suporte WhatsApp</h3>
                <p className="text-sm text-muted-foreground">
                  Acompanhamento direto comigo para tirar dúvidas, corrigir técnica e prevenir lesões.
                </p>
              </div>
              <div className="bg-card p-6 border border-border rounded-lg">
                <Calendar className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">Atualização Constante</h3>
                <p className="text-sm text-muted-foreground">
                  Atualizamos o treino a cada 6 semanas ou a qualquer momento caso seja necessário.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {onlinePlans.map((plan, index) => (
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
                } group hover:border-primary transition-colors duration-300 flex flex-col`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold uppercase tracking-wider skew-x-[-10deg]">
                    <span className="skew-x-[10deg] block">Mais Popular</span>
                  </div>
                )}

                <h3 className="font-display font-bold text-2xl uppercase mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">R$</span>
                    <span className="text-5xl font-bold text-foreground group-hover:text-primary transition-colors">{plan.price}</span>
                  </div>
                  {plan.installments && (
                    <p className="text-sm text-primary font-medium mt-1">{plan.installments}</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
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
                  onClick={() => window.open(`https://wa.me/5562982091479?text=Olá, tenho interesse no plano de consultoria online ${plan.name}`, "_blank")}
                >
                  <span className="skew-x-[5deg] flex items-center justify-center gap-2">
                    Quero este plano <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Planos Presenciais Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-4">
              Planos <span className="text-primary">Presenciais</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Acompanhamento exclusivo e presencial para resultados acelerados.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {inPersonPlans.map((plan, index) => (
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
                    Agendar Avaliação <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
