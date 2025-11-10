import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [open, setOpen] = useState(false);
  
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

        {/* Desktop Navigation */}
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
          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-foreground/80 hover:text-foreground transition-smooth py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  asChild
                  variant="default"
                  className="gradient-primary hover:opacity-90 transition-smooth mt-4"
                >
                  <Link to="/contato" onClick={() => setOpen(false)}>
                    <FileText className="mr-2 h-4 w-4" />
                    Orçamento de site
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop CTA */}
          <Button
            asChild
            variant="default"
            size="sm"
            className="hidden lg:flex gradient-primary hover:opacity-90 transition-smooth"
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
