import { useState } from "react";
import "./searchResult.css";
import { SearchOutlined } from "@ant-design/icons";
import ImageSearch from "../ImageSearchBox/ImageSearch";
import axios from "axios";
import { OverviewCard } from "../OverviewCard/OverviewCard";
import { useLocation } from "react-router-dom";
import { productsList } from "../SearchBox/data";

function SearchResult(props: any) {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  console.log({ location });
  console.log(location.state, "2345678", { props });

  const [productList, setProductList] = useState(location.state);

  const handleUpload = (e: any) => {
    let formData = new FormData();
    formData.append("image", e.target.files[0]);
    axios
      .post("http://localhost:3000/base_api/process_image", formData)
      .then((res) => {
        console.log({ res });
        setProductList(res.data);
        // navigate("/search", { state: productsList });
      })
      .catch((e) => {
        console.log({ e });
      });
  };
  return (
    <div className="search-result-wrapper">
      <div className="left-section">
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
        <div className="uploded-image">
          <div>Uploaded Image</div>
          <img
            src={productList.original_image}
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
  );
}

export default SearchResult;
