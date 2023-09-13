function shoeCart(){
    return{
        message:"This is a test message",
        cartList: [],
        getCartItems() {
            axios.get("https://shoe-catalogue-api.onrender.com/api/cart/").then((result) => {
                this.cartList = result.data;
            });
        },
        init() {
            this.getCartItems();
        },

    }
}