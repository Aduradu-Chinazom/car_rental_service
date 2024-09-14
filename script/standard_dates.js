let myForm= document.getElementById('myForm')

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    let pickup = document.getElementById("pickup").value;
    let returnn = document.getElementById("return").value;
    let additional = document.getElementById("additional").value;

    let pickup_err = document.getElementById("pickup_err");
    let return_err = document.getElementById("return_err");
    let additional_err = document.getElementById("additional_err");

    if(pickup === ""){
        pickup_err.textContent = "Kindly provide the required information.";
        valid = false;
    } else {
        pickup_err.textContent = "";
    }

    if(returnn === ""){
        return_err.textContent = "Kindly provide the required information.";
        valid = false;
    } else {
        return_err.textContent = "";
    }

    if(additional === ""){
        additional_err.textContent = "Kindly provide the required information.";
        valid = false;
    } else {
        additional_err.textContent = "";
    }
    
    if (!valid) return;

    window.location.href = "available_standard_cars.html";
});
