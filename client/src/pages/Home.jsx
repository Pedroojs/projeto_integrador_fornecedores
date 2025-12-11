import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import LoginModal from "@/components/LoginModal";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleCriarConta = () => {
    setLocation("/cadastro");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="w-full border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-foreground" data-testid="text-logo">Controle Total</span>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-como-funciona">
              Como funciona
            </a>
            <a href="#funcionalidades" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-funcionalidades">
              Funcionalidades
            </a>
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-sobre">
              Sobre
            </a>
          </nav>
          <Button
            variant="ghost"
            onClick={() => setIsLoginOpen(true)}
            className="text-foreground hover:text-primary"
            data-testid="button-entrar"
          >
            Entrar
          </Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-3xl text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight" data-testid="text-hero-title">
            Controle de estoque simples, rápido e inteligente.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-hero-description">
            Tenha total controle de produtos, fornecedores e movimentações em um único lugar.
            Relatórios automáticos e gestão profissional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="px-8 py-6 text-lg" onClick={handleCriarConta} data-testid="button-criar-conta">
              Criar Conta
            </Button>
          </div>
        </div>
      </main>

      <section id="como-funciona" className="py-16 px-4 border-t border-border" data-testid="section-como-funciona">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground" data-testid="text-section-title-como-funciona">Como funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4" data-testid="card-step-1">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Cadastre seus produtos</h3>
              <p className="text-muted-foreground">Adicione produtos com informações detalhadas como lote, fornecedor e quantidade.</p>
            </div>
            <div className="text-center space-y-4" data-testid="card-step-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Registre movimentações</h3>
              <p className="text-muted-foreground">Controle entradas e saídas do estoque de forma simples e organizada.</p>
            </div>
            <div className="text-center space-y-4" data-testid="card-step-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Acompanhe relatórios</h3>
              <p className="text-muted-foreground">Visualize dashboards e relatórios para tomar decisões estratégicas.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="funcionalidades" className="py-16 px-4 bg-card border-t border-border" data-testid="section-funcionalidades">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground" data-testid="text-section-title-funcionalidades">Funcionalidades</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Dashboard", desc: "Visão geral do seu estoque" },
              { title: "Produtos", desc: "Cadastro e gestão completa" },
              { title: "Movimentações", desc: "Entradas e saídas registradas" },
              { title: "Alertas", desc: "Notificações de baixo estoque" },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-background rounded-lg border border-border" data-testid={`card-feature-${index + 1}`}>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-16 px-4 border-t border-border" data-testid="section-sobre">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground" data-testid="text-section-title-sobre">Sobre</h2>
          <p className="text-muted-foreground text-lg" data-testid="text-sobre-description">
            O Controle Total é uma solução moderna para gestão de estoque, 
            desenvolvida para pequenas e médias empresas que buscam eficiência 
            e simplicidade no controle de seus produtos.
          </p>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-card" data-testid="footer">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
          <p data-testid="text-footer">&copy; {new Date().getFullYear()} Controle Total. Todos os direitos reservados.</p>
        </div>
      </footer>

      <LoginModal open={isLoginOpen} onOpenChange={setIsLoginOpen} />
    </div>
  );
}
