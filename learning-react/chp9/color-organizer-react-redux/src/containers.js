// import React from 'react';
// import { PropTypes } from 'prop-types';
// import { connect } from 'react-redux';

// import AddColorForm from './components/add-color-form';
// import SortMenu from './components/sort-menu';
// import ColorList from './components/color-list';
// import { addColor, sortColors, rateColor, removeColor } from './store/action-creators';
// import { sortFunction } from './lib/array-helpers';


// export const AddColorFormContainer = connect(null, )(AddColorForm)

// NewColor.contextTypes = {
//     store: PropTypes.object
// }

// export const Menu = (prop, {store}) => <SortMenu sort={store.getState().sort} onSelect={sortBy => store.dispatch(sortColors(sortBy))} />

// Menu.contextTypes = {
//     store: PropTypes.object
// }

// export const Colors = (props, {store}) => {
//     const { colors, sort } = store.getState();
//     const sortedColors = [...colors].sort(sortFunction(sort));
//     return (
//         <ColorList colors={sortedColors} 
//                    onRemove={id => store.dispatch(removeColor(id))}
//                    onRate={(id, rating) => store.dispatch(rateColor(id, rating))} />
//     )
// }

// Colors.contextTypes = {
//     store: PropTypes.object
// }

/**
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
*/