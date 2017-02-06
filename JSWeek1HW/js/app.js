//Problem #1:
for(i = 50; i >=20; i--) {
	if(i % 3 === 0) {
		console.log(i);
	}
}

//Problem #2:

for(i = 0; i < 10; i=i)
	{
		console.log(i)
	}



//Problem #3:
var classmates = ["Bridjet", "Nathan", "Matias", "Mike", "Jason",
"Reuben", "Ben", "Lane", "John", "Chris", "Terry", "Ann",
"Katelyn", "Naomi", "Jeff"];

for(i = 0; i < classmates.length; i++) {
	if(i % 2 === 0){
		console.log(classmates[i]);
	}
}

//Problem #4:
var menu = [{name: "pizza", glutenFree: false},{name: "salad",
glutenFree: true},{name: "donut", glutenFree: false},{name: "steak",
glutenFree: true},{name: "chicken", glutenFree: true},{name: "cheeseburger",
glutenFree: false}];

var glutenFreeMenu = [];

for(i = 0; i < menu.length; i++) {
	if(menu[i].glutenFree){
		glutenFreeMenu.push(menu[i]);
	}
}
console.log(glutenFreeMenu);
//If the glutenFree property is true, print out the name of the food item into
//a new array called GlutenFree
