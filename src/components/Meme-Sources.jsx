import React from "react";

// Style
import "../scss/components/_meme-sources.scss";

const MemeSources = ({ setImgUrl }) => {
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImgUrl(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleImgLinkChange = async (event) => {
    const response = await fetch(event.target.value);
    if (
      response.status === 200 &&
      !response.url.startsWith("http://localhost")
    ) {
      setImgUrl(event.target.value);
    } else {
      console.log("error");
    }
  };
  return (
    <div className="meme__sources">
      <h2 className="meme__sources__header">
        Source Image{" "}
        <svg
          fill="#eab2a0"
          width="18"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zm192 0v128h128L256 0zM64 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0zm152 32c5.3 0 10.2 2.6 13.2 6.9l88 128c3.4 4.9 3.7 11.3 1 16.5S310 448 304 448H80c-5.8 0-11.1-3.1-13.9-8.1s-2.8-11.2.2-16.1l48-80c2.9-4.8 8.1-7.8 13.7-7.8s10.8 2.9 13.7 7.8l12.8 21.4 48.3-70.2c3-4.3 7.9-6.9 13.2-6.9z" />
        </svg>
      </h2>
      <div className="meme__sources__types">
        <input
          className="meme__sources__image-link"
          type="text"
          id="img-source-link"
          placeholder="Link to image"
          onChange={handleImgLinkChange}
        />
        <label htmlFor="img-source-file" title="Upload an Image">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="40"
            height="40"
            className="img-source-upload-icon"
          >
            <path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352h128c0 35.3 28.7 64 64 64s64-28.7 64-64h128c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-32c0-35.3 28.7-64 64-64zm368 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
          </svg>
        </label>
        <input
          className="meme__sources__image-file"
          type="file"
          id="img-source-file"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default MemeSources;
