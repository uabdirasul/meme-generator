import React, { useState } from "react";

// Components
import MemeImage from "../containers/Meme-Image";
import MemeSources from "../containers/Meme-Sources";
import MemeText from "../containers/Meme-Text";

// DefaultImage
import DefaultImage from "../assets/choose-image.webp";

// Style
import "../scss/components/_meme-generator.scss";

const MemeGenerator = () => {
  const [imgUrl, setImgUrl] = useState(DefaultImage);
  const [paragraphPos, setParagraphPos] = useState({ left: "40%", top: "30%" });
  const [paragraphText, setParagraphText] = useState("Default Text");

  return (
    <div className="meme container">
      <MemeImage
        imgUrl={imgUrl}
        paragraphPos={paragraphPos}
        paragraphText={paragraphText}
      />
      <div className="meme__info">
        <MemeSources setImgUrl={setImgUrl} />
        <MemeText setParagraphText={setParagraphText} />
      </div>
    </div>
  );
};

export default MemeGenerator;
