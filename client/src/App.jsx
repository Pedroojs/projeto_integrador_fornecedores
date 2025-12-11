import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Cadastro from "@/pages/Cadastro";
import Dashboard from "@/pages/Dashboard";
import Produtos from "@/pages/Produtos";
import Movimentacoes from "@/pages/Movimentacoes";
import ProdutoForm from "@/pages/ProdutoForm";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/produtos" component={Produtos} />
      <Route path="/movimentacoes" component={Movimentacoes} />
      <Route path="/produto/novo" component={ProdutoForm} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
