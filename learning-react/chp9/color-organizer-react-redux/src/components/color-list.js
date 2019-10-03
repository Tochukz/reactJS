import React from 'react';
import PropTypes from 'prop-types';

import Color from './color';
import { rateColor, removeColor } from '../store/action-creators';
import { sortFunction } from '../lib/array-helpers';

/* The context object is passed to stateless functional components as the second argument, after props */
const ColorList = ({colors, sort, removeColor = f => f, rateColor = f => f}) => {
  //const {colors, sort} = store.getState();
  const sortedColors = [...colors].sort(sortFunction(sort));
    return (
      <div className="color-list">
        {
          (colors.length === 0)? <p>No Colors Listed. (Add a Color)</p> : sortedColors.map((color, i) =>           
            <Color key={color.id} 
                   {...color} 
                   onRate={(rating) => rateColor(color.id, rating)} 
                   onRemove={() => removeColor(color.id) } />
          )
        }
      </div>
    )
}

ColorList.protoType = {
    store: PropTypes.object
}

export default ColorList;
