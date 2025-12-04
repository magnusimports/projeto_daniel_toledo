import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  birthDate: z.string().min(1, "Data de nascimento é obrigatória"),
  height: z.string().min(1, "Altura é obrigatória"),
  weight: z.string().min(1, "Peso é obrigatório"),
  profession: z.string().min(2, "Profissão é obrigatória"),
  objective: z.enum([
    "EMAGRECIMENTO",
    "HIPERTROFIA",
    "QUALIDADE DE VIDA",
    "TRATAR CELULITE OU LIPEDEMA",
    "TRATAR LESÃO",
    "MELHORAR POSTURA",
    "OUTRO"
  ]),
  otherObjective: z.string().optional(),
  trainingTime: z.enum([
    "VOU COMEÇAR AGORA",
    "1 MÊS",
    "3 MESES",
    "6 MESES",
    "1 ANO",
    "2 ANOS",
    "3 ANOS OU MAIS"
  ]),
  trainingFrequency: z.enum([
    "NÃO TREINO",
    "1 VEZ NA SEMANA",
    "2 VEZES NA SEMANA",
    "3 VEZES NA SEMANA",
    "4 VEZES NA SEMANA",
    "5 VEZES NA SEMANA",
    "6 VEZES NA SEMANA",
    "7 VEZES NA SEMANA"
  ]),
  personalFollowUp: z.enum([
    "SIM, QUERO APENAS O TREINO LIPEDEMA",
    "NÃO, MAS QUERO APENAS PLANILHA DE TREINO",
    "NÃO, MAS QUERO APENAS TREINO LIPEDEMA",
    "NÃO, E QUERO PLANILHA DE TREINO + TREINO LIPEDEMA",
    "NÃO, E QUERO TREINO LIPEDEMA + ACOMPANHAMENTO PRESENCIAL"
  ]),
  dailyTime: z.enum([
    "60 MINUTOS",
    "90 MINUTOS",
    "120 MINUTOS",
    "+ DE 120 MINUTOS"
  ]),
  trainingDivision: z.string().min(5, "Descreva como está dividido seu treino"),
  injuries: z.string().min(2, "Informe se tem dores ou lesões (ou digite 'Não')"),
  cardioTest: z.string().optional(),
});

export default function ConsultancyForm({ onSuccess }: { onSuccess?: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      birthDate: "",
      height: "",
      weight: "",
      profession: "",
      otherObjective: "",
      trainingDivision: "",
      injuries: "",
      cardioTest: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const objectiveFinal = values.objective === "OUTRO" ? values.otherObjective : values.objective;

    const message = `*NOVA CONSULTORIA ONLINE - ANAMNESE*%0A%0A` +
      `*Nome:* ${values.name}%0A` +
      `*Email:* ${values.email}%0A` +
      `*Data de Nascimento:* ${values.birthDate}%0A` +
      `*Altura:* ${values.height}m%0A` +
      `*Peso:* ${values.weight}kg%0A` +
      `*Profissão:* ${values.profession}%0A%0A` +
      `*Objetivo:* ${objectiveFinal}%0A` +
      `*Tempo de Treino:* ${values.trainingTime}%0A` +
      `*Frequência:* ${values.trainingFrequency}%0A` +
      `*Acompanhamento:* ${values.personalFollowUp}%0A` +
      `*Tempo Disponível:* ${values.dailyTime}%0A%0A` +
      `*Divisão de Treino:* ${values.trainingDivision}%0A` +
      `*Lesões/Dores:* ${values.injuries}%0A` +
      `*Teste de Cardio:* ${values.cardioTest || "Não informado"}`;

    const whatsappUrl = `https://wa.me/5562982091479?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    setIsSubmitting(false);
    if (onSuccess) onSuccess();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo *</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data de Nascimento *</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estatura (m) *</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: 1.75" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Peso (kg) *</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: 70" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="profession"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profissão *</FormLabel>
              <FormControl>
                <Input placeholder="Sua profissão" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="objective"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Qual seu objetivo? *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um objetivo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="EMAGRECIMENTO">Emagrecimento</SelectItem>
                  <SelectItem value="HIPERTROFIA">Hipertrofia</SelectItem>
                  <SelectItem value="QUALIDADE DE VIDA">Qualidade de Vida</SelectItem>
                  <SelectItem value="TRATAR CELULITE OU LIPEDEMA">Tratar Celulite ou Lipedema</SelectItem>
                  <SelectItem value="TRATAR LESÃO">Tratar Lesão</SelectItem>
                  <SelectItem value="MELHORAR POSTURA">Melhorar Postura</SelectItem>
                  <SelectItem value="OUTRO">Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch("objective") === "OUTRO" && (
          <FormField
            control={form.control}
            name="otherObjective"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Qual outro objetivo?</FormLabel>
                <FormControl>
                  <Input placeholder="Descreva seu objetivo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="trainingTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Treina há quanto tempo? *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tempo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="VOU COMEÇAR AGORA">Vou começar agora</SelectItem>
                  <SelectItem value="1 MÊS">1 Mês</SelectItem>
                  <SelectItem value="3 MESES">3 Meses</SelectItem>
                  <SelectItem value="6 MESES">6 Meses</SelectItem>
                  <SelectItem value="1 ANO">1 Ano</SelectItem>
                  <SelectItem value="2 ANOS">2 Anos</SelectItem>
                  <SelectItem value="3 ANOS OU MAIS">3 Anos ou mais</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="trainingFrequency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Frequência semanal de treino *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a frequência" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="NÃO TREINO">Não treino</SelectItem>
                  <SelectItem value="1 VEZ NA SEMANA">1 vez na semana</SelectItem>
                  <SelectItem value="2 VEZES NA SEMANA">2 vezes na semana</SelectItem>
                  <SelectItem value="3 VEZES NA SEMANA">3 vezes na semana</SelectItem>
                  <SelectItem value="4 VEZES NA SEMANA">4 vezes na semana</SelectItem>
                  <SelectItem value="5 VEZES NA SEMANA">5 vezes na semana</SelectItem>
                  <SelectItem value="6 VEZES NA SEMANA">6 vezes na semana</SelectItem>
                  <SelectItem value="7 VEZES NA SEMANA">7 vezes na semana</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="personalFollowUp"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Faz acompanhamento com algum Personal Trainer? *</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="SIM, QUERO APENAS O TREINO LIPEDEMA" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Sim, quero apenas o treino Lipedema
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="NÃO, MAS QUERO APENAS PLANILHA DE TREINO" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Não, mas quero apenas planilha de treino
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="NÃO, MAS QUERO APENAS TREINO LIPEDEMA" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Não, mas quero apenas treino Lipedema
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="NÃO, E QUERO PLANILHA DE TREINO + TREINO LIPEDEMA" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Não, e quero planilha de treino + treino Lipedema
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="NÃO, E QUERO TREINO LIPEDEMA + ACOMPANHAMENTO PRESENCIAL" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Não, e quero treino Lipedema + acompanhamento presencial
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dailyTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tempo disponível por dia *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tempo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="60 MINUTOS">60 Minutos</SelectItem>
                  <SelectItem value="90 MINUTOS">90 Minutos</SelectItem>
                  <SelectItem value="120 MINUTOS">120 Minutos</SelectItem>
                  <SelectItem value="+ DE 120 MINUTOS">+ de 120 Minutos</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="trainingDivision"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Como está dividido seu treino atual? *</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Quais grupos musculares você treina por dia?" 
                  className="resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="injuries"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tem algum tipo de dor, lesão ou disfunção? *</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Se sim, informe se tem alguma limitação específica." 
                  className="resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cardioTest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teste de Cardio (Opcional)</FormLabel>
              <p className="text-xs text-muted-foreground mb-2">
                Corra na maior velocidade que conseguir por 8 minutos. Envie quantos metros/km conseguiu atingir.
              </p>
              <FormControl>
                <Input placeholder="Ex: 1.2km em 8 min" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Enviar Avaliação pelo WhatsApp
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
