## Color Organizer With React Redux  
The Color Organizer app uses react-redux to manage redux store.   
* Redux store is created in `src/index.js` using the store factory defined in `store/index.js`    
* The `App` base component is wrapped in  `react-redux` `Provider` wrapper component.    
* The store is passed to the Provider component.    
* Container component is defined for each component in the `containers` directory. see containers/`color-list-container.js`  
* `react-redux`'s connect function is used to connect the state to the components.  
* App component wraps all the desired container components  

__Some files of interest includes:__   
* [src/index.js`](https://github.com/Tochukz/ReactJS/blob/master/learning-react/chp9/color-organizer-react-redux/src/index.js)  
* [App.js](https://github.com/Tochukz/ReactJS/blob/master/learning-react/chp9/color-organizer-react-redux/src/App.js)
* [color-list-contianer.js](https://github.com/Tochukz/ReactJS/blob/master/learning-react/chp9/color-organizer-react-redux/src/containers/color-list-container.js) 
* [color-list.js](https://github.com/Tochukz/ReactJS/blob/master/learning-react/chp9/color-organizer-react-redux/src/components/color-list.js)
* [color.js](https://github.com/Tochukz/ReactJS/blob/master/learning-react/chp9/color-organizer-react-redux/src/components/color.js)


PRESENTATIONAL COMPONENTS
AddColorForm, SortMenu and Color List are all presentational components. 
They only render the UI elements. 
They do not tihtly couple with any data architecture.
They receive data as props and send data to their parent compoent via callback function properties.

CONTAINER COMPONENTS 
NewColor, Menu and Colors are container components.
They connect oresentatio components to the data. 
They retrieve store data via context and manage interaction with the store. 
They render presentational components by mapping properties to state and callback function properties to the store's dispatch method.

This Architecture makes the presentational components resuable. They can easily be swaped out and easy to test.
They can be composed to create the UI.