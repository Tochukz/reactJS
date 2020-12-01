import React, { useState, useCallback } from 'react';

import Father from './Father';

export default function GrandFather() {
  const [names, setNames] = useState({});

  const nameChanged = useCallback(newName => {   
    setNames(current => Object.assign({...current}, newName));
  }, []);

  const updateNames = event => {
    const newName = {grandFather: event.target.value};
    setNames(current => Object.assign({...current}, newName));
  }

  console.log('Grandfather Rendered');

  return (
    <div className="row">
      <div className="col-sm-6">
        <h3>Family Tree</h3>
        <p><strong>Grand Father</strong> </p>
        <p><span>{ names.grandFather || '-' }</span></p>
        <p><strong>Father</strong> </p>
        <p><span>{ names.father || '-' }</span></p>
        <p><strong>Son</strong></p>
        <p><span>{ names.son || '-' }</span></p>
      </div>
      <div className="col-sm-6">
        <h3>Enter Names</h3>
        <div className="form-group">
          <label>Grand Father</label>
          <input className="form-control" onChange={updateNames} />
        </div>
        <Father nameChanged={nameChanged} />
      </div>
    </div>
  )
}