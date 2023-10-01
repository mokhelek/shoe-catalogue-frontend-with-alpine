
document.addEventListener("alpine:init", () => {
    Alpine.data("shoeCatalogue", shoeCatalogue);
});

let prevColorSelection = ""

function colorTest(x){
    console.log(x)
    clearPreviousSelection(prevColorSelection);
    let selectedColor = document.querySelector(`#${x}`)
    selectedColor.classList.add("selected")
    prevColorSelection = x;
}

function clearPreviousSelection(selection){
    if(selection){
        let selectedColor = document.querySelector(`#${selection}`)
        selectedColor.classList.remove("selected")
    }
}

// ****************** Brand Selection **************************

let prevBrandSelection = ""

function brandSelection(brand){
    console.log(brand)
    clearBrandSelection(prevBrandSelection);
    let selectedBrand = document.querySelector(`#${brand}`)
    selectedBrand.classList.add("selected-brand")
    prevBrandSelection = brand;
}

function clearBrandSelection(selection){
    if(selection){
        let selectedBrand = document.querySelector(`#${selection}`)
        selectedBrand.classList.remove("selected-brand")
    }
}

// ****************** Size Selection **************************

let prevSizeSelection = ""

function sizeSelection(size){
    console.log(size)
    clearSizeSelection(prevSizeSelection);
    let selectedSize = document.querySelector(`#${size}`)
    selectedSize.classList.add("selected-size")
    prevSizeSelection = size.toString();
}

function clearSizeSelection(selection){
    if(selection){
        let selectedSize = document.querySelector(`#${selection}`)
        selectedSize.classList.remove("selected-size")
    }
}