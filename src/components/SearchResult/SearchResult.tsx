import { useState } from "react";
import "./searchResult.css";
import { SearchOutlined } from "@ant-design/icons";
import ImageSearch from "../ImageSearchBox/ImageSearch";
import axios from "axios";
import { OverviewCard } from "../OverviewCard/OverviewCard";
import { useLocation } from "react-router-dom";
import { productsList } from "../SearchBox/data";
import { Spin } from "antd";

function SearchResult(props: any) {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  console.log({ location });
  console.log(location.state, "2345678", { props });

  const [productList, setProductList] = useState(location.state);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e: any) => {
    setLoading(true);

    let formData = new FormData();
    formData.append("image", e.target.files[0]);
    axios
      .post("http://localhost:3001/base_api/process_image", formData)
      .then((res) => {
        setLoading(false);

        console.log({ res });
        setProductList(productsList);
        // navigate("/search", { state: productsList });
      })
      .catch((e) => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);

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
      <div className="search-result-wrapper">
        <div className="left-section">
          <div className="search-bar-box">
            <div className="search-icon">
              <SearchOutlined />
            </div>
            <input
              className="search-bar"
              type={"text"}
              placeholder="Search..."
            />
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
          <div className="uploded-image">
            <div>Uploaded Image</div>
            <img
              src="https://ui-assets-gc.thrillophilia.com/assets/homepage/homepage-banner-2696fc25d8bb0f563e9ff7ae22882ee67cea624e244dfb0bc74316db0ffdcfba.jpg"
              width="100%"
              height="350px"
              style={{ borderRadius: "10px", marginTop: "20px" }}
            />
          </div>
        </div>

        <div className="product-list-wrapper">
          <div className="product-list-label">Product List</div>

          <div className="product-list">
            {(productList?.ids || []).map((item: any, index: any) => {
              if (!item) {
                return "";
              }
              return (
                <>
                  <OverviewCard product={item} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
