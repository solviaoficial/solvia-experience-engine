import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, Calendar, TrendingUp, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Solucoes = () => {
  return (
    <div className="flex flex-col">
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-montserrat font-extrabold mb-6">
              Agentes de IA{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                24/7
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Resposta imediata, qualificação e agendamento com tom humano e handoff para pessoas
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-soft">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Atendimento Humanizado</CardTitle>
                <CardDescription>
                  Agentes treinados para manter o tom da sua marca e criar conexões genuínas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <Calendar className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Qualificação Automática</CardTitle>
                <CardDescription>
                  Identifica leads quentes e agenda reuniões automaticamente na sua agenda
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Handoff Inteligente</CardTitle>
                <CardDescription>
                  Transfere para humanos no momento certo, com todo o contexto da conversa
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <Bot className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Múltiplos Canais</CardTitle>
                <CardDescription>
                  WhatsApp, chat no site, Instagram, Messenger - tudo integrado
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>LGPD Compliant</CardTitle>
                <CardDescription>
                  Segurança e privacidade de dados desde o primeiro dia
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <Zap className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Evolução Contínua</CardTitle>
                <CardDescription>
                  Agentes que aprendem e melhoram com cada interação
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-montserrat font-extrabold mb-6">
            Pronto para testar?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Converse com a Bia, nossa assistente IA, e veja como funciona na prática
          </p>
          <Button asChild size="lg" className="gradient-primary hover:opacity-90 transition-smooth">
            <Link to="/contato">Falar com a Bia agora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Solucoes;
