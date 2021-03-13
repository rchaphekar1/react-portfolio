import React from "react";
import Navbar from '../components/Navbar';

function About() {
    return (
        <div>
            <Navbar />
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>About Me</h1>
                    </div>
                </div>
                <div class="row no-gutters">
                    <div class="col-md-3">
                        <img class="img img-thumbnail" src="Picture.png" alt="Rahul Chaphekar" height="250" width="250" />
                    </div>
                    <div class="col-md-9">
                        <p>My name is Rahul Chaphekar and I was born in Houston, TX. I received a B.S. in Chemical Engineering from The University of Texas at Austin and worked as an environmental engineer for a couple of years. In my free time, I love playing video games, listening to music, and am a huge Houston sports fan. Currently, I am enrolled as a student in The Web Development Boot Camp through UT Austin in hopes of pursuing a new career in the field.</p>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-md-12">
                        <p>Some of my professional profiles are linked below:</p>
                        <ul class="pages">
                            <li>
                                <a href="https://www.linkedin.com/in/rahul-chaphekar" target="_blank">LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://github.com/rchaphekar1" target="_blank">Github</a>
                            </li>
                            <li>
                                <a href="https://stackoverflow.com/story/rchaphekar1" target="_blank">Stack Overflow</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}