// Write your JavaScript code here!

window.addEventListener("load", function() {

    //Adding Validation
    const form = document.getElementById('launchForm');
    const pilotName = document.getElementById('pilotName');
    const copilotName = document.getElementsByName('copilotName')[0];
    const fuelLevel = document.getElementsByName('fuelLevel')[0];
    const cargoMass = document.getElementsByName('cargoMass')[0];

    const launchStatus =document.getElementById('launchStatus')
    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus = document.getElementById('copilotStatus');
    const fuelStatus = document.getElementById('fuelStatus');
    const cargoStatus = document.getElementById('cargoStatus');

    form.addEventListener('submit',function(event){

       console.log(`Pilot Name: ${pilotName.value}`);
       console.log(`Co-Pilot Name, ${copilotName.value}`);
       console.log(`Fuel Level: ${fuelLevel.value}(L)`);
       console.log(`Cargo Mass${cargoMass.value}(kg)`);
        if(pilotName.value ==="" || !isNaN(copilotName.value)){
            alert(`Please input a value`)
            event.preventDefault()
        }else if(copilotName.value ===""|| !isNaN(copilotName.value)){
            alert(`Please input a Name for the Co-Pilot`)
            event.preventDefault()
        }else if(fuelLevel.value === ""||isNaN(fuelLevel.value)) {
            alert(`Please input a number`)
            event.preventDefault()
        }else if(cargoMass.value  ===""||isNaN(cargoMass.value)){
            alert(`Please input a value`)
            event.preventDefault()
        }else{
            console.log('taco')
    
            pilotStatus.innerHTML = `${pilotName.value} is ready for launch`
            
            copilotStatus.innerHTML = `${copilotName.value} is ready for launch`
            
            if(fuelLevel.value<10000){
                fuelStatus.innerHTML='Fuel level is too low for launch'
                document.querySelector('h2').style.color = 'red';
                launchStatus.innerHTML = 'Shuttle not ready for launch'
                document.querySelector('#faultyItems').style.visibility = 'visible'
            }else if(cargoMass.value>10000){
                cargoStatus.innerHTML='There is too much mass for take off'
                document.querySelector('h2').style.color = 'red';
                launchStatus.innerHTML = 'Shuttle not ready for launch'
                document.querySelector('#faultyItems').style.visibility = 'visible'
            }else{
                document.querySelector('h2').style.color = 'green';
                launchStatus.innerHTML = 'Shuttle ist ready for launch'

            }

            
        }

          
        
    
   
       })
     
       


    




   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});