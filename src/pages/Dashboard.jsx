import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import StatsCard from "@/components/StatsCard";
import ProductCard from "@/components/ProductCard";
import MovementRow from "@/components/MovementRow";
import { Package, ArrowLeftRight, AlertTriangle, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { localStorageService } from "@/lib/localStorage";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [movements, setMovements] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    const storedProducts = localStorageService.getProducts();
    const storedMovements = localStorageService.getMovements();
    setProducts(storedProducts);
    setMovements([...storedMovements].reverse());
  }, [refreshTrigger]);

  useEffect(() => {
    // Atualizar dashboard a cada mudança no localStorage
    const handleStorageChange = () => {
      setRefreshTrigger((prev) => prev + 1);
    };

    window.addEventListener("storage", handleStorageChange);
    
    // Monitorar mudanças locais também
    const interval = setInterval(() => {
      const storedProducts = localStorageService.getProducts();
      const storedMovements = localStorageService.getMovements();
      setProducts(storedProducts);
      setMovements([...storedMovements].reverse());
    }, 500);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const totalProdutos = products.length;
  const totalEstoque = products.reduce((acc, p) => acc + (p.quantidade || 0), 0);
  const produtosBaixoEstoque = products.filter((p) => p.quantidade < 10).length;
  
  const today = new Date().toLocaleDateString("pt-BR");
  const movimentacoesHoje = movements.filter((m) => m.data === today).length;

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
              {products.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground" data-testid="text-empty-products">
                  Nenhum produto cadastrado.
                </div>
              ) : (
                products.slice(0, 3).map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Últimas Movimentações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {movements.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground" data-testid="text-empty-movements">
                  Nenhuma movimentação registrada.
                </div>
              ) : (
                movements.slice(0, 3).map((movement) => (
                  <MovementRow key={movement.id} {...movement} />
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
