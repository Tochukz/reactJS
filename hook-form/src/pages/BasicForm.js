import React from 'react';
import { useForm } from 'react-hook-form';

export default function BasicForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const submited = data => {
    console.log(data);
  }
  //watch the input names 'username'
  console.log(watch("username"));

  return (
    <form onSubmit={handleSubmit(submited)}>
      <h3>Basic Form</h3>
      <div className="form-group">
        <input name="username" 
               className="form-control" 
               placeholder="Username" 
               ref={register} />  
      </div>
      <div className="form-group">
        <input name="email" 
               className={`form-control ${errors.email? 'is-invalid' : ''}`} 
               placeholder="Username"
               ref={
                 register(
                   {required: true}
                 )
               } />  
               { errors.email && <small>Email is required.</small>}
      </div>
      <div className="form-group">
        <select name="sex" 
                className={`form-control ${errors.sex? 'is-invalid': ''}`}                              
                ref={
                  register(
                    {required: true}
                  )
                }>
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        {errors.sex && <small>Please select you gender</small>}
      </div>
      <div className="form-group">
          <input type="number" 
                 name="age" 
                 placeholder="Age"
                 className={`form-control ${errors.age? 'is-invalid' : ''}`}
                 ref={
                   register(
                    { 
                      required: true,
                      min: 1,
                      max: 45,
                    }
                   )
                 }/>
          {errors.age && <small>Age must be 1-45</small>}
      </div>
      <div className="form-group">
        <input type="password" 
               name="password" 
               className={`form-control ${errors.password? 'is-invalid' : ''}`}
               ref={
                register(
                  {
                    required: true,
                    minLength: 6
                  },                 
                )
               } />  
               { errors.password && <small>Password is required and must be more than 6 chars long.</small>}
      </div>
      <div className="form-group">
        <input type="submit" className="btn btn-primary form-control" value="Register" />  
      </div>
    </form>
  )
}