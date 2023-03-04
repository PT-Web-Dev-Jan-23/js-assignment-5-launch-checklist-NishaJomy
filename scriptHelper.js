// Write your helper functions here!
require('isomorphic-fetch');


let submitData=document.getElementbyId("formSubmit");
let pilotNameInput=document.getElementbyId("pilotName");
let copilotNameInput=document.getElementbyId("copilotName");
let fuelLevelInput=document.getElementbyId("fuelLevel");
let cargoMassInput=document.getElementbyId("cargoMass") ;
let list=document.getElementById("faultyItems");

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTargets=document.getElementbyId("missionTarget");
   let myHtml=`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name.value} </li>
                    <li>Diameter:${diameter.value} </li>
                    <li>Star: ${star.value}</li>
                    <li>Distance from Earth:${distance.value} </li>
                    <li>Number of Moons: ${moons.value}</li>
                </ol>
                <img src="${imageUrl.value}">`
    missionTargets.innerHTML=  myHtml;          
   
}

function validateInput(testInput) {

    if(testInput === ""){
        return "Empty"; 
    }
    else if(isNaN(testInput)){
        return "Is a Number";
    }
    else if(!isNaN(testInput)){
        return "Not a Number";
    }
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    submitData.addEventListener('submit',function(event){

    if(validateInput(pilot) === "" || validateInput(copilot) === "" || validateInput(fuelLevel) === "" || validateInput(cargoLevel) === ""){
        window.alert("all fields are required");
        
    }
    else if (validateInput(pilot) ==="Is a Number"){
        window.alert("Please enter a valid name for pilot;not a number");
      
    }
    else if (validateInput(copilot) ==="Is a Number"){
        window.alert("Please enter a valid name for copilot;not a number");
        
    }
    else if (validateInput(fuelLevel) ==="Not a Number"){
        window.alert("Please enter a valid number for Fuel Level");
       
        
    }
    else if (validateInput(cargoLevel) ==="Not a Number"){
        window.alert("Please enter a valid number for Cargo Level");
       
    }
    if(fuelLevelInput<10000){
        document.getElementbyId("fuelStatus").innerHTML="there is not enough fuel for the journey.";
        document.getElementbyId("launchStatus").innerHTML="Shuttle not ready for launch";
        document.getElementbyId("launchStatus").style.color="red";
    }
    list.innerHTML=`<ol>
    <li id="pilotStatus" data-testid="pilotStatus">${pilotNameInput.value} Ready</li>
    <li id="copilotStatus" data-testid="copilotStatus">${copilotNameInput.value} Ready</li>
    <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
</ol>`

    event.preventDefault();
});}
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("http://launch-checklist-launchcodeeducation.s3-website-us-east-1.amazonaws.com/")
    .then( function(response) {
     response.json();   
    }).then(function(){

    return planetsReturned;});
}

function pickPlanet(planets) {
    let index=Math.floor(Math.random * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
