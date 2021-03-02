import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import Screen1 from './components/screen1';
import Screen2 from './components/screen2';

const App = () => {


    const [state, setState] = useState({
        operand1: 0
    });

    console.log(state);

    function handleChange(name,value){
        setState({...state, [name]: value})
    }
    const {operand1} = state;
    return (
        <>
            <div className="container">
                {(!operand1) ?
                    <Screen1 handleChange={handleChange}/>
                    :
                    <Screen2 operand1={operand1}/>
                }
            </div>
        </>
    );
}

export default App;
