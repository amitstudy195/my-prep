1.)what is react?
Ans:- React is an open-source JavaScript library for building user interfaces (UIs).

2.)what is vm architecture?
Ans:- In React, "VM architecture" typically refers to the Model-View-ViewModel (MVVM) architectural pattern, or it might be a user's way of describing the core Virtual DOM (VDOM) architecture that powers React's UI updates.

3.)diff b/w library and framework?
Ans:- Feature           Library                                                               Framework
      Control Flow    You call the library.                                               The framework calls your code.
      Flexibility     High. You plug it in wherever you want.                             Low. You must adopt its architecture and rules.
      Scope           Narrow. Solves a specific problem (e.g., fetching data, animations).Broad. Provides a skeleton for the whole application.
      Examples        React, Lodash, Axios, jQuery                                        Angular, Django, Ruby on Rails, Next.js
4.)is react the library or framework?
Ans- React is a library, not a framework. It is specifically a JavaScript library for building user interfaces. 
The core difference comes down to control. A framework dictates the architecture and calls your code, but with a library like React, you are in control. React only cares about the 'View' layer. It doesn’t have built-in opinions on routing, global state management, or how you fetch data. You import React and use it only when you need to render a component."

5.)what are the main features of react?
Ans-
1. Component-Based Architecture
React UIs are built out of isolated, reusable pieces of code called components. Think of them like Lego bricks. Instead of building one massive web page, you build a Button component, a Header component, and a Form component, and snap them together. This makes code highly reusable and much easier to maintain.

2. JSX (JavaScript XML)
JSX is a syntax extension that allows you to write HTML directly inside your JavaScript code. Behind the scenes, it’s just syntax sugar that compiles down to standard JavaScript functions (specifically React.createElement), but it makes writing and visualizing UI components significantly easier.

3. The Virtual DOM
(You already nailed this one!) React keeps a lightweight, in-memory representation of the real DOM. When data changes, it compares the new Virtual DOM to the old one (Diffing) and updates only the specific elements that changed in the real browser (Reconciliation).

4. Unidirectional Data Flow (One-Way Data Binding)
In React, data only flows in one direction: downward from parent components to child components via props. If a child needs to update data, it can't change the data directly; it has to call a function provided by the parent. This strict flow makes React apps incredibly predictable and much easier to debug than frameworks with two-way data binding (like older versions of Angular).

5. React Hooks
Introduced in React 16.8, Hooks are functions that let you "hook into" React state and lifecycle features inside standard functional components. Before Hooks, you had to write complex Class components to manage state. Today, hooks like useState and useEffect are the absolute standard for modern React development.

✓6.)what is diff b/w real dom and virtual dom?
Ans- The Real DOM is the actual HTML structure of your webpage rendered by the browser, but it is slow and expensive to update. The Virtual DOM is a lightweight, in-memory JavaScript copy of the Real DOM that React uses to calculate updates instantly before touching the actual webpage. - 01/07
 
7.)what is virtual dom? 
Ans- The Virtual DOM is a lightweight, in-memory JavaScript copy of the Real DOM that React uses to calculate updates instantly before touching the actual webpage.

The "Why?" (When they ask you to explain)
"Manipulating the real browser DOM—like adding or removing HTML elements—is computationally expensive and slow. If you re-render the entire screen every time a user types a letter, the app will lag. - 01/07

8.)how to setup the react with cra?
Ans- The Standard CRA Setup
Open your terminal and run these three commands one by one:

1. Create the application:

Bash
npx create-react-app my-app
(You can replace my-app with whatever you want to name your project).

2. Navigate into your new project folder:

Bash
cd my-app
3. Start the development server:

Bash
npm start

9.)how to setup the react with vite?
Ans- The Vite Setup Process
Open your terminal and run these commands:

1. Create the Vite project:

Bash
npm create vite@latest my-react-app -- --template react
(You can replace my-react-app with whatever you want to name your folder. If you want to use TypeScript instead of standard JavaScript, you would change the end to --template react-ts).

2. Navigate into your new project folder:

Bash
cd my-react-app
3. Install the dependencies:
Unlike CRA, Vite doesn't automatically install your node modules for you to save time. You have to trigger it yourself:

Bash
npm install
4. Start the development server:

Bash
npm run dev

10.)diff b/w cra and vite?
Ans- "Create React App is the older, legacy standard powered by Webpack, while Vite is the modern, significantly faster alternative powered by esbuild. Vite provides an almost instant development server and much faster Hot Module Replacement (HMR) because it fundamentally changes how your code is served to the browser."

Feature,                   Create React App (CRA),                               Vite
Under the Hood,      Webpack & Babel,                                    esbuild & Rollup
Dev Server Start,    Slow: Bundles the entire app before starting.,      Instant: Serves files on demand.
Hot Reload (HMR),    Slows down as the application grows larger. ,       Remains lightning fast regardless of app size.
Build Time,          Moderate to Slow.,                                  Extremely Fast (esbuild is written in Go).
Official Status,     Deprecated. Removed from React docs.,               Recommended. The modern community standard.

1. How CRA (Webpack) Works: The "Bundle Everything" Approach
"When you run npm start in a CRA project, Webpack acts like a massive funnel. It crawls through every single file, image, and CSS file in your entire project and stitches them together into one giant JavaScript bundle before it can start the server. If you have a massive enterprise app, this can take 30 seconds or even minutes just to see your code on the screen."

2. How Vite Works: The "On-Demand" Approach
"Vite splits your code into two categories: Dependencies (like React or Ant Design) and Source Code (the files you actually write).

It pre-bundles your heavy dependencies instantly using esbuild (which is written in Go and is 10-100x faster than JavaScript-based bundlers).

For your Source Code, Vite doesn't bundle it at all during development. Instead, it serves the files directly to the browser using Native ES Modules. If you are on the 'Login' page, Vite only processes and serves the code for the Login page. It ignores the rest of the app until you navigate there." - 01/07

11.)explain the folder structure of the react?
Ans- my-react-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md

12.)when i run the react application what will happen?
Ans- When you run a React application (usually by typing a command like npm start or npm run dev in your terminal), a local development environment spins up to compile, bundle, and serve your app in real time.

13.)from where the react starts?
Ans- In a standard application, React execution starts at the entry point file, which is almost always named main.jsx, index.jsx, main.js, or index.js depending on your build tool.

14.)can we add javascript code in react?
Ans- Yes, you can absolutely add JavaScript code in React. In fact, React components are fundamentally just regular JavaScript functions, and the markup you write (JSX) is converted into pure JavaScript under the hood.

15.)how to create react typescript project?
Ans- To create a React project with TypeScript, the modern industry standard is to use Vite because Create React App has been deprecated due to slow performance.

16.)tsx vs jsx
Ans- 
Feature              .jsx (JavaScript XML)                 .tsx (TypeScript XML)
Base Language          JavaScript                          TypeScript (Superset of JS)
Type Checking          Dynamic (None at compile time)      Static (Strict type safety)
Tooling Support        Basic auto-complete                 Advanced autocomplete, refactoring
Build Process          Needs Babel to transpile            Needs TypeScript Compiler (tsc)
Runtime Output         Standard JavaScript                 Identical standard JavaScript
Best Used For          Small apps, prototyping,beginners   Enterprise, large teams, complex apps

17.)what are the advantages of jsx and tsx?
Ans- The primary advantages of both formats include:

Core Advantages of JSX

Visual UI Clarity: Developers can easily visualize the final UI component structure since the layout resembles raw HTML.

Seamless Dynamic Data: You can embed native JavaScript expressions directly into markup using basic curly brackets {}.

Native Conditional Rendering: Standard logic like if statements or ternary operators controls which UI blocks render.

Faster Prototyping: There is no type configuration or overhead, which speeds up early-stage building.

Easier Learning Curve: Designers and developers who know basic HTML/JavaScript can start contributing immediately.

Added Advantages of Upgrading to TSX

Early Compile-Time Error Detection: Catch typos, broken object structures, and bad props before your code even reaches a web browser.

Robust Component Prop Safety: Explicitly defines what inputs a React component requires, ensuring you do not pass a string where a number belongs.

Enhanced IDE Tooling: Unlocks precise autocomplete suggestions, quick-navigation jumps, and instant automated code refactoring.

Self-Documenting Codebases: Built-in TypeScript interfaces act as real-time documentation, signaling what exact data shapes are expected across teams.

Enterprise Scalability: Greatly reduces the risk of breaking distant, interconnected parts of a massive application during updates.

18.)what are the rules of jsx?
Ans- Here are the most important rules of JSX:
1. Return a Single Root Element
2. Close All Tags
3. Use camelCase for Attributes
4. Use Curly Braces { } to Embed JavaScript
5. Wrap Multi-Line JSX in Parentheses

19.)what is jsx fragments?
Ans- A JSX Fragment is a feature in React that allows you to group multiple elements together without adding an extra wrapper node (like a <div>) to the HTML DOM. It solves the fundamental JavaScript limitation where a component function can only return a single expression or object.

20.)is browser going to understand the jsx?
Ans- No, web browsers do not understand JSX natively. Browsers only read standard HTML, CSS, and pure JavaScript.

21.)what is babel?
Ans- In software development, Babel is a free, open-source JavaScript compiler. It translates modern, cutting-edge JavaScript code into an older, backwards-compatible version that older web browsers and environments can understand.

22.)what are props and state?
Ans- In React, state is internal data managed within a component that can change over time (e.g., a counter, form input), triggering re-renders. Props (properties) are read-only data passed from a parent component to a child, acting as configuration. State is private/mutable; props are public/immutable. - 01/07

23.)how to pass the prop from parent component to child component?
Ans- In React
In the Parent: Define the data and add it as an attribute to the child component tag.
In the Child: Receive the data as an argument (props) in the function.
Parent Component:jsx
function Parent() {
  const message = "Hello from Parent!";
  return <Child title={message} />;
}
Use code with caution.Child Component:jsx
function Child(props) {
  return <h1>{props.title}</h1>;
}

// Or using destructuring (cleaner):
function Child({ title }) {
  return <h1>{title}</h1>;
} - 01/07
24.)how to pass the props from the child to parent?
Ans-  In React, data flows unidirectionally from parent to child. To pass data from a child to a parent, you do not pass props "up" directly. Instead, you pass a callback function as a prop from the parent to the child. The child then calls this function, sending the data back as an argument. - 01/07

25.)what is callback prop or function prop?
Ans-A callback prop (or function prop) is a function defined in a parent component and passed to a child component as a standard property. It allows the child component to trigger an action in the parent, letting data flow backward from the child to the parent.

26.)what is key prop?
Ans-  In React, a key prop is a special, reserved attribute you must give to elements rendered in a list. It acts as a unique identifier that tells React which items have changed, been added, or been removed.

27.)is it possible to modify the props?
Ans-  In modern frontend frameworks like React or Vue, props are read-only and cannot be directly modified. This rule enforces a strict, top-down data flow. Instead of mutating props, you should manage the data in a parent component and pass it down.

28.)is props are mutable or immutable?
Ans-  Props are immutable (read-only). They allow parent components to pass data down to child components, but they cannot be altered by the child component receiving them.

29.)what is composition in props?
Ans-  In component-based frameworks (like React), composition in props is the design pattern of passing custom UI elements, data, or state as props to build complex, reusable layouts. Instead of hardcoding content inside a component, you pass it dynamically so the component acts as a flexible wrapper.

30.)what is destructuring with respect to props?
Ans- Destructuring props in React is a JavaScript feature that allows you to extract specific properties from the props object and assign them directly to distinct variables. It removes the need to repeatedly type props.propertyName throughout your component, resulting in cleaner and more readable code.

31.)different ways to apply props in react?
Ans- Core Ways to Apply Props
Attribute Passing: The most common way to pass props is by adding them as attributes to the component tag in the parent component.Example: <User name="Alex" age={25} />
Object Spreading: Use the JavaScript Spread Operator (...) to pass all properties of an object as individual props at once.Example: <User {...userData} />
The children Prop: This special prop allows you to pass JSX elements or other components nested between the opening and closing tags of a component.Example: <Card><p>Content here</p></Card>
Destructuring: Inside the child component, you can destructure the props object directly in the function arguments for cleaner code.Example: function User({ name, age }) { ... }

32.)what is components?
Ans-  React components are the independent, reusable building blocks used to construct user interfaces (UI).

33.)how to create the components in react?
Ans-  To create a component in React, you write a regular JavaScript function that returns JSX (markup) and ensures its name starts with a capital letter.

34.)what are stateless and statefull components?
Ans-  In React, the primary difference between stateful and stateless components is whether they manage their own internal data (state) or simply render data passed to them as properties (props)

35.)what is hook in react?
Ans-  
36.)what is state?
Ans-  
37.)what is the syntax of the state?
Ans-  
38.)how to create the functional components?
Ans-  
39.)how to create the class components?
Ans-  
.)what is difference between class and functional component?
Ans-The primary difference between class and functional components in React is how they handle state and logic. Functional components are simpler JavaScript functions that return JSX, while class components are ES6 classes that extend from React.Component.

40.)is it possible to update the state?
Ans-  
41.)is state is mutable or immutable?
Ans-
42.)how to create the higher order components in react and where we used in real project?
Ans-In React, a Higher-Order Component (HOC) is a pattern where a function takes a component as an argument and returns a new, "enhanced" component. It acts as a wrapper that adds reusable logic, state, or styling without modifying the original component directly.

Authentication & Authorization: A withAuth HOC can check if a user is logged in before rendering a page, redirecting them if they aren't.
Loading States: A withLoading HOC can display a spinner while data is being fetched, only rendering the actual component once the data is ready.
Data Fetching: Centralizing API calls so that multiple components can subscribe to the same data source.
Theming & Styling: Providing global theme data (like colors or fonts) to various UI elements.
Logging & Analytics: Automatically tracking when specific components are mounted or interacted with for debugging or business metrics.
Internationalization (i18n): Injecting translation functions into components so they can easily switch languages.
43.)what is callback?
Ans-
44.)what is memo?
Ans-
45.)what is usememo?
Ans-
46.)what is controlled forms?
Ans-In web development (especially in frameworks like React), a controlled form is one where the form's data is handled by the application's state rather than the browser's Document Object Model (DOM).

47.)what is uncontrolled forms?
Ans-An uncontrolled form (or component) is a form where the user's input data is stored and managed directly by the browser's DOM, rather than by a frontend framework like React.

48.)what is diff b.w controlled vs uncontrolled forms?
Ans- In React, the main difference between controlled and uncontrolled forms is who owns the state of the input data. Controlled forms store input values in React state, while uncontrolled forms let the browser's DOM handle the data.

49.)what is ref
50.)what is forward ref
51.)what is prop drilling and explain in detail
52.)what are the disadvantages of the prop drilling
53.)what are the functional life cycle methods?
Ans- In programming—most notably in React—functional lifecycle methods refer to Hooks (like useEffect) used within functional components. These hooks replace the older "lifecycle methods" of class components and allow you to execute code at specific stages of a component's life.
The functional component lifecycle is broken down into three primary phases managed by React Hooks:
1. Mounting (Initialization)
This phase occurs when the component is first created and inserted into the DOM.
useState: Used to initialize state directly without a constructor.
useEffect with an empty array []: Runs once after the component first renders. It acts as a replacement for the class componentDidMount method and is ideal for API data fetching or setting up global event listeners.

2. Updating (Re-rendering)
This phase occurs when a component re-renders due to changes in its state or props.
useEffect (No dependency array): Runs on every single render and update.
useEffect (With a dependency array [prop, state]): Runs when specific data inside the array changes. It acts similarly to the class componentDidUpdate method.

3. Unmounting (Removal)
This phase occurs when the component is removed from the DOM.
Cleanup function in useEffect: By returning a function inside your useEffect, you replicate componentWillUnmount. This is used to prevent memory leaks by clearing timers, canceling network requests, or removing event listeners.

54.)what are the class life cycle method in react?
Ans- In a React class component, lifecycle methods are special built-in functions that automatically run at specific points as a component is created, updated, and removed from the DOM. These methods are divided into three core phases: Mounting, Updating, and Unmounting, alongside an optional Error Handling phase.
An interactive summary can be visualized by visiting the React Lifecycle Methods Diagram. Below is the chronological breakdown of how these methods execute within each phase.

1. Mounting Phase
This phase occurs when an instance of a component is being created and inserted into the browser's DOM.
constructor(props): The first method called before the component mounts. It initializes local state and binds event handlers.
static getDerivedStateFromProps(props, state): Runs right before rendering, both on the initial mount and subsequent updates. It returns an object to update the state based on prop changes, or null to update nothing.
render(): The only required method in a class component. It examines this.props and this.state to return the JSX that defines the user interface.
componentDidMount(): Invoked immediately after a component is successfully inserted into the DOM tree. This is the ideal place to initiate API fetches, set up timers, or add DOM subscriptions.
2. Updating Phase
An update is triggered whenever a component’s state or props change, requiring the UI to adapt.
static getDerivedStateFromProps(props, state): Invoked again at the start of an update to sync state with new props if necessary.
shouldComponentUpdate(nextProps, nextState): Runs before rendering when new props or state are received. It returns a boolean (true by default). Returning false skips the re-render, serving as an important optimization tool.
render(): Re-runs to generate the updated JSX tree.
getSnapshotBeforeUpdate(prevProps, prevState): Invoked right before the virtual DOM changes are committed to the actual DOM. It can capture DOM metadata (e.g., scroll position) to pass as a value directly to componentDidUpdate.
componentDidUpdate(prevProps, prevState, snapshot): Executed immediately after the updates are flushed to the DOM. It is useful for performing network requests or operating on the DOM based on comparative state changes.

3. Unmounting Phase
This phase handles the removal of a component from the DOM tree.
componentWillUnmount(): Called immediately before a component is destroyed and detached from the DOM. Use this method to perform necessary cleanups, such as invalidating timers, canceling network requests, or removing active event listeners to avoid memory leaks.
4. Error Handling Phase
These specialized methods turn a class component into an Error Boundary, catching unexpected crashes in child components.
static 
getDerivedStateFromError(error): Invoked after a child component throws an error. It renders a fallback UI by returning a state update.
componentDidCatch(error, info): Invoked after a child component throws an error. It is primarily used to log error information to external tracking services.

55.)what are synthetic events
56.)difference ways to apply the styles in react?
57.)how to apply inline, internal and external styles in react
58.)componentDidMount(), componentDidUpdate(), componentWillUnmount(), shouldComponentUpdate()
59.)how to create events in react
60.)how to avoid the prop drilling problems?
Ans- To avoid prop drilling (passing data through multiple intermediate components that don't need it), use Component Composition for UI wrappers, React Context for global state, or lightweight State Management Libraries (like Zustand) to let components access data directly.

61.)what is useContext api hook and how it solves the prop drilling problems?
Ans- The useContext hook is a built-in React feature that allows functional components to subscribe to and consume data from a central state (Context) without passing props through intermediate components.
1. Create the Context
import { createContext } from 'react';

// Create and export the context
export const UserContext = createContext(null);

2. Provide the Context
Wrap your component tree inside the Context Provider and pass the data into its value prop.
import { useState } from 'react';
import { UserContext } from './UserContext';
import Navbar from './Navbar';

function App() {
  const [user, setUser] = useState({ name: "Alex", role: "Admin" });

  return (
    // Everything inside this provider can now see the user object
    <UserContext.Provider value={user}>
      <Navbar /> 
    </UserContext.Provider>
  );
}

3. Consume the Context
Inside the nested component, extract the value instantaneously by passing the context reference into useContext.
import { useContext } from 'react';
import { UserContext } from './UserContext';

function UserProfile() {
  // Directly pull the data from the closest provider above
  const user = useContext(UserContext);

  return <div>Welcome back, {user.name}!</div>;
}


62.)what is useReducer in react
63.)when to use useReducer, useState and redux
64.)how to do api call in react using fetch or axios
*65.)what is useEffect?
Ans:
*66.)what are different ways to useEffect?
Ans:
67.)how to clear the components in react?
Ans:
68.)how to debug react?
Ans:
*69.)create the api using useEffect and display the data in jsx?
Ans:
70.)explain different states in useReducer 
71.)what is conditional rendering 
72.)how to implement conditional rendering in react 
73.)how do we handle the forms in react 
74.)how to we handle the form validations in react 
75.)how to render the list of elements in react 
76.)what are error boundaries in react 
77.)how do we create the error boundary in react 
78.)what is lazy loading 
79.)what is eager loading vs lazy loading 
80.)what is pure component 
81.)how do we prevent the re-rendring in react 
82.)what is react router 
83.)how to implement routing in react 
84.)what is outlet 
85.)how to implement nested routing in react 
86.)what is browserrouter
87.)what is link, routes, and route 
88.)what is diff b/w browserRouter vs hasRouter 
89.)what is hasRouter 
90.)what is wildcard routing 
91.)what is link, navlink and redirect in react 
92.)what is useparms in react routing 
93.)what is usenavigation, useLocation 
94.)how to maintain the complex state in react 
95.)diff ways to manage the state in react 
96.)what is react redux 
97.)what are the diff stages of react redux 
98.)what is createAsync thunk 
99.)how to create the api inside the redux 
100.)what are portals in react 
101.)how to create the portals in react 
102.)how to improve the performace of react application 

103.)What is difference b/w Redux and useContext api?
Ans-The core difference is that the Context API is a built-in React feature for passing data through the component tree, while Redux is a standalone library for managing state.

104.)What is diff b/w useState and useReducer?
Ans- useState is best for simple, independent state (booleans, strings, numbers), while useReducer is superior for complex state objects, interrelated data, or when state updates rely on previous values. Use useState for simplicity and useReducer to centralize complex update logic.

105.)What is difference between usememo and usecallback?
Ans- Both useCallback and useMemo are React Hooks used for performance optimization through memoization, but they cache different things. useCallback caches the function itself, preventing it from being re-created on every render. useMemo caches the return value of a function, preventing expensive calculations from running on every render. 

106.)What is code splitting?
Ans- Code splitting is a technique that breaks your React application into smaller JavaScript "chunks" instead of one massive bundle. This allows the browser to only load the code needed for the current screen, significantly improving initial load times and overall performance.

107.)Why browser can't read jsx?
Ans- Browsers cannot read JSX (JavaScript XML) because it is not a part of the official ECMAScript standard. While JSX looks like HTML, it is actually a syntax extension that browser engines are not built to interpret or execute.

108.)why keys are important in react?
Ans- In React, keys are special string attributes used to give elements in a list a stable, unique identity. They act as "nametags" that help React’s reconciliation algorithm track items across renders.

109.)how to optimize the performance of react app?
Ans- Optimizing a React application involves reducing initial load times, minimizing unnecessary re-renders, and managing large datasets efficiently.

1. Minimize Unnecessary Re-renders
Unnecessary updates to the DOM are the most common source of performance lag.
React.memo: Wrap functional components in React.memo() to prevent them from re-rendering if their props haven't changed.
useCallback and useMemo: Use these hooks to memoize functions and expensive calculations so they aren't recreated or recomputed on every render.
Strategic State Management: Keep state as local as possible to avoid triggering updates in distant parts of the component tree.
Optimize Context Usage: Split large contexts into smaller, domain-specific ones so that a change in one value doesn't force all context consumers to re-render.
2. Reduce Initial Load Time
A heavy initial bundle can delay the time it takes for your app to become interactive.
Code Splitting: Use React.lazy() and Suspense to load components only when they are needed, rather than bundling everything into one file.
Analyze Bundle Size: Use tools like the Webpack Bundle Analyzer to identify and remove large, unused dependencies.
Production Build: Always ensure you are testing and deploying the production version (npm run build), which includes minification and removes development-only checks.
3. Efficiently Handle Large Data
Rendering thousands of items at once can freeze the browser.
List Virtualization: Use libraries like react-window or react-virtualized to render only the items currently visible in the viewport.
Proper Use of Keys: Always use unique and stable key props (avoid using array indices if the list can change) to help React's diffing algorithm work efficiently
4. Optimize Assets and User Input
Lazy Load Images: Use the Intersection Observer API or libraries like react-lazyload to load images only as they enter the screen.
Debounce/Throttle: Apply debouncing or throttling to frequent events like scrolling, resizing, or typing to prevent excessive function calls.
Web Workers: Offload heavy CPU tasks (like complex data processing) to Web Workers to keep the main UI thread responsive.
5. Profile and Measure
Before optimizing, identify actual bottlenecks using specialized tools:
React DevTools Profiler: Record a performance profile to see exactly which components are rendering and why.
Lighthouse: Use this Chrome tool to audit your app’s performance, accessibility, and SEO.
React Scan: A newer tool that highlights re-rendering components in real-time with visual outlines.

110.)what is memoization in react?
Ans- Memoization in React is an optimization technique used to speed up applications by caching the results of expensive operations and reusing them when the same inputs occur again.

111.)what is reconciliation process in react?
Ans- Reconciliation is the internal process React uses to update the browser's DOM efficiently by syncing it with a lightweight memory representation called the Virtual DOM.

112.)what is difference between memo and usememo?
Ans- The core difference is that memo caches an entire React component to prevent unnecessary re-renders, while useMemo caches a specific calculation value inside a component to avoid expensive computations.

113.)what is difference between package.json and package-lock.json?
Ans- The core difference is that package.json defines your project's configuration, metadata, and allowed version ranges for direct dependencies, while package-lock.json records the exact dependency tree and specific versions installed to guarantee identical setups across all environments.

114.)what is transpiler?
Ans- A transpiler (short for source-to-source compiler or transcompiler) is a tool that translates source code from one high-level programming language into another high-level language with a similar level of abstraction.
Common Examples of Transpilers
Babel: Converts modern JavaScript (ES6+) into older, backwards-compatible JavaScript (ES5).
TypeScript Compiler (tsc): Verifies types and converts TypeScript code into vanilla JavaScript.
Emscripten: Transpiles low-level languages like C and C++ into JavaScript or WebAssembly to run native applications directly inside browsers.
2to3: An internal tool that converts Python 2 code into Python 3 syntax.

115.)What is dynamic routing?
Ans- Dynamic routing in React refers to the practice of handling navigation and rendering components based on changing URL variables or application states at runtime, rather than hardcoding a separate route for every single page.

116.)there are two types of export what is differences in react?
Ans-Default Exports- Used to export exactly one primary component or value per file
// Button.js
export default function Button() {
  return <button>Click Me</button>;
}

// App.js
import MyCustomButton from './Button'; // Can be named anything

 Named Exports- Used to export multiple values, functions, or components from a single file (like a library of helper functions).
 // utils.js
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }

// App.js
import { add, subtract } from './utils'; // Must match exactly

117.)what is diff b/w dev dependencies and normal dependencies?
Ans- The difference comes down to when the packages are needed: normal dependencies are essential for your application to run in production (for your end-users), while dev dependencies are only used by you (or your CI/CD pipeline) during the development, building, and testing phases.

118.)what is tilt and carat operator?
Ans- The tilde operator allows only patch-level updates (bug fixes and security patches) within the same minor version.With ~1.2.3, your project might install 1.2.5 (bug fixes) but never 1.3.0.
The caret operator allows both minor and patch-level updates but locks the major version.With ^1.2.3, your project might install 1.4.5 (new features + bug fixes) but never 2.0.0.

119.)usestate is synchronous or asynchronous.
Ans- The state updater function returned by React's useState hook executes synchronously, but its effects behave asynchronously because state updates are batched and scheduled for the next render cycle.

120.)what is jsx?
Ans- JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside your JavaScript files. Primarily used in React, JSX makes building, reading, and maintaining user interfaces more intuitive.


how to deploy react application
what is npm run build

what is unit testing
how to add unit testing in react
diff axios vs fetch
what are diff http methods
how to show page not found page if routing is not present