import React from 'react';
import { connect } from 'react-redux';

import { removeColor, rateColor } from '../store/action-creators';
import ColorList from '../components/color-list';

const mapStateToProps = (state, props) => ({
  colors: state.colors,
  sort: state.sort,
});

/* 
* This could either be a function or an object literal
* If it is a function then it will get dispatch passed to it as argument then it can dispatch any action - dispatch => dispatch(addColor()) e.g see sort-menu-container
* If is is a object literal then it must be populated with action creators which will be passed to the wrapped component as func props.
* This action creator passed as func properties when called will automatically dispatch it's action.
* It is recommended to use object literal like we do here.
*/
const mapStateToDispatch = {
    removeColor,
    rateColor,
}
const ColorListContainer = connect(mapStateToProps, mapStateToDispatch)(ColorList);

export default ColorListContainer;