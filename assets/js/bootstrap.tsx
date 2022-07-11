import React from "react";
import ReactDOM from "react-dom";
import Greeter from "./greeter";
const greeting = document.getElementById("greeting");
ReactDOM.render(<Greeter name="Phoenix" />, greeting);
