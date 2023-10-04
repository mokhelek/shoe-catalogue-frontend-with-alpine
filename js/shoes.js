function shoeCatalogue() {

    let dom = {
        dropdownBrand: true,
        dropdownColor: true,
        dropdownSize: true,
        searchBar: false,
        paymentBox: false,
        showError: false,
        errorText: "",

        setDropdownBrand() {
            this.dropdownBrand = !this.dropdownBrand;
        },

        setDropdownColor() {
            this.dropdownColor = !this.dropdownColor;
        },

        setDropdownSize() {
            this.dropdownSize = !this.dropdownSize;
        },
        setSearchBar(){
            this.searchBar = !this.searchBar;
        },
        setPaymentBox(){
            this.paymentBox = !this.paymentBox
        },
        setShowError(message){
            console.log(message)
            this.showError = !this.showError;
            this.errorText = message;

        }
    };

    let shoesDetails = {
        shoe_name: "",
        brand: "",
        size: "",
        price: "",
        image_url: "",
        color: "",
        stock_quantity: 1,
        description: "",
    }

    let auth = {
        username: "",
        password: "",
        email:"",
        adminUser: false,
        showError: false,

        login() {
            const userData = {
                username: this.username,
                password: this.password,
            };

            axios.post("https://shoe-catalogue-api.onrender.com/api/auth/login", userData).then((response) => {
                    console.log(response.data.userAccessToken)
                    if (response.data.userAccessToken) {
                        localStorage.setItem("jwtToken", response.data.userAccessToken);
                        localStorage.setItem("user", JSON.stringify(response.data.user));
                        this.adminUser = JSON.parse(localStorage.getItem("user")).adminUser;
                        this.adminUser = console.log(" /*/* ",this.adminUser);

                        window.location.href = "index.html";
                    }else{
                        this.showError =  !this.showError
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },

        register(){
            const userData = {
                username: this.username,
                password: this.password,
                email: this.email
            };

            axios
                .post("https://shoe-catalogue-api.onrender.com/api/auth/register", userData)
                .then((response) => {
                    window.location.href = "login.html";
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },

        logout(){
            localStorage['jwtToken'] = "";
            localStorage['user'] = JSON.stringify({"username": "", adminUser:false});
            window.location.href = "index.html";
        }
    };

    let shoes = {
        positiveFeedback: "",
        negativeFeedback: "",
        shoesList: [],
        brandsList: [],
        colorsList: [],

        colorFilterValue: "",
        sizeFilterValue: "",
        brandFilterValue: "",
        searchText:"",

        isLoading: true,

        addShoes() {
            console.log(shoesDetails);
            axios
                .post("https://shoe-catalogue-api.onrender.com/api/shoes/", shoesDetails, { headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` } })
                .then(() => {
                    window.location.href = "index.html";
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        searchShoes(){
            console.log(this.searchText)
            axios.post(`https://shoe-catalogue-api.onrender.com/api/shoes/search`, { "searchText" : this.searchText}).then((result) => {
                this.shoesList = result.data;
                // window.location.href = "index.html/#shoes";
            });
        },
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
        setColorFilter(color) {
            let firstChar = color.slice(0, 1);
            if (firstChar == "#") {
                this.colorFilterValue = color.slice(1);
            } else {
                this.colorFilterValue = color;
            }
            this.checkFilter();
        },
        setSizeFilter(size) {
            console.log(size);
            this.sizeFilterValue = size;
            this.checkFilter();
        },
        setBrandFilter(brand) {
            this.brandFilterValue = brand;
            this.checkFilter();
        },
        getAllShoes() {
            axios.get("https://shoe-catalogue-api.onrender.com/api/shoes").then((result) => {
                this.shoesList = result.data;
                this.getBrands();
                this.getColors();
                this.isLoading = false;
            });
        },
        getShoesByBrand(brandName) {
            axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/brand/${brandName}`).then((result) => {
                this.shoesList = result.data;
            });
        },
        getBrands() {
            let brands = new Set(this.shoesList.map((shoe) => shoe.brand));
            this.brandsList = [...brands];
        },
        getColors() {
            let colors = new Set(this.shoesList.map((shoe) => shoe.color));
            this.colorsList = [...colors];
        },
    };

    let cart = {
        message: "This is a test message",
        cartList: [],
        shoeInCart: [],
        isLoading: true,
        items: 0,
        products: 0,
        total: 0,

        getCartItems() {
            if(localStorage.getItem("jwtToken")){
                axios.get("https://shoe-catalogue-api.onrender.com/api/cart/", { headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` } }).then((result) => {
                    this.cartList = result.data;
                    this.checkShoeInCart();
                    this.orderSummery();
                    this.isLoading = false;
                });
            }else{
                this.cartList = []
                this.isLoading = false;
            }
           
        },
        addToCart(id) {

            if(localStorage.getItem("jwtToken")){
                axios.post(`https://shoe-catalogue-api.onrender.com/api/cart/add-to-cart/${id}`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` } }).then(() => {
                    this.getCartItems();
                });
            }else{
                window.location.href = "login.html";
            }

           
        },
        removeFromCart(id) {
            axios.post(`https://shoe-catalogue-api.onrender.com/api/cart/remove-from-cart/${id}`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` } }).then(() => {
                this.getCartItems();
            });
        },
        checkShoeInCart() {
            let shoeIDs = this.cartList.map((obj) => obj.id);
            this.shoeInCart = shoeIDs;
        },
        updateCart(id, qty) {
            axios.post(`https://shoe-catalogue-api.onrender.com/api/cart/update-cart/${id}`, { quantity: qty }, { headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` } }).then(() => {
                this.getCartItems();
            });
        },
        orderSummery() {
            this.items = 0;
            this.total = 0;
            this.products = this.cartList.length;
            for (let i of this.cartList) {
                this.items = Number(this.items) + Number(i.quantity);
                this.total = this.total + Number(i.price) * Number(i.quantity);
            }
        },
    };

    let payment = {
        paymentAmount:"",
        showError: false,
        makePayment(){

            if(Number(this.paymentAmount)>= Number(cart.total) ){
                // todo : -> pass the ids of  shoes in cart 
                axios.post(`https://shoe-catalogue-api.onrender.com/api/pay`, {amount:this.paymentAmount}, { headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` } }).then(() => {
                    window.location.href = "cart.html";
                });
            }else{
                // alert("Insufficient Amount")
                // dom.setShowError("No Money")
                this.showError =  !this.showError
            }
        }
    }

    return {
        payment,
        shoesDetails,
        auth,
        shoes,
        cart,
        dom,
        init() {
            this.shoes.getAllShoes();
            this.cart.getCartItems();
        },
    };
}
