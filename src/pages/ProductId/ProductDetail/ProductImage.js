import React, { useState, useEffect } from "react";
import ReactGallery from "react-image-gallery";
import { APIIMAGE } from "../../../variables";

const ProductImage = (props) => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    if (props.detail.images && props.detail.images.length > 0) {
      let images = [];
      props.detail.images &&
        props.detail.images.map((item) => {
          images.push({
            original: `${APIIMAGE}/${item}`,
            thumbnail: `${APIIMAGE}/${item}`,
          });
        });
      setImages(images);
    }
  }, [props.detail]);
  return (
    <div>
      <ReactGallery
        thumbnailPosition="left"
        showPlayButton={false}
        showNav={false}
        items={Images}
      />
    </div>
  );
};

export default ProductImage;
