// REF: https://picsum.photos/v2/list

/**********************************
  CONFIGURE JSON CALL
**********************************/ 
// The API feed
var getStuff = 'https://www.themealdb.com/api/json/v1/1/random.php';

// Optional settings for private collections. This is public, no settings needed. 
var setStuff = {};

// Do stuff with returned data
var doStuff = function(data) {

  // console.log(data);
  
  // What do you want to do? Show (display on page) data? 
  showStuff(data);
    
};

/************************************
  GET JSON FROM API
************************************/ 
$.getJSON( getStuff, setStuff, doStuff);


/************************************
  SHOW (DISPLAY ON PAGE)
************************************/ 
var showStuff = function(data) {
  
  console.log( data);
  console.log( data.meals);
  console.log( data.meals[0]);
  console.log( data.meals[0].strArea);
  console.log( data.meals[0].strCategory);
  console.log( data.meals[0].strMealThumb);
  console.log( data.meals[0].strIngredient1);

  $('h1').text( data.meals[0].strArea);
  $('#category').text( data.meals[0].strCategory);
  $('img').attr( 'src', data.meals[0].strMealThumb);
  
  $('#ing1').text( data.meals[0].strIngredient1);
  $('#ing2').text( data.meals[0].strIngredient2);
  $('#ing3').text( data.meals[0].strIngredient3);
  $('#ing4').text( data.meals[0].strIngredient4);
  $('#ing5').text( data.meals[0].strIngredient5);
  $('#ing6').text( data.meals[0].strIngredient6);
  $('#ing7').text( data.meals[0].strIngredient7);
  $('#ing8').text( data.meals[0].strIngredient8);
  $('#ing9').text( data.meals[0].strIngredient9);
  $('#ing10').text( data.meals[0].strIngredient10);
  
  
  
}