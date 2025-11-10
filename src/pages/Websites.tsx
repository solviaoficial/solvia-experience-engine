import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gauge, Search, Palette, Code, Lock, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Websites = () => {
  return (
    <div className="flex flex-col">
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-montserrat font-extrabold mb-6">
              Websites{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                sob medida
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Design autoral, SEO técnico, Core Web Vitals, CMS e segurança
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-soft">
              <CardHeader>
                <Gauge className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Performance Máxima</CardTitle>
                <CardDescription>
                  Core Web Vitals em verde. Sites que carregam em menos de 2 segundos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Lighthouse score 90+</li>
                  <li>• LCP otimizado</li>
                  <li>• Lazy loading inteligente</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <Search className="h-12 w-12 text-accent mb-4" />
                <CardTitle>SEO Técnico</CardTitle>
                <CardDescription>
                  Otimização completa para aparecer onde seus clientes buscam.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Meta tags otimizadas</li>
                  <li>• Schema markup</li>
                  <li>• URLs semânticas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <Palette className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Design Autoral</CardTitle>
                <CardDescription>
                  Identidade visual única que reflete a essência da sua marca.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• UI/UX personalizado</li>
                  <li>• Animações elegantes</li>
                  <li>• Paleta exclusiva</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Mobile First</CardTitle>
                <CardDescription>
                  Experiência perfeita em qualquer dispositivo, do smartphone ao desktop.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Design responsivo</li>
                  <li>• Touch otimizado</li>
                  <li>• PWA ready</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <Lock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Segurança Total</CardTitle>
                <CardDescription>
                  HTTPS, proteção contra ataques e backups automáticos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• SSL/TLS incluso</li>
                  <li>• Proteção DDoS</li>
                  <li>• LGPD compliant</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <Code className="h-12 w-12 text-accent mb-4" />
                <CardTitle>IA Integrada</CardTitle>
                <CardDescription>
                  Agentes inteligentes trabalhando 24/7 direto no seu site.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Chat inteligente</li>
                  <li>• Qualificação de leads</li>
                  <li>• Agendamento automático</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-montserrat font-extrabold mb-6">
            Quero meu site com IA integrada
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Solicite um orçamento personalizado e descubra como podemos transformar sua presença digital
          </p>
          <Button asChild size="lg" className="gradient-primary hover:opacity-90 transition-smooth">
            <Link to="/contato">Solicitar orçamento</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Websites;
