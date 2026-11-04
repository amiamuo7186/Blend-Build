
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
    let valeurRed = reduction.value
    let valeurN = base.value
    let valeurP = prixb.value
    let valeurImg = img.value
    let valeurDate = new Date(datF.value)
    // console.log(validateBase(valeurN))
    if (!validateBase(valeurN)) {
        base.style.borderColor = "red"
        const parentB = base.parentElement
        parentB.insertBefore(msg1, base.nextSibling)
    }
    else {
        base.style.borderColor = "green"
        const parentB = base.parentElement
        parentB.remove(msg, base.nextSibling)
    }
    if (!validatePrix(valeurP)) {
        prixb.style.borderColor = "red"
        const parentP = prixb.parentElement
        parentP.insertBefore(msg2, prixb.nextSibling)
    }
    if (!validateImg(valeurImg)) {
        img.style.borderColor = "red"
        const parentI = img.parentElement
        parentI.insertBefore(msg, img.nextSibling)
    }
    Promos()
    function Promos() {
        let ok = true
        if (existeP.checked) {
            console.log("hi")
            if (!validatePr(valeurRed)) {

                reduction.style.borderColor = "red"
                const parentI = reduction.parentElement
                parentI.insertBefore(msg3, reduction.nextSibling)
                ok = false
            }
            if (!validateDate(valeurDate)) {
                datF.style.borderColor = "red"
                const parentI = datF.parentElement
                parentI.insertBefore(msg4, datF.nextSibling)
                ok = false
            }

            console.log(ok)

        }
        return ok

    }
    //  console.log(ok)


    if (validateBase(valeurN) && validatePrix(valeurP) && validateImg(valeurImg) && Promos()) {
        info.hidden = true
        caract.hidden = false
    }
     else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Verifier les champs ",
        });
    }

})
function validateDate(valeur) {
    const now = new Date()
    if (now > valeur) {
        console.log(hi)
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
})
//  *************** Caractéristiques & Options *************
next2.addEventListener("click", function () {
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
            msg5.textContent = ""
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
            msg6.textContent = ""
            return true
        }
    }
    temperature()
    function tailles() {
        if (taille.length == 0) {

            const parentI = labelTaile.parentElement
            parentI.insertBefore(msg7, labelTaile.nextSibling)
            return false
        }
        else {
            msg7.textContent = ""
            return true
        }
    }
    tailles()
    function laits() {
        if (lait.length == 0) {
            const parentI = labelLait.parentElement
            parentI.insertBefore(msg8, labelLait.nextSibling)
            return false
        }
        else {
            msg8.textContent = ""
            return true
        }
    }
    laits()
    function supplements() {
        if (suplement.length == 0) {
            const parentI = labelSuplement.parentElement
            parentI.insertBefore(msg9, labelSuplement.nextSibling)
            return false
        }
        else {
            msg9.textContent = ""
            return true
        }
    }
    supplements()
    if (origine() && temperature() && tailles() && laits() && supplements()) {
        caract.hidden = true;
        recup.hidden = false;
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
})
