//init tableau 
tableau = [];

//pour tester!!! XXXxxxXXXXxx
tableau.push([["Texiera;Marine;0611223344"]]);
tableau.push([["Barthès;Christophe;0755667788"]]);

function newContact() {
  //création formulaire
  var form ='<form id="creatContact">';//ouverture formulaire
  form+='<div><label for="name">Nom : </label><input type="text" id="name" autofocus></div>';
  form+='<div><label for="firstName">Prénom : </label><input type="text" id="firstName"></div>';
  form+='<div><label for="phoneNumber">N° tél. : </label><input type="tel" id="phoneNumber"></div>';
  form+='<div><input type="button" value="Go" id="button" title="valider" /></div>';
  form+='</form>';//fin du form
  // ajout du form dans le html
  var zoneAffichage=document.getElementsByClassName('zoneAffichage')[0];
  zoneAffichage.innerHTML=form;
  // Accédez à l'élément button et ajout de l'eventlistenner click
  var ele = document.getElementById("button");
  ele.addEventListener("click", function (event) { // () => {
    //récupération
    var name=document.forms["creatContact"].elements["name"].value
    var firstName=document.forms["creatContact"].elements["firstName"].value
    var phoneNumber=document.forms["creatContact"].elements["phoneNumber"].value
    //controle des sasisies
    if ((name==="" && firstName==="")) {
      alert('Le nom ou le prénom doit être renseigné');
    } else {
    creatContact(name,firstName,phoneNumber);
    }
  });
}

function listContacts() {
  var tabl=tableau;
  var sep=';';
  var chtmeul='<h2>Liste de vos contacts</h2><ul>';
    for (i=0; i<tabl.length; i++) {
      var list=tabl[i].toString(); //force à transformer en string 
      var monArray = list.split(sep);
      var name=monArray[0];
      var firstName=monArray[1];
      var phoneNumber=monArray[2];
      chtmeul+='<li class="enteteContacts"> - '+name+' '+firstName+'</li><li class="separContacts">  '+phoneNumber+'</li>';//ajout li pour chaque contact
    }
  chtmeul+='</ul>'
  var zoneAffichage=document.getElementsByClassName('zoneAffichage')[0];
  zoneAffichage.innerHTML=chtmeul;
}

function creatContact(name,firstName,phoneNumber) {
  tableau.push([[name+";"+firstName+";"+phoneNumber]]);
  document.getElementById("creatContact").reset();//reset les values du form
  document.getElementById("name").focus();//focus
}

function nbContacts() {
  var nbContacts=tableau.length;
  var chtmeul='<h2>Vous avez '+nbContacts+' contacts</h2>';
  var zoneAffichage=document.getElementsByClassName('zoneAffichage')[0];
  zoneAffichage.innerHTML=chtmeul;
}

function posStart() {
  var chtmeul='<h3>Choisir une option</h3><i class="fas fa-question-circle"></i>';
  var zoneAffichage=document.getElementsByClassName('zoneAffichage')[0];
  zoneAffichage.innerHTML=chtmeul;
}

//optimiser en créant une fonction pour le html généré ????

window.onload = function (event) {
  var zoneSelect= document.getElementsByClassName('selector')[0];//pour l'ID  document.getElementById('selector')
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
      case 'start':
        posStart();
        break ;
    }
  });        
};

  

