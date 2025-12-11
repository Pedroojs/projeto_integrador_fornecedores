import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";

export default function ProductCard({
  id,
  nome,
  quantidade,
  fornecedor,
  lote,
  dataEntrada,
}) {
  const isLowStock = quantidade < 10;

  return (
    <Card className="hover-elevate" data-testid={`card-product-${id}`}>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <Package className="h-4 w-4 text-muted-foreground" />
          {nome}
        </CardTitle>
        <Badge variant={isLowStock ? "destructive" : "secondary"} data-testid={`badge-stock-${id}`}>
          {quantidade} un.
        </Badge>
      </CardHeader>
      <CardContent className="space-y-1">
        <p className="text-sm text-muted-foreground">
          Fornecedor: <span className="text-foreground">{fornecedor}</span>
        </p>
        <p className="text-sm text-muted-foreground">
          Lote: <span className="text-foreground">{lote}</span>
        </p>
        <p className="text-sm text-muted-foreground">
          Entrada: <span className="text-foreground">{dataEntrada}</span>
        </p>
      </CardContent>
    </Card>
  );
}
