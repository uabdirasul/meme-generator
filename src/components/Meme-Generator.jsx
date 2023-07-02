import React, { useState } from "react";

// Components
import MemeImage from "../components/Meme-Image";
import MemeSources from "../components/Meme-Sources";
import MemeText from "../components/Meme-Text";
import MemeTextPos from "../components/Meme-Text-Pos";
import MemeTextColor from "./Meme-Text-Color";

// DefaultImage
import DefaultImage from "../assets/choose-image.webp";

// Style
import "../scss/components/_meme-generator.scss";

const MemeGenerator = () => {
  const [imgUrl, setImgUrl] = useState(DefaultImage);
  const [paragraphPos, setParagraphPos] = useState({ left: "40%", top: "30%" });
  const [paragraphText, setParagraphText] = useState("Default Text");
  const [paragraphColor, setParagraphColor] = useState({
    color: "#eab2a0",
  });

  return (
    <div className="meme">
      <MemeImage
        imgUrl={imgUrl}
        paragraphPos={paragraphPos}
        paragraphText={paragraphText}
        paragraphColor={paragraphColor}
      />
      <div className="meme__info">
        <MemeSources setImgUrl={setImgUrl} />
        <MemeText setParagraphText={setParagraphText} />
        <MemeTextPos
          paragraphPos={paragraphPos}
          setParagraphPos={setParagraphPos}
        />
        <MemeTextColor
          paragraphColor={paragraphColor}
          setParagraphColor={setParagraphColor}
        />
      </div>
    </div>
  );
};

export default MemeGenerator;
