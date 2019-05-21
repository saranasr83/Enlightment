import React from "react";
import "./Pastevents.css";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Container from "../../components/Container";
import Levitation from "../../images/Levitation.png";
import Himalayas from "../../images/Himalayas.png";
import Door from "../../images/Door.png";
import ClearWater from "../../images/ClearWater.png";
import Sharpensword from "../../images/Sharpensword.png";
import Nature from "../../images/Nature.png";
import Matrix from "../../images/Matrix.png";






const PastEvents = () => (
    <div>
        <Container style={{ color: "white" }}>
            <h1 className="text-center" style={{fontFamily: "palatino"}}>Past Events</h1>
            <br />
                <Row>
                    <Col size="md-3" />
                    <Col size="md-3">
                        <div className="ver-image img">
                            <img className="img-fluid responsive" alt="levitation" src={Levitation} />
                        </div>
                    </Col>
                    <Col size="md-3">
                        <div className="hor-image img">
                            <img className="img-fluid responsive" alt="himalaya" src={Himalayas} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    {/* <Col size="md-2" /> */}
                    <Col size="md-3" />

                    <Col size="md-3">
                        <div className="hor-image img">
                            <img className="img-fluid responsive" alt="door" src={Door} />
                        </div>
                    </Col>
                    <Col size="md-3">
                        <div className="ver-image img">
                            <img className="img-fluid responsive" alt="clear-water" src={ClearWater} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    {/* <Col size="md-4" /> */}
                    <Col size="md-3" />

                    <Col size="md-3">
                        <div className="ver-image img">
                            <img className="img-fluid responsive" alt="sword" src={Sharpensword} />
                        </div>

                    </Col>
                    <Col size="md-3">
                        <div className="hor-image img">
                            <img className="img-fluid responsive" alt="nature" src={Nature} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-5" />

                    <Col size="md-3">
                        <div className="ver-image img">
                            <img className="img-fluid responsive" alt="matrix" src={Matrix} />
                        </div>

                    </Col>
                    </Row>
        </Container>
    </div>
)

export default PastEvents;



