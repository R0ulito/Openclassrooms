$(document).ready(function() {
    $('#lastblock').hide();
    $('#blockthree').hide();
    $('#blocktwo').hide();
    $('#nyandiv').hide()
    $('#nyansound').hide();
    $('#nyanfade').hide();
    
    $('#blockone').click(function(){
        $('#blocktwo').show();
    });
    
    $('#blocktwo').click(function() {
        $('#blockthree').show();
    });
    
    $('#blockthree').click(function(){
        $('#lastblock').show();
    });

    $('#lastblock').click(function(){
        $('#blockone').hide();
        $('#blocktwo').hide();
        $('#blockthree').hide();
        $('#lastblock').hide();
        $('#nyandiv').show();
        $('.bd').css('background-image','url("nyancat.jpg")');
        $('#nyansound').show();
        $('#nyanfade').show();
    })
    
    $('#nyanfade').click(function(){
        $('#nyansound').remove();
    })
    
});



function compZero(nombre) {
    return nombre < 10 ? '0' + nombre : nombre;
}

function date_heure() {
    const infos = new Date();

    //Heure
    document.getElementById('date_heure').innerHTML = 'Il est ' + compZero(infos.getHours()) + ' heures ' + compZero(infos.getMinutes()) + ' minute(s), ' + compZero(infos.getSeconds()) + ' secondes';

    //Date
    const mois = new Array('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre');
    const jours = new Array('dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi');
    document.getElementById('date_heure').innerHTML += ' et nous sommes le ' + jours[infos.getDay()] + ' ' + infos.getDate() + ' ' + mois[infos.getMonth()] + ' ' + infos.getFullYear() + '. <br/> <span>Clique ICI !!!</span>';
}


window.onload = function() {
    setInterval("date_heure()", 1000); //Actualisation de l'heure
};