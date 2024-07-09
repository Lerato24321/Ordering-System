//let firstName = prompt ("What is your first name?");
if (firstName.length>0 ) {
    alert(`Welcome to Jay's Burgers, ${firstName}. Please place your order 😊`);
} else {
    alert(`Please type first name before proceeding. ☹️`);
}



function compute() {
const chicken = document.getElementById("chicken").value = "8.99";
const beef = document.getElementById("beef").value = "8.99";
const vege = document.getElementById("vegetarian").value = "6.99";
const salmon = document.getElementById("salmon").value = "9.99";




const quantity = document.getElementById("Quan").value;
const cashT = document.getElementById("cT").value;



if (document.getElementById("chicken").checked) {
    Total = quantity * chicken ;
} else if (document.getElementById("beef").checked) {
    Total = quantity * beef ;
} else if (document.getElementById("vegetarian").checked) {
    Total = quantity * vege ;
} else if (document.getElementById("salmon").checked) {
    Total = quantity * salmon ;
}


document.getElementById("total").value = Total ;


document.getElementById("cT").value = cashT;


const Change = cashT - Total ;


if ( cashT >= Total ) {
    document.getElementById ("C").value = Change.toFixed(2);
} else {
    alert ("You don't have enough money. Please add some more money.") ;
}

}


//function for showing Birger Prices 
function P(price) {
    const burgerPrice = document.getElementById("realPrice");
    realPrice.value = price.value ;
}

//function for showing % of the discount 
function sync(myDiscount) {
    const discount = document.getElementById ("mydisc") ;
    myDiscount.value = myDiscount.value ;
}


//function for NumberKey Only 
function checkNumber (event) {
    const aCode = event.which ? event.which : event.keyCode;

    if (aCode > 31 && (aCode <48 || aCode > 57)) return false; 
    return true;

}