# Blinker Auto 🚗

A React-based car marketplace application built as a final project to demonstrate core React concepts, reusable components, and client-side routing.

### Live Demo

👉 https://blinker-auto-react.vercel.app

### Features

- Search and filter cars by make, model, year, and price

- Dynamic filtering without page reloads

- Landing page search with redirect to results page

- Reusable UI components

- Client-side routing using React Router

- Responsive layout

### Tech Stack

- React

- React Router

- JavaScript (ES6+)

- CSS

- Vercel (deployment)

- Git & GitHub

### Project Structure

    src/
    ├── components/      # Reusable UI components
    ├── pages/           # Page-level components
    ├── assets/          # Images and static assets
    ├── data/            # Car data and helpers
    ├── App.jsx
    └── main.jsx

### Key Concepts Demonstrated

- Functional components

- React hooks (useState, useEffect)

- Props and component reusability

- Conditional rendering

- URL-based filtering with React Router

- Separation of logic and presentation

### Challenges & Learnings

A key challenge was sharing search and filter logic between the landing page and the results page without duplicating code. This was solved by centralizing the filtering logic and passing filter values through URL parameters, improving scalability and maintainability.

### Future Improvements

- Integrate a real backend or API

- Add sorting and pagination

- Improve accessibility and performance

- User authentication and saved searches

### Getting Started

    git clone https://github.com/your-username/blinker-auto-react.git
    cd blinker-auto-react
    npm install
    npm run dev

### Author

Built by Francisco Faria as a React final project.
