import React, { useState, useEffect, useCallback} from 'react';

import Son from './Son';

export default function Father({ nameChanged }) {
  const [name, setName] = useState({});
  
  useEffect(() => {
    nameChanged(name);
  }, [name]);

  const newNamed = useCallback(newName => {
    nameChanged(newName);
  });
  
  console.log('Father Rendered');

  return (
    <div>
      <div className="form-group">
       <label>Father</label>
       <input className="form-control" onChange={e => setName({father: e.target.value})} />
      </div>
      <Son newNamed={newNamed} />
    </div>
  )
}