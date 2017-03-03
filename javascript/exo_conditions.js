/**
 * Created by Touliro on 18/01/2017.
 */


/* -------------------------- EXERCICE N°1 -----------------------------------*/



/*var age = parseInt(prompt('Quel est votre âge?'));

if (age <= 0)
{
    alert('Je ne pense pas que vous soyez encore né(e)');
}

else if (age >= 1 && age <= 17 )
{
    alert('Vous n\'êtes pas encore majeur');
}

else if (age >= 18 && age <= 49)
{
    alert('Vous êtes majeur mais encore senior');
}

else if (age >= 50 && age <= 59)
{
    alert('Vous êtes senior mais pas encore retraité');
}

else if (age >= 60 && age <= 120)
{
    alert('Vous êtes retraité, profitez bien de votre temps libre !');
}

else if (age > 120)
{
    alert('Il se peut fortement que vous soyez déjà mort !');
}

else
{
    alert('Ceci n\'est pas un nombre');
}*/





/* -------------------------- EXERCICE N°2 -----------------------------------*/


/*
var year = 2015;
if (year %4 === 0 && year %400 !== 0)
{
    alert('bissextile');
}

else if (year %400 === 0)
{
    alert('bissextile');
}

else
{
    alert('Pas bissextile');
}

*/




/* -------------------------- EXERCICE N°3 -----------------------------------*/


/*

var nicks = [], // Création tableau vide
    nick;

while (nick = prompt('Entrez un prénom: ')) {
    nicks.push(nick);


}

if ( nicks.length > 0){
    alert(nicks.join(' '));
}
else {
    alert('Rien en mémoire !');
}


    */

/* for (var i = 0; i < 10; i++) {
    // On affiche les valeurs de notre boucle dans la console.
    console.log('La valeur de notre boucle est : ' + i);
}*/





/* -------------------------- EXERCICE N°²4 -----------------------------------*/

/* Convertisseur de nombre en toute lettres

On doit entre un chiffre entre 0 et 999
 */




function chiffre2lettre (chiffre) {
    if (isNaN(chiffre) || chiffre < 0 || 999 < chiffre) {
        alert('Veuillez entrer un nombre entier compris entre 0 et 999.');
    }

   var tabunit = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix',
        'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'],

    tabteen = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt']

   var unite = chiffre % 10,
    dizaine = ((chiffre - unite) % 100) / 10,
    centaine = ((chiffre - dizaine * 10 - unite) % 1000) / 100;

    var unit2let, diz2let, cen2let;

    console.log(chiffre + ' contient ' + unite + ' unite(s)');
    console.log(chiffre + ' contient ' + dizaine + ' dizaine(s)');
    console.log(chiffre + ' contient ' + centaine + ' centaine(s)');




//    alert(tabteen[dizaine]);
    if (chiffre === 0) {
        return 'zéro'
    }
    else {
        unit2let = (unite === 1 && dizaine > 0 && dizaine !== 8 ? ' et-' : '') + tabunit[unite];
        console.log(unit2let);

        if (dizaine = 1 && unite > 0) {
            diz2let = tabunit[10 + unite];
            unit2let = '';
            console.log(diz2let + unit2let);
        } else if ( dizaine === 7 || dizaine === 9) {
            diz2let = tabteen[dizaine] + '-' + (dizaine === 7 && unite === 1 ? 'et-' : '') + unit2let[10 + unite];
            unit2let='';
            console.log(diz2let + unit2let);
        } else {
            diz2let = tabteen[dizaine];
            console.log(diz2let + unit2let);
        }

    }

}
var chiffre;

/*while ( */chiffre = prompt('Indiquez un nombre entre 0 et 999:')/*)*/

chiffre2lettre(chiffre);








