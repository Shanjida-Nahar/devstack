# Dev Stack Builder

Dev Stack Builder is a React-based application that allows developers to explore different technologies and create their own personalized development stack. Users can browse technology cards, view details, add technologies to their stack, remove selected items, and manage their preferred tools through an interactive interface.

The project focuses on React component-based architecture, state management, JSON data handling, responsive design, and user interaction.

---

## Live Website

Link: 

---

## GitHub Repository

Link: 

---

# Technologies Used

- React.js
- JavaScript (ES6+)
- Vite
- HTML5
- CSS3
- React Toastify
- JSON Data

---

# Features

## 1. Explore Technologies

Users can explore different development technologies through interactive cards.

Each technology card includes:

- Technology icon
- Technology category
- Description
- Difficulty level
- Rating
- Badge
- Add to Stack button

---

## 2. Build Your Own Developer Stack

Users can create their own technology stack by selecting technologies they want to use.

The stack section allows users to:

- Add technologies
- Prevent duplicate additions
- View selected technologies
- Remove individual technologies
- Remove all technologies from the stack
- Track the total number of selected technologies

---

## 3. Interactive and Responsive User Interface

The application provides:

- Sticky navigation bar
- Sticky "Your Stack" sidebar on desktop
- Responsive mobile layout
- Loading state while fetching technology data
- Toast notifications for user actions
- Modern card-based UI design

---

# Project Structure

```
DevStack
│
├── public
│   ├── assets
│   │   ├── logo-text.png
│   │   └── banner-stack.png
│   │
│   └── technologies.json
│
├── src
│   │
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TechnologyArea.jsx
│   │   ├── TechnologyCard.jsx
│   │   ├── StackSidebar.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# React Questions and Answers

## 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It is a syntax extension that allows developers to write HTML-like code inside JavaScript.

React uses JSX because it makes UI creation easier and allows developers to describe how components should appear in a more readable way.

Example:

```jsx
function App() {
  return (
    <h1>
      Hello React
    </h1>
  );
}
```

JSX is converted into regular JavaScript by React tools before running in the browser.

---

## 2. What is the difference between props and state?

Props and state are both used to manage data in React, but they work differently.

### Props

Props are data passed from a parent component to a child component. They are read-only and cannot be directly changed by the child.

Example:

```jsx
<TechnologyCard technology={technology} />
```

Here, the parent component sends technology data to the `TechnologyCard` component using props.

### State

State is data managed inside a component. It can change over time, and when state changes React updates the UI.

Example:

```javascript
const [stack, setStack] = useState([]);
```

In this project, state is used to store selected technologies in the user's stack.

---

## 3. What does the useState hook do, and where did you use it in this project?

The `useState` hook allows React components to store and update changing data.

When the state value changes, React re-renders the component with the updated information.

In this project, `useState` was used for:

- Technology data
- User selected stack
- Loading status

Example:

```javascript
const [stack, setStack] = useState([]);
```

This stores all technologies added by the user.

---

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook allows React to perform side effects after rendering a component.

Side effects include:

- Fetching data
- Updating the document
- Running external operations

In this project, `useEffect` was used to load technology information from the JSON file when the application starts.

Example:

```javascript
useEffect(() => {

  fetch("/technologies.json")
    .then(response => response.json())
    .then(data => setTechnologies(data));

}, []);
```

The empty dependency array ensures that the data is fetched only once when the component loads.

---

## 5. Why does every item in a .map() list need a unique key prop?

React uses the `key` prop to identify each item in a list.

A unique key helps React understand which items changed, were added, or were removed. This improves rendering performance and prevents unexpected UI behavior.

Example:

```jsx
{
  technologies.map(technology => (
    <TechnologyCard
      key={technology.id}
      technology={technology}
    />
  ))
}
```

Here, each technology uses its unique ID as the key.

---

## 6. What is conditional rendering? Explain one place where you used it.

Conditional rendering means displaying different UI elements based on a specific condition.

In this project, conditional rendering is used in the "Your Stack" section.

When the stack is empty:

```jsx
Your stack is empty
```

When technologies are added:

```jsx
Selected technology list
```

The displayed content changes depending on whether the stack contains any items.

Example:

```jsx
{
  stack.length === 0
  ?
  <p>Your stack is empty</p>
  :
  <StackItems />
}
```

---

## 7. How do you pass data from a parent component to a child component, and how does the child communicate back to the parent?

A parent component passes data to a child component using props.

Example:

```jsx
<TechnologyCard
    technology={technology}
    addToStack={addToStack}
/>
```

The child receives the technology data and function through props.

A child component communicates back to the parent by calling a function passed through props.

Example:

```javascript
addToStack(technology);
```

In this project, `TechnologyCard` sends the selected technology back to `App.jsx`, where the stack state is updated.

---

# Installation and Setup

## Clone the repository

```bash
git clone your-repository-link
```

## Install dependencies

```bash
npm install
```

## Run the development server

```bash
npm run dev
```

## Create production build

```bash
npm run build
```

---

# Git Commit History

The project was developed using meaningful commits:

1. Initialize React Vite project and basic structure
2. Create navbar and hero section UI
3. Add technology data and technology card components
4. Implement stack management functionality
5. Add toast notifications and loading state
6. Polish complete UI layout and responsive design
7. Refine UI components and match reference design
8. Finalize responsive design and project documentation

---

# Author

Shanjida Nahar Sumona