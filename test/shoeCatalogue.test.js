describe("Testing the filtering functionality", function () {

    it("It should return an empty array because no shoe meets the criteria", function () {
        let shoeCatalogueInstance = shoeCatalogue();

        let searchText = "Vans"
        let brandName = "";
        let color = "";
        let size = "";

        let filteredShoes = shoeCatalogueInstance.myFilterFunction(searchText, brandName, color, size);
        let expectedResults = [];
        assert.deepEqual(expectedResults, filteredShoes);
    });

    it("It should return details of shoes with the red color", function () {
        let shoeCatalogueInstance = shoeCatalogue();

        let searchText = ""
        let brandName = "";
        let color = "red";
        let size = "";

        let filteredShoes = shoeCatalogueInstance.myFilterFunction(searchText, brandName, color, size);
        let expectedResults = [
         {
            title: "Dr Martins 1460",
            brand: "Dr Martin's",
            size: "6",
            price: 4000,
            image: "https://img.fruugo.com/product/9/44/178237449_0340_0340.jpg",
            color: "red",
            quantity: 25,
            id: 3,
         }
        ];
        assert.deepEqual(expectedResults, filteredShoes);
    });

    it("It should return details of shoes from the Gucci brand", function () {
        let shoeCatalogueInstance = shoeCatalogue();

        let searchText = ""
        let brandName = "Gucci";
        let color = "";
        let size = "";

        let filteredShoes = shoeCatalogueInstance.myFilterFunction(searchText, brandName, color, size);
        let expectedResults = [
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
                title: "Gucci Stripped loafers",
                brand: "Gucci",
                size: "7",
                price: 8000,
                image: "https://image.harrods.com/gucci-leather-web-stripe-loafers_16165319_36472932_300.jpg",
                color: "black",
                quantity: 25,
                id: 5,
            },
        ];
        assert.deepEqual(expectedResults, filteredShoes);
    });
    it("It should return details of shoes that are size 7", function () {
        let shoeCatalogueInstance = shoeCatalogue();

        let searchText = ""
        let brandName = "";
        let color = "";
        let size = "7";

        let filteredShoes = shoeCatalogueInstance.myFilterFunction(searchText,brandName, color, size);
        let expectedResults = [
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
        ];
        assert.deepEqual(expectedResults, filteredShoes);
    });

    it("It should return details of shoes that are have green color and are from the Gucci brand", function () {
        let shoeCatalogueInstance = shoeCatalogue();

        let searchText = ""
        let brandName = "Gucci";
        let color = "green";
        let size = "";

        let filteredShoes = shoeCatalogueInstance.myFilterFunction(searchText,brandName, color, size);

        
        let expectedResults = [
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
        ];
        assert.deepEqual(expectedResults, filteredShoes);
    });
});


// describe("Testing the add new?")