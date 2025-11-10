import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Cases = () => {
  const cases = [
    {
      company: "E-commerce Fashion",
      industry: "Varejo Online",
      challenge: "Alto volume de dúvidas repetitivas sobre produtos e frete, equipe sobrecarregada",
      solution: "Agente IA para atendimento 24/7 via WhatsApp e chat do site, integrado ao estoque",
      results: [
        "+47% leads qualificados",
        "TTR -60% (time to response)",
        "92% satisfação do cliente",
        "Equipe focou em vendas complexas",
      ],
      metrics: {
        before: "120 min tempo médio de resposta",
        after: "48 seg tempo médio de resposta",
      },
    },
    {
      company: "Clínica Médica",
      industry: "Saúde",
      challenge: "Site lento (LCP 5.2s) prejudicava conversão, agendamentos por telefone lotavam linha",
      solution: "Novo site otimizado + agente IA para agendamento integrado ao sistema da clínica",
      results: [
        "LCP 1.9s (Core Web Vitals verde)",
        "+38% agendamentos online",
        "-70% ligações para agendamento",
        "Disponibilidade 24/7",
      ],
      metrics: {
        before: "5.2s LCP, 18% conversão",
        after: "1.9s LCP, 31% conversão",
      },
    },
    {
      company: "Consultoria B2B",
      industry: "Serviços Profissionais",
      challenge: "Leads frios consumindo tempo da equipe comercial",
      solution: "Agente IA para qualificação inicial, integrado ao CRM (Pipedrive)",
      results: [
        "+63% leads qualificados",
        "Ciclo de vendas -25%",
        "ROI 340% em 3 meses",
        "Equipe focou em fechamento",
      ],
      metrics: {
        before: "42% leads qualificados",
        after: "85% leads qualificados",
      },
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-montserrat font-extrabold mb-6">
              Cases de{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                sucesso
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Resultados reais de empresas que escolheram devolver o tempo
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-5xl mx-auto">
            {cases.map((case_, index) => (
              <Card key={index} className="shadow-medium">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">{case_.company}</CardTitle>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {case_.industry}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="h-5 w-5 text-destructive" />
                        <h3 className="font-semibold">Desafio</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{case_.challenge}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold">Solução</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{case_.solution}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold">Resultados</h3>
                      </div>
                      <ul className="text-sm space-y-1">
                        {case_.results.map((result, idx) => (
                          <li key={idx} className="text-primary font-semibold">
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="grid md:grid-cols-2 gap-4 text-center">
                      <div className="bg-destructive/10 rounded-xl p-4">
                        <p className="text-xs text-muted-foreground mb-1">Antes</p>
                        <p className="text-sm font-semibold">{case_.metrics.before}</p>
                      </div>
                      <div className="bg-accent/10 rounded-xl p-4">
                        <p className="text-xs text-muted-foreground mb-1">Depois</p>
                        <p className="text-sm font-semibold">{case_.metrics.after}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-montserrat font-extrabold mb-6">
            Quer resultados assim no seu negócio?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Converse com a Bia e descubra como podemos ajudar
          </p>
          <Button asChild size="lg" className="gradient-primary hover:opacity-90 transition-smooth">
            <Link to="/contato">Falar com a Bia agora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Cases;
