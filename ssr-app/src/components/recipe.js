import React from 'react';
import IngredentList from './ingredientList';
import Instructions from './instructions';

const sectionStyle = {
  border: 'solid white 1px',
  padding: '1em',
  margin: '1em',
  width: '50%'
}
const Recipe = ({name, ingredients, steps}) =>
    <section id={name.toLowerCase().replace(/ /g, '-')} style={sectionStyle}>
        <h2>{name}</h2>
        <h3>Ingredients:</h3>
        <IngredentList  list={ingredients} />
        <Instructions title="Cooking Instructions" steps={steps} />
    </section>


export default Recipe;
