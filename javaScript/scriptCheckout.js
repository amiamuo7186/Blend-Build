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
 let coffeChoisi={
  id:null,
  name:null,
  price:null,
  quantity:null,
  image:null,
}
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
    total.textContent=` Total : ${price} DH`
 
}
calculerTotale(coffeeCart)


let augmenter = document.querySelectorAll(".augmenter");
let quantites = document.querySelectorAll(".quantite");
let prix=document.querySelectorAll(".price")

let diminuer = document.querySelectorAll(".diminuer");

function augmenterQuantite(i) {
    coffeeCart[i].quantity++;

    quantites[i].textContent = "Quantity: " + coffeeCart[i].quantity;

    prix[i].textContent = `Price: ${
        coffeeCart[i].quantity * coffeeCart[i].price
    } DH`;

    calculerTotale(coffeeCart);
}
function diminuerQuantite(i) {
    if (coffeeCart[i].quantity > 1) {
        coffeeCart[i].quantity--;

        quantites[i].textContent = "Quantity: " + coffeeCart[i].quantity;

        prix[i].textContent = `Price: ${
            coffeeCart[i].quantity * coffeeCart[i].price
        } DH`;

        calculerTotale(coffeeCart);
    }
}
for (let i = 0; i < augmenter.length; i++) {

    augmenter[i].addEventListener("click", function () {
        augmenterQuantite(i);
        console.log(augmenter);
    });

    diminuer[i].addEventListener("click", function () {
        diminuerQuantite(i);
        
    });

}
// modal 
const dialog = document.getElementById("myDialog"); 
const ajout=document.querySelector(".ajoute")
const chercher=document.getElementById("chercher")
const results=document.getElementById("results")
ajout.addEventListener("click",function(){
  
  dialog.show();
})
chercher.addEventListener("input", function () {
const valeur = chercher.value.toLowerCase()
let coffeedemande=coffeeProducts.filter(coffe=>coffe.name.toLowerCase().includes(valeur) )
results.innerHTML= "" // pour vider result apres chaque input
// traiter le cas de input vide 
if (valeur==""){
  coffeedemande=[]
  results.innerHTML = "<p>choisir un choix .</p>";
} 

coffeedemande.forEach(coffee => {

        results.innerHTML += `
            <div class="product"> 
                <h5>${coffee.name}</h5>
                <p>${coffee.price.toFixed(2)} DH</p>
                <button class="ajout" data-id="${coffee.id}">add 
                </button>
            </div>
              `;
         });

         // traitement de choix 
        const add=document.querySelectorAll(".ajout")
        for (let i =0;i<add.length;i++){
          add[i].addEventListener("click",function(){
            dialog.close();
          let idChoisi=add[i].dataset.id
          const Existe = coffeeCart.find(coffee => coffee.id === idChoisi)??false;
          // console.log(Existe)
        if (Existe) {
            console.log(Existe)
              
                // console.log (commandes)
               for(let i=0;i<coffeeCart.length;i++){
               if(idChoisi==coffeeCart[i].id){
               coffeeCart[i].quantity++;
               quantites[i].textContent = "Quantity: " + coffeeCart[i].quantity;
                prix[i].textContent= `Price:  ${coffeeCart[i].quantity*coffeeCart[i].price}DH `
                  calculerTotale(coffeeCart) 
              }
              }  
          }
         else{
            let nouveauProduit = coffeeProducts.find(coffee => coffee.id === idChoisi);
            console.log(nouveauProduit);
            coffeChoisi = {
                id: nouveauProduit.id,
                name: nouveauProduit.name,
                price: nouveauProduit.price,
                quantity: 1,
                image: nouveauProduit.image};
                coffeeCart.push( coffeChoisi)
                commandes.forEach(element => {
                  element.innerHTML=" "
                });  // pour vider la listes 
               coffeeCart.forEach(coffee => {             
                for(let i=0;i<commandes.length;i++){
               commandes[i].innerHTML = commandes[i].innerHTML + `
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
           
            augmenter = document.querySelectorAll(".augmenter");
            quantites = document.querySelectorAll(".quantite");
            prix=document.querySelectorAll(".price")
            diminuer = document.querySelectorAll(".diminuer");  
           for (let i = 0; i < augmenter.length; i++) {

                augmenter[i].addEventListener("click", function () {
                    augmenterQuantite(i);
                    console.log(augmenter);
                });

                diminuer[i].addEventListener("click", function () {
                    diminuerQuantite(i);
                    
                });

            }
              } 
     });
        }
        
     })         
      

  
  
