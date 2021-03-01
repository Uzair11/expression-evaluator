import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
const Screen = () => {
    const [state,setState]=useState({
        operator:'',
        operand:'+'
    })
   
    
const handleChange = (e) => {
setState({...state,[e.target.name]:e.target.value})

}
const handleSubmit = (e) => {
    e.preventDefault();
    alert(state.operand +"" +state.operator);
    }
  return (
<>
<div className="container">
 
<div className="row justify-content-center mt-5 pt-5">
 
<div className="col-12 col-sm-12 col-md-8  mt-4">

<form>
<div className="row justify-content-center ">
    <div className="col-12 text-center mb-4">
        
<div>
<span class="badge badge-secondary py-4">Secondary</span>
<span class="badge badge-secondary py-4 ml-2 mr-2">Secondary</span>
<span class="badge badge-secondary py-4">Secondary</span>
</div>

<div><h1 className="mt-3 mb-3">=</h1></div>
<div><h1 className="mt-3 mb-3">7</h1></div>
    </div>
    
</div>
<div className="row justify-content-center mt-5">

<div className="col-6 col-sm-6 col-md-6 col-lg-4 text-center px-3">

<select class="select" name="operator" onChange={handleChange} value={state.operator}>
      <option value="+">+</option>
      <option  value="-">/</option>
      <option value="*">*</option>
   
    </select>



</div>

<div className="col-6 col-sm-6 col-md-6 col-lg-4 px-3 px-sm-0 text-center">



<input type="number" id="operand" name="operand" value={state.operand} placeholder="Enter starting number" onChange={handleChange} />



</div>


<div className="col-12 col-sm-12 col-md-12 col-lg-4 text-center px-3">


<input type="submit"  className="btn btn-success btn-block" onClick={handleSubmit} />

</div>




</div>



</form>


</div>






</div>


</div>





</>
  );
}

export default Screen;
