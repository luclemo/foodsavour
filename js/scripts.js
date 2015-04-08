// namespace
var app = {};


// -------------------------------- 
// DEFINE THE REQUEST
// --------------------------------

// Variables for the API stuff
app.apiId = '3be960ea';
app.apiKey = 'f57457347ec1db9d64219061f5d7f3c7';

app.getRecipes = function(q,d) {
	var options = {	
			_app_id : app.apiId,
			_app_key : app.apiKey,
			format : 'jsonp',
			allowedIngredient : q,
			maxTotalTimeInSeconds : '1800'
		}
		// if diet option is set, add it to the list fo data request
		if(d){
			options.allowedDiet = d;
		}

	// do the ajax request
	$.ajax({
		url : 'http://api.yummly.com/v1/api/recipes',
		dataType : 'jsonp',
		type : 'GET',
		// in data property, provide all of the params that need to go along with the request.
		data : options,
		success : function(result) { // result is just a bag to hold all the stuff that is geing returned by the success function
			// console.log(result);
			// now that the data has come back, let's display the recipes
			app.displayRecipes(result);
		}	
	});
} // End request

// -------------------------------- 
// DEFINE THE RETURN
// --------------------------------

// define a fucntion that will display the recipes
app.displayRecipes = function(result) {
//We need to clear out amy old recipes to make way for the new ones
	$('.recipes').html('');
	console.log('ready to display the recipes with this data', result);
	
	var recipes = result.matches;
	console.log(recipes);
	// we now have an array of recipe objects. We need to loop thorugh each one and display them.
	// recipes.length defines how many objects we have.
	for( var i = 0; i < recipes.length; i++ ){
		// console.log(recipes[i]);
		// create a list to hold all the results
		var ul = $( '<ul>' );
		var li = $( '<li>' );
		// create a link to the recipe
		var url = 'http://www.yummly.com/recipe/' + recipes[i].id;

		var a = $( '<a>' ).attr({
														href : url,
														target : 	"_blank"
															});

		// recipe title
		var h3 = $( '<h3>' ).text(recipes[i].recipeName);
		// Ingredients header
		var h4 = $( '<h4>' ).text('Ingredients');
		// Ingredients list
		var ol = $( '<ol>' ).addClass( 'ingredients' );

		for( var j = 0; j < recipes[i].ingredients.length; j++ ) {
			var olli = $( '<li>' ).text( recipes[i].ingredients[j] );
			ol.append( olli );
		}

		ul.append( li );
		li.append( a, h4, ol );
		a.append(h3);

		$('.recipes').append(ul);
	} // end for loop
} // end app.displayRecipes()


// -------------------------------- 
// DEFINE THE INIT FUCNTION
// --------------------------------

// we define an init fucntion to kick off our app.
// later we will be able to run it with app.init();
app.init = function() {

	// when we submit the form with the class of ingredients
	$( 'form' ).on( 'submit', function(e) {
		e.preventDefault();//page won't reload
		
		// 1. grab the value out of the ingredients and store it in a variable
		var q = $( '.ingredients' ).val(); // use stuff entered in the input field
		q = q.replace(/,\s/g, ','); // strip spaces between commas
		q = q.split(','); // q is now an array of ingredients (the list splits at the comma)



		// 2. grab the value of the diet option
		var d = $('.diet option:selected').val(); // taken from the dropdown options
		
		console.log('we should search yummly for ' + q + ' for people who eat ' + d);
		app.getRecipes(q,d);
	});
}


// --------------------------------
// Document ready
// --------------------------------
$(function() {
	console.log('yo');
	// app.getRecipes();
	app.init();

});


// Get the recipe id's
// append them the the base url
// put them in an element
// put them on the page







// TO-DO ----------------------------

// 1.0 - Results should load as a list in a div which fades in

// 1.1  -  max 20 recipes at a time + load more button

// 2.0 - Upon clicking on a recipe a new div should fade in with the link to the recipe page and list of ingredients

// 3.0 - To create the link to the recipe page I need to use the id from the array and append it to http://www.yummly.com/recipe/

// 4.0 - The ingredients list should appear as a check list

// 4.1 - Ingredients the user added to the imput should be checked by default

// 4.2 - User should have option to check off everything else they already have on hand

// 5.0 - Tweet the remaining ingredients to user's phone using _______ API? 




// for loop = for( var i = 0; i < recipes.length; i++ )
// for loop = for(	start  ;   stop 	;	   	increment )
 