import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail, Phone } from "lucide-react";

const Contato = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5511918560216?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col">
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-montserrat font-extrabold mb-6">
              Vamos{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                conversar
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Escolha a melhor forma de entrar em contato
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-soft text-center">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>WhatsApp</CardTitle>
                <CardDescription>Resposta mais rápida via Bia</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full gradient-primary hover:opacity-90 transition-smooth"
                >
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft text-center">
              <CardHeader>
                <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>E-mail</CardTitle>
                <CardDescription>Para propostas formais</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:contato@solviaoficial.com"
                  className="text-sm text-primary hover:underline"
                >
                  contato@solviaoficial.com
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-soft text-center">
              <CardHeader>
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Telefone</CardTitle>
                <CardDescription>Para urgências</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="tel:+5511918560216" className="text-sm text-primary hover:underline">
                  +55 11 91856-0216
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto mt-16 text-center">
            <h2 className="text-3xl font-montserrat font-extrabold mb-4">
              Prefere testar primeiro?
            </h2>
            <p className="text-muted-foreground mb-6">
              Converse com a Bia, nossa assistente IA, e tire suas dúvidas sobre preços, prazos e como funciona
            </p>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="gradient-primary hover:opacity-90 transition-smooth"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar com a Bia agora
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
