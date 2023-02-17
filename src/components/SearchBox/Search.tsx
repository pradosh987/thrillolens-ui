import { useState } from "react";
import "./search.css";
import { SearchOutlined } from "@ant-design/icons";
import ImageSearch from "../ImageSearchBox/ImageSearch";

function Search() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <div className="search-bar-box">
        <div className="search-icon">
          <SearchOutlined />
        </div>
        <input className="search-bar" type={"text"} placeholder="Search..." />
        <img
          id="sbi_b"
          className="lens-icon"
          role="none"
          width="24"
          height="24"
          src="https://r.bing.com/rp/f21jlSMmEDN43OaavcdaB-7Phq0.svg"
          data-bm="6"
          onClick={() => setVisible(!visible)}
        ></img>
      </div>
      <div className={`image-search-box ${visible && "visible"}`}>
        <ImageSearch />
      </div>
    </div>
  );
}

export default Search;
