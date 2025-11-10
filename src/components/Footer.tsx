import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-montserrat font-extrabold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solvia
            </h3>
            <p className="text-sm text-muted-foreground">
              Devolver o tempo, para que cada pessoa viva o que realmente importa.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Soluções</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/solucoes" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Agentes de IA 24/7
                </Link>
              </li>
              <li>
                <Link to="/websites" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Websites sob medida
                </Link>
              </li>
              <li>
                <Link to="/integracoes" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Integrações
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/manifesto" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Manifesto
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Cases
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contato" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Fale conosco
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/5511918560216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Solvia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
