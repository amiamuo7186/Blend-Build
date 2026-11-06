
const info = document.getElementById("Informations")
const caract = document.getElementById("Caractéristiques")
const recup = document.getElementById("recapitalatif")
const next1 = document.getElementById("next1")
const base = document.getElementById("base")
const prixb = document.getElementById("PrixB")
const img = document.getElementById("img")
const existeP = document.getElementById("existeP")
const Promo = document.getElementById("Promo")
const previous2 = document.getElementById("previous2")
const reduction = document.getElementById("reduction")
const datF = document.getElementById("dateF")
const Origine = document.getElementById("Origine")
const next2 = document.getElementById("next2")
const labelTemp = document.getElementById("tempe")
const labelTaile = document.getElementById("taille")
const labelLait = document.getElementById("lait")
const labelSuplement = document.getElementById("supplements")
const previous3 = document.getElementById("previous3")
const partie2 = document.getElementById("2")
const partie3 = document.getElementById("3")
const description = document.getElementById("des")
const intensité = document.getElementById("niveaIntensite")
let data = [];
let Products = {};
// console.log(data)
// console.log(Products)
// console.log(next1)
// console.log(base)
//  *************** validation des Information Generale *************
const msg = document.createElement("p")
msg.style.color = "red";
msg.textContent = "veuiller entrer une image valide  "

const msg1 = document.createElement("p")
msg1.style.color = "red";
msg1.textContent = "veuiller entrer une base  valide "

const msg2 = document.createElement("p")
msg2.style.color = "red";
msg2.textContent = "veuiller entrer un prix valide "

const msg3 = document.createElement("p")
msg3.style.color = "red";
msg3.textContent = "veuiller entrer un pourcentage de reduction  valide "

const msg4 = document.createElement("p")
msg4.style.color = "red";
msg4.textContent = "veuiller entrer une date  valide "

const msg5 = document.createElement("p")
msg5.style.color = "red";
msg5.textContent = "veuiller choisir une option   valide "


const msg6 = document.createElement("p")
msg6.style.color = "red";
msg6.textContent = "veuiller choisir un choix   valide "

const msg7 = document.createElement("p")
msg7.style.color = "red";
msg7.textContent = "veuiller choisir une taille   valide "

const msg8 = document.createElement("p")
msg8.style.color = "red";
msg8.textContent = "veuiller choisir un lait valide  "

const msg9 = document.createElement("p")
msg9.style.color = "red";
msg9.textContent = "veuiller choisir un supplement valide  "

next1.addEventListener("click", function () {
    let valeurDesc = description.value
    console.log(valeurDesc)
    let valeurRed = reduction.value
    let valeurN = base.value
    let valeurP = prixb.value
    let valeurImg = img.value
    let valeurDate = new Date(datF.value)
    // console.log(valeurDate);

    // console.log(validateBase(valeurN))
    if (!validateBase(valeurN)) {
        base.style.borderColor = "red"
        const parentB = base.parentElement
        parentB.insertBefore(msg1, base.nextSibling)
    }
    else {
        base.style.borderColor = "green"
        msg1.remove();
        Products.base = valeurN;
        // console.log( Products)

    }
    if (!validatePrix(valeurP)) {
        prixb.style.borderColor = "red"
        const parentP = prixb.parentElement
        parentP.insertBefore(msg2, prixb.nextSibling)
    }
    else {
        prixb.style.borderColor = "green"
        msg2.remove();
        Products.prix = valeurP;
    }
    if (!validateImg(valeurImg)) {
        img.style.borderColor = "red"
        const parentI = img.parentElement
        parentI.insertBefore(msg, img.nextSibling)
    }
    else {
        img.style.borderColor = "green"
        msg.remove();
        Products.image = valeurImg

    }
      console.log(valeurDesc!="")
           if(valeurDesc!=""){
            console.log("hi")
            Products.description = valeurDesc
            console.log(Products.description)
           }
    Promos()
    function Promos() {
        let ok = true
        if (existeP.checked) {
            // console.log("hi")
            if (!validatePr(valeurRed)) {
                reduction.style.borderColor = "red"
                const parentI = reduction.parentElement
                parentI.insertBefore(msg3, reduction.nextSibling)
                ok = false
            }
            else {
                reduction.style.borderColor = "green"
                msg3.remove();
                Products.reduction = valeurRed
                ok = true;

            }
            //  console.log(valeurDate);

            if (!validateDate(valeurDate)) {
                datF.style.borderColor = "red"
                const parentI = datF.parentElement
                parentI.insertBefore(msg4, datF.nextSibling)
                ok = false
            }
            else {
                datF.style.borderColor = "green"
                msg4.remove();
                Products.dateFin = valeurDate
                ok = true

            }
          


        }
        return ok

    }
    //  console.log(ok)


    if (validateBase(valeurN) && validatePrix(valeurP) && validateImg(valeurImg) && Promos()) {
        info.hidden = true
        caract.hidden = false

        partie2.classList.add("Style-Number")


    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Verifier les champs ",
        });
    }
    // data.push(Products)
    console.log(Products)
})
function validateDate(valeur) {
    const now = new Date()

    if (now < valeur) {

        return true
    }
    else {
        return false
    }
}
function validateBase(valeur) {

    if (/^[a-zA-ZÀ-ÿ\s'-]{2,50}$/.test(valeur)) {
        return true
    }
    else {
        return false
    }
}
function validatePrix(valeur) {

    if ((/^\d+(\.\d{1,2})?$/.test(valeur)) && valeur > 0) {
        return true
    }
    else {
        return false
    }
}
function validateImg(valeur) {

    if (/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(valeur)) {
        return true
    }
    else {
        return false
    }
}
function validatePr(valeur) {
    if (valeur >= 10 && valeur <= 100) {
        return true
    }
    else {
        return false
    }
}
existeP.addEventListener("click", function () {
    Promo.classList.toggle("hidden")

})
previous2.addEventListener("click", function () {
    info.hidden = false
    caract.hidden = true
    partie2.classList.remove("Style-Number")

})

//  *************** Caractéristiques & Options *************
next2.addEventListener("click", function () {
    let niveauIn = intensité.value
    console.log(niveauIn)
    const tempe = document.querySelector('input[name="temp"]:checked')
    const taille = document.querySelectorAll('input[ name="taille"]:checked')
    const lait = document.querySelectorAll('input[name="lait"]:checked')
    const suplement = document.querySelectorAll('input[name="supplements"]:checked')
    valeurOr = Origine.value
    function origine() {
        if (valeurOr == "") {
            Origine.style.borderColor = "red"
            const parentI = Origine.parentElement
            parentI.insertBefore(msg5, Origine.nextSibling)
            return false
        }
        else {
            Origine.style.borderColor = "green"
            msg5.remove();
            Products.origine = valeurOr;
            return true

        }
    }
    origine()

    // console.log(tempe)
    function temperature() {
        if (tempe == null) {
            const parentI = labelTemp.parentElement
            parentI.insertBefore(msg6, labelTemp.nextSibling)
            return false
        }
        else {
            msg6.remove();
            Products.temperature = tempe.value
            return true
        }
    }
    temperature()
    function tailles() {
        const tabTaille = []
        if (taille.length == 0) {

            const parentI = labelTaile.parentElement
            parentI.insertBefore(msg7, labelTaile.nextSibling)
            return false
        }
        else {
            msg7.remove();
            taille.forEach(t => {
                tabTaille.push(t.value)
                Products.taille = tabTaille
            });
            // console.log(tabTaille)

            return true
        }
    }
    tailles()
    function laits() {
        const tabLait = []
        if (lait.length == 0) {
            const parentI = labelLait.parentElement
            parentI.insertBefore(msg8, labelLait.nextSibling)
            return false
        }
        else {
            msg8.remove();
            lait.forEach(l => {
                tabLait.push(l.value)
                Products.lait = tabLait
            })

            return true
        }
    }
    laits()
    function supplements() {
        const tabSupplement = []
        if (suplement.length == 0) {
            const parentI = labelSuplement.parentElement
            parentI.insertBefore(msg9, labelSuplement.nextSibling)
            return false
        }
        else {
            msg9.remove();
            suplement.forEach(s => {
                tabSupplement.push(s.value)
                Products.suplement = tabSupplement
            })


            return true
        }

    }
    supplements()
    Products.niveauIntensité = niveauIn
    if (origine() && temperature() && tailles() && laits() && supplements()) {
        caract.hidden = true;
        recup.hidden = false;
        partie3.classList.add("Style-Number")
        console.log(Products)
        // data.push(Products)
        // console.log(Products)
        console.log(data)
        function afficherObjet(obj) {
           
            


        const resume = document.getElementById("resume");

            resume.innerHTML = `
        <h2>Résumé de la commande</h2>

        <img src="${obj.image}" alt="Image du produit" width="150">
        

        <p><strong>Base :</strong> ${obj.base}</p>
        <p><strong>Prix :</strong> ${obj.prix} DH</p>
        <p><strong>Origine :</strong> ${obj.origine}</p>
        <p><strong>Température :</strong> ${obj.temperature}</p>

        <p><strong>Lait :</strong> ${obj.lait}</p>
        <p><strong>Suppléments :</strong> ${obj.suplement}</p>
        <p><strong>Taille :</strong> ${obj.taille}</p>
       
    `; 
    console.log(obj.description)
     if((obj.description )){
                const desc=document.getElementById("desc")
                desc.innerHTML=`<p><strong>Description:</strong>${obj.description}</p>`
            }
            console.log (desc.textContent)
            if (existeP.checked) {
                const promotions = document.getElementById("promotions")
                promotions.innerHTML = `
                     <h3> Promotions :</h3>
                  <p><strong>Pourcentage de reduction:</strong> ${obj.reduction}%</p>
                  <p><strong>Date de Fin:</strong>${obj.dateFin.toDateString()}</p>
        `
            }
        }


        afficherObjet(Products);
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Verifier les champs ",
        });
    }



})
previous3.addEventListener("click", function () {
    caract.hidden = false
    recup.hidden = true
    partie3.classList.remove("Style-Number")
    data.pop()
    console.log(data)

})
