import PropTypes from 'prop-types';
import { sortColors } from '../store/action-creators';
import React from 'react';

const options = {
    date: "SORTED_BY_DATE",
    title: "SORTED_BY_TITLE",
    rating: "SORTED_BY_RATING"
}

/* The context object is passed to stateless functional components as the second argument, after props */
const SortMenu = (props, { store }) => {
    return (
        <nav>
            <h3>Sort Color</h3>
            {
                Object.keys(options).map((item, i) => 
                <a key={i} href="#" 
                   className={(store.getState().sort === options[item]) ? "selected" : null}
                   onClick={e => { 
                        e.preventDefault();
                        store.dispatch(sortColors(options[item]));
                      }
                    }
                    > { item.toUpperCase() } {' '}
                </a>)
            }
        </nav>
    )
};

SortMenu.propTypes = {
    store: PropTypes.object
}

SortMenu.contextTypes = {
    store: PropTypes.object
}
export default SortMenu;