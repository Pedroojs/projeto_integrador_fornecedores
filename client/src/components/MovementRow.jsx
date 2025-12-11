import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function MovementRow({
  id,
  produto,
  tipo,
  quantidade,
  data,
  lote,
}) {
  const isEntrada = tipo === "entrada";

  return (
    <div
      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-card rounded-lg border"
      data-testid={`row-movement-${id}`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-full ${isEntrada ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30"}`}
        >
          {isEntrada ? (
            <ArrowDown className="h-4 w-4 text-green-600 dark:text-green-400" />
          ) : (
            <ArrowUp className="h-4 w-4 text-red-600 dark:text-red-400" />
          )}
        </div>
        <div>
          <p className="font-medium" data-testid={`text-product-${id}`}>{produto}</p>
          <p className="text-sm text-muted-foreground">Lote: {lote}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 sm:gap-4">
        <Badge variant={isEntrada ? "secondary" : "destructive"} data-testid={`badge-type-${id}`}>
          {isEntrada ? `+${quantidade}` : `-${quantidade}`}
        </Badge>
        <span className="text-sm text-muted-foreground" data-testid={`text-date-${id}`}>{data}</span>
      </div>
    </div>
  );
}
