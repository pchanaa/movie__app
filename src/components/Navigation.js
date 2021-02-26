import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navi=()=>{
    return (
        <div className ="nav">
            <div className="span">
                <Link to="/" className="link1">Home</Link>
                <Link to="/about" className="link2">about</Link>
            </div>
        </div>
    );
}
export default Navi;