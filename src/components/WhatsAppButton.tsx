import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/5511918560216?text=Oi%20Bia!%20Quero%20tirar%20d%C3%BAvidas%3A%20%5BPre%C3%A7o%5D%20%5BComo%20funciona%5D%20%5BPrazo%5D%20%5BIntegrar%20IA%20no%20meu%20site%5D",
      "_blank"
    );
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-strong gradient-primary hover:opacity-90 transition-smooth z-50"
      aria-label="Falar com Bia no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;
