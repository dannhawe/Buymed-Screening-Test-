# 📋 Requirements - Product Search & Order Web Page

## 🎯 Goal

Build a simple single-page application (SPA) or a simple mobile screen where:

- A user can search and browse products
- A user can add items to a simple order summary
- The UI works nicely on mobile and desktop

---

## 📦 Sample Product Data (Mock Data)

**Location:** Can be stored as local file or in-code

```json
[
  {
    "id": 1,
    "name": "Paracetamol 500mg",
    "price": 15000,
    "category": "Pain Relief",
    "isPrescription": false
  },
  {
    "id": 2,
    "name": "Amoxicillin 500mg",
    "price": 45000,
    "category": "Antibiotic",
    "isPrescription": true
  },
  {
    "id": 3,
    "name": "Vitamin C 1000mg",
    "price": 30000,
    "category": "Supplement",
    "isPrescription": false
  },
  {
    "id": 4,
    "name": "Cetirizine 10mg",
    "price": 20000,
    "category": "Allergy",
    "isPrescription": false
  }
]
```

**Data Structure:**

- `id`: number (unique identifier)
- `name`: string (product name)
- `price`: number (price in VND, e.g., 15000 = 15,000 ₫)
- `category`: string (product category)
- `isPrescription`: boolean (true if requires prescription)

---

## ✅ Functional Requirements

### 1. Product List

**Display Requirements:**

- [ ] Show product name
- [ ] Show category
- [ ] Show price (formatted as currency)
- [ ] Show "Rx" badge if `isPrescription === true`
- [ ] Display all products from mock data

**UI Requirements:**

- [ ] Clean, readable layout
- [ ] Responsive grid/list view

---

### 2. Search & Filter

#### 2.1 Search Bar

- [ ] Search input field to filter products by name
- [ ] Real-time filtering (as user types)
- [ ] Case-insensitive search
- [ ] Clear/empty search functionality

#### 2.2 Category Filter

- [ ] Filter by category (dropdown or chips)
- [ ] Options: "All Categories" + unique categories from data
  - Categories: "Pain Relief", "Antibiotic", "Supplement", "Allergy"
- [ ] Combined filtering: search + category filter work together

---

### 3. Order Summary (Cart)

#### 3.1 Quantity Controls

- [ ] Each product row has controls to set quantity
- [ ] Quantity range: 0–99
- [ ] Input validation (min: 0, max: 99)
- [ ] Visual feedback when quantity changes

#### 3.2 Cart Display

**In a side panel or bottom section:**

- [ ] Show list of selected SKUs (products) with:
  - Product name
  - Quantity
  - Subtotal (price × quantity)
- [ ] Show grand total (sum of all subtotals)
- [ ] Empty cart state (when no items)

**Cart Features:**

- [ ] Add items to cart
- [ ] Update quantity in cart
- [ ] Remove items from cart (optional, via quantity = 0)
- [ ] Clear cart (optional)

---

### 4. Responsive UI

#### 4.1 Mobile Layout (< 768px)

- [ ] Single-column layout
- [ ] Cart summary at bottom OR accessible via a button
- [ ] Touch-friendly controls (min 44x44px)
- [ ] No horizontal scrolling
- [ ] Cart can be in:
  - Bottom sheet/drawer
  - Sticky bottom bar
  - Modal/Sheet overlay

#### 4.2 Desktop Layout (≥ 768px)

- [ ] 2-column layout:
  - Left column: Product list with search & filter
  - Right column: Cart summary (side panel)
- [ ] Cart can be:
  - Sticky/fixed position
  - Scrollable if content is long
- [ ] Hover states for interactive elements

#### 4.3 Responsive Breakpoints

- [ ] Smooth transition between mobile/desktop layouts
- [ ] Test on multiple screen sizes:
  - Mobile: 375px, 414px
  - Tablet: 768px, 1024px
  - Desktop: 1280px, 1440px

---

### 5. UX & Error Handling

#### 5.1 Empty States

- [ ] Empty search results: Show message when no products match search/filter
- [ ] Empty cart: Show message when cart is empty
- [ ] No products: Show message if no products available (edge case)

#### 5.2 User Feedback

- [ ] Disabled buttons when appropriate (e.g., quantity at min/max)
- [ ] Loading state if simulating API call
- [ ] Visual feedback for interactions:
  - Button hover states
  - Input focus states
  - Success/error messages (toast notifications)
- [ ] Smooth animations/transitions

#### 5.3 Error Handling

- [ ] Handle invalid quantity inputs
- [ ] Handle edge cases gracefully
- [ ] No crashes on invalid data
- [ ] User-friendly error messages

---

## 📦 Deliverables

### 1. Source Code

- [ ] Complete, working source code
- [ ] Clean, readable code structure
- [ ] TypeScript types defined
- [ ] Components properly organized
- [ ] No console errors or warnings

### 2. README.md

Must include:

#### 2.1 How to Run

- [ ] Installation instructions (`npm install`)
- [ ] Development server command (`npm run dev`)
- [ ] Build command (`npm run build`)
- [ ] Any environment setup needed

#### 2.2 State Management Explanation

- [ ] What state management solution used (e.g., Zustand, Context API, etc.)
- [ ] How state is structured
- [ ] Key state stores/contexts
- [ ] How data flows through the app

#### 2.3 Component Structure

- [ ] Overview of component hierarchy
- [ ] Key components and their purposes
- [ ] Component organization (folder structure)
- [ ] Props and data flow between components

#### 2.4 Responsive Design Decisions

- [ ] Breakpoints used
- [ ] Mobile layout approach (why chosen)
- [ ] Desktop layout approach (why chosen)
- [ ] Cart display strategy (mobile vs desktop)
- [ ] Any responsive design patterns used

---

## 🎨 UI/UX Guidelines

### Visual Requirements

- [ ] Modern, clean design
- [ ] Consistent spacing and typography
- [ ] Clear visual hierarchy
- [ ] Accessible color contrast
- [ ] Professional appearance

### Interaction Requirements

- [ ] Smooth, responsive interactions
- [ ] Clear call-to-actions
- [ ] Intuitive navigation
- [ ] Fast, real-time updates
- [ ] No lag or jank

---

## 🧪 Testing Checklist

### Functional Testing

- [ ] Search filters products correctly
- [ ] Category filter works
- [ ] Search + category filter work together
- [ ] Add to cart works
- [ ] Update quantity works (0-99)
- [ ] Remove from cart works
- [ ] Subtotal calculation correct
- [ ] Grand total calculation correct
- [ ] Empty states display correctly

### Responsive Testing

- [ ] Mobile layout works (375px, 414px)
- [ ] Tablet layout works (768px, 1024px)
- [ ] Desktop layout works (1280px, 1440px)
- [ ] No horizontal scrolling on mobile
- [ ] Cart accessible on mobile
- [ ] Cart displays correctly on desktop

### Edge Cases

- [ ] Empty search query
- [ ] No category selected
- [ ] Quantity at 0
- [ ] Quantity at 99
- [ ] Multiple items in cart
- [ ] Very long product names
- [ ] Special characters in search

---

## 📝 Technical Requirements

### Tech Stack (Specified)

- [ ] Next.js (latest stable)
- [ ] Tailwind CSS
- [ ] Shadcn UI components
- [ ] TypeScript

### Code Quality

- [ ] TypeScript strict mode (if possible)
- [ ] No TypeScript errors
- [ ] ESLint passing (if configured)
- [ ] Clean, maintainable code
- [ ] Proper component separation
- [ ] Reusable components where appropriate

---

## 🔍 Acceptance Criteria

The application is considered complete when:

1. ✅ All products from mock data are displayed
2. ✅ Search by name works correctly
3. ✅ Filter by category works correctly
4. ✅ Products can be added to cart with quantity (0-99)
5. ✅ Cart shows selected items with quantity and subtotal
6. ✅ Grand total is calculated and displayed correctly
7. ✅ Mobile layout: single column, cart accessible
8. ✅ Desktop layout: 2-column with cart side panel
9. ✅ Empty states are handled gracefully
10. ✅ User feedback is provided for interactions
11. ✅ README.md is complete with all required sections
12. ✅ Code is clean and well-organized
13. ✅ No console errors or warnings
14. ✅ Responsive design works on all target screen sizes

---

## 📌 Notes

- **Currency Format:** Prices are in VND (Vietnamese Dong). Format as: `15,000 ₫` or `15.000 đ`
- **Prescription Badge:** Show "Rx" badge only when `isPrescription === true`
- **Quantity Limits:** Strictly enforce 0-99 range
- **Mock Data:** Use the provided 4 products as the data source
- **SPA:** Single Page Application - no routing needed, everything on one page

---

**Last Updated:** [Date]  
**Status:** 📋 Requirements Document - Ready for Implementation
