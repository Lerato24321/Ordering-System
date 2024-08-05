let firstName;


while (true) {  // Loop until valid input is received
    firstName = prompt("What is your first name?");
    
    if (firstName && firstName.length > 0) {
        alert(`Welcome to Jay's Burgers, ${firstName}. Please place your order 😊`);
        break;  // Exit the loop if input is valid
    } else {
        alert(`Please type your first name before proceeding. ☹️`);
    }
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
     document.querySelector('.total-price-section').style.display = 'block';
     document.querySelector('.total-price-section').scrollIntoView({ behavior: 'smooth' });
} else {
    alert ("You don't have enough money. Please add some more money.") ;
}

if (quantity==0) {
  alert("Please choose the quantity of burgers.");
  document.querySelector(".total-price-section").style.display = "none";
}

}


//function for showing Burger Prices 
function P(price) {
    const burgerPrice = document.getElementById("realPrice");
    realPrice.value = price.value ;
}

//function for NumberKey Only 
function checkNumber (event) {
    const aCode = event.which ? event.which : event.keyCode;

    if (aCode > 31 && (aCode <48 || aCode > 57)) return false; 
    return true;

}



function placeOrder () {
   alert ("Thank you. Order has been placed! 💌");
}





//changing styles

document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll('input[type="radio"]');
  const fullPriceSection = document.querySelector(".full-price-section");

  function removeHighlights() {
    const menus = document.querySelectorAll(".menu");
    menus.forEach((menu) => {
      menu.classList.remove("highlight");
    });
  }

  function highlightMenu(radio) {
    removeHighlights();
    const menu = radio.closest(".menu");
    if (menu) {
      menu.classList.add("highlight");
    }
    resetFields(); // Reset fields when a new radio button is selected
  }

  function resetFields() {
    document.getElementById("total").value = "";
    document.getElementById("C").value = "";
    document.getElementById("cT").value = "";
    document.getElementById("Quan").value = "";
    fullPriceSection.style.display = "none";
    document.querySelector(".total-price-section").style.display = "none";
  }

  radios.forEach((radio) => {
    radio.addEventListener("change", function () {
      highlightMenu(radio);
      fullPriceSection.style.display = "block";
      fullPriceSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});