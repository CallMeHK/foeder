import React from "react";
import "./greeter.css"

interface GreeterProps {
    name: string;
}

const Greeter: React.FC<GreeterProps> = (props: GreeterProps) => {
    const name = props.name;
    return (
        <section className="phx-hero">
          <h1 className="greeter-header">Welcome to {name} with TypeScript and React!</h1>
          <p>Peace-of-mind from prototype to production</p>
        </section>
    );
};

export default Greeter;
