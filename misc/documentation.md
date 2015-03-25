# Helper Notes for Foodsavour Project

## API stuff

__Example URL__

The base url for the Search Recipes GET is

http://api.yummly.com/v1/api/recipes?_app_id=app-id&_app_key=app-key&your_search_parameters

__Application ID__

This is the application ID, you should send with each API request:

3be960ea

__Api key__

f57457347ec1db9d64219061f5d7f3c7

__Recipe response example__

https://developer.yummly.com/documentation/search-recipes-response-sample

## What do I want to do

__Concept:__ People don't like to waste food. User could enter a few food items/ingredients and receive some recipe ideas which would feature all of those ingredients. User gets a shopping list, can filter out the stuff they already have and text message the missing ingredients.

1. User enters at least 3 ingredients
*nice to have : user can add more ingredients (clicking on button would add more fields*

2. User hits button to return recipes

2. GET request would return recipes which include ALL of those ingredients.
*nice to have : filter for dietary resitrictions(veggie, gluten etc) or meal type (lunch, dinner, etc)*

3. User selects a recipe and gets a shopping list. The user can remove the stuff they already have and then text message the remaining items to their phone.
