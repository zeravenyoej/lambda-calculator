import React, { useState } from "react";
import { operators } from "../../../data.js";
import  OperatorButton from "./OperatorButton.js";



//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state

  const [operatorstate, setOperatorState] = useState(operators);

  return (
    <div className='operators-container'>
      {operatorstate.map((operator, index) => {

        return <OperatorButton className='operators' key={index} operator={operator} />
      })}; 
    </div>
  );
};

export default Operators;
