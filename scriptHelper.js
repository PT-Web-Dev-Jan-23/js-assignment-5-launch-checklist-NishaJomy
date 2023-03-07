// Write your helper functions here!
require('isomorphic-fetch');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    
    //    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    //     response.json().then(function (json) {
         const missionTarget = document.getElementById("missionTarget");
    
                     missionTarget.innerHTML += `
                         
                             <h2>Mission Destination</h2>
                             <ol>        
                                 <li>Name: ${name}</li>
                                 <li>Diameter: ${diameter}</li>
                                 <li>Star: ${star}</li>
                                 <li>Distance: ${distance}</li>
                                 <li>Moons: ${moons}</li>
                             </ol>
                             <img src=${imageUrl}> `;
    
}

function validateInput(testInput) {

    let numberTestInput = Number(testInput);

    if(testInput === ""){
        return "Empty"; 
    }
    else if(isNaN(numberTestInput)){
        return "Not a Number";
    }
    else if(isNaN(numberTestInput)=== false){
        return "Is a Number";
    }
    
}
    
    //const launchStatus=document.getElementbyId("launchStatus");

    function formSubmission (document, list, pilot, copilot, fuelLevel, cargoMass) {

        let launchStatus=document.getElementById("launchStatus");
        let pilotStatus=document.getElementById("pilotStatus");
        let copilotStatus=document.getElementById("copilotStatus");
        let fuelStatus=document.getElementById("fuelStatus");
        let cargoStatus=document.getElementById("cargoStatus");

            
           

            if(validateInput(pilot)== "Empty" || validateInput(copilot)== "Empty" || validateInput(fuelLevel)== "Empty" || validateInput(cargoMass)== "Empty"){
            window.alert("all fields are required");
            }

            else if( validateInput(pilot)== "Is a Number" || validateInput(copilot)== "Is a Number" || validateInput(fuelLevel)== "Not a Number" || validateInput(cargoMass)== "Not a Number"){
            window.alert("enter valid data");
            }
        else{

            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            list.style.visibility = "visible";

            if(fuelLevel >= 10000 && cargoMass > 10000){
                    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
                        launchStatus.style.color = 'rgb(199, 37, 78)';
                            fuelStatus.innerHTML = 'Fuel level high enough for launch';
                                cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
            
            }
             
            else if (fuelLevel < 10000 && cargoMass > 10000){
                
                    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
                        launchStatus.style.color = 'rgb(199, 37, 78)';
                            fuelStatus.innerHTML = 'Fuel level too low for launch';
                                cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
            }  
            else if (fuelLevel < 10000 && cargoMass <= 10000){
                
                    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
                        launchStatus.style.color = 'rgb(199, 37, 78)';
                            fuelStatus.innerHTML = 'Fuel level too low for launch';
                                cargoStatus.innerHTML = 'Cargo mass low enough for launch';
            }   
            else {      
                    //list.style.visibility = "hidden";
                        launchStatus.innerHTML = 'Shuttle is Ready for Launch';
                            launchStatus.style.color = 'rgb(65, 159, 106)';
                                fuelStatus.innerHTML = 'Fuel level high enough for launch';
                                    cargoStatus.innerHTML = 'Cargo mass low enough for launch';                   
            }  
        }           
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
