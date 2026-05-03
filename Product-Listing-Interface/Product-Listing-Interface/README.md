# 🛍️ Product Listing Interface (React)

A modern product listing interface built using React.  
This app fetches product data from an API and displays it in a clean, responsive grid layout.

---

## 🚀 Features

- Fetches products from a real API
- Displays products in a grid (3 → 2 → 1 responsive layout)
- Reusable `ProductCard` component
- Loading and error state handling
- Refresh button to reload products
- Clean and minimal UI

---

## 🛠️ Tech Stack

- React (Hooks)
- JavaScript (ES6+)
- Fetch API
- CSS (Grid + Flexbox)

---

## 📂 Project Structure

```

src/
├── App.jsx
├── App.css
└── components/
└── ProductCard.jsx

````

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/coderTejas565/product-listing-app.git
````

### 2. Navigate to project

```bash
cd product-listing-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the app

```bash
npm run dev
```

---

## 🌐 API Used

* FreeAPI – Random Products
* Endpoint:

```
https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&query=mens-watches
```

---

## 🧠 What I Learned

* Handling nested API responses (`data.data.data`)
* Rendering dynamic lists using `.map()`
* Creating reusable UI components
* Managing loading and error states
* Designing responsive layouts using CSS Grid
* Structuring UI for better user experience

---

## 📌 Future Improvements

* Add search functionality
* Add category filters (men / women)
* Add pagination
* Add product detail page
* Improve UI animations

---

## 📷 Preview

(Add a screenshot of your project here)

---

## 📄 License

This project is open-source and available under the MIT License.

```
