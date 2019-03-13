import React from 'react';
// import './App.css';
 import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Teaching from "./pages/teaching";
import Meditation from "./pages/meditation";
import PastEvents from "./pages/pastevents";



const App = () => (
   <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/teaching" component={Teaching} />
        <Route exact path="/about" component={About} />
        <Route exact path="/meditation" component={Meditation} />
        <Route exact path="/pastevents" component={PastEvents} />
      </Wrapper>
      {/* <Footer /> */}
    </div>
   </Router>
);

export default App;
