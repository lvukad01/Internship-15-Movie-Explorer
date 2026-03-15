# 🎬 Movie Explorer (React)

Movie Explorer is a React SPA for browsing movies, viewing details, and managing favorite movies.

---

## 🚀 Features

* Search movies by title
* Movie list with sorting and genre filtering
* Movie detail page
* Add / remove favorites (stored in localStorage)
* Loading, error and empty states
* Debounced search
* Responsive UI with CSS Modules

---

## 🧠 Hooks

* useEffect – data fetching simulation
* useMemo – sorting & filtering optimization
* useRef – search input focus & debounce
* Custom hooks: `useFetch`

---

## 🧭 Routes

* `/` — Home
* `/movies` — Movies
* `/movies/:id` — Movie details
* `/favorites` — Favorites
* `*` — NotFound

---

## ⚙️ Setup

```bash
npm install
npm run dev
```

App runs at **http://localhost:5173**

---

## 📁 Structure

```
src/components
src/pages
src/hooks
src/data
```
