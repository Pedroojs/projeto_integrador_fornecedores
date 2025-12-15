import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import MovementRow from "@/components/MovementRow";
import FormInput from "@/components/FormInput";
import FormButton from "@/components/FormButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { localStorageService } from "@/lib/localStorage";

export default function Movimentacoes() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [movements, setMovements] = useState([]);
  const [formData, setFormData] = useState({
    produto: "",
    tipo: "",
    quantidade: "",
    data: "",
    lote: "",
    fornecedor: "",
  });

  useEffect(() => {
    const storedMovements = localStorageService.getMovements();
    setMovements([...storedMovements].reverse());
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { produto, tipo, quantidade, data, lote } = formData;
    if (!produto || !tipo || !quantidade || !data || !lote) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const newMovement = localStorageService.addMovement({
      produto,
      tipo,
      quantidade: parseInt(quantidade),
      data: new Date(data).toLocaleDateString("pt-BR"),
      lote,
      fornecedor: formData.fornecedor,
    });
    setMovements((prev) => [newMovement, ...prev]);
    setFormData({ produto: "", tipo: "", quantidade: "", data: "", lote: "", fornecedor: "" });
    setIsLoading(false);
    toast({
      title: "Movimentação registrada!",
      description: `${tipo === "entrada" ? "Entrada" : "Saída"} de ${quantidade} unidades.`,
    });
  };

  return (
    <DashboardLayout title="Movimentações">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Nova Movimentação</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <FormInput
                name="produto"
                type="text"
                label="*Nome do produto"
                value={formData.produto}
                onChange={handleChange}
                required
              />
              <Select
                value={formData.tipo}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, tipo: value }))}
              >
                <SelectTrigger data-testid="select-tipo">
                  <SelectValue placeholder="*Tipo de movimentação" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entrada">Entrada</SelectItem>
                  <SelectItem value="saida">Saída</SelectItem>
                </SelectContent>
              </Select>
              <FormInput
                name="fornecedor"
                type="text"
                label="Fornecedor"
                value={formData.fornecedor}
                onChange={handleChange}
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
                name="data"
                type="date"
                label="*Data"
                value={formData.data}
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
              <FormButton type="submit" isLoading={isLoading}>
                Registrar
              </FormButton>
            </form>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Histórico de Movimentações</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {movements.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground" data-testid="text-empty-state">
                Nenhuma movimentação registrada.
              </div>
            ) : (
              movements.map((movement) => (
                <MovementRow key={movement.id} {...movement} />
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
