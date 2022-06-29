//DEBUT ET FIN
const start = document.querySelector("#go"); //button pour la button commencer
const end = document.getElementById("quitter"); //button pour la button quitter
const retour = document.querySelector("#accueil");

//ACCUEIL PAGE 1 ET LES INPUTS
const accueil = document.querySelector(".Accueil"); //section de la page d'Accueil
const page1 = document.querySelector(".Page1"); //section de la page de questions
const fin = document.querySelector(".end"); //section de la page finale
const enterName = document.querySelector("#name"); //input d'input du nom
const enterMail = document.querySelector("#mail"); //champs d'input email

//LES MESSAGES D'ERREUR INPUT
const spanName = document.querySelector("#spanName"); //span pour gérer le message d'erreur nom
const spanMail = document.querySelector("#spanMail"); //span pour gérer le message d'erreur email

const quiz = document.querySelector("#quiz");
const evol = document.querySelector(".p2a");
const sec = document.querySelector(".sec");
const labels = document.querySelectorAll(".radio label");
const suivant = document.querySelector("#suivant");

//PAGE RESULTAT
const nomf = document.querySelector("#namef");
const mailf = document.querySelector("#mailf");
const point = document.querySelector("#obt");
const totalPoint = document.querySelector("#tot");

const assertions = document.querySelectorAll(".asr");

const nombreQ = document.getElementById("nbreq");

const imgEchec = document.querySelector(".svg2");
const imgReussite = document.querySelector(".svg");
const msg = document.querySelector(".felicitations");

let forward = 0; //forward va nous aider à incementer Nextquiz et autres choses

//Objest recupérations données utilisateurs

const util = {
  point: 0,
};

// TABLEAU DES QUESTIONS EN OBJET
const Mesquiz = [
  //Q1
  {
    question: "quel est le type de fichier JavaScript ?",
    reponse: [".jvs", ".jv", ".vs", ".js"],
    correct: 3,
  },
  //Q2
  {
    question: "Qui a inventé JavaScript ?",
    reponse: [
      "Douglas Crockford",
      "Sheryl San",
      "Brendan Eich",
      "Alexandre Chambu",
    ],
    correct: 2,
  },
  //Q3
  {
    question: "Quel balise utilisée pour lier JavaScript à HTML ?",
    reponse: ["<span>", "<html.js>", "<script>", "<input>"],
    correct: 2,
  },
  //Q4
  {
    question: "Que signifie isNaN ?",
    reponse: [
      "is not a number",
      "is no number",
      "is a number of number",
      "is not a net",
    ],
    correct: 0,
  },
  //Q5
      {
          question: 'Comment définir une fonction en JavaScript?',
          reponse: ['function maFonction{}()', 'maFonction function()[]', 'function maFonction(){}','pas de bonne réponse'],
          correct: 2
      },
  //Q6
      {
          question: 'Qui est le plus rapide, JavaScript ou ASP ?',
          reponse: ['Aucune bonne réponse', 'JavaScript', 'ASP','JavaScript et ASP'],
          correct: 1
      },
  //Q7
      {
          question: 'Qu\'est ce qu\'est JavaScript ?',
          reponse: ['un langage de programmation', 'une application mobile', 'un serveur internet','un ordinateur'],
          correct: 0
      },

  //Q8
      {
          question: 'Qu\'est ce qui n\'est pas une données natives exisatntes en JavaScript ?',
          reponse: ['String', 'Number', 'service','Boolean'],
          correct: 2
      },
  //Q9
      {
          question: 'Ceci est un tableau en JavaScript ?',
          reponse: ['var tab =[]', 'const log =()', 'var = tab=()','()=>[]'],
          correct: 0
      },
  //Q10
      {
          question: 'Avec qui deplacer un element miniscule vers le majuscule en JavaScript ?',
          reponse: ['Majacse', 'UpperMaj', 'Uppercose','toUpperCase'],
          correct: 3
      },
  //Q11
      {
          question: 'Que fait la fonction parsInt ?',
          reponse: ['Convertir des nombres en entier', 'Convertir une partie d\'un nombre', 'Changer les chiffres','Trover un intervalle'],
          correct: 0
      },
  //Q12
      {
          question: 'A quoi sert la méthode push en JavaScript ?',
          reponse: ['Pousser les élements', 'Classer un tableau', 'Insérer un élement à la fin d\'un tableau','Créer un tableau'],
          correct: 2
      },
  //Q13
      {
          question: 'A quoi sert la propriiété innerHTML en JavaScript ?',
          reponse: ['Changer l\'affichage', 'Modifier un contenu HTML', 'Insérer un élement HTML dans JavaScript','Charger le fichier HTML'],
          correct: 1
      },
  //Q14
      {
          question: 'Quel est le caractère d\'échappement en JavaScript ?',
          reponse: ['//', '/', '/',' \\'] ,
          correct: 3
      },
      //Q15
      {
          question: 'En JavaScript, à quoi sert le typeOf ?',
          reponse: ['Décrire le type de données', 'Signaler le modèle de données', 'Effacer les données','Changer le texte'] ,
          correct: 0
      },
];

//fonction pour les questions et les assertions

//Pour la première question

function nextQuestion(numQuest) {
  suivant.disabled = true;
  if (Mesquiz[numQuest]) {
    quiz.textContent = Mesquiz[numQuest].question;
    evol.textContent = `Question ${forward + 1}/15`;
    Mesquiz[numQuest].reponse.forEach((element, i) => {
      assertions[i].checked = false;
      labels[i].textContent = element;
    });
  }
}
//Evenement gestion de 'click' au depart

start.addEventListener("click", (e) => {
  e.preventDefault();
  second = 61;

  // rebours ()
  // timing()

  if (erreur() && erreurMail()) {
    accueil.style.display = "none";
    page1.style.display = "block";
    nextQuestion(forward);
  }
  //recup données fin
  util.nom = enterName.value;
  nomf.textContent = util.nom;

  util.email = enterMail.value;
  mailf.textContent = util.email;

  totalPoint.textContent = Mesquiz.length;
});
//RETOUR A LA PAGE D'ACCUEIL PAR QUITTER
end.addEventListener("click", (e) => {
  e.preventDefault();
  util.point = 0;
  util.nom = "";
  util.email = "";
  forward = 0;
  document.querySelector("#form1").reset();
  document.querySelector("#form2").reset();
  document.querySelector("#form3").reset();
  accueil.style.display = "block";
  page1.style.display = "none";
});

//evenement sur le boutton suivant

assertions.forEach((asr) => {
  asr.addEventListener("change", () => {
    suivant.disabled = false;
  });
});

//Evenement Fonction et Message erreur Nom

enterName.addEventListener("input", erreur);

function erreur() {
  if (enterName.value.length == 0) {
    spanName.innerText =
      "N'oubliez pas de renseigner votre nom avant de commencer le quiz";
    enterName.style.border = "1px solid red";
    return false;
  } else if (enterName.value.length < 2) {
    spanName.innerText = "Entrez un nom valide";
    enterName.style.border = "1px solid red";
    return false;
  } else {
    spanName.innerText = "";

    enterName.style.border = "1px solid green";
    return true;
  }
}

//Evenement Fonction et Message erreur Mail

enterMail.addEventListener("input", erreurMail);

function erreurMail() {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (enterMail.value.length == 0) {
    spanMail.innerText =
      "N'oubliez pas de renseigner votre mail avant de commencer le quiz";
    enterMail.style.border = "1px solid red";
    return false;
  }
  if (enterMail.value.match(mailformat)) {
    spanMail.innerText = "Mail valide";
    spanMail.style.color = "green";
    enterMail.style.border = "1px solid green";
    return true;
  } else {
    spanMail.innerText = "Entrez un mail valide";
    spanMail.innerText.style.color = "red";

    return false;
  }
}

// BUTTON SUIVANT ET EVENEMENT

suivant.addEventListener("click", () => {
  second = 61;
  // chrono = 10
  // timing()
  // rebours ()

  for (let i = 0; i < assertions.length; i++) {
    if (i == Mesquiz[forward].correct && assertions[i].checked) {
      util.point = util.point + 1;
    } else util.point;
  }

  if (forward == Mesquiz.length - 2) {
    suivant.innerText = "Terminer"; //je change le texte du bouton "suivant"
  } else if (forward == Mesquiz.length - 1) {
    accueil.style.display = "none";
    page1.style.display = "none";
    fin.style.display = "block";

    point.textContent = util.point; //on insère les points de l'utilisateur
    // util.point = 0 //on initialise le point d'utilisateur à zéro
    // if (util.point < Mesquiz.length / 2) {
    //     msg.innerHTML = 'Vous avez perdu :('

    // }
    // else {
    //     msg.innerHTML = 'Félicitations!!!'
    // }
    if (util.point < Mesquiz.length / 2) {
      imgReussite.innerHTML =
        '<svg width="114" height="110" viewBox="0 0 174 174" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M116.464 60.2891C116.464 59.5414 115.852 58.9297 115.105 58.9297L103.89 58.9807L86.9996 79.1164L70.1264 58.9977L58.8945 58.9467C58.1469 58.9467 57.5352 59.5414 57.5352 60.3061C57.5352 60.6289 57.6541 60.9348 57.858 61.1897L79.9648 87.5275L57.858 113.848C57.6527 114.097 57.5388 114.409 57.5352 114.732C57.5352 115.48 58.1469 116.091 58.8945 116.091L70.1264 116.04L86.9996 95.9047L103.873 116.023L115.088 116.074C115.835 116.074 116.447 115.48 116.447 114.715C116.447 114.392 116.328 114.086 116.124 113.831L94.0514 87.5105L116.158 61.1727C116.362 60.9348 116.464 60.6119 116.464 60.2891Z" fill="#FF3838"/><path d="M87 11.0469C44.9613 11.0469 10.875 45.1332 10.875 87.1719C10.875 129.211 44.9613 163.297 87 163.297C129.039 163.297 163.125 129.211 163.125 87.1719C163.125 45.1332 129.039 11.0469 87 11.0469ZM87 150.383C52.098 150.383 23.7891 122.074 23.7891 87.1719C23.7891 52.2699 52.098 23.9609 87 23.9609C121.902 23.9609 150.211 52.2699 150.211 87.1719C150.211 122.074 121.902 150.383 87 150.383Z" fill="#FF3838"/></svg>';
    }
  } else {
    suivant.innerText = "Suivant";
  }

  if (forward <= Mesquiz.length - 1) {
    nextQuestion(++forward);
  }
});

retour.addEventListener("click", (e) => {
  util.point = 0;
  util.nom = "";
  util.email = "";
  document.querySelector("#form1").reset();
  document.querySelector("#form2").reset();
  document.querySelector("#form3").reset();

  accueil.style.display = "block";
  page1.style.display = "none";
  fin.style.display = "none";
  forward = 0;
});

const prog = document.querySelector("#prog");

// function rebours () {
let second = 60;
let secint = setInterval(() => {
    condition()
  
}, 1000);

// }
function condition() {
    if (second >= 0 && page1.style.display == "block") {
        second--;
        if (second <= 30) {
          sec.style.backgroundcolor = 'yellow';
        }
        sec.innerHTML = second;
        prog.value = second;
      }
      if (second < 0) {
        nextQuestion(++forward);
        second = 60;
        sec.innerHTML = second;
        prog.value = second;
        util.point;
      }
    
      if (forward == Mesquiz.length - 1) {
        suivant.innerText = "Terminer"; //je change le texte du bouton "suivant"
      } else if (forward > Mesquiz.length - 1) {
        accueil.style.display = "none";
        page1.style.display = "none";
        fin.style.display = "block";
    
        point.textContent = util.point; //on insère les points de l'utilisateur
        // util.point = 0 //on initialise le point d'utilisateur à zéro
        // if (util.point < Mesquiz.length / 2) {
        //     msg.innerHTML = 'Vous pouvez faire mieux :('
    
        // }
        // else {
        //     msg.innerHTML = 'Félicitations!!!'
        // }
        if (util.point < Mesquiz.length / 2) {
          imgReussite.innerHTML =
            '<svg width="114" height="110" viewBox="0 0 174 174" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M116.464 60.2891C116.464 59.5414 115.852 58.9297 115.105 58.9297L103.89 58.9807L86.9996 79.1164L70.1264 58.9977L58.8945 58.9467C58.1469 58.9467 57.5352 59.5414 57.5352 60.3061C57.5352 60.6289 57.6541 60.9348 57.858 61.1897L79.9648 87.5275L57.858 113.848C57.6527 114.097 57.5388 114.409 57.5352 114.732C57.5352 115.48 58.1469 116.091 58.8945 116.091L70.1264 116.04L86.9996 95.9047L103.873 116.023L115.088 116.074C115.835 116.074 116.447 115.48 116.447 114.715C116.447 114.392 116.328 114.086 116.124 113.831L94.0514 87.5105L116.158 61.1727C116.362 60.9348 116.464 60.6119 116.464 60.2891Z" fill="#FF3838"/><path d="M87 11.0469C44.9613 11.0469 10.875 45.1332 10.875 87.1719C10.875 129.211 44.9613 163.297 87 163.297C129.039 163.297 163.125 129.211 163.125 87.1719C163.125 45.1332 129.039 11.0469 87 11.0469ZM87 150.383C52.098 150.383 23.7891 122.074 23.7891 87.1719C23.7891 52.2699 52.098 23.9609 87 23.9609C121.902 23.9609 150.211 52.2699 150.211 87.1719C150.211 122.074 121.902 150.383 87 150.383Z" fill="#FF3838"/></svg>';
        }
      }
    
}