import React from "react";
import "./Home.css";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
// import Btn from "../../components/Btn";
import MeditationCity from "../../images/MeditationCity.jpg";
import sf from "../../images/sf_location.png";
import UCB from "../../images/UCB.jpg";


class Home extends React.Component {
    trackFbClick() {
        var fbq = fbq || (() => { });
        fbq('trackCustom', 'sfClick')
        console.log("yey")
    }
    render() {
        return (
            <div>

                <div className="image">
                    <img className="img-fluid" style={{ height: "100%", width: "100%", marginBottom: "50px", marginTop: "55px", display: "block" }} src={MeditationCity} />
                    <h1 className="text" style={{ fontFamily: "sans-serif" }}><b>Turn down the stress <br />and volume.</b></h1>
                    <p className="text2" style={{ fontFamily: "sans-serif" }}><b><u>FREE</u></b> weekly meditations in <br />San Francisco and UC Berkeley</p>
                </div>
                <h1 className="text-center bright" style={{ fontFamily: "sans-serif" }}><b>A brighter, happier, more balanced <font color="#1766CE"><u>you</u></font></b></h1>

                <Container style={{ fontFamily: "sans-serif" }}>

                    <Row>
                        <Col size="md-6">
                            <div className="image-location">
                                <h3 className="text-center location" style={{ marginBottom: "10px", marginTop: "50px", fontFamily: "sans-serif" }}> UC Berkeley </h3>
                                <img className="img-fluid img-home" src={UCB} alt="UC Berkeley campaus" />
                                <div className="text-center class-time-loc">
                                    {/* <p style={{ marginTop: "25px", color: "#1766CE" }}><b>TBD</b></p> */}
                                    <br />
                                    {/* <p>In person: <b>Tuesdays @ 6:30 PM, </b><u>124 Wheeler Hall</u></p> */}
                                    <p>In person is temporarily unavailable. </p>
                                    <p> For webinar details, go to the event page <a href="https://www.meetup.com/Free-Meditation-Class-at-Cal/events/" target="blank" style={{color:"#1766CE"}}>here</a></p>
                                    <br />
                                    <a href="https://www.meetup.com/Free-Meditation-Class-at-Cal/events/" target="blank">
                                    <button className="brk-btn" style={{ backgroundColor: "#2BA500", padding: "10px", color: "white", cursor: "pointer" }} href="/" target="blank">
                                        Free RSVP
                                    </button>
                                    </a>
                                </div>

                            </div>
                        </Col>

                        <Col size="md-6">
                            <div className="image-location">
                                <h3 className="text-center location" style={{ marginTop: "50px", fontFamily: "sans-serif" }}>San Francisco</h3>
                                <img className="img-fluid img-home" src={sf} alt="SF city" />
                                <div className="text-center class-time-loc">
                                    {/* <p style={{ marginTop: "25px", color: "#1766CE" }}><b>2 locations</b></p> */}
                                    {/* <p><b>Tuesdays @ 6 PM, </b><u>MindSpace 575 Market St.</u></p> */}
                                    <br />
                                    <p>In person is temporarily unavailable.</p>
                                    <p> For webinar details, go to the event page <a href="https://www.meetup.com/Free-Meditation-Class-for-Professionals-Downtown-SF/events/" target="blank" style={{color:"#1766CE"}}>here</a></p>
                                    <br />
                                    <a href="https://www.meetup.com/Free-Meditation-Class-for-Professionals-Downtown-SF/events/" target="blank">
                                        <button className="sf-btn" style={{ backgroundColor: "#2BA500", padding: "10px", color: "white", cursor: "pointer" }} onClick={() => { this.trackFbClick() }}>
                                            Free RSVP
                                        </button>
                                    </a>
                                </div>

                            </div>
                        </Col>

                    </Row>

                </Container>
                <div className="text-center" style={{ padding: "100px", backgroundColor: "#1766CE", color: "white", fontFamily: "sans-serif" }}>
                    <h1 className="welcome"><b>All Are Welcome</b></h1>
                    {/* <hr style={{ width: "50%", borderTop: "1px solid white" }} /> */}
                    <div className="welcome-txt">
                        <p>Beginners and experienced meditation practioners alike.</p>
                        <p>Religious and non-religious. People from all walks of life who want to learn to connect with their "True Self" through meditation and minfulness. </p>
                    </div>
                </div>
            </div>
        );
    }
}



export default Home;

