// JavaScript Document

function findDog(breed){
	const random = {method: 'GET'};
	
	fetch(`https://dog.ceo/api/breed/${breed}/images/random
`, random).then(response => response.json()).then(responseJson => displayDogs(responseJson, breed) ).catch(error => alert("Something went wrong"));
}

function displayDogs(responseJson, breed){
	console.log("dog: " + breed + " url: " + responseJson.message);

	if(responseJson.status == "error"){
		$("section").append("<p>Dog Breed wasn't found. Please re-examine the breed you searched.</p>")
	}else{
	$("section").append(`<image src="${responseJson.message}" alt="${breed}" width="300">`);
	}
}

$("form").submit(e=>{
	e.preventDefault();
	
	$("section").empty();
	let dog = $("#dog-input").val().toLowerCase();
	
	console.log(dog);
	findDog(dog);
});