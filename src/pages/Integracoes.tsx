import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageCircle, Database, Calendar, CreditCard, Workflow, Mail } from "lucide-react";

const Integracoes = () => {
  const integrations = [
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      description: "Agentes IA respondendo clientes direto no WhatsApp da sua empresa",
    },
    {
      icon: Database,
      title: "CRM e ERP",
      description: "Sincronização automática com Pipedrive, HubSpot, RD Station e mais",
    },
    {
      icon: Calendar,
      title: "Agendas",
      description: "Integração com Google Calendar, Outlook e sistemas de agendamento",
    },
    {
      icon: CreditCard,
      title: "Pagamentos",
      description: "Stripe, Mercado Pago, PayPal e gateways nacionais",
    },
    {
      icon: Workflow,
      title: "Automações",
      description: "Zapier, Make, n8n para conectar qualquer ferramenta",
    },
    {
      icon: Mail,
      title: "E-mail Marketing",
      description: "Mailchimp, SendGrid, ActiveCampaign e plataformas nacionais",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-montserrat font-extrabold mb-6">
              Integrações{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                inteligentes
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Conectamos sua IA com as ferramentas que você já usa
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {integrations.map((integration, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <integration.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{integration.title}</CardTitle>
                  <CardDescription>{integration.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-extrabold mb-6">
              Não encontrou a integração que precisa?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Desenvolvemos integrações customizadas para qualquer API ou sistema. Se existe uma forma de conectar, nós fazemos acontecer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integracoes;
