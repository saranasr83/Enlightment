import React from "react";
import Container from "../../components/Container";
// import Col from "../../components/Col";
// import Row from "../../components/Row";
import Sunrise from "../../images/meditating_sunrise.jpg";
import "./Teaching.css";


const Teaching = () => (
    <div>
        <div className="hero">
        <img className="img-fluid" style={{height:"100%",width:"100%",display:"block",marginBottom:"20px"}} src={Sunrise}/>
        </div>
        <Container style={{fontFamily:"palatino", fontSize:"20px"}}>
        <h1 className="text-center" style={{marginBottom:"20px", color:"#1766CE"}}><b>About the class</b></h1>
        <hr style={{marginBottom:"25px"}}/>
            {/* <Row style={{fontSize:"20px"}}>
                <Col size="md-6"> */}
                <h3 style={{color:"#2BA500"}}><b>All are welcome</b></h3>
                    <p>
                    Beginners and experienced meditation practitioners alike. Religious and non-religious. People of all walks of life who want to learn to touch their own True Self through meditation and mindfulness.
                    </p>
                    <br/>
                <h3 style={{color:"#2BA500"}}><b>What to expect -</b></h3>
                    <p>                      
                    We begin with a short meditation. Then a short talk about the Dharma (tr. "The Path" / "The Way"), followed by a slightly longer meditation. You may ask questions after class if you like. In 3 classes, I give you all you need to setup a consistent and bright home meditation practice for yourself (including a free gift on each of your first 3 classes).
                    </p>
                    <h3 style={{color:"#2BA500"}}><b>This class is for you if -</b></h3>
                    <ul>
                        <li>You want to take your career/academics/athletics to a whole new level!</li>
                        <li>You need a way out of career burn-out</li>
                        <li>You simply want more balance in your daily life and relationships</li>
                        <li>You want to feel happy a lot more often!</li>
                        <li>You want to relish in life in all of its FULLNESS, unobscured by heavy thinking mind</li>
                        <li>You truly want to give to others... Being bright and balanced, especially in the most difficult situations, puts you in a unique position to be of service to others.</li>
                    </ul>
                <h3 style={{color:"#2BA500"}}><b>Why are these classes free?</b></h3>
                    <p>From Chitananda: Eternity "pays" me well to teach. I feel deep in my heart that I'm receiving something far greater than any material thing when I share the teachings with others. Come, try, meditate and laugh with me :P</p>

                {/* </Col>
                
            </Row> */}
        </Container>
    </div>
)

export default Teaching;