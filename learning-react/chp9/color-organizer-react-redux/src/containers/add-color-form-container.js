import React from 'react';
import { connect } from 'react-redux';

import { addColor } from '../store/action-creators';
import AddColorForm from '../components/add-color-form';

/* The onAddColor function will be passed to AddColorForm component as func props */
const mapDispatchToProps = dispatch => ({
   onAddColor: (title, color) => dispatch(addColor(title, color))
});

/* We passed null for the state because the presentational component, AddColorForm does not require a state data */
const AddColorFormContainer = connect(null, mapDispatchToProps)(AddColorForm)

export default AddColorFormContainer;