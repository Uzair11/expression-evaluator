import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

const Screen1 = ({handleChange}) => {
    const [initialValue, setInitialValue] = useState('')
    const handleInputChange = (e) => {
        setInitialValue(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleChange('operand1',initialValue);
    }
    return (
        <>
            <div className="container">

                <div className="row justify-content-center mt-5 pt-5">
                    <div className="col-12 col-sm-12 col-md-8 text-center mb-5">
                        <h1 className="mb-0" style={{color: "#00FA9A"}}>Expession</h1>
                        <h2 style={{color: "#00FA9A"}}>Evaluator</h2>
                    </div>
                    <div className="col-12 col-sm-12 col-md-8  mt-4">
                        <form>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div>
                                        <input type="number" value={initialValue} id="initialValue"
                                               placeholder="Enter starting number" onChange={handleInputChange}/>
                                    </div>

                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div>
                                        <input type="submit" className="btn btn-success btn-block"
                                               onClick={handleSubmit}/>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Screen1;
