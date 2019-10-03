import React from 'react';
import { Context } from './context-provider';

const Child = () => {
    return (
        <React.Fragment>
            <h5>Child</h5>
            <Context.Consumer>
                { (context) => <span>{context.digits} <br />
                                 <button onClick={context.OnDigitIncrease} style={{cursor: "pointer"}}>+ Increase</button>
                              </span>
                }
            </Context.Consumer>
        </React.Fragment>
    )
}

export default Child;