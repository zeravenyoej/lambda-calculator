import React, {useState} from "react";
import { numbers } from "../../../data.js";
import  NumberButton from "./NumberButton.js";



//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberstate, setNumberState] = useState(numbers);
  console.log(numberstate);
  
  return (
    <div className='numbers-container'>
        {numberstate.map((num, index) => {

          return <NumberButton className='numbers' key={index} number={num} />
        })};
    </div>
  );
};

export default Numbers;