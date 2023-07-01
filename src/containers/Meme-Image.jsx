import React from "react";

// Style
import "../scss/components/_meme-image.scss";

const MemeImage = ({ imgUrl, paragraphPos, paragraphText }) => {
  return (
    <div className="meme__image-wrapper">
      <img className="meme__image" src={imgUrl} alt="Meme Image" />
      <p className="meme__default__text" style={paragraphPos}>
        {paragraphText}
      </p>
    </div>
  );
};

export default MemeImage;
