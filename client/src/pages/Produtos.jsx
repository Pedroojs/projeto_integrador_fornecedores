import { useState } from "react";
import { Link } from "wouter";
import DashboardLayout from "@/components/DashboardLayout";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

// todo: remove mock data - fetch from API
const mockProducts = [
  { id: "1", nome: "Produto A", quantidade: 150, fornecedor: "Fornecedor X", lote: "L001", dataEntrada: "10/12/2024" },
  { id: "2", nome: "Produto B", quantidade: 5, fornecedor: "Fornecedor Y", lote: "L002", dataEntrada: "08/12/2024" },
  { id: "3", nome: "Produto C", quantidade: 80, fornecedor: "Fornecedor Z", lote: "L003", dataEntrada: "05/12/2024" },
  { id: "4", nome: "Produto D", quantidade: 200, fornecedor: "Fornecedor X", lote: "L004", dataEntrada: "01/12/2024" },
  { id: "5", nome: "Produto E", quantidade: 3, fornecedor: "Fornecedor W", lote: "L005", dataEntrada: "28/11/2024" },
  { id: "6", nome: "Produto F", quantidade: 45, fornecedor: "Fornecedor Y", lote: "L006", dataEntrada: "25/11/2024" },
];

export default function Produtos() {
  const [searchTerm, setSearchTerm] = useState("");
  // todo: remove mock state - use real data from API
  const [products] = useState(mockProducts);

  const filteredProducts = products.filter((product) =>
    product.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.fornecedor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.lote.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout title="Produtos">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
              data-testid="input-search"
            />
          </div>
          <Button asChild data-testid="button-new-product">
            <Link href="/produto/novo">
              <Plus className="h-4 w-4 mr-2" />
              Novo Produto
            </Link>
          </Button>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground" data-testid="text-empty-state">
            Nenhum produto encontrado.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
