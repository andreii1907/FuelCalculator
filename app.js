console.log('Calculatorul este încărcat și pregătit.');

	

function calculateFuelToOffload() {
     var totalDistanceToTravel = prompt('Care este distanța totală pe care dorești să o parcurgi, în kilometri? Introdu un număr.');
		 var averageLitersOverHundred = prompt('Care este consumul mediu de conbustibil al navei spatiale, in litri?');
		 var tankCapacity = prompt('Care este capacitatea totala a rezervorului de combustibil, in litri?'); 
	
	   var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
	   var fuelToOffload = tankCapacity - requiredFuel;
	   alert('Combustibil necesar: ' + requiredFuel + ' L\n' + 'Combustibil de descarcat: ' + fuelToOffload + ' L');
}

calculateFuelToOffload();