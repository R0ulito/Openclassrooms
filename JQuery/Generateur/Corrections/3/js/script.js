$(function() {    
    var label = $('<hr><form><label>Texte du label</label> <input type="text" id="labelInput" /><button id="labelBtn">OK</button></form>');
    label.hide();
    
    var text = $('<hr><form><label>id de la zone de texte</label> <input type="text" id="textInput" /><button id="textBtn">OK</button></form>');
    text.hide();
    
    var button = $('<hr><form><label>Texte du bouton</label> <input type="text" id="buttonInput" /><button id="buttonBtn">OK</button></form>');
    button.hide();
    
    // Label
    $(":button:first").click(function(event) {
        event.preventDefault();
        label.toggle();
        
        label.appendTo($('#droite'));
    });
    
    $("#droite").on("click", "#labelBtn", function(event) {
        event.preventDefault();
        
        var labelValue = $('#labelInput').val();
        
        $('#gauche').append('<span>' + labelValue + '</span>');
        
        $('#labelInput').val('');
        label.toggle();
    });
    
    
    // Zone de texte
    $(":button:odd").click(function(event) {
        event.preventDefault();
        text.toggle();
        
        text.appendTo($('#droite'));
    });
    
    $("#droite").on("click", "#textBtn", function(event) {
        event.preventDefault();
        
        var textValue = $('#textInput').val();
        
        $('#gauche').append('<input id="' + textValue + '" type="text">');
        
        $('#textInput').val('');
        text.toggle();
    });
    
    
    // Bouton
    $(":button:last").click(function(event) {
        event.preventDefault();
        button.toggle();
        
        button.appendTo($('#droite'));
    });
    
    $("#droite").on("click", "#buttonBtn", function(event) {
        event.preventDefault();
        
        var buttonValue = $('#buttonInput').val();
        
        $('#gauche').append('<button>' + buttonValue + '</button>');
        
        $('#buttonInput').val('');
        button.toggle();
    });
    
    
    // Affichage nom, prenom et bouton valider
    $('#gauche').append('<div class="demo"><span>Prénom</span><input type="text" id="prenom" /><br /><span>Nom</span><input type="text" id="nom" /><br /><span>Age</span><input type="text" id="age" /><br /><button>Valider</button><button id="delete">Vider le formulaire</button></div>');
    
    $("#gauche").on("click", "#delete", function(event) {
        event.preventDefault();
        
        $('.demo').remove();
    });
    
});