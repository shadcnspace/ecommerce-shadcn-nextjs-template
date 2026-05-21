# E-commerce Template with shadcn/ui & Next.js

A modern, production-ready e-commerce template built with Next.js 16, React 19, Tailwind CSS, and shadcn/ui components. This template includes pre-built pages and components for building a complete online store.

## Features

✨ **Modern Stack**
- Next.js 16 with App Router and Turbopack
- React 19 with latest hooks
- TypeScript for type safety
- Tailwind CSS 4 with modern styling
- shadcn/ui components

🛍️ **E-commerce Features**
- Product catalog and product detail pages
- Shopping cart functionality
- Wishlist management
- Product categories
- User authentication (login/register)
- Checkout page
- Responsive design

🎨 **UI & UX**
- Beautiful, customizable components
- Dark mode support with next-themes
- Smooth animations with Motion
- Toast notifications with Sonner
- Professional layout components

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 20.x or higher
- **pnpm** 9.x or higher (or npm/yarn if you prefer)

### Install pnpm (if not already installed)

```bash
npm install -g pnpm
```

Or using other package managers:
```bash
# Using npm
npm install -g pnpm

# Using Homebrew (macOS)
brew install pnpm

# Using Scoop (Windows)
scoop install pnpm
```

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ecommerce-shadcn-nextjs-template
```

### 2. Install Dependencies

```bash
pnpm install
```

Or if you prefer npm:
```bash
npm install
```

Or if you prefer yarn:
```bash
yarn install
```

## Running the Project

### Development Server

Start the development server with hot-reload enabled:

```bash
pnpm dev
```

Or with npm:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

Build the project for production:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Available Scripts

```bash
# Start development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint

# Format code with Prettier
pnpm format

# Type check with TypeScript
pnpm typecheck
```

## Project Structure

```
├── app/                          # Next.js App Router
│   ├── (site)/                   # Main site routes
│   │   ├── page.tsx             # Home page
│   │   ├── about/               # About page
│   │   ├── contact/             # Contact page
│   │   ├── faq/                 # FAQ page
│   │   ├── shop/                # Shop/Products listing
│   │   │   └── [slug]/          # Product detail page
│   │   └── wishlist/            # Wishlist page
│   ├── checkout/                # Checkout page
│   ├── login/                   # Login page
│   ├── register/                # Register page
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/                  # React components
│   ├── ui/                      # shadcn/ui components
│   ├── shadcn-space/           # Custom layout components
│   │   ├── blocks/             # Feature blocks
│   │   └── animations/         # Reusable animations
│   ├── cart-context.tsx        # Cart state management
│   ├── wishlist-context.tsx    # Wishlist state management
│   └── theme-provider.tsx      # Theme configuration
├── assets/                      # Static assets
│   └── logo/                    # Logo component
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
│   ├── data.ts                 # Sample data
│   └── utils.ts                # Helper utilities
├── public/                      # Static files
│   └── assets/                 # Images and media
├── package.json                # Project dependencies
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.mjs             # Next.js configuration
```

## Technology Stack

- **Framework:** Next.js 16.1.7
- **UI Library:** React 19.2.4
- **Styling:** Tailwind CSS 4.2.1
- **Component Library:** shadcn/ui
- **Language:** TypeScript 5.9.3
- **Icons:** Lucide React & Iconify
- **Animations:** Motion
- **Carousel:** Embla Carousel
- **Notifications:** Sonner
- **Theme:** next-themes
- **Linting:** ESLint 9
- **Formatting:** Prettier

## Environment Setup

Create a `.env.local` file in the root directory if needed for environment variables:

```bash
# .env.local
# Add any environment variables here
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Getting Started Guide

1. **Install dependencies:** `pnpm install`
2. **Start development server:** `pnpm dev`
3. **Open in browser:** Navigate to `http://localhost:3000`
4. **Start customizing:** Edit files in the `app/` and `components/` directories
5. **Add your products:** Update data in `lib/data.ts`
6. **Customize styling:** Modify Tailwind configuration and global styles


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or issues, please open an issue in the repository or contact the maintainers.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Happy coding! 🚀**
