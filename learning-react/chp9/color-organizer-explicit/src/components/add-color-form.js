import React from 'react';
import PropTypes from 'prop-types';

import { addColor } from '../store/action-creators';

const AddColorForm = ({ store } ) => {
    let _title, _color;
    const submit = e => {       
       e.preventDefault();
       store.dispatch(addColor(_title.value, _color.value));
       _title.value = '';
       _color.value = '#000000';
       _title.focus();
    }
    return (
        <form onSubmit={submit} className="color-form">
            <h3>Add New Color</h3>
            <input type="text" ref={input => _title = input} placeholder="Add new color" required />
            <input type="color" ref={input => _color = input} required />
            <button>Add Color</button>
        </form>
    )
}
AddColorForm.propTypes = {
    store: PropTypes.object
}

export default AddColorForm;