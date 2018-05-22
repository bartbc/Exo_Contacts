
window.onload = function (event) {
  var zoneSelect= document.getElementsByClassName('selector')[0];//pour l'ID  document.getElementById('selector')

  zoneSelect.value='start';//position par défaut

  zoneSelect.addEventListener('change', () => {// ajout event 'change' sur select
    switch (zoneSelect.value) {
      case 'nbContacts':
        nbContacts();
        break;
      case 'listContacts':
      listContacts();
        break;
      case 'newContact':
      newContact();
        break;
    }
    zoneSelect.value='start';//retour position par défaut
    console.log(event);//lit les évents !
  });
          
  function nbContacts() {
      alert('nbContacts !');
  };
  function listContacts() {
    alert('listContacts !');
  };
  function newContact() {
    //création formulaire
    var form ='<form id="creatContact">';//ouverture formulaire
    form+='<div><label for="name">Nom : </label><input type="text" id="name"></div>';
    form+='<div><label for="firstName">Prénom : </label><input type="text" id="firstName"></div>';
    form+='<div><label for="phoneNumber">N° tél. : </label><input type="text" id="phoneNumber"></div>';
    form+='<div><input type="button" value="Go" id="button" title="valider" /></div>';
    form+='</form>';//fin du form
    //création de la classe du formulaire
    
    var zoneAffichage=document.getElementsByClassName('zoneAffichage')[0];
    zoneAffichage.innerHTML=form;
  };
  

  function creatContact() {

      //recupère les données saisies

      //controle validité saisie (format numéro) // voir si possible masque de saisie
      //controle doublons

      //controle nbr existants
          //si 0 on créé le tableau
          //listContact=new Array(100);
          //sinon on compte le nbre et ajout +1 à l'index
          //listContact[index++]=(ref, nom, prenom, numero)
          //ref / nom / prenom: / numero tel
    }
}
