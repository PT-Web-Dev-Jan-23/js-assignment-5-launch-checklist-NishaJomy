// Write your helper functions here!
require('isomorphic-fetch');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById("missionTarget");

                 missionTarget.innerHTML += `
                     <div>
                        <h2> Mission Destination </h2>
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
    
    //const launchStatus=document.getElementbyId("launchStatus");

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    
    let launchStatus=document.getElementbyId("launchStatus");
    launchStatus.innerHTML += `
    <div>
        <ol>
            `
        pilotStatus.innerHTML = `Pilot ${pilot} Ready`
            copilotStatus.innerHTML = `CoPilot ${copilot} Ready`;
            if (fuelLevel >= 10000) {
                list.style.visibility = `hidden`;
                    launchStatus.innerHTML = `Shuttle is ready for launch`;
                        launchStatus.style.color = `green`;
                            fuelStatus.innerHTML = `Fuel level high enough for launch`;

            }
            if (cargoMass <= 10000) {
                list.style.visibility = `hidden`;
                    launchStatus.innerHTML = `Shuttle is ready for launch`;
                        launchStatus.style.color = `green`;
                            cargoStatus.innerHTML = `Cargo mass low enough for launch`;

            }    
            if (fuelLevel <= 10000){
                list.style.visibility = `visible`;
                    launchStatus.innerHTML = `Shuttle not ready for launch`;
                        launchStatus.style.color = `red`;
                            fuelStatus.innerHTML = `Fuel level too low for launch`;
            }
            if (cargoMass >= 10000) {
                list.style.visibility = `visible`;
                    launchStatus.innerHTML = `Shuttle not ready for launch`;
                        launchStatus.style.color = `red`;
                            cargoStatus.innerHTML = `Cargo mass over capacity for launch`;
            }                                                     
                    `
                </ol>
            </div>
            `; 
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("all fields are required");
        
    }
    else if (validateInput(pilot) ==="Is a Number"){
        alert("Please enter a valid name for pilot;not a number");
      
    }
    else if (validateInput(copilot) ==="Is a Number"){
        alert("Please enter a valid name for copilot;not a number");
        
    }
    else if (validateInput(fuelLevel) ==="Not a Number"){
        alert("Please enter a valid number for Fuel Level");
         
    }
    else if (validateInput(cargoLevel) ==="Not a Number"){
        alert("Please enter a valid number for Cargo Level");
       
    }
    
    };


async function myFetch() {

    let planetsReturned;

await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {response.json()
.then(function (planetsReturned) {

    return planetsReturned;
    });

});}

function pickPlanet(planets) {
    let index=Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
