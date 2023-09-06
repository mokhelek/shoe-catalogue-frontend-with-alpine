const newShoesForm = document.querySelector(".new-shoe-form");

let shoeCatalogueInstance = shoeCatalogue();

newShoesForm.addEventListener("submit", function () {

    let title = document.querySelector("#title").value;
    let brand = document.querySelector("#brand").value;
    let size = document.querySelector("#size").value;
    let price = document.querySelector("#price").value;
    let image = document.querySelector("#image").value;
    let color = document.querySelector("#color").value;
    let quantity = document.querySelector("#quantity").value ;


    const newShoeDetails = {
        title,
        brand,
        size,
        price,
        image,
        color,
        quantity:Number(quantity)
    };

    shoeCatalogueInstance.addNewShoe(newShoeDetails);
});
