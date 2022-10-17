import React from 'react';
import './Aboutcomponent.css';


function Aboutcomponent() {
    return (
        <div>
            <div className="about">
                <h2>Hi Everyone!</h2>
                <p>This is Sandeep welcomes you to about page.I am from Rajahmundry, AndhraPradesh.
                    Now, I am currently working as a Project engineer in Wipro.</p>
            </div>
            <div className="bio">
                <div className="studies">
                    <h2>Studies</h2>
                    <div className="study">
                        <h3>Diploma </h3>
                        <p> Studied in G.M.R Polytechnic College,Rajahmundry</p>
                        <h3>Btech</h3>
                        <p>Studied in G V P College, Visakhapatnam</p>
                    </div>
                </div>
                <div className="hobbies">
                    <h2>Hobbies</h2>
                    <div className="study">
                        <ul>
                            <li>Watching Movies</li>
                            <li>Playing cricket</li>
                            <li>Learning about new things</li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Aboutcomponent;