import React from 'react';
import NightOut from '../assets/Project1.png';
import DeedDone from '../assets/DeedDone.png';
import EmployeeDirectory from '../assets/EmployeeDirectory.png';
import BudgetTracker from '../assets/BudgetTracker.png';
import PasswordGenerator from '../assets/PasswordGenerator.png';
import '../style.css';

function Project() {
    return (
        <div class="row no-gutters" style={{marginBottom: "20px"}}>
            <div class="col-md-6">
                <a href="https://jwhendershott.github.io/NightOut/#" target="_blank" rel="noreferrer">
                    <img class="img img-thumbnail" src={NightOut} alt="Night Out" width= "350px" height= "350px"></img>
                </a>
            </div>
            <div class="col-md-6">
                <a href="https://deeddone.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img class="img img-thumbnail" src={DeedDone} alt="Deed Done" width= "350px" height= "350px"></img>
                </a>
            </div>
            <div class="col-md-6">
                <a href="https://rchaphekar1.github.io/employeedirectory/" target="_blank" rel="noreferrer">
                    <img class="img img-thumbnail" src={EmployeeDirectory} alt="Employee Directory" width= "350px" height= "350px"></img>
                </a>
            </div>
            <div class="col-md-6">
                <a href="https://budgettracker-project.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img class="img img-thumbnail" src={BudgetTracker} alt="Budget Tracker" width= "350px" height= "350px"></img>
                </a>
            </div>
            <div class="col-md-6">
                <a href="https://rchaphekar1.github.io/PasswordGenerator/" target="_blank" rel="noreferrer">
                    <img class="img img-thumbnail" src={PasswordGenerator} alt="Password Generator" width= "350px" height= "350px"></img>
                </a>
            </div>
        </div>
        
    )
};

export default Project;