import React from "react";
import "./Home.css"
import Container from "../../components/Container";
import Col from "../../components/Col"
import Row from "../../components/Row"
// import Leaf from "../../images/leaf.jpg"
import Waterring from "../../images/waterring.jpg"
import Stone from "../../images/Stone.jpg"

import UCB from "../../images/UCB.png"
// import Flower from "../../images/Flower.jpg"
import SF from "../../images/SF.png"




const Home = () => (
    <div>
        <Container style={{color:"white"}}>
            <h1 className="text-center"> Free Meditations, 2 Locations</h1>
            <br />
            <Row>
                <Col size="md-6">
                <div className="image">
                    <a href="https://www.meetup.com/Free-Meditation-Class-at-Cal/events/" target="blank">
                    <img className="img-fluid img" src={Waterring} alt="waterring" />
                        <div className="overlay">
                        <img className="logo" src={UCB}/>
                        </div>
                    </a>
                 </div>
                </Col>
                <Col size="md-6">
                <div className="image">
                    <a href="https://www.meetup.com/Free-Meditation-Class-for-Professionals-Downtown-SF/events/" target="blank">
                    <img className="img-fluid img" src={Stone} alt="stone" />
                        <div className="overlay">
                        <img className="logo" src={SF}/>
                        </div>
                    </a>
                </div>    
                </Col>
            </Row>
        </Container>
    </div>
)

export default Home;

