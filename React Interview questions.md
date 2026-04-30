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

6.)what is diff b/w real dom and virtual dom?
Ans- The Real DOM is the actual HTML structure of your webpage rendered by the browser, but it is slow and expensive to update. The Virtual DOM is a lightweight, in-memory JavaScript copy of the Real DOM that React uses to calculate updates instantly before touching the actual webpage.

7.)what is virtual dom?
Ans- "The Virtual DOM is a lightweight, in-memory JavaScript representation of the real browser DOM. React uses it to calculate the most efficient way to update the UI, making applications significantly faster."

The "Why?" (When they ask you to explain)
"Manipulating the real browser DOM—like adding or removing HTML elements—is computationally expensive and slow. If you re-render the entire screen every time a user types a letter, the app will lag.
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

Feature,Create React App (CRA),Vite
Under the Hood,Webpack & Babel,esbuild & Rollup
Dev Server Start,Slow: Bundles the entire app before starting.,Instant: Serves files on demand.
Hot Reload (HMR),Slows down as the application grows larger.,Remains lightning fast regardless of app size.
Build Time,Moderate to Slow.,Extremely Fast (esbuild is written in Go).
Official Status,Deprecated. Removed from React docs.,Recommended. The modern community standard.

1. How CRA (Webpack) Works: The "Bundle Everything" Approach
"When you run npm start in a CRA project, Webpack acts like a massive funnel. It crawls through every single file, image, and CSS file in your entire project and stitches them together into one giant JavaScript bundle before it can start the server. If you have a massive enterprise app, this can take 30 seconds or even minutes just to see your code on the screen."

2. How Vite Works: The "On-Demand" Approach
"Vite splits your code into two categories: Dependencies (like React or Ant Design) and Source Code (the files you actually write).

It pre-bundles your heavy dependencies instantly using esbuild (which is written in Go and is 10-100x faster than JavaScript-based bundlers).

For your Source Code, Vite doesn't bundle it at all during development. Instead, it serves the files directly to the browser using Native ES Modules. If you are on the 'Login' page, Vite only processes and serves the code for the Login page. It ignores the rest of the app until you navigate there."

11.)explain the folder structure of the react?
Ans- 
12.)when i run the react application what will happen?
Ans- 
from where the react starts 
can we add javascript code in react 
how to create react typescript project 
tsx vs jsx 
what are the advantages of jsx and tsx 
what are the rules of jsx 
what is jsx fragments 
is browser going to understand the jsx 
what is babel 
what are props and state
how to pass the prop from parent component to child component
how to pass the props from the child to parent 
what is callback prop or function prop 
what is key prop 
is is possible to modify the props 
is props are mutable or immutable 
what is composition in props 
what is destructuring with respect to props
different ways to apply props in react 
what is components 
how to create the components in react 
what are stateless and statefull components 
what is hook in react 
what is state 
what is the syntax of the state 
how to create the functional components 
how to create the class components 
is it possible to update the state 
is state is mutable or immutable 
how to create the higher order components in react 
what is callback 
what is memo
what is usememo
what is controlled forms 
what is uncontrolled forms 
diff b.w controlled vs uncontrolled forms 
what is ref 
what is forward ref 
what is prop drilling and explain in detail 
what are the disadvantages of the prop drilling 
what are the functional life cycle methods 
what are the class life cycle method in react 
what are synthatic events 
difference ways to apply the styles 
how to apply inline, internal and external styles in react
componentDidMount(), componentDidUpdate(), componentWillUnmount(), shouldComponentUpdate()
how to create events in react 
how to avoid the prop drilling problems 
what is useContext api hook and how it solves the prop drilling problems
what is useReducer in react 
when to use useReducer, useState and redux 
how to do api call in react using fetch or axios 
what is useEffect 
what are different ways to useEffect 
how to clear the components in react 
how to debug react 
create the api using useEffect and display the data in jsx 
explain different states in useReducer 
what is conditional rendering 
how to implement conditional rendering in react 
how do we handle the forms in react 
how to we handle the form validations in react 
how to render the list of elements in react 
what are error boundaries in react 
how do we create the error boundary in react 
what is lazy loading 
what is eager loading vs lazy loading 
what is pure component 
how do we prevent the re-rendring in react 
what is react router 
how to implement routing in react 
what is outlet 
how to implement nested routing in react 
what is browserrouter
what is hasRouter 
what is wildcard routing 
what is link, navlink and redirect in react 
what is useparms in react routing 
what is usenavgation, useLocation 
how to maintain the complex state in react 
what is react redux 
what is createAsync thunk 
how to create the api inside the redux 
what are portals in react 
how to create the portals in react 
how to improve the performace of react application 



