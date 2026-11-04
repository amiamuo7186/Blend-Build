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
console.log(next1)
console.log(base)

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
                // ok=false
            }
            if (!validateDate(valeurDate)) {
                datF.style.borderColor = "red"
                const parentI = datF.parentElement
                parentI.insertBefore(msg4, datF.nextSibling)
                // ok=false
            }
            ok = !validatePr(valeurRed) && !validateDate(valeurDate)
            console.log(ok)
            return ok
        }


    }
    //  console.log(ok)


    if (validateBase(valeurN) && validatePrix(valeurP) && validateImg(valeurImg) && Promos()) {
        info.hidden = true
        caract.hidden = false
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