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
                axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/size/${this.sizeFilterValue}`).then((result) => {
                    this.shoesList = result.data;
                });
            }else if(this.colorFilterValue =='' && this.sizeFilterValue == '' && this.brandFilterValue != '' ){
                // todo -> filter by brand
            }
        },
        
        setColorFiler(color){
            this.colorFilterValue = color;
        },
        setSizeFiler(size){
            this.sizeFilterValue = size;
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
