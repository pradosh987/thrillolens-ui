import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import ImageSearch from "../ImageSearchBox/ImageSearch";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { productsList } from "./data";
import "./search.css";
import { Spin } from "antd";

function Search() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleUpload = (e: any) => {
    setLoading(true);
    let formData = new FormData();
    formData.append("image", e.target.files[0]);
    axios
      .post("http://localhost:3001/base_api/process_image", formData)
      .then((res) => {
        console.log({ res });
        setLoading(false);
        navigate("/search", { state: productsList });
      })
      .catch((e) => {
        setLoading(false);
        console.log({ e });
      });
  };
  return (
    <>
      {loading && (
        <div className="spinner">
          <Spin />
        </div>
      )}
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
          <ImageSearch handleUpload={handleUpload} />
        </div>
      </div>
    </>
  );
}

export default Search;
