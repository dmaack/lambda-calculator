import React from "react";

const OperatorButton = (props) => {
  const {value, char} = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button className='operator_button' value={value}>{char}</button>
    </>
  );
};
export default OperatorButton;