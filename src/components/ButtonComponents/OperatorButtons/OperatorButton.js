import React from "react";

const OperatorButton = (props) => {
  console.log(props.operator);

  return (
    <>
      <button>
        {props.operator.char}
      </button>
    </>
  );
};

export default OperatorButton;