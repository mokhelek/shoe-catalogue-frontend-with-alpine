function shoeCatalogue() {
    return {

        shoesList: [],

        colorFilterValue:'',
        sizeFilterValue: '',
        brandFilterValue: '',

        checkFilter(){
            if(this.colorFilterValue != '' && this.sizeFilterValue == '' && this.brandFilterValue == '' ){
                axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/color/${this.colorFilterValue}`).then((result) => {
                    this.shoesList = result.data;
                });
            }else if(this.colorFilterValue == '' && this.sizeFilterValue != '' && this.brandFilterValue == '' ){
                // todo -> filter by size
            }else if(this.colorFilterValue =='' && this.sizeFilterValue == '' && this.brandFilterValue != '' ){
                // todo -> filter by brand
            }
        },
        
        setColorFiler(color){
            console.log(color)
            this.colorFilterValue = color;
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

        init() {
            this.getAllShoes();
        },
    };
}
