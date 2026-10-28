// 1. Le tableau global (Catalogue complet incluant les accessoires)
const coffeeProducts = [
  { id: "c1", name: "Espresso Intense", category: "Base", price: 2.50, image: "espresso.jpg" },
  { id: "c2", name: "Cappuccino Mousseux", category: "Classique", price: 4.00, image: "cappuccino.jpg" },
  { id: "c3", name: "Latte Caramel", category: "Gourmand", price: 4.50, image: "latte.jpg" },
  { id: "c4", name: "Flat White", category: "Classique", price: 3.80, image: "flatwhite.jpg" },
  { id: "c5", name: "Iced Matcha Latte", category: "Froid", price: 5.00, image: "matcha.jpg" },
  { id: "c6", name: "Cold Brew", category: "Froid", price: 4.20, image: "coldbrew.jpg" },
  { id: "c7", name: "Cookie Pépites", category: "Snack", price: 2.00, image: "cookie.jpg" },
  { id: "c8", name: "Mug Isotherme Noir", category: "Accessoire", price: 15.00, image: "mug.jpg" },
  { id: "c9", name: "Filtres Papier V60 (x100)", category: "Accessoire", price: 6.50, image: "filters.jpg" },
  { id: "c10", name: "Tote Bag 'Coffee Lover'", category: "Accessoire", price: 12.00, image: "totebag.jpg" }
];

// 2. Le tableau des produits dans le panier par défaut (avec un accessoire)
let coffeeCart = [
  { id: "c2", name: "Cappuccino Mousseux", price: 4.00, quantity: 2, image: "../assets/CappuccinoMousseux.jpg " },
  { id: "c3", name: "Latte Caramel", price: 4.50, quantity: 1, image: "../assets/LatteCaramel.png " },
  { id: "c8", name: "Mug Isotherme Noir", price: 15.00, quantity: 1, image: "../assets/MugIsothermeNoir.png" }
];
// remplir le panier d'apres data 
const commandes=document.querySelectorAll(".commandes")
coffeeCart.forEach(coffee => {
    for(let i=0;i<commandes.length;i++){
        commandes[i].innerHTML += `
    <div class="horizontale" data-id="${coffee.id}">
      <img src="${coffee.image}" alt="${coffee.name}">
      <div class="vertical">
        <h3>${coffee.name}</h3>
      </div>
      <div class="vertical">
        <div class="horizontale">
          <button type="button" class="augmenter">+</button>

          <span class="quantite">Quantity: ${coffee.quantity}</span>

          <button type="button" class="diminuer">-</button>
        </div>

        <h4 class="price">Price: ${(coffee.price * coffee.quantity)} DH</h4>
      </div>

    </div>
  `;
    }
  
});
// calculer le prix totale 
let total=document.getElementById("Total")
total.textContent="0.DH";
function calculerTotale(obj){
    let price=0
    for(let i=0;i< obj.length;i++){
        // console.log(price)
        price= price+(obj[i].price * obj[i].quantity)
        // console.log(price)
        
    }
    total.textContent=`${price}.DH`
 
}
calculerTotale(coffeeCart)
// augmentation 

const augmenter = document.querySelectorAll(".augmenter");
const quantites = document.querySelectorAll(".quantite");
const prix=document.querySelectorAll(".price")
for (let i = 0; i < augmenter.length; i++) {

    augmenter[i].addEventListener("click", function () {

        coffeeCart[i].quantity++;

        quantites[i].textContent = "Quantity: " + coffeeCart[i].quantity;
        console.log(Number((quantites[i])));
        console.log(quantites[i])
        console.log(coffeeCart[i].quantity)
        
        // calculerTotale(coffeeCart)^
        prix[i].textContent= `Price:  ${coffeeCart[i].quantity*coffeeCart[i].price}DH `
        calculerTotale(coffeeCart) 
    });

}
const diminuer=document.querySelectorAll(".diminuer")
for (let i = 0; i < augmenter.length; i++) {

    diminuer[i].addEventListener("click", function () {

        coffeeCart[i].quantity--;

        quantites[i].textContent = "Quantity: " + coffeeCart[i].quantity;
         prix[i].textContent= `Price:  ${coffeeCart[i].quantity*coffeeCart[i].price}DH `
         calculerTotale(coffeeCart)
         if(coffeeCart[i].quantity===0){
          // suprimer le choix 
         }
    });
}

// modal 
const dialog = document.getElementById("myDialog"); 
const ajout=document.querySelector(".ajout")
const ajouter=document.getElementById("ajouter")
const chercher=document.getElementById("chercher")
const results=document.getElementById("results")

ajout.addEventListener("click",function(){
  
  dialog.show();
})
ajouter.addEventListener("click",function(){
  dialog.close();
})
console.log(chercher.value)

chercher.addEventListener("input", function () {
const valeur = chercher.value.toLowerCase()
console.log(valeur)
let coffeedemande=coffeeProducts.filter(coffe=>coffe.name.toLowerCase().includes(valeur) )
console.log(coffeedemande);


coffeedemande.forEach(coffee => {

        results.innerHTML += `
            <div class="product">

                
                <h5>${coffee.name}</h5>

                <p>${coffee.price.toFixed(2)} DH</p>

                <button class="ajout" data-id="${coffee.id}">
                     add 
                </button>

            </div>
        `;

    });

    // Si aucun résultat
    if (coffeedemande.length === 0) {
        results.innerHTML = "<p>Aucun produit trouvé.</p>";
    }

  });