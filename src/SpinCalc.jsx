import React, { useState } from 'react';

import Calculation from './Calculation.jsx';




function SpinCalc() {
    //example space 2001, 2077, orbit hotel, gundam UC and Seed
    var G = 9.80665;
    var spinCalc = new Calculation();


    const [velocity, setVelocity] = useState(0); // in meters per second
    const [radius, setRadius] = useState(0); // in meters
    const [rotation, setRotation] = useState(0); // in radians per second




    function HandleRadius() {        
        let radius = parseFloat(document.getElementById("radius").value);
        let unit = document.getElementById("radiusUnit").value;

        //console.log("Radius: " + radius + " Unit: " + unit);

        switch (unit) {
            case "meters":
                setRadius(radius);
                spinCalc.setRadius(radius);
                break;
            case "kilometers":
                setRadius(radius * 1000);
                spinCalc.setRadius(radius * 1000);
                break;
            case "miles":
                setRadius(radius * 1609.344);
                spinCalc.setRadius(radius * 1609.344);
                break;
            case "feets":
                setRadius(radius * 0.3048);
                spinCalc.setRadius(radius * 0.3048);
                break;
            default:
                setRadius(0);
        }

        document.getElementById("output").innerText = spinCalc.toString();
    }

    function HandleVelocity() {
        HandleRadius();
        let velocity = parseFloat(document.getElementById("velocity").value);
        let unit = document.getElementById("velocityUnit").value;

        let mile = 1609.344 / 3600;

        switch (unit) {
            case "m/s":
                setVelocity(velocity);
                spinCalc.setVelocity(velocity);
                break;
            case "km/h":
                setVelocity(velocity / 3.6);
                spinCalc.setVelocity(velocity / 3.6);
                break;
            case "ml/h":
                setVelocity(velocity * mile);
                spinCalc.setVelocity(velocity * mile);
                break;
            case "ft/s":
                setVelocity(velocity * 0.3048);
                spinCalc.setVelocity(velocity * 0.3048);
                break;
        }

        spinCalc.calculateGravityByVelocity();

        //document.getElementById("rotation").value = spinCalc.rotation.toString();

        document.getElementById("output").innerText = spinCalc.toString();
    }

    function HandleRotation() {
        HandleRadius();
        let rotation = parseFloat(document.getElementById("rotation").value);
        let unit = document.getElementById("rotationUnit").value;

        switch (unit) {
            case "rad/s":
                setRotation(rotation);
                spinCalc.setRotation(rotation);
                break;
            case "deg/s":
                setRotation(rotation * (Math.PI / 180));
                spinCalc.setRotation(rotation * (Math.PI / 180));
                break;
            case "rpm":
                setRotation(rotation * (2 * Math.PI) / 60);
                spinCalc.setRotation(rotation * (2 * Math.PI) / 60);
                break;
        }

        spinCalc.calculateGravityByRotation();
        //document.getElementById("velocity").value = spinCalc.velocity.toString();


        document.getElementById("output").innerText = spinCalc.toString();
    }

    return (<>
        <div class="container">
            <h1>Artificial Gravity Calculator</h1>
            <label>Radius: </label>
            <input type="string" id="radius" onChange={HandleRadius}></input>
            <select id="radiusUnit" onChange={HandleRadius}>
                <option value="meters" >Meters</option>
                <option value="kilometers">Kilometers</option>
                <option value="miles">Miles</option>
                <option value="feets">Feets</option>
            </select>
            <br />
            <label>Velocity: </label>
            <input type="string" id="velocity" onChange={HandleVelocity}></input>
            <select id="velocityUnit" onChange={HandleVelocity}>
                <option value="m/s" >m/s</option>
                <option value="km/h">km/h</option>
                <option value="ml/h">ml/h</option>
                <option value="ft/s">ft/s</option>
            </select>
            <br />
            <label>Rotation: </label>
            <input type="string" id="rotation" onChange={HandleRotation}></input>
            <select id="rotationUnit" onChange={HandleRotation}>
                <option value="rad/s" >rad/s</option>
                <option value="deg/s">deg/s</option>
                <option value="rpm">rpm</option>
            </select>

            <br />
            <p id="output"></p>
        </div>
    </>);
}

export default SpinCalc;