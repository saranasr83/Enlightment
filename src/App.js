import React from 'react';
// import './App.css';
 import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Teaching from "./pages/Teaching/Teaching";
// import Meditation from "./pages/Meditation/Meditation";
import PastEvents from "./pages/Pastevents/Pastevents";




const App = () => (
   <Router>
    <div>
      
      <Navbar />
      <hr style={{border: "1px solid white", marginTop:"1px"}} />
      <br/>
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/teaching" component={Teaching} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/meditation" component={Meditation} /> */}
        <Route exact path="/pastevents" component={PastEvents} />
      </Wrapper>
    </div>
   </Router>
);

export default App;
