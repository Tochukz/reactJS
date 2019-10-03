import React from 'react';
import Parent from './Parent';

const GrandParent = () => {
    return (
        <React.Fragment>
            <h3>Grand Parent</h3>
            <Parent />
        </React.Fragment>
    )
}

export default GrandParent;