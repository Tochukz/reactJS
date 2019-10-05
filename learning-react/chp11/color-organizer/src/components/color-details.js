import React from 'react';

const detailsStyle = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'
}
const ColorDetails = ({title, color, history}) => 
<div className="color-details" 
    style={{backgroundColor: color, ...detailsStyle}} 
    onClick={() => history.goBack()}
    title="click to go back">
    <h1>{title}</h1>
    <h1>{color}</h1>
</div>

export default ColorDetails;