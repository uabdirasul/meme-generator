import React from "react";

// Style
import "../scss/components/_meme-image.scss";

const MemeImage = ({
  imgUrl,
  paragraphPos,
  paragraphText,
  paragraphColor,
  paragraphSize,
  memeImageRef,
}) => {
  const combinedStyles = {
    ...paragraphPos,
    ...paragraphColor,
    ...paragraphSize,
  };
  return (
    <div className="meme__image-wrapper" ref={memeImageRef}>
      <img
        className="meme__image"
        src={imgUrl}
        alt="Meme Image"
        width="496"
        height="496"
      />
      <p className="meme__default__text" style={combinedStyles}>
        {paragraphText}
      </p>
    </div>
  );
};

export default MemeImage;
