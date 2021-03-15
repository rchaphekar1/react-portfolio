import React from "react";
import '../style.css';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="/" rel="noreferrer"><strong>Rahul Chaphekar</strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/contact" rel="noreferrer">Contact</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/portfolio" rel="noreferrer">Portfolio<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" rel="noreferrer">About</a>
                </li>
            </ul>
            </div>
        </nav>
    )
};

export default Navbar;