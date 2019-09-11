import React from "react";

const SpecialButton = (props) => {
  const {value} = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='special_button' value={value}>{value}</button>
    
    </>
  );
};
export default SpecialButton;