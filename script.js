// Write your JavaScript code here!

const { myFetch, formSubmission, pickPlanet, addDestinationInfo } = require("./scriptHelper");


window.addEventListener("load", function() {

    let listedPlanets;
    let listedPlanetsResponse=myFetch();
    listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
    })
    .then(function () {
    console.log(listedPlanets);
    let selectedPlanets=pickPlanet(listedPlanets);
    addDestinationInfo(document,selectedPlanets.name,selectedPlanets.diameter,selectedPlanets.star,selectedPlanets.distance,selectedPlanets.moons,selectedPlanets.image); 
    });
});
        let list = document.getElementById('faultyItems');
        list.style.visibility = "hidden";
        let form = this.document.querySelector("form")
        form.addEventListener("submit", function(event){
             event.preventDefault();
             let pilotName = this.document.querySelector('input[name=pilotName]');
             let copilotName = this.document.querySelector('input[name=copilotName]');
             let fuelLevel = this.document.querySelector('input[name=fuelLevel]');
             let cargoMass = this.document.querySelector('input[name=cargoMass]');
             formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
             
        });
    

 
