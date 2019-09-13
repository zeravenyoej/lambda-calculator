import React, {useState} from "react";
import { specials } from "../../../data.js";
import  SpecialButton from "./SpecialButton.js";



//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  const [specialstate, setSpecialState] = useState(specials);

  return (
    <div className='specials-container'>
      {specialstate.map((special, index) => {

        return <SpecialButton className='specials' key={index} special={special} />
      })};
    </div>
  );
};

export default Specials;