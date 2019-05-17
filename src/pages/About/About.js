import React from "react";
import Container from "../../components/Container";
import Col from "../../components/Col"
import Row from "../../components/Row"
import Mount from "../../images/mt_tam_real.jpg"


const About = () => (
    <div>
        <Container style={{ color: "white",fontFamily:"palatino", fontSize:"20px" }}>

            
            <br/>
            <Row>
                <Col size="md-6">

                    <p>Born in California, Chitananda has been on the path for 14 years under the guidance of extraordinarily bright teachers in a rich school of Buddhism. He attributes his success in academics, athletics and career to his daily home meditation practice. In fact, meditation is his favorite thing, because it's the one thing that gives to all the other things he loves (career success, SCUBA, Martial Arts, etc.). And he loves sharing it with all sincere students.</p>
                    <br/>
                    <p>Chitananda has applied the teachings in everyday modern life, right here in the Bay Area for years, in several arenas, as a...</p>
                    <ul>
                        <li>Software Engineer at a major company in S.F. (current)</li>
                        <li>Businessman (prior career)</li>
                        <li>Martial Artist in 3 styles (hard and soft)</li>
                        <li>SCUBA diver</li>
                        <li>Student @ Cal (gr. 2006)</li>

                    </ul>
                    <br/>
                    <p>Buddhism, as Chitananda practices it, is more of a psychology than a religion, informing the mindset we bring to every situation in daily life, and the meditation that empowers our days. People of every walk of life have naturally returned to this class week after week.</p>
                </Col>

                <Col size="md-6">
                    <img className="img-fluid" src={Mount} alt="mountain" />
                </Col>
            </Row>
        </Container>
    </div>
)

export default About;