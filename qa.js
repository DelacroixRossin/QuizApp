//DEBUT ET FIN
const start = document.querySelector('#go');
const end = document.getElementById('quitter')

//ACCUEIL PAGE 1 ET LES INPUTS
const accueil = document.querySelector('.Accueil')
const page1 = document.querySelector('.Page1')
const fin = document.querySelector('.end')
const enterName = document.querySelector('#name')
const enterMail = document.querySelector('#mail')
//LES MESSAGES D'ERREUR INPUT
const spanName = document.querySelector('#spanName')
const spanMail = document.querySelector('#spanMail')

const quiz = document.querySelector('#quiz')
const evol = document.querySelector('.p2a')
const sec = document.querySelector('.sec')
const labels = document.querySelectorAll('.radio label')
const suivant = document.querySelector('#suivant')

//PAGE RESULTAT
const nomf = document.querySelector('#namef')
const mailf = document.querySelector('#mailf')
const point = document.querySelector('#obt')
const totalPoint = document.querySelector('#tot')

const assertions = document.querySelectorAll('.asr')
let forward = 0;
let score = 0

//Objest recupérations données utilisateurs

const util = {};

// TABLEAU DES QUESTIONS EN OBJET
const Mesquiz = [

    //Q1   
    {
        question: 'quel est le type de fichier JavaScript ?',
        reponse: ['.jvs', '.jv', '.vs', '.js'],
        correct: 3
    },
    //Q2
    {
        question: 'Qui a inventé JavaScript ?',
        reponse: ['Douglas Crockford', 'Sheryl San', 'Brendan Eixh', 'Alexandre Chambu'],
        correct: 3
    },
    //Q3
    {
        question: 'Quel balise utilisée pour lier JavaScript à HTML ?',
        reponse: ['<span>', '<html.js>', '<script>', '<input>'],
        correct: 2
    },
    // //Q4
    //     {
    //         question: 'Que signifie isNaN ?',
    //         reponse: ['is not a number', 'is no number', 'is a number of number','is not a net'], 
    //         correct: 2
    //     },
    // //Q5  
    //     {
    //         question: 'Comment définir une fonction en JavaScript?',
    //         reponse: ['function maFonction{}()', 'maFonction function()[]', 'function maFonction(){}','pas de bonne réponse'], 
    //         correct: 3
    //     },
    // //Q6
    //     {
    //         question: 'Qui est le plus rapide, JavaScript ou ASP ?',
    //         reponse: ['Aucune bonne réponse', 'JavaScript', 'ASP','JavaScript et ASP'], 
    //         correct: 2
    //     },
    // //Q7
    //     {
    //         question: 'Qu\'est ce qu\'est JavaScript ?',
    //         reponse: ['un langage de programmation', 'une application mobile', 'un serveur internet','un ordinateur'], 
    //         correct: 1
    //     },

    // //Q8
    //     {
    //         question: 'Qu\'est ce qui n\'est pas une données natives exisatntes en JavaScript ?',
    //         reponse: ['String', 'Number', 'service','Boolean'], 
    //         correct: 3
    //     },
    // //Q9
    //     {
    //         question: 'Ceci est un tableau en JavaScript ?',
    //         reponse: ['var tab =[]', 'const log =()', 'var = tab=()','()=>[]'], 
    //         correct: 1
    //     },
    // //Q10
    //     {
    //         question: 'Avec qui deplacer un element miniscule vers le majuscule en JavaScript ?',
    //         reponse: ['Majacse', 'UpperMaj', 'Uppercose','toUpperCase'], 
    //         correct: 4
    //     },
    // //Q11
    //     {
    //         question: 'Que fait la fonction parsInt ?',
    //         reponse: ['Convertir des nombres en entier', 'Convertir une partie d\'un nombre', 'Changer les chiffres','Trover un intervalle'], 
    //         correct: 1
    //     },
    // //Q12
    //     {
    //         question: 'A quoi sert la méthode push en JavaScript ?',
    //         reponse: ['Pousser les élements', 'Classer un tableau', 'Insérer un élement à la fin d\'un tableau','Créer un tableau'], 
    //         correct: 3
    //     },
    // //Q13
    //     {
    //         question: 'A quoi sert la propriiété innerHTML en JavaScript ?',
    //         reponse: ['changer l\'affichage', 'Modofier un contenu HTML', 'Insérer un élement HTML dans JavaScript','Charger le fichier HTML'], 
    //         correct: 2
    //     },
    // //Q14
    //     {
    //         question: 'Quel est le caractère d\'échappement en JavaScript ?',
    //         reponse: ['//', '/', ';/',' \\'] , 
    //         correct: 4
    //     },
    //     //Q15
    //     {
    //         question: 'En JavaScript, à quoi sert le typeOf ?',
    //         reponse: ['Décrire le type de données', 'Signaler le modèle de données', 'Effacer les données','Changer le texte'] , 
    //         correct: 1
    //     },   

]

//fonction pour les questions et les assertions

//Pour la première question

function nextQuestion(numQuest) {
    suivant.disabled = true
    if (Mesquiz[numQuest]) {
        quiz.textContent = Mesquiz[numQuest].question
        evol.textContent = `Question ${forward + 1}/15`
        Mesquiz[numQuest].reponse.forEach((element, i) => {
            assertions[i].checked = false;
            labels[i].textContent = element;
        })
    }


}
//Evenement gestion de 'click' au depart

start.addEventListener('click', (e) => {
    e.preventDefault()

    if (erreur() && erreurMail()) {
        accueil.style.display = 'none'
        page1.style.display = 'block'
        nextQuestion(forward);
    }
    util.nom = enterName.value
    nomf.textContent = util.nom
    util.email = enterMail.value
    mailf.textContent = util.email
    totalPoint.textContent = Mesquiz.length
    util.point = 0

})
//RETOUR A LA PAGE D4ACCUEIL PAR QUITTER
end.addEventListener('click', (e) => {
    e.preventDefault()
    accueil.style.display = 'block'
    page1.style.display = 'none'

})


//evenement sur le boutton suivant
assertions.forEach((asr) => {
    asr.addEventListener('change', () => {
        suivant.disabled = false
    });
})

//Fonction et Message erreur Nom

enterName.addEventListener("input", erreur)

function erreur() {

    if (enterName.value.length == 0) {
        spanName.innerText = 'N\'oubliez pas de renseigner votre nom avant de commencer le quiz'
        enterName.style.border = '1px solid red'
        return false;
    }
    else if (enterName.value.length < 3) {
        spanName.innerText = 'Entrez un nom valide'
        enterName.style.border = '1px solid red'
        return false;
    }

    else {
        spanName.innerText = ''
        enterName.style.border = '1px solid #c0bcbc'
        return true;
    }
}

// BUTTON SUIVANT

suivant.addEventListener('click', () => {
    // console.log(forward)

    for (i = 0; i < assertions.length; i++) {

        if (i == Mesquiz[forward].correct) {
            util.point += 1
        } else util.point
    }
    if (forward == Mesquiz.length - 1) {
        console.log(forward);
        suivant.innerText = "Terminer"
        accueil.style.display = 'none'
        page1.style.display = 'none'
        fin.style.display = 'block'
        point.textContent = util.point

    };
    if (forward <= Mesquiz.length - 1) {
        nextQuestion(++forward);
    }




    //const terminer = document.getElementById


    // if (forward == 3) {
    //     page1.style.display = 'none'     
    //     console.log(forward);
    //     end.style.display = 'block'

    // }
})

//Fonction et message erreur Mail

enterMail.addEventListener("input", erreurMail)

function erreurMail() {

    if (enterMail.value.length == 0) {
        spanMail.innerText = 'N\'oubliez pas de renseigner votre mail avant de commencer le quiz'
        enterMail.style.border = '1px solid red'
        return false

    }
    else {
        spanMail.innerText = ''
        return true
    }
}





