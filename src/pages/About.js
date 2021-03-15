import React from "react";
import '../style.css';

function About() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>About Me</h1>
                    </div>
                </div>
                <div class="row no-gutters">
                    <div class="col-md-3">
                        <img class="img img-thumbnail" src="../Picture.png" alt="Rahul Chaphekar" height="250" width="250" />
                    </div>
                    <div class="col-md-9">
                        <p>My name is Rahul Chaphekar and I am a full-stack developer. I originally received a B.S. in Chemical Engineering from The University of Texas at Austin. Recently, I graduated from The Web Development Boot Camp through UT Austin. I am proficient in technologies such as HTML, CSS, jQuery, Javascript, Node.js, Express, SQL, MongoDB, and React.js</p>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-md-12">
                        <p>Some of my professional profiles are linked below:</p>
                        <ul class="pages">
                            <li>
                                <a href="https://www.linkedin.com/in/rahul-chaphekar" target="_blank" rel="noreferrer">LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://github.com/rchaphekar1" target="_blank" rel="noreferrer">Github</a>
                            </li>
                            <li>
                                <a href="https://stackoverflow.com/story/rchaphekar1" target="_blank" rel="noreferrer">Stack Overflow</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;