import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Image } from "react-bootstrap";
import Zero from "../../images/political-gallery/1.jpg";
import ZeroAA from "../../images/political-gallery/2.jpg";
import ZeroA from "../../images/political-gallery/3.jpg";
import ZeroB from "../../images/political-gallery/4.jpg";
import ZeroC from "../../images/political-gallery/5.jpg";
import ZeroD from "../../images/political-gallery/6.jpg";
import One from "../../images/political-gallery/7.jpg";
import Two from "../../images/political-gallery/8.jpg";
import Three from "../../images/political-gallery/9.jpg"

const PoliticalGallery = () => {
//   const pStyle = TestimonyStyle.pStyle;
//   const btn = TestimonyStyle.btn;
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showArrows={true}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      animationHandler="fade"
      transitionTime="500"
      interval={2000}
    >
          
      <div>
        <Image src={Zero} />
      </div>
      <div>
        <Image src={ZeroAA} />
      </div>
      <div>
        <Image src={ZeroA} />
      </div>
      <div>
        <Image src={ZeroB} />
      </div>
      <div>
        <Image src={ZeroC} />
      </div>
      <div>
        <Image src={ZeroD} />
      </div>
      <div>
        <Image src={One} />
      </div>
      <div>
        <Image src={Two} />
      </div>
      <div>
        <Image src={Three} />
      </div>
    </Carousel>
  );
};
export default PoliticalGallery;
