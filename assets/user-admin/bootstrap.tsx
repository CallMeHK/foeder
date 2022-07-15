import React from "react";
import * as ReactDOM from 'react-dom/client'
import Greeter from "./greeter";

const greeting = document.getElementById("greeting");
const root = ReactDOM.createRoot(greeting);
root.render(<Greeter name="Phoenix" />);
