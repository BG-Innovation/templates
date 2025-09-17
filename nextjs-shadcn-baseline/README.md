# Next.js + shadcn/ui Baseline Template

A comprehensive Next.js template with all shadcn/ui components pre-installed and configured.

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** for styling
- 🌙 **Dark/Light mode** with next-themes
- 📦 **All shadcn/ui components** pre-installed
- 🔧 **TypeScript** configured
- 📏 **ESLint** for code quality
- 🎯 **Absolute imports** with `@/` alias

## Included Components

All shadcn/ui components are pre-installed:

- Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar
- Badge, Breadcrumb, Button, Calendar, Card, Carousel
- Checkbox, Collapsible, Command, Context Menu, Dialog
- Drawer, Dropdown Menu, Form, Hover Card, Input, Input OTP
- Label, Menubar, Navigation Menu, Pagination, Popover
- Progress, Radio Group, Resizable, Scroll Area, Select
- Separator, Sheet, Skeleton, Slider, Sonner (Toast)
- Switch, Table, Tabs, Textarea, Toggle, Toggle Group
- Tooltip, Chart, Sidebar

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Theme Configuration

The template includes a complete theme setup:

- **ThemeProvider**: Wraps the app with theme context
- **ThemeToggle**: Component for switching between light/dark/system themes
- **CSS Variables**: Configured for both light and dark modes

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # All shadcn/ui components
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── hooks/
│   └── use-mobile.ts
└── lib/
    └── utils.ts
```

## Customization

### Adding New Components

To add additional shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

### Modifying Theme Colors

Edit the CSS variables in `src/app/globals.css` to customize your color scheme.

### Component Usage

Import any component from the ui folder:

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

This template is free to use for any project.