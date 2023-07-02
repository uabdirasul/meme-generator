import React from "react";

// Style
import "../scss/components/_meme-text-color.scss";

const MemeTextColor = ({ paragraphColor, setParagraphColor }) => {
  return (
    <div className="meme__colors">
      <h2 className="meme__colors__header">Text Color</h2>
      <label htmlFor="meme__text__color">Color: </label>
      <input
        type="color"
        name="meme__text__color"
        id="meme__text__color"
        defaultValue={paragraphColor.color}
        onChange={(e) => {
          setParagraphColor({
            color: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default MemeTextColor;
