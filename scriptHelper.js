// Write your helper functions here!
require('isomorphic-fetch');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    
    //    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    //     response.json().then(function (json) {
         const missionTarget = document.getElementById("missionTarget");
    
                     missionTarget.innerHTML += `
                         <div>
                             <ol>        
                                 <li>Name: ${name}</li>
                                 <li>Diameter: ${diameter}</li>
                                 <li>Star: ${star}</li>
                                 <li>Distance: ${distance}</li>
                                 <li>Moons: ${moons}</li>
                             </ol>
                             <img src=${imageUrl}></img>
                         </div>
                                 `;
    
}

function validateInput(testInput) {

    if(testInput === ""){
        return "Empty"; 
    }
    else if(isNaN(testInput)){
        return "Not a Number";
    }
    else if(!isNaN(testInput)){
        return "Is a Number";
    }
    
}
    
    const launchStatus=document.getElementbyId("launchStatus");

    function formSubmission (document, pilot, copilot, fuelLevel, cargoMass) {

        launchStatus.innerHTML += `
        <div>
            <ol>
                `
            pilotStatus.innerHTML = `Pilot ${pilot} Ready`
            copilotStatus.innerHTML = `CoPilot ${copilot} Ready`;

            if(validateInput(pilot)== "Empty" || validateInput(pilot)== "Is a Number"){
                alert("enter valid name");
            }

            if(validateInput(copilot)== "Empty" || validateInput(pilot)== "Is a Number"){
                alert("enter valid name");
            }
            if(validateInput(fuelLevel)== "Empty" || validateInput(fuelLevel)== "Not a Number"){
                alert("enter valid number");
            }

            if(validateInput(cargoMass)== "Empty" || validateInput(cargoMass)== "Not a Number"){
                alert("enter valid number");
            }


            if (fuelLevel >= 10000) {
                faultyItems.style.visibility = 'visible';
                    launchStatus.innerHTML = `Shuttle is ready for launch`;
                        launchStatus.style.color = `green`;
                            fuelStatus.innerHTML = `Fuel level high enough for launch`;

            }
            if (cargoMass <= 10000) {
                faultyItems.style.visibility = 'visible';
                    launchStatus.innerHTML = `Shuttle is ready for launch`;
                        launchStatus.style.color = `green`;
                            cargoStatus.innerHTML = `Cargo mass low enough for launch`;

            }    
            if (fuelLevel <= 10000){
                faultyItems.style.visibility = 'visible';
                    launchStatus.innerHTML = `Shuttle not ready for launch`;
                        launchStatus.style.color = `red`;
                            fuelStatus.innerHTML = `Fuel level too low for launch`;
            }
            if (cargoMass >= 10000) {
                faultyItems.style.visibility = 'visible';
                    launchStatus.innerHTML = `Shuttle not ready for launch`;
                        launchStatus.style.color = `red`;
                            cargoStatus.innerHTML = `Cargo mass over capacity for launch`;
            }                                                     
                    `
                </ol>
            </div>
            `; 
        
}


async function myFetch() {
    let planetsReturned;
    await fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then( function(response) {response.json()
    .then(function (planetsReturned) {
    return planetsReturned;
    });
    });
}

function pickPlanet(planets) {
    let index=Math.floor(Math.random() * (planets.length));
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
