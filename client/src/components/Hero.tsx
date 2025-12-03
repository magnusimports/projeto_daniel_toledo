import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToPlans = () => {
    document.querySelector("#plans")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <img
          src="/images/hero-bg.jpg"
          alt="Background Gym"
          className="w-full h-full object-cover object-center opacity-50"
        />
      </div>

      <div className="container relative z-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 border border-primary text-primary font-mono text-sm uppercase tracking-widest mb-4 bg-primary/10 backdrop-blur-sm">
              16 Anos de Experiência
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-foreground uppercase">
              Transforme <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                Seu Corpo
              </span>
              <br />
              Com Ciência
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-lg border-l-2 border-primary pl-6"
          >
            Treinamento personalizado focado em inteligência articular e execução eficiente. 
            Especialista em tratamento de lipedema através da atividade física.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={scrollToPlans}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider rounded-none h-14 px-8 text-lg skew-x-[-10deg] group"
            >
              <span className="skew-x-[10deg] flex items-center gap-2">
                Ver Planos <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              className="border-primary text-primary hover:bg-primary/10 font-bold uppercase tracking-wider rounded-none h-14 px-8 text-lg skew-x-[-10deg]"
            >
              <span className="skew-x-[10deg]">Saiba Mais</span>
            </Button>
          </motion.div>
        </div>

        {/* Stats / Floating Elements */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="hidden md:flex flex-col gap-6 items-end"
        >
          {[
            { label: "Anos de Experiência", value: "16" },
            { label: "Alunos Transformados", value: "+500" },
            { label: "Foco em Resultado", value: "100%" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card/10 backdrop-blur-md border border-white/10 p-6 w-64 text-right hover:border-primary transition-colors group"
            >
              <h3 className="font-display font-bold text-4xl text-white group-hover:text-primary transition-colors">
                {stat.value}
              </h3>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
