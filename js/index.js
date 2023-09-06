
function shoeCatalogue(){
    
    return {
        feedback:"feedback message",
        shoesList:[],
        
        getAllShoes(){
            axios.get("https://shoe-catalogue-api.onrender.com/api/shoes").then((result) => {
                this.shoesList = result.data;
                console.log("Triggered ", result)
            });
        },


        init(){
            this.getAllShoes()
        },
    }

}