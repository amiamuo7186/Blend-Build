const config = {
  base: {
    espresso: { name: "Espresso-latte", price: 18 },
    filtre: { name: "Filtre", price: 16 }
  },
  taille: {
    s: { name: "S · 150 ml", price: 0 },
    m: { name: "M · 250 ml", price: 4 },
    l: { name: "L · 350 ml", price: 8 }
  },
  lait: {
    vache: { name: "Lait de vache", price: 0 },
    avoine: { name: "Lait d'avoine", price: 4 },
    amande: { name: "Lait d'amande", price: 5 }
  },
  supplements: {
    caramel: { name: "Caramel", price: 3 },
    vanille: { name: "Vanille", price: 3 }
  }
};
let price=0;
let count=0;
const Conteur=document.querySelector("#Conteur")
const Prix=document.querySelectorAll(".Prix")
Prix[0].innerHTML=("0.00DH")
Prix[1].innerHTML=("0.00DH")
const Base = document.querySelector(".Base");
const Taille=document.querySelector(".Taille");
const Lait=document.querySelector(".Lait");
const Supplements=document.querySelector(".Supplément");
const base=Base.querySelectorAll("span")
const taille=Taille.querySelectorAll("span")
const lait=Lait.querySelectorAll("span")
const supplements=Supplements.querySelectorAll("span")

          base[0].innerHTML=config.base.espresso.name;
          base[1].innerHTML=config.base.espresso.price;
          base[2].innerHTML=config.base.filtre.name;
          base[3].innerHTML=config.base.filtre.price;
          taille[0].innerHTML=config.taille.s.name;
          taille[1].innerHTML=config.taille.s.price;
          taille[2].innerHTML=config.taille.m.name;
          taille[3].innerHTML=config.taille.m.price;
          taille[4].innerHTML=config.taille.l.name;
          taille[5].innerHTML=config.taille.l.price
          lait[0].innerHTML=config.lait.vache.name;
          lait[1].innerHTML=config.lait.vache.price;
          lait[2].innerHTML=config.lait.avoine.name;
          lait[3].innerHTML=config.lait.avoine.price;
          lait[4].innerHTML=config.lait.amande.name;
          lait[5].innerHTML=config.lait.amande.price ;
          supplements[0].innerHTML=config.supplements.caramel.name;
          supplements[1].innerHTML=config.supplements.caramel.price;
          supplements[2].innerHTML=config.supplements.vanille.name;
          supplements[3].innerHTML=config.supplements.vanille.price;
// calculer le prix 
function calculerP(nom){
    const PrixB = document.querySelectorAll(`input[name="${nom}"]`);
      PrixB.forEach(radio => {
      radio.addEventListener("change", function () {
      if(nom==="supplements" && radio.checked ){
      PrixGlobale[radio.id] =config[radio.name][radio.id];
       }
      else if(nom==="supplements" && !radio.checked){
       PrixGlobale[radio.id] =null  
      }
      else{
       PrixGlobale[nom] =config[radio.name][radio.id];
      }
        
       PrixTotale(PrixGlobale) 
      });
});
}

const PrixGlobale={
  base:null,
  taille:null,
  lait:null,
  vanille:null,
  caramel:null
}
calculerP("base")
calculerP("taille")
calculerP("lait")
calculerP("supplements")
function PrixTotale(obj){
  
  let total =0;
  for(key in obj){
    if(obj[key]!==null){
         total+=obj[key].price;
          

      }
    }
    Prix[0].innerHTML=`${total}.00 DH`
          Prix[1].innerHTML=`${total}.00 DH`
    // le tickets 
    const tickets=document.querySelectorAll(".tickets")
    const keys = Object.keys(PrixGlobale)
    const PrixTic=document.querySelectorAll(".priceTickets") 
    console.log(PrixTic)
    for (let i =0;i<tickets.length;i++) {
      tickets[i].innerHTML=PrixGlobale[keys[i]]?.name ?? "";
    }
    for (let j =0;j<PrixTic.length;j++) {
      PrixTic[j].innerHTML=`${PrixGlobale[keys[j]]?.price ?? ""}`
    }
    Conteur.innerHTML=count+1
  }
 // passer a l'autre page  
const heroSection = document.querySelector(".hero_section")
const factureSection=document.querySelector(".facture_section ")   
document.addEventListener("click",(e)=>{
    if ((e.target.classList.contains("next"))){
        heroSection.classList.add("hidden")
        factureSection.classList.remove("hidden")
    }
    if ((e.target.classList.contains("previous"))){
        factureSection.classList.add("hidden")
        heroSection.classList.remove("hidden")
    }
})
//

