import { useState } from "react";
import "./search.css";
import { SearchOutlined } from "@ant-design/icons";
import ImageSearch from "../ImageSearchBox/ImageSearch";
import axios from "axios";
import { OverviewCard } from "../OverviewCard/OverviewCard";

function Search() {
  const [visible, setVisible] = useState(false);

  const [productList, setProductList] = useState([1, 2, 3, 4, 5, 6]);

  const handleUpload = async (e: any) => {
    let formData = new FormData();
    formData.append("image", e.target.files[0]);
    const res = await axios.post(
      "http://localhost:3001/base_api/process_image",
      formData
    );
    console.log({ res });
  };
  const product = {};
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
        <ImageSearch handleUpload={handleUpload} />
      </div>

      {/* <div className="uploded-image">
        <div>Uploaded Image</div>
        <img
          src="https://ui-assets-gc.thrillophilia.com/assets/homepage/homepage-banner-2696fc25d8bb0f563e9ff7ae22882ee67cea624e244dfb0bc74316db0ffdcfba.jpg"
          width="500px"
          height="150px"
        />
      </div>
      <div className="product-list-wrapper">
        <div>Product List</div>

        <div className="product-list">
          {productList.map(() => {
            return (
              <>
                <OverviewCard product={product} />{" "}
              </>
            );
          })}
        </div>
      </div> */}
    </div>
  );
}

export default Search;
