import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Manifesto = () => {
  const handleContact = () => {
    window.open(
      "https://wa.me/5511918560216?text=Quero%20deixar%20a%20tecnologia%20invis%C3%ADvel%20e%20sentir%20a%20vida",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col">
      <section className="py-24 bg-background">
        <article className="container mx-auto px-4 max-w-4xl">
          <header className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-montserrat font-extrabold mb-8 leading-tight">
              O tempo é a única moeda que{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                não se multiplica
              </span>
            </h1>
          </header>

          <div className="prose prose-lg md:prose-xl max-w-none space-y-8 text-foreground/90">
            <p className="text-xl md:text-2xl leading-relaxed">
              Tudo o que fazemos — trabalhar, aprender, criar, lutar — se resume a como gastamos os
              instantes que nunca mais voltarão. A vida não deve ser vivida em processos, mas em
              experiências. Não deve ser contada em horas, mas em memórias.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 my-12 text-2xl md:text-3xl font-medium italic text-foreground">
              A Solvia nasceu com um propósito maior que a tecnologia: libertar pessoas do peso do
              repetitivo, para que possam viver o essencial.
            </blockquote>

            <p className="text-xl leading-relaxed">
              Cada agente criado, cada solução entregue, não é apenas um sistema funcionando. É um
              pedaço de vida devolvido. É tempo que retorna para ser vivido com a família, com os
              sonhos, com a paz de ser humano.
            </p>

            <div className="my-16 p-8 bg-muted/50 rounded-3xl">
              <p className="text-xl leading-relaxed mb-4">
                Kevyn Freo não busca apenas empreender. Sua missão é mostrar que a verdadeira
                inovação não é acelerar máquinas, mas desacelerar vidas humanas, permitindo que cada
                um volte a sentir o que o mundo tem de mais profundo.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-montserrat font-extrabold">
                A Solvia acredita que:
              </h2>

              <ul className="space-y-4 text-lg">
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-2xl">·</span>
                  <span>
                    A vida não se mede em tarefas concluídas, mas em instantes vividos.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-2xl">·</span>
                  <span>
                    A tecnologia deve ser invisível e libertadora, nunca uma prisão.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-2xl">·</span>
                  <span>
                    Cada pessoa merece mais do que sobreviver em processos — merece existir em
                    plenitude.
                  </span>
                </li>
              </ul>
            </div>

            <div className="my-16 text-center">
              <p className="text-3xl md:text-4xl font-montserrat font-extrabold mb-4">
                Nosso lema é simples e eterno:
              </p>
              <p className="text-2xl md:text-3xl gradient-primary bg-clip-text text-transparent font-bold">
                👉 Devolver o tempo, para que cada pessoa viva o que realmente importa.
              </p>
            </div>

            <div className="space-y-4 text-lg text-center my-16">
              <p>Esse é o objetivo da Solvia.</p>
              <p>Esse é o objetivo de Kevyn Freo.</p>
              <p className="font-bold">Esse é o futuro que escolhemos construir.</p>
            </div>

            <footer className="mt-16 pt-8 border-t border-border">
              <p className="text-xl font-semibold">Kevyn Freo</p>
              <p className="text-muted-foreground">Fundador</p>
            </footer>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-muted-foreground mb-6">
              Deixe a tecnologia invisível. Sinta a vida.
            </p>
            <Button
              onClick={handleContact}
              size="lg"
              className="gradient-primary hover:opacity-90 transition-smooth text-lg px-8 py-6"
            >
              Fale com a Solvia
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Manifesto;
