import React from "react";
import AboutStyle from "./AboutStyle.module.css";
import LearnMoreButton from "./LearnMoreButton";
import profileImg from "../../images/mobile-about/mobile-family-fued.jpg";
import { useMediaQuery } from "@mui/material";
import { Card } from "react-bootstrap";

const About = () => {
  const cardWrapper = AboutStyle.cardWrapper;
  const innerCardWrapper = AboutStyle.innerCardWrapper;
  const cardBody = AboutStyle.cardBody;
  const musicTitle = AboutStyle.musicTitle;
  const aboutParagraph = AboutStyle.aboutParagraph;
  const title = AboutStyle.title;
  const mainWrapper = AboutStyle.mainWrapper;
  const titleImgWrapper = AboutStyle.titleImgWrapper;
  const textAndBtnWrapper = AboutStyle.textAndBtnWrapper;
  const hrStyle = AboutStyle.hrStyle;
  const spanStyle = AboutStyle.spanStyle;
  const divider = AboutStyle.divider;
  const matchSm = useMediaQuery("(max-width: 765px)");

  const aboutContent = (
    <>
      <p className={title}>Welcome</p>
      <Card.Text className={aboutParagraph}>
        <span className={spanStyle}>
          My Name is Dr. Teresa Bryant, my passion is your passion. To be heard,
          to be the change.
        </span>
        <hr className={hrStyle}/>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </Card.Text>
    </>
  );

  const imageContent = (
    <div className={titleImgWrapper}>
      <Card.Img src={profileImg} className={musicTitle} />
    </div>
  );

  return (
    <>
      <div id="about">
        <div className={divider}></div>
        <Card className={cardWrapper}>
          <Card className={innerCardWrapper}>
            <Card.Body className={cardBody}>

              {/* for mobile view port -----------*/}
              {matchSm && (
                <div>
                  <div className={mainWrapper}>
                    {imageContent}
                    <br />
                    {aboutContent}
                    <div className={textAndBtnWrapper}>
                      <LearnMoreButton />
                    </div>
                  </div>
                </div>
              )}

              {/* for desktop view port ---------*/}
              {!matchSm && (
                <div>
                  <div className={mainWrapper}>
                    {imageContent}
                    <div className={textAndBtnWrapper}>
                      {aboutContent}
                      <LearnMoreButton />
                    </div>
                  </div>
                </div>
              )}
            </Card.Body>
          </Card>
        </Card>
      </div>
    </>
  );
};
export default About;
