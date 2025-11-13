import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatDialog from "./ChatDialog";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-strong gradient-primary hover:opacity-90 transition-smooth z-50"
        aria-label="Chat com Bia"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {isOpen && <ChatDialog onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default WhatsAppButton;
