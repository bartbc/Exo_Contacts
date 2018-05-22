
//init tableau 
tableau = [];

function newContact() {
//création formulaire
var form ='<form id="creatContact">';//ouverture formulaire
form+='<div><label for="name">Nom : </label><input type="text" id="name"></div>';
form+='<div><label for="firstName">Prénom : </label><input type="text" id="firstName"></div>';
form+='<div><label for="phoneNumber">N° tél. : </label><input type="text" id="phoneNumber"></div>';
form+='<div><input type="submit" value="Go" id="button" title="valider" onclick="return false;"/></div>';
form+='</form>';//fin du form
//création de la classe du formulaire
var zoneAffichage=document.getElementsByClassName('zoneAffichage')[0];
zoneAffichage.innerHTML=form;
//ajout de l'eventlistenner submit
// Accédez à l'élément form …
var ele = document.getElementById("button");
// … et prenez en charge l'événement submit.
ele.addEventListener("click", function (event) { // () => {
  // event.preventDefault();
  // sendData(); 
  var name=document.forms["creatContact"].elements["name"].value
  var firstName=document.forms["creatContact"].elements["firstName"].value
  var phoneNumber=document.forms["creatContact"].elements["phoneNumber"].value
  creatContact(name,firstName,phoneNumber);
  });
}

function creatContact(name,firstName,phoneNumber) {
  // alert('longueur tableaux '+tableau.length);
  tableau.push([[name,firstName,phoneNumber]]);
  // alert('longueur tableaux '+tableau.length);
  //efface contenu form
  document.getElementById("creatContact").reset();
  // alert(tableau);
    // alert(name + ' / ' + firstName +' / '+ phoneNumber);
}

function nbContacts() {
  // alert('nbContacts : '+ tableau.length);
  var nbContacts=tableau.length;
  var chtmeul='<h2>Vous avez '+nbContacts+' contacts</h2>';
  var zoneAffichage=document.getElementsByClassName('zoneAffichage')[0];
  zoneAffichage.innerHTML=chtmeul;
};

function listContacts() {
var tabl=tableau;
var sep=',';
for (i=0; i<tableau.length; i++) {
  alert(tabl[i]);


  var arrayOfStrings = tabl[i].split(sep);

  for (var i=0; i < arrayOfStrings.length; i++)
    alert(arrayOfStrings[i] + " / ");
}



  
};








window.onload = function (event) {
  var zoneSelect= document.getElementsByClassName('selector')[0];//pour l'ID  document.getElementById('selector')

  // zoneSelect.value='start';//se position par défaut sur start    

  zoneSelect.addEventListener('change', () => {// ajout event 'change' sur select
    switch (zoneSelect.value) {
      case 'nbContacts':
        nbContacts();//commentaire test
        break;
      case 'listContacts':
      listContacts();
        break;
      case 'newContact':
      newContact();
        break;
    }
    // zoneSelect.value='start';//se position par défaut sur start
    console.log(event);//lit les évents !// a supprimer tableau.length
  });        
};

  

