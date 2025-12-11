import { useState } from "react";
import { useLocation } from "wouter";
import DashboardLayout from "@/components/DashboardLayout";
import FormInput from "@/components/FormInput";
import FormButton from "@/components/FormButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function ProdutoForm() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    quantidade: "",
    fornecedor: "",
    dataEntrada: "",
    lote: "",
    notaFiscal: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nome, quantidade, fornecedor, dataEntrada, lote, notaFiscal } = formData;
    if (!nome || !quantidade || !fornecedor || !dataEntrada || !lote || !notaFiscal) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // todo: remove mock functionality - implement real API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Produto cadastrado!",
        description: `${nome} foi adicionado ao estoque.`,
      });
      setLocation("/produtos");
    }, 500);
  };

  return (
    <DashboardLayout title="Cadastrar Produto">
      <div className="max-w-lg mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Novo Produto</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <FormInput
                name="nome"
                type="text"
                label="*Nome do produto"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              <FormInput
                name="quantidade"
                type="number"
                label="*Quantidade"
                value={formData.quantidade}
                onChange={handleChange}
                required
              />
              <FormInput
                name="fornecedor"
                type="text"
                label="*Fornecedor"
                value={formData.fornecedor}
                onChange={handleChange}
                required
              />
              <FormInput
                name="dataEntrada"
                type="date"
                label="*Data de entrada"
                value={formData.dataEntrada}
                onChange={handleChange}
                required
              />
              <FormInput
                name="lote"
                type="text"
                label="*Lote"
                value={formData.lote}
                onChange={handleChange}
                required
              />
              <FormInput
                name="notaFiscal"
                type="text"
                label="*Nota fiscal"
                value={formData.notaFiscal}
                onChange={handleChange}
                required
              />
              <FormButton type="submit" isLoading={isLoading}>
                Cadastrar
              </FormButton>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
