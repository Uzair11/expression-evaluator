import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Screen1 from './screen1';
import Screen from './screen2';
const App = () => {
const [showResults,setShowResults]=useState(false);

  return (
<>
<div className="container">
  {showResults ? 
 <Screen1/>
 :
<Screen/>
 }
</div>

 



</>
  );
}

export default App;
