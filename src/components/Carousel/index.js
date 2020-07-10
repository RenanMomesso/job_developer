import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API,APIIMAGE } from "../../variables";
import './carousel.css'

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [sortBy, setSortBy] = useState("createdAt");

  useEffect(() => {
    const variables = {
      order: "asc",
      sortBy: sortBy,
    };

    getProducts(variables);
  }, []);

  const getProducts = (variables) => {
    axios.post(`${API}/getProducts`, variables).then((response) => {
      if (response.data.success) {
        setImages([...images, ...response.data.products]);
      } else {
        alert("Failed to fectch product datas");
      }
    });
  };

  const [currentImageIdx, setCurrentImagIdx] = useState(0);

  const prevSlide = () => {
    // find out whether currentImageIdx eqals 0 and thus user reached beginning of carousel
    const resetToVeryBack = currentImageIdx === 0;

    const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
  };

  const nextSlide = () => {
    // check if we need to start over from the first index
    const resetIndex = currentImageIdx === images.length - 1;

    const index = resetIndex ? 0 : currentImageIdx + 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
  };

  // create a new array with 5 elements from the source images
  const activeImageSourcesFromState = images.slice(
    currentImageIdx,
    currentImageIdx + 5
  );

  // check the length of the new array (it’s less than 5 when index is at the end of the imagge sources array)
  const imageSourcesToDisplay =
    activeImageSourcesFromState.length < 5
      ? // if the imageSourcesToDisplay's length is lower than 5 images than append missing images from the beginning of the original array
        [
          ...activeImageSourcesFromState,
          ...images.slice(0, 5 - activeImageSourcesFromState.length),
        ]
      : activeImageSourcesFromState;

  const handleClick = (productId) => {
    axios.put(API +"/product/click-count", { productId });
  };
  return (
    <>
      <strong style={{ marginTop: 100, paddingLeft: 52, paddingBottom: 7 }}>
        Ultimos lançamentos
      </strong>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 0,
          marginBottom: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            marginLeft: 0,
            overflow: "hidden",
          }}
        >
          <button
          
            className="btn btn-primary test"
            style={{ marginRight: "-200px !important" }}
            onClick={prevSlide}
          >
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          {/* render images */}
          <div style={{ display: "flex", flexDirection: "row" }}>
            {imageSourcesToDisplay.map((image, index) => (
              <div
                key={index}
                onClick={(e) => handleClick(image._id)}
                className="card_cada_carousel"
              >
                <Link to={`/product/${image._id}`}>
                  <img
                    src={`${APIIMAGE}/${image.images[0]}`}
                    alt={image.title}
                    className="image_cada_carousel"
                  />
                </Link>
                <span>{image.title}</span>
                <span>R$:{image.price}</span>
              </div>
            ))}
          </div>
        </div>
        <button
          className="btn btn-primary teste2"
          style={{ marginRight: "-20px !important" }}
          onClick={nextSlide}
        >
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </>
  );
};

export default Carousel;
