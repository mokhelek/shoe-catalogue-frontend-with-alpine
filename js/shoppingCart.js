// **************************************************** ADD TO SHOPPING BAG DOM **********************************************


let shoppingCartInstance = shoppingCart() ;

let cartArr = [];
if(localStorage["cart-shoes"]){
    cartArr = JSON.parse(localStorage["cart-shoes"])
}

const cartShoesWrapperElem = document.querySelector(".cart-shoes-wrapper") ;
const cartShoesTemplate = document.querySelector(".cart-shoes-template").innerHTML ;

let compiledCartShoesTemplate = Handlebars.compile(cartShoesTemplate);
const emptyBag = document.querySelector(".empty-bag")

if(cartArr.length > 0){
    emptyBag.classList.remove("show")
    cartShoesWrapperElem.innerHTML = compiledCartShoesTemplate(cartArr)
}else{
    emptyBag.classList.add("show")
}


function quantityDOM(action, shoeId, max){
    let quantityCounterElem = document.querySelector(`.quantity-counter-${shoeId}`);

    if (action === "increase" && Number(quantityCounterElem.innerHTML) < max){
        quantityCounterElem.innerHTML = Number(quantityCounterElem.innerHTML) + 1 ;
        shoppingCartInstance.updateStockQuantity(shoeId, Number(quantityCounterElem.innerHTML), action ) ;

    }else if(action === "decrease" && Number(quantityCounterElem.innerHTML) >= 1 ){
        quantityCounterElem.innerHTML = Number(quantityCounterElem.innerHTML) - 1 ;
        shoppingCartInstance.updateStockQuantity(shoeId, Number(quantityCounterElem.innerHTML), action );

    }
}


function buyButtonClicked(){
    shoppingCartInstance.buyFunction()
}

// ******************** Order Summery **************************
const subtotals = document.querySelectorAll(".subtotal");
const totalItems = document.querySelector(".total-items") ;

let grandTotal = 0;

for(let i = 0 ; i < subtotals.length ;i++){
    grandTotal = grandTotal + Number(subtotals[i].innerHTML)
}

totalItems.innerHTML = cartArr.length

const grandTotalElem = document.querySelector(".grand-total");
grandTotalElem.innerHTML = grandTotal ;

// ******************************************************************************
let shoesInstance = shoesData();
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

