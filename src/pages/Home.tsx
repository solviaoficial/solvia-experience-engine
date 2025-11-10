import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Bot, Globe, Zap, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const handleBiaClick = () => {
    window.open(
      "https://wa.me/5511918560216?text=Oi%20Bia!%20Quero%20tirar%20d%C3%BAvidas",
      "_blank"
    );
  };

  const solutions = [
    {
      icon: Bot,
      title: "Agentes de IA 24/7",
      description: "Resposta imediata, qualificação e agendamento com tom humano e handoff para pessoas.",
      features: ["Atendimento humanizado", "Qualificação automática", "Integração com equipe"],
    },
    {
      icon: Globe,
      title: "Websites sob medida",
      description: "Design autoral, SEO técnico, Core Web Vitals, CMS e segurança.",
      features: ["Performance otimizada", "SEO completo", "Design exclusivo"],
    },
    {
      icon: Zap,
      title: "Integrações inteligentes",
      description: "WhatsApp, CRM, agenda, pagamentos e automações.",
      features: ["WhatsApp Business", "CRM e ERP", "Pagamentos online"],
    },
  ];

  const timeline = [
    { step: "1", title: "Descoberta", description: "Entendemos seu negócio e objetivos" },
    { step: "2", title: "Protótipo guiado", description: "Validamos a solução junto com você" },
    { step: "3", title: "Integração & testes", description: "LGPD-ready e totalmente testado" },
    { step: "4", title: "Go live + evolução", description: "Lançamento e melhoria contínua" },
  ];

  const cases = [
    {
      company: "E-commerce Fashion",
      challenge: "Alto volume de dúvidas repetitivas",
      solution: "Agente IA para atendimento 24/7",
      result: "+47% leads qualificados, TTR -60%",
    },
    {
      company: "Clínica Médica",
      challenge: "Site lento prejudicava conversão",
      solution: "Novo site otimizado + agendamento IA",
      result: "LCP 1.9s, +38% agendamentos",
    },
  ];

  const faqs = [
    {
      question: "Como a IA entra no meu site?",
      answer: "Integramos agentes de IA diretamente no seu site através de chat, formulários inteligentes ou WhatsApp. A IA pode responder dúvidas, qualificar leads e agendar reuniões automaticamente.",
    },
    {
      question: "Quanto tempo para lançar?",
      answer: "Depende do escopo, mas um projeto típico leva de 2 a 4 semanas desde a descoberta até o go-live. Agentes de IA simples podem estar rodando em poucos dias.",
    },
    {
      question: "Como funciona a LGPD e privacidade?",
      answer: "Todos os nossos projetos são LGPD-ready desde o início. Implementamos políticas de privacidade, termos de uso, consentimento e segurança de dados conforme a legislação.",
    },
    {
      question: "Preciso ter equipe técnica?",
      answer: "Não! Nosso handoff é completo e você recebe treinamento. Para agentes IA, mostramos como acompanhar conversas e quando a IA encaminha para humanos.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden gradient-subtle">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-montserrat font-extrabold mb-6 animate-fade-in">
              IA que devolve o{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                seu tempo
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Agentes 24/7 + sites velozes com IA integrada. Menos rotina, mais vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button
                onClick={handleBiaClick}
                size="lg"
                className="gradient-primary hover:opacity-90 transition-smooth text-lg px-8 py-6"
              >
                Teste um agente no WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link to="/contato">Solicitar orçamento de site</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              O que fazemos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para transformar seu atendimento e presença digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como entregamos */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Como entregamos
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 mb-12 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-medium">
                      {item.step}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-primary to-accent mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-12">
                    <h3 className="text-2xl font-montserrat font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Antes/Depois
            </h2>
            <p className="text-xl text-muted-foreground">Resultados reais de clientes reais</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {cases.map((case_, index) => (
              <Card key={index} className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl">{case_.company}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-destructive" />
                      <span className="font-semibold text-sm">Desafio</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{case_.challenge}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4 text-accent" />
                      <span className="font-semibold text-sm">Solução</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{case_.solution}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-sm">Resultado</span>
                    </div>
                    <p className="text-sm font-semibold text-primary">{case_.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/cases">
                Ver demonstrações ao vivo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Perguntas frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-6">
              Pronto para devolver o seu tempo?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Converse com a Bia ou solicite um orçamento personalizado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBiaClick}
                size="lg"
                className="gradient-primary hover:opacity-90 transition-smooth text-lg px-8 py-6"
              >
                Falar com a Bia agora
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link to="/contato">Pedir orçamento</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
