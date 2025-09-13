# Photography Website

## Overview

This is a professional photography portfolio website for Marie Dubois, a French photographer based in Paris specializing in weddings, couples, families, and maternity photography. The application is built as a modern full-stack web application with a React frontend and Express backend, designed with elegant French aesthetics and a focus on showcasing high-quality photography work.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built using **React** with TypeScript, utilizing a component-based architecture:

- **UI Framework**: Built with shadcn/ui components on top of Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design tokens following French luxury aesthetics
- **Routing**: Wouter for client-side routing with pages for Home, About, Gallery, and Contact
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

The design follows a **photography-first philosophy** with:
- Premium color palette (deep charcoal, warm gold accents)
- Typography using Playfair Display (serif) and Inter (sans-serif) from Google Fonts
- Responsive design with mobile-first approach
- Component examples for development and testing

### Backend Architecture

The backend uses a **RESTful Express server** with TypeScript:

- **Server Framework**: Express.js with custom middleware for logging and error handling
- **Development Setup**: Vite integration for seamless development experience
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)
- **Type Safety**: Shared TypeScript types between frontend and backend

The storage interface is designed to be database-agnostic, currently using an in-memory store for user data.

### Database Design

**Drizzle ORM** is configured for PostgreSQL with:
- Schema definition using Drizzle's PostgreSQL adapter
- User table with UUID primary keys and basic authentication fields
- Zod integration for runtime type validation
- Migration system for database schema changes

The database is designed to be easily extensible for photography-specific data like portfolios, galleries, and booking information.

### UI Component System

The application uses a **comprehensive design system** with:
- Custom CSS variables for theming (light/dark mode support)
- Consistent spacing using Tailwind's scale (4, 8, 16, 24)
- Hover and active state animations with custom elevation classes
- Accessible form components with proper labeling and validation
- Responsive image galleries with filtering capabilities

### Authentication & User Management

Basic user management system with:
- User registration and authentication interfaces
- Password-based authentication (ready for enhancement)
- Session management infrastructure in place
- Type-safe user operations through the storage interface

## External Dependencies

### Core Framework Dependencies
- **React & React DOM**: Frontend framework for component-based UI
- **Express**: Backend web server framework
- **TypeScript**: Type safety across the full stack
- **Vite**: Build tool and development server

### Database & ORM
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL client for Neon Database
- **Drizzle Kit**: Database migration and schema management tools

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible, unstyled UI primitives for complex components
- **Lucide React**: Icon library for consistent iconography
- **shadcn/ui**: Pre-built accessible components built on Radix UI

### State Management & Data Fetching
- **TanStack Query**: Server state management and data fetching
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema parsing

### Development & Build Tools
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer
- **Wouter**: Minimalist routing library for React

### Assets & Media
- **Generated Images**: Placeholder photography images stored in attached_assets folder
- **Google Fonts**: Playfair Display and Inter fonts loaded via CDN

The application is designed to be easily deployable to platforms like Replit, with environment-specific configurations and proper asset handling for both development and production environments.