import React from "react";

// Style
import "../scss/components/_meme-text.scss";

const MemeText = ({ setParagraphText }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;

    setParagraphText(value);
  };
  return (
    <div className="meme__texts">
      <h2 className="meme__texts__header">Meme Texts</h2>
      <input
        className="meme__texts__input"
        type="text"
        placeholder="Type a meme text..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default MemeText;
