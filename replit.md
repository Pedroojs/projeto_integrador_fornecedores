# Controle de Estoque - Documentação

## Visão Geral
Aplicação web para gerenciamento de estoque, produtos e movimentações. Permite cadastrar produtos, registrar entradas/saídas de estoque e visualizar relatórios em tempo real.

## Funcionalidades Implementadas

### 1. **Validações de Movimentação**
- ✅ Só é possível fazer movimentações se o produto existir
- ✅ Validação de quantidade insuficiente para saídas
- ✅ Atualização automática do estoque ao registrar movimentação
- ✅ Mensagens de erro claras para o usuário

### 2. **Autocomplete de Produtos**
- ✅ Campo de entrada com autocompletar para seleção de produtos
- ✅ Exibe sugestões enquanto o usuário digita
- ✅ Mostra quantidade em estoque na sugestão
- ✅ Seleção rápida clicando na sugestão

### 3. **Dashboard em Tempo Real**
- ✅ Atualização automática de dados quando houver mudanças
- ✅ Estatísticas corretas de estoque total
- ✅ Produtos com baixo estoque (< 10 un.)
- ✅ Histórico de movimentações
- ✅ Monitoramento contínuo de mudanças no localStorage

## Estrutura do Projeto

### Frontend (React + Vite)
```
src/
├── pages/
│   ├── Dashboard.jsx - Dashboard com estatísticas
│   ├── Movimentacoes.jsx - Registro de movimentações
│   ├── Produtos.jsx - Listagem de produtos
│   └── ... (outras páginas)
├── components/
│   ├── ProductAutocomplete.jsx - Autocomplete de produtos
│   ├── ui/ - Componentes shadcn/ui
│   └── ... (outros componentes)
├── lib/
│   └── localStorage.js - Serviço de persistência de dados
└── App.jsx - Roteamento principal
```

### Armazenamento
- localStorage com chaves: `controletotal_products`, `controletotal_movements`

## Tecnologias Utilizadas
- **Frontend**: React 18, Vite, Tailwind CSS, Radix UI
- **Roteamento**: Wouter
- **Validação**: Zod
- **Estado**: React Hooks, React Query
- **Ícones**: Lucide React

## Mudanças Recentes (19/12/2025)

### Nova: ProductAutocomplete Component
- Componente reutilizável para autocompletar produtos
- Filtra em tempo real conforme digita
- Mostra quantidade em estoque na sugestão

### Modificado: Movimentacoes.jsx
- Integração com ProductAutocomplete
- Validação se produto existe
- Validação de quantidade disponível para saída
- Atualização automática de estoque após movimentação

### Modificado: Dashboard.jsx
- Monitoramento contínuo de localStorage (polling)
- Atualização de dados a cada 500ms
- Listener para mudanças no storage

## Como Usar

### Cadastrar Produto
1. Ir para "Produtos"
2. Clicar em "Novo Produto"
3. Preencher dados (nome, quantidade, fornecedor, lote)
4. Salvar

### Registrar Movimentação
1. Ir para "Movimentações"
2. No campo "Nome do produto", digitar nome (autocomplete aparecerá)
3. Selecionar produto da lista
4. Escolher tipo (Entrada/Saída)
5. Informar quantidade
6. Preencher lote e data
7. Clicar "Registrar"

### Visualizar Dashboard
1. Ir para "Dashboard"
2. Ver estatísticas em tempo real
3. Produtos recentes e movimentações recentes

## Validações Implementadas

### Antes de Salvar Movimentação
- [ ] Campos obrigatórios preenchidos
- [ ] Produto existe no sistema
- [ ] Quantidade suficiente em estoque (para saída)

### Atualização Automática
- Estoque do produto é atualizado automaticamente
- Dashboard reflete mudanças em tempo real

## Próximas Melhorias (Sugestões)
- Usar banco de dados PostgreSQL em vez de localStorage
- Autenticação com permissões de usuário
- Relatórios avançados em PDF
- Backup automático de dados
- Notificações quando produtos atingem quantidade mínima
