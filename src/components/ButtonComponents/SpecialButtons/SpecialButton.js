import React from "react";

const SpecialButton = (props) => {
  console.log(props);

  return (
    <>
      <button>
        {props.special}
      </button>
    </>
  );
};

export default SpecialButton;