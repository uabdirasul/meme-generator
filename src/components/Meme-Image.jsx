import React from "react";

// Style
import "../scss/components/_meme-image.scss";

const MemeImage = ({
  imgUrl,
  paragraphPos,
  paragraphText,
  paragraphColor,
  paragraphSize,
}) => {
  const combinedStyles = {
    ...paragraphPos,
    ...paragraphColor,
    ...paragraphSize,
  };
  return (
    <div className="meme__image-wrapper">
      <img className="meme__image" src={imgUrl} alt="Meme Image" />
      <p className="meme__default__text" style={combinedStyles}>
        {paragraphText}
      </p>
    </div>
  );
};

export default MemeImage;
