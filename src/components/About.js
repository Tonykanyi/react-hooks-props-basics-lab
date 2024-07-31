import React from "react";

function Links(props) {
  return (
    <div id="links">
      <a href={props.github}>Github</a>
      <a href={props.linkedin}>LinkedIn</a>
    </div>
  );
}

function About(props) {
  return (
    
    <div id="about">
      <h3>About</h3>
      <p>{props.bio}</p>
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;