# Inventory Control Application

## Overview

This is a full-stack inventory control (Controle de Estoque) web application built with React frontend and Express backend. The application provides functionality for managing products, inventory movements, and user authentication. It follows a utility-focused design with a clean, professional interface using a purple-themed color palette.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with Vite as the build tool
- **Language**: JavaScript/JSX (TypeScript configured but JSX used in client)
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **State Management**: TanStack React Query for server state management
- **Routing**: Client-side routing (SPA architecture with fallback to index.html)
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend Architecture
- **Framework**: Express.js running on Node.js
- **Language**: TypeScript
- **API Design**: RESTful API with `/api` prefix for all routes
- **Server**: HTTP server with Vite dev server middleware in development
- **Build**: esbuild bundles server code for production

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Validation**: Zod schemas generated from Drizzle schemas using drizzle-zod
- **Development Storage**: In-memory storage class (`MemStorage`) available for development/testing
- **Migrations**: Drizzle Kit manages database migrations in `./migrations`

### Design System
- **Component Library**: shadcn/ui with Radix UI primitives
- **Color Scheme**: Purple primary (#9b4dff), light gray background (#d3d3e0), white cards
- **Typography**: Arial/sans-serif, specific sizing defined in design_guidelines.md
- **Layout**: Centered containers with max-width 400px for forms

### Build Configuration
- **Development**: `tsx` runs TypeScript directly, Vite handles HMR
- **Production**: Vite builds client to `dist/public`, esbuild bundles server to `dist/index.cjs`
- **Type Checking**: Strict TypeScript with path aliases

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session storage in PostgreSQL

### UI Components
- **Radix UI**: Full suite of accessible primitives (dialog, dropdown, select, tabs, etc.)
- **shadcn/ui**: Pre-built component system configured via `components.json`
- **Embla Carousel**: Carousel component

### API & Data
- **TanStack React Query**: Server state management and caching
- **Zod**: Runtime validation and type inference

### Development Tools
- **Vite**: Frontend build tool with HMR
- **Drizzle Kit**: Database migration tooling
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner (Replit-specific)

### Utilities
- **date-fns**: Date manipulation
- **clsx/tailwind-merge**: Class name utilities
- **nanoid/uuid**: ID generation