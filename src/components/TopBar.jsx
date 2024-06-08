import React from "react";

function TopBar(props) {
  return (
    <section id="topBar">
      <img
        id="profilePic"
        src="https://i.ibb.co/LnLNDPt/sprout.png"
        alt="bot"
        border="0"
      />
      <div id="barText">
        agroBot
        <span id="tag">Beta</span>
      </div>
      <div id="topButtonContainer">
        <i
          id="mode"
          onClick={props.toggleMode}
          className="barIcon fa-regular fa-moon"
        ></i>
        <i
          id="delete"
          onClick={props.deleteAll}
          className="barIcon fa-regular fa-trash-can"
        ></i>
      </div>
    </section>
  );
}

export default TopBar;
