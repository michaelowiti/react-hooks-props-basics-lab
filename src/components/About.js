import React from "react";

function About(props) {
  return (
    
    <div id="about">
      <h2>About Me</h2>
    
      {props.bio !== '' && props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
     <p>links </p>

     <a href="https://github.com/liza">https://github.com/liza</a>
     <a href="https://www.linkedin.com/in/liza/">https://www.linkedin.com/in/liza/</a>
  
  
    </div>
  );
}

export default About;
