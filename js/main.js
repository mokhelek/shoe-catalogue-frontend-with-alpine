Handlebars.registerHelper("gt",function(a, b, options){
    if(a>b){
        return options.fn(this);
    }else{
        return options.inverse(this)
    }
})


var myCarousel = document.querySelector('#carouselExampleIndicators')
var carousel = new bootstrap.Carousel(myCarousel, {
  pause:false
})



let shoeCatalogueInstance = shoeCatalogue(); // * Factory function instance
let shoesInstance = shoesData();

const shoeBoxPlaceholder = document.querySelector(".shoe-box-placeholder");
const shoeBoxTemplate = document.querySelector(".shoe-box-template").innerHTML;

let compiledTemplate = Handlebars.compile(shoeBoxTemplate);

let shoes = shoesInstance.getShoes(); // ? data in a form of array



const brandFilterDropdown = document.querySelector(".brand-filter-dropdown"); // * my placeholder ...
const colorFilterDropdown = document.querySelector(".color-filter-dropdown");
const sizeFilterDropdown = document.querySelector(".size-filter-dropdown");
const titleSearchFilter = document.querySelector(".title-search-filter");

// ********************************* BRAND NAMES FILTERING **********************************
let brandsArray = shoeCatalogueInstance.getAllTheBrands() ;
const brandFilterTemplate  = document.querySelector(".brand-filter-template").innerHTML ;
let compiledBrandTemplate = Handlebars.compile(brandFilterTemplate) ;

brandFilterDropdown.innerHTML = compiledBrandTemplate(brandsArray);

// ********************************* Colors FILTERING **********************************

let colorsArray = shoeCatalogueInstance.getAllTheColors() ;
const colorFilterTemplate  = document.querySelector(".color-filter-template").innerHTML ;
let compiledColorTemplate = Handlebars.compile(colorFilterTemplate) ;

colorFilterDropdown.innerHTML = compiledColorTemplate(colorsArray) ;



function filterFunctionClicked() {
    const noShoes = document.querySelector(".no-shoes-message");
    console.log(titleSearchFilter.value, brandFilterDropdown.value, colorFilterDropdown.value, sizeFilterDropdown.value);
    shoes.shoesArray = shoeCatalogueInstance.myFilterFunction(titleSearchFilter.value, brandFilterDropdown.value, colorFilterDropdown.value, sizeFilterDropdown.value);
    
    if(shoes.shoesArray.length > 0){
        noShoes.classList.remove("show")
        shoeBoxPlaceholder.innerHTML = compiledTemplate(shoes);
    }else{
        shoeBoxPlaceholder.innerHTML = ""
        noShoes.classList.add("show")
    }
}


shoeBoxPlaceholder.innerHTML = compiledTemplate(shoes);

// **********************************  Shopping Cart Counter  **********************************

const cartCounterElem = document.querySelector(".cartCounter");
const cartCounterElemLg = document.querySelector(".cartCounterLg");


let cartItemsCounter = 0 ;
let cartItemsArr = [] ;

if(localStorage["cart-shoes"]){
    cartItemsArr = JSON.parse(localStorage["cart-shoes"]) ;
}

 for(let shoeObj of cartItemsArr){
    cartItemsCounter += shoeObj.buyQuantity ;

    for(let shoesStock of shoesInstance.getShoes().shoesArray ){
        if(shoesStock.id == shoeObj.id){
            const addToBag = document.querySelector(`#add-to-bag-${shoesStock.id}`)
            addToBag.innerHTML = "Remove From Bag"
        }
    }
 }





cartCounterElem.innerHTML = cartItemsCounter ;
cartCounterElemLg.innerHTML = cartItemsCounter ;








