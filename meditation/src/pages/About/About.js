import React from "react";
import Container from "../../components/Container";
import Col from "../../components/Col"
import Row from "../../components/Row"
import Sword from "../../images/sword.jpg"


const About = () => (
    <div>
        <Container style={{ color: "white" }}>

            <h1 className="text-center">Chitananda</h1>
            <br/>
            <Row>
                <Col size="md-6">

                    <p>Born in California, living and working in the Bay Area and meditating daily for 14 years in a rich Indo Tibetan Buddhist lineage. As it turns out, meditation is powerful for those interested in career success.</p>
                </Col>
                <Col size="md-6">
                    <img className="img-fluid" src={Sword} alt="sword" />
                </Col>
            </Row>
        </Container>
    </div>
)

export default About;