import React, { useState } from "react";

// Components
import MemeImage from "../containers/Meme-Image";
import MemeSources from "../containers/Meme-Sources";
import MemeText from "../containers/Meme-Text";
import MemeTextPos from "../containers/Meme-Text-Pos";

// DefaultImage
import DefaultImage from "../assets/choose-image.webp";

// Style
import "../scss/components/_meme-generator.scss";

const MemeGenerator = () => {
  const [imgUrl, setImgUrl] = useState(DefaultImage);
  const [paragraphPos, setParagraphPos] = useState({ left: "40%", top: "30%" });
  const [paragraphText, setParagraphText] = useState("Default Text");

  return (
    <div className="meme">
      <MemeImage
        imgUrl={imgUrl}
        paragraphPos={paragraphPos}
        paragraphText={paragraphText}
      />
      <div className="meme__info">
        <MemeSources setImgUrl={setImgUrl} />
        <MemeText setParagraphText={setParagraphText} />
        <MemeTextPos
          paragraphPos={paragraphPos}
          setParagraphPos={setParagraphPos}
        />
      </div>
    </div>
  );
};

export default MemeGenerator;
