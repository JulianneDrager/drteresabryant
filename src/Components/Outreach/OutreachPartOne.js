import React from "react";
import OutreachStyle from "./OutreachStyle.module.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import pastorA from "../../images/mobile-events/clear-background.png";
import pastorB from "../../images/mobile-events/clear-background.png";
import pastorC from "../../images/mobile-events/clear-background.png";
import { useMediaQuery } from "@mui/material";

const PasterSection = () => {
  const cardWrapper = OutreachStyle.cardWrapper;
  const innerCardWrapper = OutreachStyle.innerCardWrapper;
  const cardBody = OutreachStyle.cardBody;
  // const musicTitle = OutreachStyle.musicTitle;
  const pastorAImg = OutreachStyle.pastorAImg;
  const pastorBImg = OutreachStyle.pastorBImg;
  const pastorCImg = OutreachStyle.pastorCImg;
  const subTextAA = OutreachStyle.subTextAA;
  const subTextAAA = OutreachStyle.subTextAAA;
  const subTextBB = OutreachStyle.subTextBB;
  const glass = OutreachStyle.glass;
  const glass2 = OutreachStyle.glass2;
  const glass3 = OutreachStyle.glass3;
  const btn = OutreachStyle.btn;
  const divider = OutreachStyle.divider;
  const divider2 = OutreachStyle.divider2;
  const desktopRowReverse = OutreachStyle.desktopRowReverse;
  const desktopRow = OutreachStyle.desktopRow;
  const section1DivWrapper = OutreachStyle.section1DivWrapper
  const matchSm = useMediaQuery("(max-width: 765px)");
  const matchLg = useMediaQuery("(max-width: 1020px)");

  const flyerCardSection1 = (
    <>
      <div className={subTextAA} style={{ padding: 0 }}>
        <div className={divider}></div>
        <div className={glass}>
          <div style={{ padding: ".5rem" }}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <div className={divider2}></div>
    </>
  );

  const flyerSection1ButtonAndImg = (
    <>
      <Card.Img src={pastorA} className={pastorAImg}></Card.Img>
      <Button href="/home" className={btn}>
        REGISTER
      </Button>
    </>
  );

  const flyerCardSection2 = (
    <>
      <div className={subTextBB} style={{ paddingTop: 0 }}>
        <div className={divider}></div>
        <div className={glass2}>
          <div style={{ padding: ".5rem" }}>
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Ut enim ad minim veniam, quis nostrud 
          </div>
        </div>
      </div>
      <div className={divider2}></div>
    </>
  );

  const flyerSection2ButtonAndImg = (
    <>
      <Card.Img src={pastorB} className={pastorBImg}></Card.Img>
      <Button href="/" className={btn}>
        REGISTER
      </Button>
    </>
  );

  const flyerCardSection3 = (
    <>
      <div className={subTextAAA} style={{ padding: 0 }}>
        <div className={divider}></div>
        <div className={glass3}>
          <div style={{ padding: ".5rem" }}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <div className={divider2}></div>
    </>
  );

  const flyerSection3ButtonAndImg = (
    <>
      <Card.Img src={pastorC} className={pastorCImg}></Card.Img>
      <Button href="/" className={btn}>
        REGISTER
      </Button>
    </>
  );

  return (
    <>
      <div id="store">

        {/* for mobile viewport  ---------------------------*/}
        {matchSm && (
          <Card className={cardWrapper}>
            <Card className={innerCardWrapper}>
              <Card.Body className={cardBody}>
                {/* section one */}
                {flyerCardSection1}
                {flyerSection1ButtonAndImg}

                {/* section two */}
                {flyerCardSection2}
                {flyerSection2ButtonAndImg}

                {/* section 3 */}
                {flyerCardSection3}
                {flyerSection3ButtonAndImg}
              </Card.Body>
            </Card>
          </Card>
        )}

        {/* for 768px view port --------------------------- */}
        {!matchSm && matchLg &&(
          <Card className={cardWrapper}>
            <Card className={innerCardWrapper}>
              <Card.Body className={cardBody}>
                {/* section one */}
                <Row className={desktopRowReverse}>
                  <Col md={6} style={{padding:"0"}}>{flyerCardSection1}</Col>
                  <Col md={6} style={{padding:"0"}}>{flyerSection1ButtonAndImg}</Col>
                </Row>

                {/* section two */}
                <Row className={desktopRow}>
                  <Col style={{padding:"0"}}>{flyerCardSection2}</Col>
                  <Col style={{padding:"0"}}>{flyerSection2ButtonAndImg}</Col>
                </Row>

                {/* section 3 */}
                <Row  className={desktopRowReverse} >
                  <Col style={{padding:"0"}}>{flyerCardSection3}</Col>
                  <Col style={{padding:"0"}}>{flyerSection3ButtonAndImg}</Col>
                </Row>

              </Card.Body>
            </Card>
          </Card>
        )}

        {/* for 1024px view port -------------------------- */}
        { !matchLg && (
          <Card className={cardWrapper}>
            <Card className={innerCardWrapper}>
              <Card.Body className={cardBody}>
                {/* section one */}
                <Row style={{flexWrap:"nowrap"}}>
                  <div className={section1DivWrapper}>
                  <Col style={{padding:"0"}}>{flyerSection1ButtonAndImg}</Col>
                  <Col style={{padding:"0"}}>{flyerCardSection1}</Col>
                  </div>
                  {/* section two */}
                  <div className={section1DivWrapper}>
                  <Col style={{padding:"0"}}>{flyerSection2ButtonAndImg}</Col>
                  <Col style={{padding:"0"}}>{flyerCardSection2}</Col>
                  </div>
                  {/* section 3 */}
                  <div className={section1DivWrapper}>
                  <Col style={{padding:"0"}}>{flyerSection3ButtonAndImg}</Col>
                  <Col style={{padding:"0"}}>{flyerCardSection3}</Col>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Card>
        )} 
      </div>
    </>
  );
};
export default PasterSection;
