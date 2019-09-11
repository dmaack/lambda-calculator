import React from "react";

const NumberButton = props => {
  const {value} = props;
  return (
    <>
      <button className='numbers_button' value={value}>{value}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
export default NumberButton;