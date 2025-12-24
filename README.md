# BuyMed - Product Search & Order

🌐 **Live Demo**: [https://buymed-screening-test-7myi.vercel.app/](https://buymed-screening-test-7myi.vercel.app/)

A responsive single-page application (SPA) for searching and ordering products. Built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI.

## 🎯 Features

- **Product Browsing**: Browse products with search and category filtering
- **Shopping Cart**: Add items to cart with quantity management (0-99)
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Real-time Search**: Debounced search with instant filtering
- **Toast Notifications**: User feedback for all cart actions
- **Accessibility**: Full ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.5 (App Router)
- **Language**: TypeScript 5.5.4
- **Styling**: Tailwind CSS 3.4.7
- **UI Components**: Shadcn UI (Radix UI primitives)
- **State Management**: Zustand 4.5.5
- **Icons**: Lucide React 0.427.0

## 📦 Installation

1. Clone the repository or navigate to the project directory:

```bash
cd buymed
```

2. Install dependencies:

```bash
npm install
```

## 🚀 How to Run

### Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

## 📁 Project Structure

```
buymed/
├── app/
│   ├── components/
│   │   ├── cart/              # Cart-related components
│   │   │   ├── CartItem.tsx
│   │   │   ├── CartSummary.tsx
│   │   │   └── MobileCartSheet.tsx
│   │   └── product/           # Product-related components
│   │       ├── CategoryFilter.tsx
│   │       ├── ProductCard.tsx
│   │       ├── ProductList.tsx
│   │       ├── ProductListSkeleton.tsx
│   │       ├── QuantityControl.tsx
│   │       └── SearchInput.tsx
│   ├── lib/
│   │   ├── data/              # Mock data
│   │   │   └── products.ts
│   │   ├── store/             # Zustand stores
│   │   │   ├── cart-store.ts
│   │   │   └── filter-store.ts
│   │   └── utils/             # Utility functions
│   │       ├── filter-products.ts
│   │       └── format-currency.ts
│   ├── types/                 # TypeScript type definitions
│   │   ├── cart.ts
│   │   ├── product.ts
│   │   └── index.ts
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main page
├── components/
│   └── ui/                    # Shadcn UI components
├── hooks/
│   └── use-toast.ts           # Toast hook
└── lib/
    └── utils.ts               # Utility functions (cn helper)
```

## 🗂️ State Management

This application uses **Zustand** for state management, chosen for its simplicity and lightweight nature.

### Cart Store (`app/lib/store/cart-store.ts`)

Manages shopping cart state:

**State:**

- `items: CartItem[]` - Array of items in the cart

**Actions:**

- `addItem(productId, quantity?)` - Add item to cart (merges if exists)
- `updateQuantity(productId, quantity)` - Update item quantity (0-99 range)
- `removeItem(productId)` - Remove item from cart
- `clearCart()` - Clear all items

**Computed Values:**

- `totalItems()` - Total number of items in cart
- `totalPrice()` - Grand total price
- `getItem(productId)` - Get specific cart item

**Data Flow:**

1. User interacts with ProductCard → calls `addItem()` or `updateQuantity()`
2. Store updates `items` array
3. Components using `useCartStore()` automatically re-render
4. CartSummary displays updated cart

### Filter Store (`app/lib/store/filter-store.ts`)

Manages search and filter state:

**State:**

- `searchQuery: string` - Current search query
- `selectedCategory: string | null` - Selected category filter

**Actions:**

- `setSearchQuery(query)` - Update search query
- `setCategory(category)` - Update selected category
- `resetFilters()` - Reset all filters

**Data Flow:**

1. User types in SearchInput → updates `searchQuery` (debounced 300ms)
2. User selects category → updates `selectedCategory`
3. ProductList reads both values and filters products
4. Filtered products displayed in real-time

## 🧩 Component Structure

### Component Hierarchy

```
page.tsx (Main Page)
├── Header
│   └── MobileCartSheet (mobile only)
├── SearchInput
├── CategoryFilter
└── ProductList
    └── ProductCard[]
        └── QuantityControl
└── CartSummary (desktop only)
    └── CartItem[]
        └── QuantityControl
```

### Key Components

#### Product Components

- **ProductList**: Displays filtered products in a responsive grid

  - Handles loading states with skeleton
  - Shows empty state when no products found
  - Responsive: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)

- **ProductCard**: Individual product display

  - Shows product name, category, price, Rx badge
  - Toggles between "Add to Cart" button and quantity control
  - Integrates with cart store

- **SearchInput**: Search input with debouncing

  - 300ms debounce to optimize performance
  - Connected to filter store

- **CategoryFilter**: Category dropdown filter

  - Uses Shadcn Select component
  - "All Categories" option + dynamic categories

- **QuantityControl**: Reusable quantity input
  - +/- buttons and number input
  - Validates 0-99 range
  - Touch-friendly on mobile

#### Cart Components

- **CartSummary**: Full cart display

  - Lists all cart items
  - Shows grand total
  - Empty state with helpful message
  - Scrollable items list

- **CartItem**: Individual cart item

  - Product info, quantity control, subtotal
  - Remove button
  - Updates cart store on changes

- **MobileCartSheet**: Mobile cart drawer
  - Bottom sheet on mobile
  - Cart count badge
  - Contains CartSummary component

## 📱 Responsive Design Decisions

### Breakpoints

The application uses Tailwind CSS breakpoints:

- **Mobile**: `< 640px` (default)
- **Tablet**: `≥ 640px` (sm)
- **Desktop**: `≥ 768px` (md)
- **Large Desktop**: `≥ 1024px` (lg)

### Mobile Layout (`< 768px`)

**Approach**: Single-column layout with bottom sheet for cart

**Why chosen:**

- Better UX on small screens
- Cart doesn't take up valuable screen space
- Touch-friendly interactions

**Implementation:**

- Single column product grid
- Cart button in header (with badge counter)
- Cart opens in bottom sheet (90vh height)
- Touch-friendly buttons (min 44x44px)
- Reduced padding and spacing

### Desktop Layout (`≥ 768px`)

**Approach**: 2-column layout with sticky cart sidebar

**Why chosen:**

- Efficient use of screen space
- Cart always visible
- Better for quick checkout

**Implementation:**

- 2-column grid: Products (2/3 width) | Cart (1/3 width)
- Sticky cart sidebar (stays visible while scrolling)
- 3-column product grid on large screens
- Hover effects on interactive elements

### Tablet Layout (`640px - 1024px`)

**Approach**: Hybrid layout with smooth transitions

**Implementation:**

- 2-column product grid
- Cart still in sidebar (if ≥ 768px) or bottom sheet
- Smooth transitions between breakpoints

### Cart Display Strategy

- **Mobile**: Bottom sheet (Sheet component from Shadcn)

  - Triggered by button in header
  - Shows cart count badge
  - 90vh height, scrollable

- **Desktop**: Sticky sidebar
  - Always visible on right side
  - Sticky positioning (top-24)
  - Scrollable items list (max-height: 500px)

### Responsive Patterns Used

1. **Mobile-first approach**: Base styles for mobile, enhanced for larger screens
2. **Flexible grid**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
3. **Responsive spacing**: `px-3 sm:px-4`, `gap-3 sm:gap-4`
4. **Responsive text**: `text-base sm:text-lg`
5. **Touch optimization**: `touch-manipulation` utility class
6. **Conditional rendering**: `hidden md:block` for desktop-only elements

## ✨ Features

### Product Features

- ✅ Display products with name, category, price
- ✅ Rx badge for prescription products
- ✅ Search products by name (case-insensitive, debounced)
- ✅ Filter by category
- ✅ Empty state when no products found

### Cart Features

- ✅ Add items to cart
- ✅ Update quantity (0-99 range)
- ✅ Remove items from cart
- ✅ View cart summary with subtotals
- ✅ Grand total calculation
- ✅ Empty cart state

### UX Features

- ✅ Toast notifications for cart actions
- ✅ Loading skeletons during filter changes
- ✅ Smooth animations and transitions
- ✅ Touch-friendly controls on mobile
- ✅ Keyboard navigation support
- ✅ Screen reader friendly (ARIA labels)

## 🎨 Sample Data

The application uses mock data with 4 products:

1. **Paracetamol 500mg** - 15,000 ₫ - Pain Relief
2. **Amoxicillin 500mg** - 45,000 ₫ - Antibiotic (Rx)
3. **Vitamin C 1000mg** - 30,000 ₫ - Supplement
4. **Cetirizine 10mg** - 20,000 ₫ - Allergy

Data is stored in `app/lib/data/products.ts` and can be easily replaced with API calls.

## 🔧 Development

### Adding New Products

Edit `app/lib/data/products.ts`:

```typescript
const productsData: Product[] = [
  // Add your products here
];
```

### Customizing Styles

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline Tailwind classes

### Adding New Components

1. Create component in appropriate directory (`app/components/`)
2. Export from component file
3. Import and use in parent component

## 🚀 Future Improvements

- [ ] Connect to real API for products
- [ ] Add product images
- [ ] Implement checkout flow
- [ ] Add user authentication
- [ ] Save cart to localStorage
- [ ] Add product reviews/ratings
- [ ] Implement pagination for large product lists
- [ ] Add dark mode support

## 👤 Author

**Nguyen Van Vu Duc**
