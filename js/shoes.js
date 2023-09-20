function shoeCatalogue() {
    let auth = {
        username: "",
        password: "",

        login: function () {
            const userData = {
                username: this.username,
                password: this.password,
            };

            axios
                .post("https://shoe-catalogue-api.onrender.com/api/auth/login", userData)
                .then((response) => {
                    console.log(response.data.userAccessToken);
                    if (response.data.userAccessToken) {
                        localStorage.setItem("jwtToken", response.data.userAccessToken);
                        window.location.href = "index.html";
                    } else {
                        // Handle authentication error (e.g., show an error message).
                        alert("Invalid login credentials");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },

        init() {
            //
        },
    };

    let shoes = {
        positiveFeedback: "",
        negativeFeedback: "",
        shoesList: [],

        colorFilterValue: "",
        sizeFilterValue: "",
        brandFilterValue: "",

        checkFilter() {
            if (this.colorFilterValue != "" && this.sizeFilterValue == "" && this.brandFilterValue == "") {
                axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/color/${this.colorFilterValue}`).then((result) => {
                    this.shoesList = result.data;
                });
            } else if (this.colorFilterValue == "" && this.sizeFilterValue != "" && this.brandFilterValue == "") {
                axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/size/${this.sizeFilterValue}`).then((result) => {
                    this.shoesList = result.data;
                });
            } else if (this.colorFilterValue == "" && this.sizeFilterValue == "" && this.brandFilterValue != "") {
                axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/brand/${this.brandFilterValue}`).then((result) => {
                    this.shoesList = result.data;
                });
            } else if (this.colorFilterValue == "" && this.sizeFilterValue != "" && this.brandFilterValue != "") {
                axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/brand/${this.brandFilterValue}/size/${this.sizeFilterValue}`).then((result) => {
                    this.shoesList = result.data;
                });
            } else if (this.colorFilterValue != "" && this.sizeFilterValue != "" && this.brandFilterValue == "") {
                axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/size/${this.sizeFilterValue}/color/${this.colorFilterValue}`).then((result) => {
                    this.shoesList = result.data;
                });
            } else if (this.colorFilterValue != "" && this.sizeFilterValue == "" && this.brandFilterValue != "") {
                axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/brand/${this.brandFilterValue}/color/${this.colorFilterValue}`).then((result) => {
                    this.shoesList = result.data;
                });
            } else if (this.colorFilterValue != "" && this.sizeFilterValue != "" && this.brandFilterValue != "") {
                axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/brand/${this.brandFilterValue}/size/${this.sizeFilterValue}/color/${this.colorFilterValue}`).then((result) => {
                    this.shoesList = result.data;
                });
            } else {
                this.getAllShoes();
            }
        },

        setColorFiler(color) {
            this.colorFilterValue = color;
        },
        setSizeFiler(size) {
            this.sizeFilterValue = size;
        },
        setBrandFiler(brand) {
            this.brandFilterValue = brand;
        },

        getAllShoes() {
            axios.get("https://shoe-catalogue-api.onrender.com/api/shoes").then((result) => {
                this.shoesList = result.data;
            });
        },

        getShoesByBrand(brandName) {
            axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/brand/${brandName}`).then((result) => {
                this.shoesList = result.data;
            });
        },

    };

    let cart = {
        message: "This is a test message",
        cartList: [],
        shoeInCart: false,
        getCartItems() {
            axios.get("https://shoe-catalogue-api.onrender.com/api/cart/", { headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` } } ).then((result) => {
                this.cartList = result.data;
            });
        },
        addToCart(id) {
            axios.post(`https://shoe-catalogue-api.onrender.com/api/cart/add-to-cart/${id}`).then(() => {
                // *--
            });
        },
        removeFromCart(id) {
            axios.post(`https://shoe-catalogue-api.onrender.com/api/cart/remove-from-cart/${id}`).then(() => {
                // *--
            });
        },
        changeBool(result) {
            console.log(result);
            this.shoeInCart = result;
        },

    };


    return {
        auth,
        shoes,
        cart,

       init(){
        this.shoes.getAllShoes()
        this.cart.getCartItems()
       }
    }
}
