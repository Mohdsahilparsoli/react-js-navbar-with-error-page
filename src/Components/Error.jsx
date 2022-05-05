import React from "react";
import { NavLink } from "react-router-dom";

const Error = ()=>{
    return(<>
    <div className="content">
        <h1> helo sahil Error page</h1>
        <br />
        <NavLink to={"/"} id="er"> go back</NavLink>
        </div>

    </>)
}

export default Error;