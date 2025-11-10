import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, FileText } from "lucide-react";

const Header = () => {
  const navigation = [
    { name: "Início", href: "/" },
    { name: "Soluções de IA", href: "/solucoes" },
    { name: "Websites sob medida", href: "/websites" },
    { name: "Integrações", href: "/integracoes" },
    { name: "Cases", href: "/cases" },
    { name: "Manifesto", href: "/manifesto" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
  ];

  const handleBiaClick = () => {
    window.open(
      "https://wa.me/5511918560216?text=Oi%20Bia!%20Quero%20tirar%20d%C3%BAvidas%3A%20%5BPre%C3%A7o%5D%20%5BComo%20funciona%5D%20%5BPrazo%5D%20%5BIntegrar%20IA%20no%20meu%20site%5D",
      "_blank"
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-montserrat font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Solvia
          </span>
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={handleBiaClick}
            variant="default"
            size="sm"
            className="gradient-primary hover:opacity-90 transition-smooth"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Falar com a Bia (IA)
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden sm:flex"
          >
            <Link to="/contato">
              <FileText className="mr-2 h-4 w-4" />
              Orçamento de site
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
