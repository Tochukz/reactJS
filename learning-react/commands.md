# Learning React
[Github Repo](https://github.com/moonhighway/learning-react)

## Chapter 1: Welcome to React
Install yarn:  
`$ npm install -g yarn`   
Using yarn:  
`$ yarn install`  or `$ yarn`
`$ yarnhadd [package-name]`  
`$ yarn remove [packge-name]`  

## Chapter 2: Emerging JavaScript  

## Chpater 6: Props, State, and the Component Tree

## Chapter 8: Redux
Redux rule: application state should be stored in a single immutable object. Immutable means this state object doesn’t change.   
We will eventually update this state object by replacing it entirely.  
__Actions__   
Actions are nice little object literals that tell Redux how state should be changed.   
They include a "type" key with a string value representing the type of the action e.g. {type: "ADD_COLOR"} .     
They also include any associated data that Redux will need to make the change.  
__Reducers__   
Reducers are functions that take the current state along with an action as arguments and use them to create and return a new state.  
Reducers should be predictable. Generating random data, calling APIs, and other asynchronous processes should be handled outside of reducers.   
Avoiding state mutations and side effects is always recommended.  
Action objects are simply JavaScript literals. Action creators are functions that create and return these literals.
Action creators are where we should put any logic for communicating with backend APIs.  
With an action creator, we can perform asynchronous logic like requesting data or making an API call.   
__Subscribers__  
Stores allow you to subscribe handler functions that are invoked every time the store completes dispatching an action.
__Store Factory__   
 A factory is a function that manages the process of creating stores.
 __Middleware__  
 In Redux, middleware is defined as a higher-order function: it’s a function that returns a function that returns a function.

## Chapter 9:  React Redux  
The process of passing data all the way down and back up the tree introduces complexity that libraries like Redux are designed to alleviate.   
Instead of passing data up the tree through two-way function binding, we can dispatch actions directly from child components to update application state.   

__Install react-redux__
`$ np install react-redux --save`  
react-redux supplies us with a component that we can use to set up our store in the context, the provider.   
 We can wrap any React element with the provider and that element’s children will have access to the store via context.   

## Chapter 11: React Router  
react-router-dom provide two options for managing the navigation history - HashRouter and BrowserRouter
The HashRouter is nice for small client site that do not require a backend.  
The BrowserRouter is preferred for production-ready application.  
__Install React Router__  
`$ yarn add react-router-dom`  

__Installing node-saaa__  
`$ yarn add node-sass`  

Always favor component composition over reuse of CSS classes across different components.
For example, instead of using a .Button CSS class in <AcceptButton> and <RejectButton> components, we recommend creating a <Button> component with its own .Button styles, that both <AcceptButton> and <RejectButton> can render (but not inherit).  

__Install react-icons__  
`$ yarn add react-icons`  
