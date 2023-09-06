let shoeCatalogueInstance = shoeCatalogue();

document.addEventListener("alpine:init", () => {
    Alpine.data("shoeCatalogue", shoeCatalogue);
});



// let pizzaCartInstance = pizzaCartLogic()

// document.addEventListener('alpine:init', () => {
//     Alpine.data('pizzaCartLogic', pizzaCartLogic);
//   });

