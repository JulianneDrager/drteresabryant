import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Image } from "react-bootstrap";
import One from "../../images/support-gallery/1.jpg"
import Two from "../../images/support-gallery/2.jpg"
import Three from "../../images/support-gallery/3.jpg"
import Four from "../../images/support-gallery/4.jpg"
import Five from "../../images/support-gallery/5.jpg"
import Six from "../../images/support-gallery/6.jpg"
import Seven from "../../images/support-gallery/7.jpg"
import Eight from "../../images/support-gallery/8.jpg"

const SupportGallery = () => {
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
        <Image src={One} />
      </div>
      <div>
        <Image src={Two} />
      </div>
      <div>
        <Image src={Three} />
      </div>
      <div>
        <Image src={Four} />
      </div>
      <div>
        <Image src={Five} />
      </div>
      <div>
        <Image src={Six} />
      </div>
      <div>
        <Image src={Seven} />
      </div>
      <div>
        <Image src={Eight} />
      </div>
    </Carousel>
  );
};
export default SupportGallery;
