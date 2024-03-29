import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
function Slider({ images }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map(img => {
        return <Carousel.Item key={img.id}>
          <img
            className="d-block w-100"
            src={img.imgSource}
            alt="First slide"
          />
        </Carousel.Item>
      })}
    </Carousel>
  );
}


export default Slider;
