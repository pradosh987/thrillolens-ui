// import { AiFillStar } from "react-icons/ai";
import "./overviewCard.css";
type Props = {
  product: any;
};

function OverviewCard({ product }: Props) {
  return (
    // <a href={`/products/${product.slug}`} target="_blank">
    <div className="sectiom-overview-product-card">
      <div className="image-container">
        {
          <img
            placeholder="blur"
            // src={product?.featured_media?.media_urls.thumbnail || ''}
            src="https://w0.peakpx.com/wallpaper/187/664/HD-wallpaper-mando-baby-yoda-star-wars-the-mandalorian.jpg"
            alt={product?.featured_media?.caption || product?.name}
            title={product?.featured_media?.caption || product?.name}
            width="100%"
            height="100%"
          />
        }
      </div>
      <div>
        <p className="product-name has-dynamic-color">{product.name}</p>
        {/* <div className="rating-box">
          <AiFillStar className="star" />
          <p className="rating">{product?.rating?.toPrecision(2)}</p>
          <p className="reviews">({product?.review_count} Reviews)</p>
        </div> */}
        <p className="orignal-price">
          {/* {`${CurrencyConversionObject?.currency} ${formattedPrice(
              convertedOriginalPrice
            )}`} */}
          {"INR"} {product.strike_through_price}
        </p>
        <p className="current-price">
          {/* {`${CurrencyConversionObject?.currency} ${formattedPrice(
              convertedPrice
            )}`} */}
          {"INR"} {product.starting_price}
        </p>
      </div>
    </div>
    // </a>
  );
}

export { OverviewCard };
