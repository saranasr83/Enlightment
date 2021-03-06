import React from "react";
import Container from "../../components/Container";
import Hero from "../../components/Hero";
import Mount from "../../images/mt_tam_real.jpg"



const About = () => (
    <div>
        <figure>
        {/* <img className="img-fluid" style={{height:"100%",width:"100%"}} src={Mount}/> */}
        <Hero  path={Mount} height='80vh' description='mt.Tam' />

        <figcaption>"Mount Tam - where I often take my students to meditate"</figcaption>
        </figure>
        
        <Container style={{fontFamily:"sans-serif", fontSize:"20px" }}>
            
                <h1 className="text-center" style={{marginBottom:"20px", color:"#1766CE"}}><b>About the teacher</b></h1>
                <hr style={{marginBottom:"25px"}}/>

                    <p>Born in California, Chitananda has been on the path for over 15 years under the guidance of extraordinarily bright teachers in a rich school of Buddhism. He attributes his success in academics, athletics and career to his daily home meditation practice. In fact, meditation is his favorite thing, because it's the one thing that gives to all the other things he loves (career success, SCUBA, Martial Arts, etc.). And he loves sharing it with all sincere students.</p>
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
                
        </Container>
    </div>
)

export default About;