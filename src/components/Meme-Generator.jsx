import React, { useState, createRef } from "react";

// Components
import MemeImage from "../components/Meme-Image";
import MemeSources from "../components/Meme-Sources";
import MemeText from "../components/Meme-Text";
import MemeTextPos from "../components/Meme-Text-Pos";
import MemeTextColor from "./Meme-Text-Color";
import MemeTextSize from "./Meme-Text-Size";
import DownloadMeme from "./DownloadMeme";

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
  const [paragraphSize, setParagraphSize] = useState({
    fontSize: "16px",
  });

  const memeImageRef = createRef(null);

  return (
    <div className="meme">
      <MemeImage
        imgUrl={imgUrl}
        paragraphPos={paragraphPos}
        paragraphText={paragraphText}
        paragraphColor={paragraphColor}
        paragraphSize={paragraphSize}
        memeImageRef={memeImageRef}
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
        <MemeTextSize
          paragraphSize={paragraphSize}
          setParagraphSize={setParagraphSize}
        />
        <DownloadMeme memeImageRef={memeImageRef} />
      </div>
    </div>
  );
};

export default MemeGenerator;
