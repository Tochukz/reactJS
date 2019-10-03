## Color Organizer with implicit context  
Here the store is passed using react context (the old way).  
* The get store is created in the `src/index.js` using the storeFactory and and passed to the base `App` component.    
* The `App` component creates the context using getChildContext method and defiens`App.childContexTypes` object with the store key and type value.  
* All the children component must define `ChildComponent.contextTypes` where `ChildComponent` is their respective Component name.  
* The props and context will be passed to the children components automatically as parameters `const ChildComponent = (props, context)`  

NB: This architecture is now old and may only be found in legacy code.  
More recent and/or better method includes: 
* Using `react-redux` package [See Here](https://github.com/Tochukz/ReactJS/tree/master/learning-react/chp9/color-organizer-react-redux)
* Using React Context API [See Here](https://github.com/Tochukz/ReactJS/tree/master/poc/context-api)