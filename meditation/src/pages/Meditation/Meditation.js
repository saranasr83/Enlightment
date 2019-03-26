import React from "react";
import Container from "../../components/Container";
import Col from "../../components/Col"
import Row from "../../components/Row"
import Fuji from "../../images/fuji.jpg"

const Meditation = () => (
    <div>
        <Container style={{ color: "white" }}>
            <h1 className="text-center">Why Meditation?</h1>

            <br />
            <Row>
                <Col size="md-6">

                    <p>MEDITATION IS A PERIOD OF TIME SET ASIDE EVERY DAY TO PRACTICE QUIETING THE MIND
                        <br />
                        <br/>
                        Meditation helps you become calm and balanced. It is a way for you to cultivate a connection to the eternal side of being. In the beginning of meditation practice, we work on slowing down our thoughts. After some practice, we learn to stop thoughts completely. When you become adept in meditation, you learn to enter the pinnacle state of meditation called Samadhi. In Samadhi the mind is perfectly merged with Nirvana, the essence of life.</p>
                </Col>
                <Col size="md-6">
                    <img className="img-fluid" src={Fuji} alt="mountain" />
                </Col>
            </Row>
        </Container>
    </div>
)

export default Meditation;