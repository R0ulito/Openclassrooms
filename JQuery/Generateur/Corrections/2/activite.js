$(function() {
    // Le code jQuery sera inséré ici
    // afficher <hr /> après le dernier bouton
    $('<hr />').appendTo('#droite');
    
    // ajouter le formulaire vierge à gauche => on insérera avec appendTo les éléments
    $('<form><p id="insertion"></p></form>').appendTo('#gauche');
    
    // ajout d'un div après le div d'id droite avec le contenu à renseigner
    $('<div id="saisie"></div>').appendTo('#droite');

    function viderSaisie() {
        if ($('#saisie').length > 0) {
            $('#saisie').remove();
            $('<div id="saisie"></div>').appendTo('#droite');
        }
    }    

    // définition d'un id pour chaque bouton => permet d'avoir une seule fonction lié à click
    $('button:eq(0)').attr('id','label');
    $('button:eq(1)').attr('id','zoneDeTexte');
    $('button:eq(2)').attr('id','bouton');
    
    // Retour à la ligne entre chaque bouton
    $('<br /><br />').insertAfter('#label');
    $('<br /><br />').insertAfter('#zoneDeTexte');
    
    
    
    $('button').click(function(){  
        var id = this.id,
            texteAAfficher;
        
        viderSaisie();
        
        // afficher les éléments
        switch (id) {
            case 'label' :
                texteAAfficher ='Texte du label';
                break;
            case 'zoneDeTexte' :
                texteAAfficher ='id de la zone de texte';
                break;
            case 'bouton' :
                texteAAfficher ='Texte du bouton';
                break;
        }
        $('<p id="saisie_p">' + texteAAfficher + '<input type="text" id="' + id +'" size="30"/><button id="valider">OK</button></p>').appendTo('#saisie');

        // gestion event click : 
        $('#valider').click(function(){ 
            var input = $('#saisie_p > input'),
                valeurSaisie = input.val(),
                id = input.attr('id');
            
            // au cas où il y a eu une erreur
            $('#saisie_p > input').css('background-color','white');;
            
            window.console.log(valeurSaisie);
            if ( valeurSaisie ) {
                switch (id) {
                    case 'label' :
                        $('<span>' + valeurSaisie + '        </span>').appendTo('#insertion')
                            .css('display','inline-block')
                            .css('margin-right','50px'); // pour créer une espace avec le champ de saisie
                        break;
                    case 'zoneDeTexte' :
                        $('<input id="' + valeurSaisie + '" type="text" /><br /><br />').appendTo('#insertion');
                        break;
                    case 'bouton' :
                        $('<button>' + valeurSaisie + '</button>').appendTo('#insertion');
                        break;
                }
            // suppression dans le div d'id saisie
            viderSaisie();
            }
            else {
//                window.console.log('aucune saisie !!!');
                $('#saisie_p > input').attr('placeholder',"Veuillez saisir ici !!!")
                    .css('background-color','red');
            }
        });    
    });

}); 



