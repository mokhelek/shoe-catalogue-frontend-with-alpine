let shoeCatalogueInstance = shoeCatalogue();

document.addEventListener("alpine:init", () => {
    Alpine.data("shoeCatalogue", shoeCatalogue);
    Alpine.data("shoeCart", shoeCart);
});


