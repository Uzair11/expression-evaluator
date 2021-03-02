import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

const Screen = ({input}) => {
    const [state, setState] = useState({
        operand1: input,
        operator: '+',
        operand2: 0,
        result: 0
    })
    const {operand2, operator, result, operand1} = state;
    const handleChange = (e) => {
        let {result} = state;
        let previousResult = result;
        if (previousResult) {
            setState({...state, [e.target.name]: e.target.value, operand1: previousResult})
        }else{
            setState({...state, [e.target.name]: e.target.value})
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let {result} = state;
        let previousResult = result;
        if (result) {
            result = eval(`${result}
            ${operator}
            ${operand2}`);
            setState({...state, result: result, operand1: previousResult})
        } else {
            result = eval(`${operand1}
            ${operator}
            ${operand2}`)
            setState({...state, result: result})
        }
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
                                        <span class="badge badge-color py-4 mr-1">{operand1}</span>
                                        <span class="badge badge-color py-4 ml-2 mr-2">{operand2}</span>
                                        <span class="badge badge-color py-4 ml-1">{operator}</span>
                                    </div>

                                    <div><h1 className="mt-3 mb-3">=</h1></div>
                                    <div><h1 className="mt-3 mb-3 total">{result}</h1></div>
                                </div>

                            </div>
                            <div className="row justify-content-center mt-5">

                                <div className="col-6 col-sm-6 col-md-6 col-lg-4 text-center px-3">
                                    <div className="form-text">
                                        <select class="select" name="operator" onChange={handleChange}
                                                value={state.operator}>
                                            <option value="+">+</option>
                                            <option value="-">-</option>
                                            <option value="/">/</option>
                                            <option value="*">*</option>

                                        </select>
                                        <label for="youridhere" className="static-value">Operator</label>
                                        <label for="youridhere" className="static-value1"><i
                                            class="fas fa-angle-down"></i></label>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-6 col-md-6 col-lg-4 px-3 px-sm-0 text-center">

                                    <div className="form-text">
                                        <input type="number" id="operand2" name="operand2" value={state.operand2}
                                               placeholder="" onChange={handleChange}/>
                                        <label for="youridhere" className="static-value">Operand</label>
                                    </div>
                                </div>


                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 text-center px-3">


                                    <input type="submit" className="btn btn-success btn-block" onClick={handleSubmit}
                                           value="Add Operation"/>

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
