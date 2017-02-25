/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var contacts = [], loop, choices = ["\n0: Quitter le générateur", "1: Lister les contacts", "2: Ajouter un contact\r"];
var Contact;
Contact = {
    init: function (lastName, name) {
        this.name = name;
        this.lastName = lastName;
    },
    describe: function () {
        var describtion = "Nom: " + this.lastName + ", prénom: " + this.name;
        return describtion;
    }
};

function contactList() {
    console.log('\nVoici la liste de tous vos contacts :')
    contacts.forEach(function (Contact) {
        console.log(Contact.describe());
    });
};

function contactAdd () {
    var lastName = prompt('Entrez le nom du nouveau contact'),
        name = prompt('Entrez le prénom du nouveau contact')
    var contact = Object.create(Contact);
    contact.init(lastName, name);
    contacts.push(contact)
    console.log('\nLe contact a bien été ajouté');
}

function choicesList() {
    for (var i=0; i < choices.length; i ++) {
        console.log(choices[i]);
    }

}

var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init('Nelsonne', 'Mélodie');

contacts.push(contact1, contact2);

console.log('Bienvenue dans le gestionnaire de contacts!')
choicesList();

while (loop = true) {
    var choice = prompt('Choisissez une option')
    if (choice == 1) {
        contactList();
        choicesList();
    } else if (choice == 2) {
        contactAdd();
        choicesList();
    } else if (choice == 0) {
        break
    }







}