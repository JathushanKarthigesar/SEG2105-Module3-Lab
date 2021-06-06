	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		wheatfree:true,
		lactoseFree: true,
		nutFree:true,
		eggFree:true,
		price: 1.99,
		img: "img/icon-02.jpg"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		wheatfree:false,
		lactoseFree: true,
		nutFree:true,
		eggFree:false,
		price: 2.35,
		img: "img/icon-04.jpg"
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		wheatfree:false,
		lactoseFree: true,
		nutFree:true,
		eggFree:false,
		price: 9.99,
		img: "img/icon-07.jpg"
	},
	{
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		wheatfree:false,
		lactoseFree: true,
		nutFree:true,
		eggFree:false,
		price: 4.99,
		img: "img/icon-06.jpg"
	},
	{
		name: "yogurt",
		vegetarian: true,
		glutenFree: true,
		wheatfree:true,
		lactoseFree: false,
		nutFree:true,
		eggFree:true,
		price: 1.99,
		img: "img/icon-03.jpg"
	},
	{
		name: "sandvich",
		vegetarian: false,
		glutenFree: false,
		wheatfree:false,
		lactoseFree: true,
		nutFree:false,
		eggFree:true,
		price: 2.49,
		img: "img/icon-05.jpg"
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: false,
		wheatfree:true,
		lactoseFree: true,
		nutFree:true,
		eggFree:true,
		price: 11.99,
		img: "img/icon-10.jpg"
	},
	{
		name: "veggie burger",
		vegetarian: true,
		glutenFree: false,
		wheatfree:false,
		lactoseFree: true,
		nutFree:false,
		eggFree:true,
		price: 2.99,
		img: "img/icon-05.jpg"
	},
	{
		name: "bacon",
		vegetarian: false,
		glutenFree: false,
		wheatfree:true,
		lactoseFree: true,
		nutFree:true,
		eggFree:true,
		price: 8.99,
		img: "img/icon-09.jpg"
	},
	{
		name: "tomato",
		vegetarian: true,
		glutenFree: true,
		wheatfree:true,
		lactoseFree: true,
		nutFree:true,
		eggFree:true,
		price: 1.49,
		img: "img/icon-01.jpg"
	},
];
	
products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "glutenfree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "wheatallery") && (prods[i].wheatfree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "lactoseintolerant") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "nutallergy") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "eggallergy") && (prods[i].eggFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

function returnListProductsImages(prods, restriction){
	let img_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "vegetarian") && (prods[i].vegetarian == true)){
			img_names.push(prods[i].img);
		}
		else if ((restriction == "glutenfree") && (prods[i].glutenFree == true)){
			img_names.push(prods[i].img);
		}
		else if ((restriction == "wheatallery") && (prods[i].wheatfree == true)){
			img_names.push(prods[i].img);
		}
		else if ((restriction == "lactoseintolerant") && (prods[i].lactoseFree == true)){
			img_names.push(prods[i].img);
		}
		else if ((restriction == "nutallergy") && (prods[i].nutFree == true)){
			img_names.push(prods[i].img);
		}
		else if ((restriction == "eggallergy") && (prods[i].eggFree == true)){
			img_names.push(prods[i].img);
		}
		else if (restriction == "none"){
			img_names.push(prods[i].img);
		}
	}
	return img_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
