// 1. Разработка модульного проекта.
//Calculate Tip
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var service = document.getElementById("service").value;
    var numOfPeople = document.getElementById("peopleamt").value;

    //validate input
    if (billAmt === "" || service == 0) {
        alert("Введите значение");
        return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculate tip
    var total = (billAmt * service) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("total").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("total").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function () {
    calculateTip();

};

document.querySelector('.delete').onclick = function () {
    document.querySelector('#peopleamt').value = null;
    document.querySelector('#billamt').value = null;
    document.getElementById("total").style.display = "none";
    document.getElementById("each").style.display = "none";
}
