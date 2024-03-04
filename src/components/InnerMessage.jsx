import React from "react";

export default function InnerMessage({ handleMouseDownInner }) {
  return (
    <div className="inner-container" onMouseDown={handleMouseDownInner}>
      <img className="inner-img" src="./images/innerCardContent.png" />
      <div className="balloon">🎈</div>
    </div>
  );
}
