import React from "react";
import "./Btn.css"

const Btn = props => (
    <button className="btn" 
        style={props.style}
        onClick={()=>props.handleClick(props.children)}
        >
        {props.children}
    </button> 
)

export default Btn;