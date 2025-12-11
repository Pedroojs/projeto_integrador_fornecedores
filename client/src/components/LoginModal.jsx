import { useState } from "react";
import { useLocation } from "wouter";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function LoginModal({ open, onOpenChange }) {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      onOpenChange(false);
      toast({
        title: "Login realizado!",
        description: "Bem-vindo ao sistema de estoque.",
      });
      setLocation("/dashboard");
    }, 1000);
  };

  const handleCriarConta = () => {
    onOpenChange(false);
    setLocation("/cadastro");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" data-testid="modal-login">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center" data-testid="text-modal-title">Login</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-4" data-testid="form-login">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground" data-testid="label-email">
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="input-email"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-foreground" data-testid="label-password">
              Senha
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              data-testid="input-password"
            />
          </div>
          <Button type="submit" className="w-full mt-2" disabled={isLoading} data-testid="button-login-submit">
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
          <p className="text-center text-sm text-muted-foreground mt-2" data-testid="text-criar-conta">
            Não possui conta?{" "}
            <button type="button" onClick={handleCriarConta} className="text-primary hover:underline" data-testid="button-criar-conta-link">
              Criar conta
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
