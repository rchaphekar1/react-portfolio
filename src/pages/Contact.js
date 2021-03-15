import React from "react";
import '../style.css';

function Contact() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="contact">Contact Me</h1>
                    </div>
                </div>
                <form>
                    <div class="form-group">
                        <label for="exampleInputName1">Name</label>
                        <input type="name" class="form-control" id="exampleInputName1" placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputMessage1">Message</label>
                        <textarea type="message" class="form-control" id="exampleInputMessage1" placeholder="Message" style={{height:"100px;padding-bottom:70px"}}></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
};

export default Contact;