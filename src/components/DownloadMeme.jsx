import React from "react";
import html2canvas from "html2canvas";

// Style
import "../scss/components/_download-meme.scss";

const DownloadMeme = ({ memeImageRef }) => {
  const downloadMeme = () => {
    html2canvas(memeImageRef.current).then((canvas) => {
      // get the image data
      const imageData = canvas.toDataURL("image/jpg");
      // create a link element
      const link = document.createElement("a");
      link.href = imageData;
      link.download = "meme.jpg";
      // append the link to the document body
      document.body.appendChild(link);
      // click the link to download the file
      link.click();
      // remove the link from the document body
      document.body.removeChild(link);
    });
  };
  return (
    <div className="download-meme">
      <button onClick={downloadMeme} className="download-meme__button">
        Download the Meme
      </button>
    </div>
  );
};

export default DownloadMeme;
