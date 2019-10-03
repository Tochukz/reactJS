## Color Organizer With React Redux  
The Color Organizer app uses react-redux to manage redux store.   
* Redux store is created in `src/index.js` using the store factory defined in `store/index.js`    
* The `App` base component is wrapped in  `react-redux` `Provider` wrapper component.    
* The store is passed to the Provider component.    
* Container component is defined for each component in the `containers` directory. see containers/`color-list-container.js`  
* `react-redux`'s connect function is used to connect the state to the components.  
* App component wraps all the desired container components  

__Some files of interest includes:__   
* [src/index.js`]()  
* [App.js]()
* [color-list-contianer.js]() 
* [color-list.js]()
* [color.js]()
