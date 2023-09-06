function shoesData() {

    let testData = {
        shoesArray: [
            {
                title: "Gucci Loafer",
                brand: "Gucci",
                size: "8",
                price: 11000,
                image: "https://catalog-resize-images.thedoublef.com/9b85a5ca98152c0f1e4a1e2538b6ca2e/900/900/3079291M0C0_M_GUC-3154.b.jpg",
                color: "green",
                quantity: 5,
                id: 1,
            },
            {
                title: "BASS OCG WEEJUNS",
                brand: "GH BASS",
                size: "6",
                price: 3000,
                image: "https://www.johncraig.co.za/wp-content/uploads/BAS02CO-BASS-OCG-WEEJUNS-VENETIAN-LEATHER-BROWN-BA91005E-0CG-V1-600x600.jpg",
                color: "brown",
                quantity: 40,
                id: 2,
            },
            {
                title: "Dr Martins 1460",
                brand: "Dr Martin's",
                size: "6",
                price: 4000,
                image: "https://img.fruugo.com/product/9/44/178237449_0340_0340.jpg",
                color: "red",
                quantity: 25,
                id: 3,
            },
            {
                title: "Christian Louboutin patent leather ",
                brand: "Christian Louboutin",
                size: "7",
                price: 6000,
                image: "https://image.harrods.com/christian-louboutin-no-penny-patent-leather-loafers_19241760_43422425_300.jpg",
                color: "black",
                quantity: 65,
                id: 4,
            },
            {
                title: "Gucci Stripped loafers",
                brand: "Gucci",
                size: "7",
                price: 8000,
                image: "https://image.harrods.com/gucci-leather-web-stripe-loafers_16165319_36472932_300.jpg",
                color: "black",
                quantity: 25,
                id: 5,
            },
            {
                title: "Versace Shoes ",
                brand: "Versace",
                size: "7",
                price: 14000,
                image: "https://cdn.shopify.com/s/files/1/0066/9561/6567/products/10a_4549f4b4-6776-4370-ba70-db1301b8b15c_600x.jpg?v=1608805423",
                color: "Black & Gold",
                quantity: 15,
                id: 6,
            },
        ],
    };


    let shoesStock = {
        shoesArray: [
            {
                title: "Gucci Loafer",
                brand: "Gucci",
                size: "8",
                price: 11000,
                image: "https://catalog-resize-images.thedoublef.com/9b85a5ca98152c0f1e4a1e2538b6ca2e/900/900/3079291M0C0_M_GUC-3154.b.jpg",
                color: "green",
                quantity: 5,
                id: 1,
            },
            {
                title: "BASS OCG WEEJUNS",
                brand: "GH BASS",
                size: "6",
                price: 3000,
                image: "https://www.johncraig.co.za/wp-content/uploads/BAS02CO-BASS-OCG-WEEJUNS-VENETIAN-LEATHER-BROWN-BA91005E-0CG-V1-600x600.jpg",
                color: "brown",
                quantity: 40,
                id: 2,
            },
            {
                title: "Dr Martins 1460",
                brand: "Dr Martin's",
                size: "6",
                price: 4000,
                image: "https://img.fruugo.com/product/9/44/178237449_0340_0340.jpg",
                color: "red",
                quantity: 25,
                id: 3,
            },
            {
                title: "Christian Louboutin patent leather ",
                brand: "Christian Louboutin",
                size: "7",
                price: 6000,
                image: "https://image.harrods.com/christian-louboutin-no-penny-patent-leather-loafers_19241760_43422425_300.jpg",
                color: "black",
                quantity: 65,
                id: 4,
            },
            {
                title: "Gucci Stripped loafers",
                brand: "Gucci",
                size: "7",
                price: 8000,
                image: "https://image.harrods.com/gucci-leather-web-stripe-loafers_16165319_36472932_300.jpg",
                color: "black",
                quantity: 25,
                id: 5,
            },
            {
                title: "Versace Shoes ",
                brand: "Versace",
                size: "7",
                price: 14000,
                image: "https://cdn.shopify.com/s/files/1/0066/9561/6567/products/10a_4549f4b4-6776-4370-ba70-db1301b8b15c_600x.jpg?v=1608805423",
                color: "Black & Gold",
                quantity: 15,
                id: 6,
            },
        ],
    };

    if (localStorage["stored-shoes"]) {
        shoesStock = JSON.parse(localStorage["stored-shoes"]);
    }

    /* 
        * first loop through the array
        * each array has an object containing shoe details
        * then iterate the object
        * use conditional statements to check if the details of the current objects being iterated match the new objects
        * if they match, add the quantities of the 2 objects
        * if they do not match then add the new object as a new member of the list

    */

    function setNewShoes(newShoesObj) {
        const hasSameTitle = shoesStock.shoesArray.some((item) => item.title === newShoesObj.title);

        if (hasSameTitle) {
            // todo : -> before I increment the stock I should get the object that has the same title as the new object

            function findShoe() {
                let shoeDetails = shoesStock.shoesArray.find((shoe) => shoe.title == newShoesObj.title);
                return shoeDetails;
            }

            // todo : -> now the index of the shoe details

            let indexOfShoe = shoesStock.shoesArray.indexOf(findShoe());

            shoesStock.shoesArray[indexOfShoe].quantity = Number(shoesStock.shoesArray[indexOfShoe].quantity) + Number(newShoesObj.quantity);
        } else {
            let generateID = shoesStock.shoesArray.length + 1;
            newShoesObj.id = generateID; // * my object now has a unique ID
            shoesStock.shoesArray.unshift(newShoesObj);
        }

        storeNewShoes();
    }

    function storeNewShoes() {
        localStorage["stored-shoes"] = JSON.stringify(getShoes());
    }

    function getShoes() {
        return shoesStock;
    }

    function getTestData(){
        return testData ;
    }

    return {
        getShoes,
        setNewShoes,
        getTestData
    };
}
