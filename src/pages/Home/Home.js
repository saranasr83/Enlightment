import React from "react";
import "./Home.css";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import MeditationCity from "../../images/MeditationCity.jpg";
import UCB from "../../images/UCB.jpeg";
import Berkeley_seal from "../../images/Berkeley_seal.png";
import SF_seal from "../../images/SF_seal.png"


const Home = () => (
    <div>
        <Container style={{ color: "white" }}>
            <h1 className="text-center" style={{ fontFamily: "serif" }}> Free Meditations</h1>
            <h2 className="text-center" style={{ fontFamily: "serif" }}>2 Locations <span><i class="fas fa-globe" style={{fontSize:"23px"}}></i></span> All Welcome</h2>
            <br />
            <Row>
                <Col size="md-6">
                    <div className="image">
                        <h3 className="text-center" style={{ color: "rgb(60, 165, 250)", fontFamily: "serif" }}> UC Berkeley</h3>
                        <a href="https://www.meetup.com/Free-Meditation-Class-at-Cal/events/" target="blank">
                            <img className="img-fluid img-home" src={UCB} alt="UC Berkeley campaus" />
                            <div className="overlay">
                                <img className="logo" src={Berkeley_seal} />
                            </div>
                        </a>
                    </div>
                </Col>
                <Col size="md-6">
                    <div className="image">
                        <h3 className="text-center" style={{ color: "rgb(60, 165, 250)", fontFamily: "serif" }}>San Francisco</h3>
                        <a href="https://www.meetup.com/Free-Meditation-Class-for-Professionals-Downtown-SF/events/" target="blank">
                            <img className="img-fluid img-home" src={MeditationCity} alt="woman's meditating in the city" />
                            <div className="overlay">
                                <img className="logo" src={SF_seal} />
                            </div>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Home;

