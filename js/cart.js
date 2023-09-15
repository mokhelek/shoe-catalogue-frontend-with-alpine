function shoeCart(){
    return{
        message:"This is a test message",
        cartList: [],
        getCartItems() {
            axios.get("https://shoe-catalogue-api.onrender.com/api/cart/").then((result) => {
                this.cartList = result.data;
            });
        },
        addToCart(id){
            console.log(id)
            axios.post(`https://shoe-catalogue-api.onrender.com/api/cart/add-to-cart/${id}`).then(() => {
                // *--
            });
        },
        init() {
            this.getCartItems();
        },

    }
}