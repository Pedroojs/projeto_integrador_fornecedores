import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import StatsCard from "@/components/StatsCard";
import ProductCard from "@/components/ProductCard";
import MovementRow from "@/components/MovementRow";
import { Package, ArrowLeftRight, AlertTriangle, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// todo: remove mock data - fetch from API
const mockProducts = [
  { id: "1", nome: "Produto A", quantidade: 150, fornecedor: "Fornecedor X", lote: "L001", dataEntrada: "10/12/2024" },
  { id: "2", nome: "Produto B", quantidade: 5, fornecedor: "Fornecedor Y", lote: "L002", dataEntrada: "08/12/2024" },
  { id: "3", nome: "Produto C", quantidade: 80, fornecedor: "Fornecedor Z", lote: "L003", dataEntrada: "05/12/2024" },
];

const mockMovements = [
  { id: "1", produto: "Produto A", tipo: "entrada", quantidade: 50, data: "11/12/2024", lote: "L001" },
  { id: "2", produto: "Produto B", tipo: "saida", quantidade: 10, data: "10/12/2024", lote: "L002" },
  { id: "3", produto: "Produto C", tipo: "entrada", quantidade: 30, data: "09/12/2024", lote: "L003" },
];

export default function Dashboard() {
  // todo: remove mock state - use real data from API
  const [products] = useState(mockProducts);
  const [movements] = useState(mockMovements);

  const totalProdutos = products.length;
  const totalEstoque = products.reduce((acc, p) => acc + p.quantidade, 0);
  const produtosBaixoEstoque = products.filter((p) => p.quantidade < 10).length;
  const movimentacoesHoje = movements.filter((m) => m.data === "11/12/2024").length;

  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Total de Produtos"
            value={totalProdutos}
            icon={Package}
            description="Produtos cadastrados"
          />
          <StatsCard
            title="Estoque Total"
            value={`${totalEstoque} un.`}
            icon={TrendingUp}
            description="Unidades em estoque"
          />
          <StatsCard
            title="Baixo Estoque"
            value={produtosBaixoEstoque}
            icon={AlertTriangle}
            description="Produtos com menos de 10 un."
          />
          <StatsCard
            title="Movimentações Hoje"
            value={movimentacoesHoje}
            icon={ArrowLeftRight}
            description="Entradas e saídas"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Produtos Recentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {products.slice(0, 3).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Últimas Movimentações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {movements.slice(0, 3).map((movement) => (
                <MovementRow key={movement.id} {...movement} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
