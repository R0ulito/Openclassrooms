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
alert('Bienvenue dans le jeu de devinette. \nJ\'ai volontairement fait en sorte que les messages soient en pop-up plutôt qu\'en console.log(). \nCeci afin d\'eviter les problèmes de placement de la fenêtre de la console suivant les résolutions');
answerInput();
console.log(answer);
token ++;
while (token < 6) {
    if (isNaN(answer)) {
        var strikeLeft = 6 - token;
        alert('Veuillez, s\'il vous plaît, entrer une nombre entre 1 et 100. \nIl ne vous reste plus que ' + strikeLeft + ' coup(s)')
        answerInput();
        token ++;
    }else if (answer < solution) {
        alert('C\'est plus');
        //Compteur implanté pour vérifier le bon fonctionnement du script. Vous pouvez le décommenter pour faire les vérifications.
        //console.log(token + "coup(s) joués");
        answerInput();
        token ++;
                
    } else if (answer > solution) {
        alert('C\'est moins');

        answerInput();
        //Compteur implanté pour vérifier le bon fonctionnement du script. Vous pouvez le décommenter pour faire les vérifications.
        //console.log(token + "coup(s) joués");
        token ++;
    } else {
        break
    }
}

if (token >= 6 && answer !== solution){
    alert('Nombre d\'essais dépassés. Vous avez perdu. La réponse était: ' + solution);
}

if (answer == solution ) {
    alert('Vous avez trouvé en ' + token + ' coup(s)! La réponse était: ' + solution);
}

