# Color Organizer Explicit
### Color organizer app with store passed explicitly as property down the component tree from parent to child.  
In this demo a redux store is created in the `index.js` file and passed to the `App` base component.    
The App component in turn passes the `store` to its child componets.   
The child components may pass the store further to their child component and so forth.  
This architecture may be fine for small application but it is not suitable for large applications.  
 
