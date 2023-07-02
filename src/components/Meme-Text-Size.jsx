import React from "react";

// Style
import "../scss/components/_meme-text-size.scss";

const MemeTextSize = ({ paragraphSize, setParagraphSize }) => {
  return (
    <div className="meme__texts__size">
      <h2 className="meme__texts__size__header">Text Size</h2>
      <input
        className="meme__texts__size__input"
        type="number"
        name="meme__texts__size__input"
        id="meme__texts__size__input"
        placeholder="Type size..."
        min="10"
        max="100"
        defaultValue={parseInt(paragraphSize.fontSize)}
        onChange={(e) => {
          setParagraphSize({
            fontSize: `${e.target.value}px`,
          });
          console.log(e.target.value);
        }}
      />
    </div>
  );
};

export default MemeTextSize;
