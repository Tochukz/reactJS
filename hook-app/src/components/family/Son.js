import React from 'react';

export default function Son({ newNamed }) {
  const nameUpdate = e => {
    newNamed({son: e.target.value});
  }

  console.log('Son Rendered');
  return (
    <div className="form-group">
      <label>Son</label>
      <input className="form-control" onChange={nameUpdate} />
    </div>
  )
}