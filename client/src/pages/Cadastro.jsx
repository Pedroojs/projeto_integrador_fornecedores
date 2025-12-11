import { useState } from "react";
import { useLocation } from "wouter";
import AuthLayout from "@/components/AuthLayout";
import FormInput from "@/components/FormInput";
import FormButton from "@/components/FormButton";
import { useToast } from "@/hooks/use-toast";

export default function Cadastro() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    empresa: "",
    cnpj: "",
    telefone: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, empresa, cnpj, telefone } = formData;
    if (!email || !password || !empresa || !cnpj || !telefone) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // todo: remove mock functionality - implement real registration API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Cadastro realizado!",
        description: "Sua conta foi criada com sucesso.",
      });
      setLocation("/");
    }, 1000);
  };

  return (
    <AuthLayout
      title="Cadastre-se"
      footerText="Já possui conta? Então"
      footerLinkText="realize o login"
      footerLinkHref="/"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          label="*E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="*Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <FormInput
          name="empresa"
          type="text"
          label="*Nome da empresa"
          value={formData.empresa}
          onChange={handleChange}
          required
        />
        <FormInput
          name="cnpj"
          type="text"
          label="*CNPJ"
          value={formData.cnpj}
          onChange={handleChange}
          required
        />
        <FormInput
          name="telefone"
          type="tel"
          label="*Telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
        <FormButton type="submit" isLoading={isLoading}>
          Cadastrar
        </FormButton>
      </form>
    </AuthLayout>
  );
}
