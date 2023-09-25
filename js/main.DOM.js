
document.addEventListener("alpine:init", () => {
    Alpine.data("shoeCatalogue", shoeCatalogue);
});

let prevColorSelection = ""

function colorTest(x){
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