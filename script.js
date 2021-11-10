function reponse() {
  let qest2 = document.getElementById("qest2").value
  document.getElementById("box3").style.display = "none";
  document.getElementById("box4").style.display = "none";
  document.getElementById("box5").style.display = "none";
  document.getElementById("box6").style.display = "none";
  document.getElementById("box7").style.display = "none";
  document.getElementById("box8").style.display = "none";
  document.getElementById("box9").style.display = "none";
  document.getElementById("box10").style.display = "none";
  document.getElementById("box11").style.display = "none";

   if (qest2 == 01) {
        document.getElementById("box3").style.display = "flex";
    }
    else if (qest2 == 02) {
        document.getElementById("box4").style.display = "flex";
    }
    else if (qest2 == 03) {
        document.getElementById("box5").style.display = "flex";
    }
    else if (qest2 == 04) {
        document.getElementById("box6").style.display = "flex";
    }
    else if (qest2 == 05) {
        document.getElementById("box7").style.display = "flex";
    }
    else if (qest2 == 06) {
        document.getElementById("box8").style.display = "flex";
    }
    else if (qest2 == 07) {
        document.getElementById("box9").style.display = "flex";
    }
    else if (qest2 == 08) {
        document.getElementById("box10").style.display = "flex";
    }
    else if (qest2 == 09) {
        document.getElementById("box11").style.display = "flex";
    }
}
function calculer() {
    //Surface d'habitation en Metre carré
let surface = document.getElementById("surface").value;
//Ancienneté du batiment/ Date de construction : 01 = Avant 1970 (Ancien) , 02 = entre 1970 et 2000 (semi-récent) , 03 = après 2000 (récent)
let dateBat = document.getElementById("qest1").value;
//Corps d'état/ Type de travaux : 01 = Démolition , 02 = Cloisonnement , 03 = Electricité , 04 = Salle de bain 
let typeTravaux = document.getElementById("qest2").value;
// Réponse / niveau de travaux : 01 = travaux léger , 02 = travaux lourd sur l'existant, 04 = From scratch
let nivTravaux = document.getElementById("qest3").value;
// Variable dans le html "traduit" dans les variables explicites JS
// let qest1 = 01
// let qest2 = 01
// let qest3 = 01
// dateBat = qest1
// typeTravaux = qest2
// nivTravaux = qest3
//Fenetre standards et spécifiques
let nomb_fen_st = document.getElementById("nfst");
let nomb_fen_spe = document.getElementById("nfsp");


//let reponse = ""
let prixUnitaire = 0
let margeBenefice = 1.3
let prix = 0
let tva = 1.1
let typeCout = ""

// Type Travaux Démolition 
if (typeTravaux == 01){
    typeCout = "Démolition"
  
    if(nivTravaux == 01) {
        if(dateBat == 01) {
            prixUnitaire = 1000
            prix = prixUnitaire * margeBenefice * tva
            
        }
        if(dateBat == 02) {
            prixUnitaire = 750
            prix = prixUnitaire * margeBenefice * tva
        }
        if(dateBat == 03) {
            prixUnitaire = 500
            prix = prixUnitaire * margeBenefice * tva
        }
    } else if (nivTravaux == 02){
        if(dateBat == 01) {
            prixUnitaire = 40
            prix = prixUnitaire * margeBenefice * tva * surface
        }
        if(dateBat == 02) {
            prixUnitaire = 30
            prix = prixUnitaire * margeBenefice * tva * surface
        }
        if(dateBat == 03) {
            prixUnitaire = 20
            prix = prixUnitaire * margeBenefice * tva * surface 
        }
    }else if (nivTravaux == 03){
        if(dateBat == 01) {
            prixUnitaire = 60
            prix = prixUnitaire * margeBenefice * tva * surface
        }
        if(dateBat == 02) {
            prixUnitaire = 50
            prix = prixUnitaire * margeBenefice * tva * surface 
        }
        if(dateBat == 03) {
            prixUnitaire = 40
            prix = prixUnitaire * margeBenefice * tva * surface
        }
    }

    //Type de travaux cloisonnement
} else if (typeTravaux == 02) {
    typeCout = "Cloisonnement"
    if(nivTravaux == 01) {
        if(dateBat == 01) {
            prixUnitaire = 1800
            prix = prixUnitaire * margeBenefice * tva
           
        }
        if(dateBat == 02) {
            prixUnitaire = 1600
            prix = prixUnitaire * margeBenefice * tva
        }
        if(dateBat == 03) {
            prixUnitaire = 1400
            prix = prixUnitaire * margeBenefice * tva
        }
    } else if (nivTravaux == 02){
        if(dateBat == 01) {
            prixUnitaire = 60
            prix = prixUnitaire * margeBenefice * tva * surface
        }
        if(dateBat == 02) {
            prixUnitaire = 55
            prix = prixUnitaire * margeBenefice * tva * surface
        }
        if(dateBat == 03) {
            prixUnitaire = 50
            prix = prixUnitaire * margeBenefice * tva * surface 
        }
    }else if (nivTravaux == 03){
        if(dateBat == 01) {
            prixUnitaire = 90
            prix = prixUnitaire * margeBenefice * tva * surface
        }
        if(dateBat == 02) {
            prixUnitaire = 80
            prix = prixUnitaire * margeBenefice * tva * surface 
        }
        if(dateBat == 03) {
            prixUnitaire = 70
            prix = prixUnitaire * margeBenefice * tva * surface
        }
    }
    //Type de travaux Electricité
} else if (typeTravaux == 03) {
    if(nivTravaux == 01) {
        if(dateBat == 01) {
            prixUnitaire = 1800
            prix = prixUnitaire * margeBenefice * tva
        }
        if(dateBat == 02) {
            prixUnitaire = 1600
            prix = prixUnitaire * margeBenefice * tva
        }
        if(dateBat == 03) {
            prixUnitaire = 1400
            prix = prixUnitaire * margeBenefice * tva
        }
    } else if (nivTravaux == 02){
        if(dateBat == 01) {
            prixUnitaire = 60
            prix = prixUnitaire * margeBenefice * tva * surface
        }
        if(dateBat == 02) {
            prixUnitaire = 55
            prix = prixUnitaire * margeBenefice * tva * surface
        }
        if(dateBat == 03) {
            prixUnitaire = 50
            prix = prixUnitaire * margeBenefice * tva * surface 
        }
    }else if (nivTravaux == 03){
        if(dateBat == 01) {
            prixUnitaire = 90
            prix = prixUnitaire * margeBenefice * tva * surface
        }
        if(dateBat == 02) {
            prixUnitaire = 80
            prix = prixUnitaire * margeBenefice * tva * surface 
        }
        if(dateBat == 03) {
            prixUnitaire = 70
            prix = prixUnitaire * margeBenefice * tva * surface
        }
    }
  
}


let res = document.getElementById("box12");
res.style.display = "flex";
let h2 = document.createElement("h2");
let cout = document.createElement("h2");
cout.innerText = Math.round(prix) + " €";
h2.innerText = "Coût total des travaux suivant : " + typeCout;
res.appendChild(h2);
res.appendChild(cout);
prix = 0
}