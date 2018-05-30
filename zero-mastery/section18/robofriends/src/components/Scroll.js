import React from 'react';


const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        borderTop: "1px solid #96ccff",
        height: "578px"
      }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;