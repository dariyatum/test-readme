# Cherry Cheeks

A K-beauty online shop built with React. Customers can browse makeup and skincare, view product details, and add items to a cart. Staff can manage the product inventory from an admin area.

> Student project. All products, accounts, and prices are fictional sample data.

![Status](https://img.shields.io/badge/status-in%20development-8a3050)
![React](https://img.shields.io/badge/React-19.3.1-61dafb)
![Vite](https://img.shields.io/badge/Vite-8.3.4-646cff)
![React Router](https://img.shields.io/badge/React_Router-7.18.4-ca4245)
![Node.js](https://img.shields.io/badge/Node.js-22.22.1-339933)

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Requirements and versions](#requirements-and-versions)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Pages and routes](#pages-and-routes)
- [Data](#data)
- [How the product pages work](#how-the-product-pages-work)
- [Admin products page](#admin-products-page)
- [Known limitations](#known-limitations)
- [Working with git](#working-with-git)
- [Team](#team)
- [License](#license)

---

## Features

### Shop (customers)

- Home, About, Contact, and Login pages
- Product list with search, sorting, category and price filters, and pagination
- Product detail page with image gallery, shade selection, quantity, and Add to Cart
- Cart, billing and shipping, payment, order review, and order confirmation pages
- Profile page for logged-in users
- Responsive layout for phones, tablets, and desktops

### Admin (staff)

- Protected `/admin` area for users with the `admin` role
- Product inventory with search, status filters (All, Active, Low stock, Draft), and pagination
- Add, edit, and delete products

## Tech stack

| Part | Tool |
|---|---|
| UI | React 19.3.1 |
| Build tool | Vite 8.3.4 |
| Routing | React Router (`react-router-dom`) 7.18.4 |
| Runtime | Node.js 22.22.1 |
| Package manager | npm 9.2.0 |
| Styling | Plain CSS and some Tailwind CSS classes |
| Data | Static JSON files fetched from `public/` |
| Fonts | Cormorant Garamond and Inter (Google Fonts) |
| Container tool | Docker 29.8.2 (optional) |

## Requirements and versions

The project was developed and tested with these installed versions:

- Node.js 22.22.1
- npm 9.2.0
- React 19.3.1
- Vite 8.3.4
- React Router 7.18.4
- Git, for version control

Docker 29.8.2 is installed on the development computer, but Docker is optional. The project can run directly with npm.

> Note: The versions above describe the current development environment. The project's `package.json` and `package-lock.json` define the dependency requirements and versions used when installing the project.

## Getting started

### 1. Clone the repository

If you do not have the project on your computer yet, open a terminal and run:

```bash
git clone https://github.com/dariyatum/cherry-cheeks-app.git
cd cherry-cheeks-app
```

If you already have the project, open a terminal in the existing `cherry-cheeks-app` folder. You do not need to clone it again.

### 2. Install dependencies

Run this command inside the project folder:

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL printed in the terminal, usually:

`http://localhost:5173`

If port 5173 is already in use, Vite may choose another port, such as 5174.

### Other commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Checks code for problems, if ESLint is configured |

### Check installed versions

```bash
node -v
npm -v
npm list react vite react-router-dom --depth=0
docker --version
```

## Project structure

```text
cherry-cheeks-app/
├── public/
│   └── student-data/
│       ├── products.json
│       ├── categories.json
│       └── ...
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   ├── data/
│   │   ├── useProducts.js
│   │   └── useAdminProducts.js
│   ├── pages/
│   │   ├── user/
│   │   └── admin/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

The folders above show the main project structure. Your local project may contain additional files.

## Pages and routes

### Shop

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Home page |
| `/products` | Products | Search, sorting, filters, pagination |
| `/product/:id` | Product detail | Example: `/product/201` |
| `/contact` | Contact | Contact information |
| `/about` | About | About the shop |
| `/cart` | Cart | Shopping cart |
| `/billingshipping` | Billing and shipping | Customer shipping details |
| `/payment` | Payment | Payment page |
| `/orderreview` | Order review | Review an order |
| `/orderconfirmation` | Order confirmation | Order confirmation |
| `/profile` | Profile | For logged-in users with the `user` or `admin` role |
| `/login` | Login | No navbar |
| `/unauthorized` | Unauthorized | Shown when the role is not allowed |

### Admin (role: `admin`)

| Route | Page |
|---|---|
| `/admin` | Overview |
| `/admin/products` | Product inventory (opens on Makeup) |
| `/admin/products/:category` | Inventory for one category, e.g. `/admin/products/skincare` |
| `/admin/orders` | Orders |
| `/admin/customers` | Customers |

Unknown addresses redirect to the home page.

## Data

Sample data is stored in `public/student-data/`.

Files inside `public/` are served from the site root. Therefore, use `/student-data/` in fetch requests, not `/public/student-data/`.

```js
const res = await fetch("/student-data/products.json");
const products = await res.json();
```

### Data files

| File | Contents |
|---|---|
| `categories.json` | Product categories |
| `products.json` | Products and prices |
| `accounts.json` | Fictional customers and staff; no passwords or tokens |
| `carts.json` | Customer carts |
| `invoices.json` | Customer invoices, line items, and payments |
| `suppliers.json` | Product suppliers |
| `stock-receipts.json` | Supplier invoices and received stock |

### How the files connect

- `products.categoryId` points to `categories.id`.
- Cart and invoice item `productId` values point to `products.id`.
- `carts.customerId` and `invoices.customerId` point to `accounts.id`.
- `stock-receipts.supplierId` points to `suppliers.id`.

### Example product

```json
{
  "id": 201,
  "categoryId": 2,
  "sku": "MU-201",
  "name": "Rose Lip Tint",
  "brand": "Cherry Cheeks",
  "price": 9.0,
  "stockQuantity": 40,
  "active": true
}
```

All prices are in USD.

The JSON files are read-only from the running website. Editing data in the browser does not change the original files.

## How the product pages work

1. `useProducts()` fetches `products.json` and `categories.json`.
2. It joins each product to its category through `categoryId`.
3. The Products page filters, sorts, and paginates the products in the browser.
4. Clicking a product card opens `/product/:id`.
5. The product detail page allows customers to select a shade and quantity.
6. Clicking Add to Cart navigates to the cart page with the selected product information.

Example navigation:

```jsx
navigate("/cart", {
  state: {
    product: { id, name, price, image },
    shade,
    qty,
  },
});
```

The cart page reads the navigation data using `useLocation()`.

## Admin products page

The admin inventory page displays one product category at a time.

### Product status rules

- **Draft:** `active` is `false`.
- **Out of stock:** Stock quantity is `0`.
- **Low stock:** Stock quantity is 20 units or fewer, excluding out-of-stock products.
- **Active:** The product is active and has more than 20 units in stock.

### Adding, editing, and deleting products

Admin product changes are stored in the browser's `localStorage` under the key `cc-admin-products`.

These changes do not modify the original JSON files and are not shared between different browsers or computers.

The Reset to Sample Data link under the table restores the original product data.

To connect a real backend later, replace the add, update, and remove operations in `src/data/useAdminProducts.js` with API requests.

## Known limitations

- Data comes from static JSON files; there is no real backend yet.
- Admin changes are saved only in the current browser.
- The cart badge in the header and a shared cart store are not finished.
- Most product photos still use one placeholder image until real photos are added.
- Login and role checks depend on the `ProtectedRoute` component and are not production-ready.
- Checkout and payment pages are part of a student project and do not provide a real payment service.
- The application is not ready for production use.

## Working with git

Follow these steps when working with teammates.

### Before starting work

```bash
git pull
```

### After making changes

```bash
git add .
git commit -m "Describe your change"
git push
```

Use clear commit messages, for example:

```bash
git commit -m "Add admin products route"
```

Work in small commits and coordinate changes to shared files such as `App.jsx`, `main.jsx`, and shared layouts to reduce merge conflicts.

Commit `package-lock.json` so teammates can install consistent dependency versions.

## Team

| Name | Responsibility |
|---|---|
| Tum Dariya | Products pages: shop product list, product detail, and admin products |
| Add name | Header, footer, and layouts |
| Add name | Cart and checkout |
| Add name | Login and authentication |

## License

Educational project. The sample data and brand name are fictional.

Add an appropriate license if you plan to distribute the code publicly.
