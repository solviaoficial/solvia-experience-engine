import { useState } from "react";
import { Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

interface ChatDialogProps {
  onClose: () => void;
}

const ChatDialog = ({ onClose }: ChatDialogProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Oi! Eu sou a Bia 👋 Como posso te ajudar hoje?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Simular resposta da Bia
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: "Obrigada pela mensagem! Em breve vou responder. Para um atendimento mais rápido, você pode me chamar no WhatsApp: (11) 91856-0216",
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 w-[380px] h-[600px] bg-background border border-border rounded-lg shadow-strong flex flex-col z-50">
      {/* Header */}
      <div className="gradient-primary p-4 rounded-t-lg flex items-center justify-between">
        <div>
          <h3 className="font-bold text-lg">Chat com Bia</h3>
          <p className="text-sm opacity-90">Estamos online!</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp.toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Digite sua mensagem..."
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon" className="gradient-primary">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatDialog;
