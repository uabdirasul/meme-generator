import React from "react";

// Style
import "../scss/components/_meme-text-position.scss";

const MemeTextPos = ({ paragraphPos, setParagraphPos }) => {
  return (
    <div className="meme__texts-position">
      <h2 className="meme__texts-position__header">Meme Text Position</h2>
      <input
        className="meme__texts-position__input"
        type="number"
        name="meme__text__x-pos"
        min="0"
        max="100"
        defaultValue={parseInt(paragraphPos.left)}
        onChange={(e) => {
          setParagraphPos({
            ...paragraphPos,
            left: `${e.target.value}%`,
          });
        }}
      />
      <input
        className="meme__texts-position__input"
        type="number"
        name="meme__text__y-pos"
        min="0"
        max="100"
        defaultValue={parseInt(paragraphPos.top)}
        onChange={(e) => {
          setParagraphPos({
            ...paragraphPos,
            top: `${e.target.value}%`,
          });
        }}
      />
    </div>
  );
};

export default MemeTextPos;
