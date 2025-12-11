import { useState } from "react";
import { useLocation } from "wouter";
import AuthLayout from "@/components/AuthLayout";
import FormInput from "@/components/FormInput";
import FormButton from "@/components/FormButton";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
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
    
    // todo: remove mock functionality - implement real login API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login realizado!",
        description: "Bem-vindo ao sistema de estoque.",
      });
      setLocation("/dashboard");
    }, 1000);
  };

  return (
    <AuthLayout
      title="Login"
      footerText="Não possui conta? Então"
      footerLinkText="realize o cadastro"
      footerLinkHref="/cadastro"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          label="*E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="*Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <FormButton type="submit" isLoading={isLoading}>
          Entrar
        </FormButton>
      </form>
    </AuthLayout>
  );
}
