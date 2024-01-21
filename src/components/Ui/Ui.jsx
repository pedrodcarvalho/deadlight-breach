import React from "react";

import "./Ui.css";

const Ui = ({ width, height }) => {
  const createDialogue = () => {
    const dialogueText = <p>Hello, world!</p>;

    return (
      <div className="dialogue bottom">
        {dialogueText}
      </div>
    );
  };

  const dialogueElement = createDialogue();

  return (
    <div className="ui">
      {dialogueElement}
    </div>
  );
};

export default Ui;
