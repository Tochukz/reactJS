import React, { useReducer, useState } from 'react';

function carReducer(state, action) {
  switch(action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      const updated = state.filter(car => car.name != action.payload.name);
      return updated;
    default:
      throw new Error(`Unknown action type '${action.type}'`);
      //return state;
  }
}

export default function Car() {
  const [car, setCar] = useState({name: 'Camery', year: 2000});
  const [cars, setCars] = useReducer(carReducer, []);

  const carChange = event => {
    const key = event.target.getAttribute('name');
    const val = event.target.value;
    setCar(current => { 
        const update = {...current}
        update[key] = val;
        return update;
    });
  };

  const addCar = () => {
    if (!car.name || !car.year) {
      return false;
    }
    setCars({type: 'add', payload: car});
    setCar({name: '', year: ''});
  };

  const removeCar = theCar => {
    setCars({type: 'remove', payload: theCar});
  }

  return (
    <div className="row">
      <div className="col-sm-6">
        <h3>Reducer Hook</h3>
        <p>{ car.name }, { car.year }</p>
        <div className="list-group">
        { cars.map((car, index) => 
          <div key={index} className="list-group-item">
            <p className="text-right"><strong onClick={() => removeCar(car)}>X</strong></p>
            <p><strong>Name</strong> { car.name } </p>
            <p><strong>Yaer</strong> { car.year} </p>
          </div>
        )}
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <h3 className="class-header text-center">New Car</h3>
          <div className="card-body">
            <div className="form-group">
              <label>Car Name</label>
              <input className="form-control" value={car.name} onChange={carChange} name="name" autoComplete="off" />
            </div>
            <div className="form-group">
              <label>Car Year</label>
              <input className="form-control" value={car.year} onChange={carChange} name="year" autoComplete="off"/>
            </div>
            <div className="form-group">
              <input type="button" className="btn btn-primary form-control" value="Add Car" onClick={addCar} />
            </div>  
          </div>                     
        </div>
      </div>
    </div>
  )
}