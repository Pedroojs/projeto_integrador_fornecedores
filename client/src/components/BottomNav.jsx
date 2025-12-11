import { Link, useLocation } from "wouter";
import { Package, ArrowLeftRight, Plus, LayoutDashboard, LogOut } from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Produtos",
    url: "/produtos",
    icon: Package,
  },
  {
    title: "Novo",
    url: "/produto/novo",
    icon: Plus,
  },
  {
    title: "Movimentações",
    url: "/movimentacoes",
    icon: ArrowLeftRight,
  },
];

export default function BottomNav() {
  const [location] = useLocation();

  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {menuItems.map((item) => {
          const isActive = location === item.url;
          return (
            <Link
              key={item.title}
              href={item.url}
              className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid={`link-${item.title.toLowerCase().replace(/\s/g, "-")}`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.title}</span>
            </Link>
          );
        })}
        <button
          onClick={handleLogout}
          className="flex flex-col items-center justify-center flex-1 h-full gap-1 text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-logout"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-xs font-medium">Sair</span>
        </button>
      </div>
    </nav>
  );
}
