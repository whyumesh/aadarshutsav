# Adarsh Mitra Mandal Website

## Overview

This is a full-stack web application for Adarsh Mitra Mandal, a Maharashtrian cultural organization. The website serves as a digital platform to showcase cultural events, provide organization information, and facilitate community engagement. The application features a bilingual interface (English/Marathi) and focuses on promoting Maharashtrian traditions and folk arts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom cultural color scheme (saffron, green, maroon, gold)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and React Context for UI state
- **Internationalization**: Custom hook-based system supporting English and Marathi languages

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Pattern**: RESTful API design with `/api` prefix for all endpoints
- **Development Server**: Custom Vite integration for hot module replacement in development
- **Static Serving**: Express serves built React application in production

### Data Storage Solutions
- **Database**: PostgreSQL as the primary database
- **ORM**: Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle migrations with schema defined in shared directory
- **Development Storage**: In-memory storage implementation for rapid prototyping
- **Connection Pooling**: Built-in connection pooling through Neon serverless driver

### Authentication and Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Schema**: Basic user model with username/password authentication
- **Security**: Prepared for implementation of secure authentication flows

### Code Organization
- **Monorepo Structure**: Shared types and schemas between client and server
- **Path Aliases**: TypeScript path mapping for clean imports (@/, @shared/, @assets/)
- **Component Structure**: Organized UI components with separation of concerns
- **Type Safety**: End-to-end TypeScript with shared interfaces and Zod validation

### Development Experience
- **Hot Reload**: Vite HMR integration with Express development server
- **Error Handling**: Runtime error overlay for development
- **Build Process**: Separate client (Vite) and server (esbuild) build pipelines
- **Environment**: Environment-specific configurations for development and production

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle Kit**: Database migration and schema management tools

### UI and Styling
- **Radix UI**: Headless UI components for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Custom font loading for typography (DM Sans, Fira Code, Geist Mono)

### Development Tools
- **Replit Integration**: Specialized Vite plugins for Replit development environment
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **TypeScript**: Type checking and compilation across the entire stack

### Frontend Libraries
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Type-safe CSS class composition
- **Wouter**: Minimal routing solution for React

### Backend Libraries
- **Express.js**: Web application framework for Node.js
- **Connect-pg-simple**: PostgreSQL session store for Express
- **Nanoid**: URL-safe unique string ID generator
- **TSX**: TypeScript execution for development server