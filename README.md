# 🚀 Controle de Estoque — Sistema de Gerenciamento de Produtos e Movimentações

Aplicação web desenvolvida em **ReactJS** para gerenciamento completo de estoque, produtos e movimentações, implementando CRUDs funcionais, validações em tempo real e dashboard interativo com atualização automática.

---

## 🌐 Deploy da Aplicação

🔗 **Aplicação (Ambiente de Produção):**
- Hospedada em: https://shre.ink/ProjetoIntegradorFornecedores

---

## 📦 Repositório do Projeto

🔗 **GitHub — FrontEnd (ReactJS + Vite):**
- [Controle de Estoque](https://github.com/Pedroojs/projeto_integrador_fornecedores)

---

## 🧭 Visão Geral do Projeto

**Domínio:** Gerenciamento de Estoque e Inventário

**Entidades principais:** Produto, Movimentação (Entrada/Saída), Usuário

**Objetivo:** Desenvolver uma aplicação web completa para controle de estoque, com CRUDs funcionais, validações de negócio, autocomplete de produtos e dashboard em tempo real, aplicando boas práticas de organização e arquitetura frontend.

**Persistência:** Realizada via localStorage (com possibilidade de integração com Backend/API REST).

---

## 🧰 Tecnologias Utilizadas

### FrontEnd
- **ReactJS** (v18.3.1)
- **JavaScript** (ES6+)
- **Vite** (Build tool)
- **Tailwind CSS** (Estilização)
- **Radix UI** (Componentes base)
- **React Router** / **Wouter** (Roteamento)
- **React Hook Form** (Gerenciamento de formulários)
- **React Query** (Gerenciamento de estado assíncrono)
- **Zod** (Validação de schemas)
- **Lucide React** (Ícones)

### Ferramentas de Desenvolvimento
- **Node.js** (v20)
- **npm** (Gerenciador de pacotes)

---

## 🎯 Desafio Atendido (CRUDs + Validações + Autocomplete)

O projeto atende integralmente aos requisitos propostos, contemplando:

✅ **CRUD de Produtos** (Criar, Ler, Atualizar, Deletar)
✅ **CRUD de Movimentações** (Entrada e Saída de estoque)
✅ **Validações de Negócio** (Só permite movimentação se produto existe)
✅ **Validações de Quantidade** (Não permite saída com estoque insuficiente)
✅ **Autocomplete Inteligente** (Sugestões de produtos ao digitar)
✅ **Dashboard em Tempo Real** (Atualização automática de dados)
✅ **Interface Responsiva** (Funciona em desktop e mobile)
✅ **Autenticação de Usuário** (Login e cadastro)

---

## 📋 Requisitos Funcionais (RF)

### Gestão de Produtos
- **RF01** — Cadastrar novo produto
- **RF02** — Listar produtos cadastrados
- **RF03** — Visualizar detalhes do produto
- **RF04** — Editar dados do produto
- **RF05** — Remover produto do sistema
- **RF06** — Filtrar produtos por nome, fornecedor ou lote

### Gestão de Movimentações
- **RF07** — Registrar entrada de estoque
- **RF08** — Registrar saída de estoque
- **RF09** — Listar histórico de movimentações
- **RF10** — Visualizar detalhes da movimentação
- **RF11** — Filtrar movimentações por data ou produto
- **RF12** — Autocomplete de produtos durante movimentação

### Dashboard
- **RF13** — Exibir estatísticas: Total de produtos, Estoque total, Produtos com baixo estoque
- **RF14** — Exibir movimentações de hoje
- **RF15** — Exibir produtos recentes cadastrados
- **RF16** — Exibir últimas movimentações

### Autenticação
- **RF17** — Cadastro de novo usuário
- **RF18** — Login de usuário
- **RF19** — Logout de usuário
- **RF20** — Sessão persistente

---

## ⚙️ Requisitos Não Funcionais (RNF)

- **RNF01** — Aplicação desenvolvida em ReactJS
- **RNF02** — Interface construída com Tailwind CSS e Radix UI
- **RNF03** — Persistência de dados via localStorage
- **RNF04** — Interface responsiva (desktop, tablet, mobile)
- **RNF05** — Validação de formulários com Zod
- **RNF06** — Código organizado por componentes e responsabilidades
- **RNF07** — Roteamento com Wouter
- **RNF08** — Gerenciamento de formulários com React Hook Form
- **RNF09** — Atualização automática de dados (polling)
- **RNF10** — Performance otimizada com React Query

---

## 🖼️ Telas da Aplicação

### Tela 1 — Home (Landing Page)
<img width="1366" height="648" alt="image" src="https://github.com/user-attachments/assets/a40ff696-64cf-4439-b101-1c08208293a9" />

- Apresentação da aplicação
- Call-to-action para login/cadastro
- Funcionalidades principais listadas

### Tela 2 — Login
<img width="1366" height="648" alt="image" src="https://github.com/user-attachments/assets/0b2c3157-d954-444b-80f1-d3213c324fd7" />

- Autenticação de usuário
- Validação de credenciais
- Redirecionamento para dashboard

### Tela 3 — Dashboard
<img width="1366" height="646" alt="image" src="https://github.com/user-attachments/assets/0f1e8a0a-a4d1-4761-8558-2a19fc5f6763" />

- Estatísticas em cards (Total Produtos, Estoque Total, Baixo Estoque, Movimentações)
- Lista de produtos recentes
- Histórico das últimas movimentações
- Atualização em tempo real

### Tela 4 — Produtos
<img width="1366" height="649" alt="image" src="https://github.com/user-attachments/assets/6b622e71-ff20-4482-a020-7eb3a005f674" />

- Listagem completa de produtos
- Campo de busca/filtro
- Botão para novo produto
- Cards com informações do produto
- Ações: editar, deletar

### Tela 5 — Cadastro de Produto
<img width="1366" height="644" alt="image" src="https://github.com/user-attachments/assets/298dc057-0255-4e61-8fec-1f745e452c03" />

- Formulário com campos: Nome, Quantidade, Fornecedor, Lote
- Validação de campos obrigatórios
- Mensagens de sucesso/erro

### Tela 6 — Movimentações
<img width="1347" height="646" alt="image" src="https://github.com/user-attachments/assets/2d18ee62-bf84-40ec-a32f-ca2e8e4b163d" />

- Formulário para nova movimentação
- **Autocomplete** para seleção de produto
- Campo tipo: Entrada/Saída
- Campos: Quantidade, Data, Lote, Fornecedor
- **Validações**:
  - Produto deve existir
  - Quantidade deve estar disponível (para saída)
- Histórico de movimentações
- Atualização automática de estoque

---

## 🧠 Modelagem dos Dados

### Entidade: Produto
```json
{
  "id": "uuid",
  "nome": "string",
  "quantidade": "number",
  "fornecedor": "string",
  "lote": "string",
  "createdAt": "ISO-8601"
}
```

### Entidade: Movimentação
```json
{
  "id": "uuid",
  "produto": "string",
  "tipo": "entrada | saida",
  "quantidade": "number",
  "data": "DD/MM/YYYY",
  "lote": "string",
  "fornecedor": "string",
  "createdAt": "ISO-8601"
}
```

### Entidade: Usuário
```json
{
  "id": "uuid",
  "username": "string",
  "password": "hashed",
  "email": "string",
  "createdAt": "ISO-8601"
}
```

---

## 📂 Estrutura do Projeto FrontEnd

```
src/
├── pages/
│   ├── Home.jsx                    # Landing page
│   ├── Login.jsx                   # Tela de login
│   ├── Cadastro.jsx                # Tela de cadastro
│   ├── Dashboard.jsx               # Dashboard com estatísticas
│   ├── Produtos.jsx                # Listagem de produtos
│   ├── ProdutoForm.jsx             # Formulário de produto
│   ├── Movimentacoes.jsx           # Gerenciamento de movimentações
│   └── not-found.jsx               # Página 404
│
├── components/
│   ├── ui/                         # Componentes shadcn/Radix UI
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   ├── select.jsx
│   │   ├── dialog.jsx
│   │   ├── toast.jsx
│   │   └── ...
│   ├── ProductAutocomplete.jsx     # Autocomplete de produtos
│   ├── ProductCard.jsx             # Card de exibição de produto
│   ├── MovementRow.jsx             # Linha de movimentação
│   ├── StatsCard.jsx               # Card de estatística
│   ├── DashboardLayout.jsx         # Layout do dashboard
│   ├── AuthLayout.jsx              # Layout de autenticação
│   ├── FormInput.jsx               # Input customizado
│   ├── FormButton.jsx              # Botão customizado
│   └── ...
│
├── lib/
│   ├── localStorage.js             # Serviço de persistência
│   ├── queryClient.js              # Configuração React Query
│   ├── authUtils.js                # Utilitários de autenticação
│   └── utils.js                    # Utilitários gerais
│
├── hooks/
│   ├── useAuth.js                  # Hook de autenticação
│   ├── use-toast.js                # Hook de notificações
│   └── use-mobile.jsx              # Hook de detecção mobile
│
├── App.jsx                         # Componente raiz
├── main.jsx                        # Entry point
└── index.css                       # Estilos globais
```

---

## ▶️ Execução Local

### Pré-requisitos
- Node.js v18 ou superior
- npm ou yarn

### Instalação

```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/controle-estoque.git

# 2. Entrar no diretório
cd controle-estoque

# 3. Instalar dependências
npm install
```

### Executar em Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento (Vite)
npm run dev

# A aplicação estará disponível em: http://localhost:5000
```

### Build para Produção

```bash
# Cria a build otimizada
npm run build

# Visualizar build localmente
npm run preview
```

---

## 🔐 Autenticação

O projeto inclui um sistema básico de autenticação:

### Criar Novo Usuário
1. Ir para página de "Cadastro"
2. Preencher formulário com username e senha
3. Fazer login com as credenciais

---

## 💡 Funcionalidades Principais

### 1. Validação de Movimentações
- ✅ Produto deve existir no sistema
- ✅ Não permite saída com estoque insuficiente
- ✅ Mensagens de erro descritivas ao usuário
- ✅ Atualização automática de estoque

### 2. Autocomplete Inteligente
- ✅ Sugestões enquanto digita
- ✅ Mostra quantidade em estoque
- ✅ Seleção rápida na lista de sugestões
- ✅ Clique fora para fechar sugestões

### 3. Dashboard em Tempo Real
- ✅ Atualização automática a cada 500ms
- ✅ Sincronização com mudanças no localStorage
- ✅ Estatísticas precisas e atualizadas
- ✅ Responsivo em todos os tamanhos

### 4. Gerenciamento de Estoque
- ✅ Entrada e saída de produtos
- ✅ Histórico completo de movimentações
- ✅ Relatório de produtos com baixo estoque
- ✅ Filtros por nome, fornecedor ou lote

---

## 🚀 Melhorias Futuras

- [ ] Integração com Backend (API REST)
- [ ] Banco de dados PostgreSQL
- [ ] Autenticação com JWT
- [ ] Relatórios em PDF
- [ ] Gráficos avançados
- [ ] Notificações por email
- [ ] Sistema de permissões por usuário
- [ ] Backup automático de dados
- [ ] Sincronização em tempo real (WebSocket)
- [ ] Aplicativo mobile (React Native)

---

## 📝 Considerações Técnicas

### Persistência
- Dados armazenados em localStorage do navegador
- Possibilidade de integração futura com Backend

### Performance
- React Query para gerenciamento eficiente de cache
- Componentes memoizados para evitar re-renders desnecessários
- Polling a 500ms para atualização de dashboard

### Validações
- Validação de formulários com Zod
- Validações de negócio (produto existe, quantidade disponível)
- Feedback visual imediato ao usuário

---

## 👥 Autoria

**Desenvolvedores:** Pedro , Rita e Alice
**Projeto:** Controle de Estoque - Sistema de Gerenciamento
**Tipo:** Aplicação Web (FrontEnd)
**Tecnologia:** ReactJS + Vite + Tailwind CSS
**Instituição:** Instituto Federal de Brasília (IFB)

---

## 📌 Conclusão

Este projeto demonstra:

✅ Domínio dos conceitos de **CRUD**
✅ Implementação de **validações de negócio**
✅ Uso de **componentes React** organizados e reutilizáveis
✅ Gerenciamento eficiente de **estado e cache**
✅ **UX/UI** intuitiva e responsiva
✅ Boas práticas de **organização de código**
✅ Implementação de **features avançadas** (autocomplete, polling em tempo real)

---

