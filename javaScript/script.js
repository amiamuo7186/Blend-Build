
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
          lait[5].innerHTML=config.lait.amande.price;
          supplements[0].innerHTML=config.supplements.caramel.name;
          supplements[1].innerHTML=config.supplements.caramel.price;
          supplements[2].innerHTML=config.supplements.vanille.name;
          supplements[3].innerHTML=config.supplements.vanille.price;


// const radios = document.querySelectorAll('input[name="base"]');
// radios.forEach(radio => {
//     radio.addEventListener("change", function () {
//         const selectedRadio = getSelectedRadio();
//     console.log(selectedRadio);
        
//     });
// });

const panier = {} 

function getSelected(inputs) {
    for (const radio of inputs) {
        if (radio.checked) {
            return radio.nextElementSibling.nextElementSibling.textContent.trim();
        }
    }
    return null;
}

function setupGroup(nom) {
    const inputs = document.querySelectorAll(`input[name="${nom}"]`);
    inputs.forEach(input => {
        input.addEventListener("change", () => {
            const selected = getSelected(inputs);
            
            console.log(nom, selected);
        });
    });
}   

setupGroup("base");
setupGroup("taille");
setupGroup("lait");
setupGroup("supplément");

     