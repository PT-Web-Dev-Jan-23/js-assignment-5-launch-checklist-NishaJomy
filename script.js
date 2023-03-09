// Write your JavaScript code here!

const { myFetch, formSubmission, pickPlanet, addDestinationInfo } = require("./scriptHelper");


window.addEventListener("load", function() {

    let planetsResponse=[];
    let listedPlanetsResponse=myFetch();
    listedPlanetsResponse.then(function (result) {
    planetsResponse = result;
    console.log(planetsResponse);
    })
    .then(function () {
    console.log(planetsResponse);
    let selectedPlanets=pickPlanet(planetsResponse);
    addDestinationInfo(document,selectedPlanets.name,selectedPlanets.diameter,selectedPlanets.star,selectedPlanets.distance,selectedPlanets.moons,selectedPlanets.image); 
    });

        let list = document.getElementById('faultyItems');
        list.style.visibility = "hidden";
        let submit = document.getElementById("formSubmit");
        submit.addEventListener("click", function(event){
    
             let pilotName = document.querySelector('input[name=pilotName]');
             let copilotName = document.querySelector('input[name=copilotName]');
             let fuelLevel = document.querySelector('input[name=fuelLevel]');
             let cargoMass = document.querySelector('input[name=cargoMass]');
             formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
             event.preventDefault();
        });
    });
    

 
