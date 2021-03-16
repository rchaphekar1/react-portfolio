import React from 'react';
import Picture from '../assets/Project1.png'
import '../style.css';

function Project() {
    return (
        <div class="row no-gutters" style={{marginBottom: "20px"}}>
            <div class="col-md-6">
                <a href="https://jwhendershott.github.io/NightOut/#" target="_blank" rel="noreferrer">
                    <img class="img img-thumbnail" src={Picture} alt="Project One" width= "350px" height= "350px"></img>
                </a>
            </div>
        </div>
    )
};

export default Project;