import "./imageSearch.css";

const ImageSearch = ({ handleUpload }: any) => {
  return (
    <div className="image-search-wrapper">
      <label htmlFor="file-input" className="upload-image-box">
        Upload a Image or Video
      </label>
      <input
        id="file-input"
        type="file"
        className="uploder-hide"
        onChange={(e: any) => handleUpload(e)}
      />
      <div className="partition">
        <div className="left-border"></div>
        <div className="or-text">or</div>
        <div className="right-border"></div>
      </div>
      <div className="image-link-box">
        <input
          className="image-link-input "
          placeholder="enter your image link here"
          type={"text"}
        />
        <div className="search-button">Search</div>
      </div>
    </div>
  );
};

export default ImageSearch;
