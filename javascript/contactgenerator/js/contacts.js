/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var contacts = [], loop;
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
var contact1 = Object.create(Contact);
var contact2 = Object.create(Contact);
contact1.init("Lévisse", "Carole");
contact2.init('Mélodie', 'Nelsonne');

contacts.push(contact1, contact2);

function contactList() {
    contacts.forEach(function (Contact) {
        console.log(Contact.describe());

    });
};

contactList();

var contact3 = Object.create(Contact);
contact3.init("Monfort", "Julios");
contacts.push(contact3);
contactList();


/*while (loop = true) {





} */