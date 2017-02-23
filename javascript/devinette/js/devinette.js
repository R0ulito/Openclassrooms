/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var answer, token=0;
function answerInput(){
    answer = parseInt(prompt('Devinez le nombre'));
};

answerInput();
while (token < 6) {
    if (answer < solution) {
        if (answer == '' || isNaN(answer)) {
            answerInput();
        }
        alert('C\'est plus');
        token ++;
        console.log(token);
        answerInput();
                
    } else if (answer > solution) {
        alert('C\'est moins');
        token ++;
        answerInput();
        console.log(token);
    } else {
        break
    }
}

if (token >= 6 && answer !== solution){
    alert('Vous avez perdu. La solution était: ' + solution);
}

if (answer == solution ) {
    alert('Vous avez trouvé! La réponse était: ' + solution);
}

