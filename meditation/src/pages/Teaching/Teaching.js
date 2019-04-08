import React from "react";
import Container from "../../components/Container";
import Col from "../../components/Col"
import Row from "../../components/Row"
import Cherry from "../../images/cherryBlossom.png"

const Teaching = () => (
    <div>
        <Container style={{color:"white"}}>
            <h1 className="text-center" style={{fontFamily:"serif"}}> What we're about</h1>
            <br />
            <Row>
                <Col size="md-6">

                    <p>

                        Beginners and experienced meditation practitioners welcome. Religious and non-religious. People of all walks of life welcome.
                    <br/>

                        We begin with a short meditation. Then a short talk about the Dharma (tr. "The Path" / "The Way"), followed by a slightly longer meditation. You may ask questions after class if you like. In 3 classes, I give you all you need to setup a consistent and bright home meditation practice for yourself (including a free gift on each of your first 3 classes).
                    
                    </p>
                    This class is for you if:
                    <ul>
                        <li>You want to take your career/academics/athletics to a whole new level!</li>
                        <li>You want to maintain balance in this vibrant, bustling city</li>
                        <li>You want to feel happy a lot more often!</li>
                        <li>You want to relish in life in all of its FULLNESS, unobscured by heavy thinking mind</li>
                        <li>You truly want to give to others... Being bright and balanced, especially in the most difficult situations, puts you in a unique position to be of service to others.</li>
                    </ul>

                </Col>
                <Col size="md-6">
                    <img className="img-fluid" src={Cherry} alt="mountain" />
                </Col>
            </Row>
        </Container>
    </div>
)

export default Teaching;