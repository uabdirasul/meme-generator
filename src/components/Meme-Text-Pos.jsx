import React from "react";

// Style
import "../scss/components/_meme-text-position.scss";

const MemeTextPos = ({ paragraphPos, setParagraphPos }) => {
  return (
    <div className="meme__texts__position">
      <h2 className="meme__texts__position__header">Meme Text Position</h2>
      <label className="meme__text__label" htmlFor="meme__text__x-pos">
        x:{" "}
      </label>
      <input
        className="meme__texts__position__input"
        type="number"
        name="meme__text__x-pos"
        id="meme__text__x-pos"
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
      <label className="meme__text__label" htmlFor="meme__text__x-pos">
        y:{" "}
      </label>
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
