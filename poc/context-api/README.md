# The React Context API
React context API is safe to use from version 16.3.0
The React Context API solves one major problem - prop drilling.
Prop drilling is the process of getting data from component A to Z by passing it through multiple layers of intermediate React components.
Component will receive props indirectly and the React Developer will ensure everything works out right.  

## Introducing The Context Web API  
The Context API allows you to have central store where your data lives like in Redux.  
The store can be inserted into any component directly. You can cut out the middleman!  
The context API generally consists of three building blocks:  
* A context object  
* A context provider    
* A context consumer  

### Context API  
In this demo:
* Context is created - `React.createContext` (context-prover.js)  
* Context provider is created - context-provider.js  
* The Context provider sets the state and methods to manipulate the state as value prop/attribute.   
* The App component is wrapped in the ContextProvider - index.js  
* The Child component is wrapped in Context.Consumer component.   
* The Child component then gets access to the `context`.  
* The child component manipulate the state using the method passed with the state in the context.  
