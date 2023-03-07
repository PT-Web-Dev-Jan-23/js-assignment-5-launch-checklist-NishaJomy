// Write your JavaScript code here!

const { myFetch, formSubmission, pickPlanet, addDestinationInfo } = require("./scriptHelper");


window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse=myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //console.log(listedPlanets);
    }).then(function () {
        //console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that 
        //information to your destination.
        let selectedPlanets=pickPlanet(listedPlanets);
        addDestinationInfo(document,selectedPlanets.name,selectedPlanets.diameter,selectedPlanets.star,selectedPlanets.distance,selectedPlanets.moons,selectedPlanets.image);
 
        let form = this.document.querySelector("form")
         form.addEventListener("submit", e => {
             let list = this.document.getElementById('faultyItems')
             let pilotName = this.document.querySelector('input[name=pilotName]')
             let copilotName = this.document.querySelector('input[name=copilotName]')
             let fuelLevel = this.document.querySelector('input[name=fuelLevel]')
             let cargoMass = this.document.querySelector('input[name=cargoMass]')
             let launchStatus=this.document.getElementbyId("launchStatus");
             let input = [pilotName, copilotName, fuelLevel, cargoMass];
             
             formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
             e.preventDefault();
    });
    
 });
 });
