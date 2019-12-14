import React from "react";
import "./Home.css";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
// import Btn from "../../components/Btn";
import MeditationCity from "../../images/MeditationCity.png";
import wework from "../../images/wework.png";

import UCB from "../../images/UCB.jpg";
// import Berkeley_seal from "../../images/Berkeley_seal.png";
// import SF_seal from "../../images/SF_seal.png"


const Home = () => (
    <div>
        
        <div className="image">
        <img className="img-fluid" style={{height:"100%",width:"100%", marginBottom:"20px", marginTop:"55px", display:"block"}} src={MeditationCity}/>
        <h1 className="text" style={{ fontFamily: "palatino" }}>Turn down the stress <br />and volume.</h1>
        <p className="text2" style={{ fontFamily: "palatino" }}><b><u>FREE</u></b> weekly meditations in <br />San Franciaco and UC Berkeley</p>
        </div>
        <h1 className="text-center bright" style={{ fontFamily: "palatino" }}><b>A brighter, happier, and more balaced <font color="#1766CE"><u>you</u></font></b></h1>
        
        <Container style={{ fontFamily: "palatino" }}>

            <Row>
                <Col size="md-6">
                    <div className="image-container">
                        <h3 className="text-center location" style={{ marginBottom: "40px", marginTop: "50px", fontFamily: "palatino" }}> UC Berkeley location </h3>
                        <img className="img-fluid img-home" src={UCB} alt="UC Berkeley campaus" />
                        <div className="text-center" style={{ fontSize: "20px" }}>
                            <p style={{ marginTop: "25px",color:"#1766CE" }}><b>New Location and Time TBD</b></p>
                            <p>2545-2581 Bancroft Way</p>
                            <p>Hearst Field Annex B5</p>
                            <p>Berkeley, CA 94704</p>
                            <button style={{ backgroundColor: "grey", padding: "10px", color: "white"}} href="/" target="blank">
                                Returning Soon
                            </button>
                        </div>

                    </div>
                </Col>
                <Col size="md-6">
                    <div className="image-container">
                        <h3 className="text-center location" style={{ marginBottom: "40px", marginTop: "50px", fontFamily: "palatino" }}>San Francisco location </h3>
                        <img className="img-fluid img-home" src={wework} alt="wework work space" />
                        <div className="text-center" style={{ fontSize: "20px" }}>
                            <p style={{ marginTop: "25px"}}><b>Tuesdays @ 6 PM</b></p>
                            <p><u>MindSpace 575 Market St.</u></p>
                            <p><b>Wednesdays @ 5:15 PM</b></p>
                            <p><u>WeWork 535 Mission St.</u></p>
                            <button style={{ backgroundColor: "#2BA500", padding: "10px", color: "white", cursor:"pointer"  }}href="https://www.meetup.com/Free-Meditation-Class-for-Professionals-Downtown-SF/events/calendar/2020-01/" target="blank">
                                Free RSVP    
                            </button>
                        </div>
                        
                    </div>
                </Col>
            </Row>

        </Container>
        <div className="text-center"style={{padding:"100px",backgroundColor:"#1766CE", color:"white", fontSize:"25px",fontFamily: "palatino"}}>
            <h1>All Are Welcome.</h1>
            <hr style={{width:"50%", borderTop: "1px solid white"}}/>
            <p>Beginners and experienced meditation practioners alike.</p>
            <p>Religious and non-religious. People of all walks of lifewho want to learnto touch their own True Self through meditation and minfulness. </p>
        </div>
    </div>
)

export default Home;

