import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-montserrat font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Solvia
          </span>
        </Link>

        <div className="flex items-center space-x-6">
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

        <Button
          asChild
          variant="default"
          size="sm"
          className="gradient-primary hover:opacity-90 transition-smooth"
        >
          <Link to="/contato">
            <FileText className="mr-2 h-4 w-4" />
            Orçamento de site
          </Link>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
