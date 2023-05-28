// Get tous les éléments de quantitées
var quantities = document.getElementsByClassName("quantity");

/// Get tous les boutons +
var incrementButtons = document.getElementsByClassName("increment");

// Get tous les boutons -
var decrementButtons = document.getElementsByClassName("decrement");

// Get tous boutons delete
var deleteButtons = document.getElementsByClassName("delete");

// Get tous les boutons heart
var heartButtons = document.getElementsByClassName("heart");

// intialiser le total prix selon les produits disponibles
var initialTotalPrice = 0;
for (var i = 0; i < quantities.length; i++) {
  var quantity = parseInt(quantities[i].textContent);
  var price = parseFloat(
    document.getElementsByClassName("price")[i].textContent.substring(1)
  );
  initialTotalPrice += quantity * price;
}
var totalPriceElement = document.getElementById("totalPrice");
totalPriceElement.textContent = "Total Price: $" + initialTotalPrice.toFixed(2);

// ajouter l'évennement listeners pour les boutons
for (var i = 0; i < incrementButtons.length; i++) {
  incrementButtons[i].addEventListener("click", incrementQuantity);
  decrementButtons[i].addEventListener("click", decrementQuantity);
  deleteButtons[i].addEventListener("click", deleteItem);
  heartButtons[i].addEventListener("click", toggleLike);
}

// fonction pour incrémenter les quantitées
function incrementQuantity() {
  var quantityElement = this.parentNode.querySelector(".quantity");
  var quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity;
  updateTotalPrice();
}

// fonction pour incrémenter les quantitées
function decrementQuantity() {
  var quantityElement = this.parentNode.querySelector(".quantity");
  var quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    updateTotalPrice();
  }
}

// Fonction pour delete
function deleteItem() {
  var item = this.parentNode;
  item.parentNode.removeChild(item);
  updateTotalPrice();
}

// Fonction de mise à jour du prix total
function updateTotalPrice() {
  var quantities = document.getElementsByClassName("quantity");
  var prices = document.getElementsByClassName("price");
  var total = 0;
  for (var i = 0; i < quantities.length; i++) {
    var quantity = parseInt(quantities[i].textContent);
    var price = parseFloat(prices[i].textContent.substring(1));
    total += quantity * price;
  }
  var totalPriceElement = document.getElementById("totalPrice");
  totalPriceElement.textContent = "Total Price: $" + total.toFixed(2);
}

function toggleLike() {
  this.classList.toggle("heart-liked");
}

// changer couleur de bouton heart
var myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {
  myButton.classList.add("clicked");
});

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("totalPrice").textContent = "Total Price: $0.00";
  updateTotalPrice(); // Appel à la fonction pour mettre à jour le total price initial
});
