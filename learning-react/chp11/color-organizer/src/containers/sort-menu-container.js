// import { connect } from 'react-redux';

// import { sortColors } from '../store/action-creators';
// import SortMenu from '../components/sort-menu';

// /* connection to state  data for the component */
// const mapStateToProp = (state, props) => ({
//     sort: state.sort
// });

// /* connection to actions for the component 
//  * This can either be an object or a function as we do here. See color-list.js for object style implementation. 
//  */
// const mapDispatchToProp = dispatch => ({
//   onSortColors: sortby => dispatch(sortColors(sortby))
// });

// /* connect(optional, optional) returns a new function that accepts the component to be wrap - SortMenu., 
//  * The function returned then connects the wrapper component -  SortMenuContainer to the store
//  */
// const SortMenuContainer = connect(mapStateToProp, mapDispatchToProp)(SortMenu)

// export default SortMenuContainer;