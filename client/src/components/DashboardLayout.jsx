import BottomNav from "./BottomNav";
import { Package } from "lucide-react";

export default function DashboardLayout({ children, title }) {
  return (
    <div className="min-h-screen w-full bg-background pb-16">
      <header className="flex items-center gap-3 p-4 border-b bg-card sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <Package className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg" data-testid="text-logo">Estoque</span>
        </div>
        <span className="text-muted-foreground">|</span>
        <h1 className="text-lg font-semibold" data-testid="text-page-title">{title}</h1>
      </header>
      <main className="p-4 md:p-6">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
