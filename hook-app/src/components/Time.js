import React, { useState, useEffect} from 'react';

export default function Time() {
  const [time, setTime] = useState(new Date());
  const [humanTime, setHumanTIme] = useState('');

  /* This is same as componentDidMount, componentDidUpdate and componentWillUnmount() life cycle methods combined. 
    It will be called after every render - after the first render and after every update */
  useEffect(() => {
    setHumanTIme(time.toLocaleTimeString());

    /* This OPTIONAL returned function is synanymous to componentWillUnmmount() lift cycle method.  
    It will be called when the component unmounts and effects from previous render will be cleaned up.*/
    return () => {
      setHumanTIme('Component Unmounted');
    }
  });

  const checkTime = () => {
    setTime(new Date());
  }

  return (
    <div className="row">
      <div className="col-sm-6">
        <h3>Effect Hook</h3>
        <div className="form-group">
          <input className="form-control" readOnly defaultValue={humanTime} />
        </div>
        <div className="form-group">
          <input type="button" className="btn btn-primary form-control"  value="Check Time" onClick={checkTime} />
        </div>
      </div>
      <div className="col-sm-6">
        
      </div>
    </div>
  )
}