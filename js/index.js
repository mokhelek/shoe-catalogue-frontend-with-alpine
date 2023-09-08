function shoeCatalogue() {
    return {
        positiveFeedback:'',
        negativeFeedback:'',
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
                axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/brand/${this.brandFilterValue}`).then((result) => {
                    this.shoesList = result.data;
                });
            }else if(this.colorFilterValue =='' && this.sizeFilterValue != '' && this.brandFilterValue != '' ){
                axios.get(`https://shoe-catalogue-api.onrender.com/api/shoes/brand/${this.brandFilterValue}/size/${this.sizeFilterValue}`).then((result) => {
                    this.shoesList = result.data;
                });
            }
        },
        
        setColorFiler(color){
            this.colorFilterValue = color;
        },
        setSizeFiler(size){
            this.sizeFilterValue = size;
        },
        setBrandFiler(brand){
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

        init() {
            this.getAllShoes();
        },
    };
}
