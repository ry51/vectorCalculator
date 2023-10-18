function calculate() {	
	// Get parameters from input boxes
	let x1 = Number(document.getElementById("x1").value);
	let y1 = Number(document.getElementById("y1").value);
	let z1 = Number(document.getElementById("z1").value);
	let x2 = Number(document.getElementById("x2").value);
	let y2 = Number(document.getElementById("y2").value);
	let z2 = Number(document.getElementById("z2").value);
	
	// Product of vector magnitudes
	let magnitudeProduct = Math.sqrt(x1**2 + y1**2 + z1**2) * Math.sqrt(x2**2 + y2**2 + z2**2);
	
	// Dot product
	let dotProduct = x1 * x2 + y1 * y2 + z1 * z2;
	let angleCos = dotProduct / magnitudeProduct;
		
	// Cross product
	let crossProductMagnitude = Math.sqrt((y1 * z2 - y2 * z1)**2 + (z1 * x2 - z2 * x1)**2 + (x1 * y2 - x2 * y1)**2);
	let angleSin = crossProductMagnitude / magnitudeProduct;
		
	// Display values
	document.getElementById("final1").innerHTML = `Dot product: ${dotProduct.toFixed(3)}`;
	document.getElementById("final2").innerHTML = `Cross product: [${(y1 * z2 - y2 * z1).toFixed(3)}, ${(z1 * x2 - z2 * x1).toFixed(3)}, ${(x1 * y2 - x2 * y1).toFixed(3)}]`;
	document.getElementById("final3").innerHTML = `Sine of the angle between the vectors: ${angleSin.toFixed(3)}`;
	document.getElementById("final4").innerHTML = `Cosine of the angle between the vectors: ${angleCos.toFixed(3)}`;
	document.getElementById("final5").innerHTML = `Angle between the vectors: ${(Math.acos(angleCos) * 180 / Math.PI).toFixed(3)} degrees.`;
	document.getElementById("final6").innerHTML = `If the two vectors were to span out a parallelogram, its area would be ${crossProductMagnitude.toFixed(3)} units.`;
	
}

