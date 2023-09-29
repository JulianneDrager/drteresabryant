import React from "react";
import HeaderStyle from "./Header.module.css";
import { Col, Row, Image } from "react-bootstrap";
import HeaderPic from "../../images/mobile-header/mobile-header-image.jpg";
import HeaderDesktopPic from "../../images/desktop-header/desktop-header-image.jpg"
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const HeaderImage = HeaderStyle.HeaderImage;
  const matchSm = useMediaQuery("(max-width: 765px)");

  return (
    <>
    {/* mobile view port */}
      { matchSm && (
        <Row id="header">
          <Col>
            <Image src={HeaderPic} className={HeaderImage} />
          </Col>
        </Row>
      )}

    {/* desktop view port */}
      {!matchSm && (
        <Row id="header">
          <Col>
            <Image src={HeaderDesktopPic} className={HeaderImage} />
          </Col>
        </Row>
      )}
    </>
  );
};
export default Header;
