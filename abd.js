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
function updateTotal(button) {
  // Sélectionnez l'élément parent (item)
  var item = button.parentNode;

  // Sélectionnez l'élément de quantité et mettez à jour sa valeur
  var quantityElement = item.querySelector(".quantity");
  var quantity = parseInt(quantityElement.textContent);

  // Sélectionnez l'élément de prix et extrayez la première valeur
  var priceElement = item.querySelector(".price");
  var priceText = priceElement.textContent;
  var firstPrice = parseFloat(priceText.substring(1, priceText.indexOf(" ")));

  // Calculez le prix total
  var totalPrice = firstPrice * quantity;

  // Mettez à jour le champ de prix avec la nouvelle valeur
  priceElement.textContent = "$" + totalPrice.toFixed(3) + " DT";

  // Mettez à jour le prix total général
  updateTotalPrice();
}

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

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("totalPrice").textContent = "Total Price: $0.00";
  updateTotalPrice(); // Appel à la fonction pour mettre à jour le total price initial
});
function changeColor(button) {
  if (button.style.backgroundColor === "red") {
    button.style.backgroundColor = "transparent";
  } else {
    button.style.backgroundColor = "red";
  }
}
