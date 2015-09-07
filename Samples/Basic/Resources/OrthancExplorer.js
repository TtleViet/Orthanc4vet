// Ce code permet d'afficher le bouton qui pemettra d'accéder à 4vet. 


// Ci-dessous le code de base de WebViewer
/*
$('#series').live('pagebeforecreate', function() {
  //$('#series-preview').parent().remove();

  var b = $('<a>')
    .attr('data-role', 'button')
    .attr('href', '#')
    .attr('data-icon', 'search')
    .attr('data-theme', 'e')
    .text('webViewer');

  b.insertBefore($('#series-delete').parent().parent());
  b.click(function() {
    if ($.mobile.pageData) {
      var series = $.mobile.pageData.uuid;
      window.open('/web-viewer/app/viewer.html?series=' + series);
    }
  });

});
*/

//todo : utiliser la méthode on() de jquery mobile cf live() est deprecated
// Ici on a choisit "document" car c'est la page d'acceuil qui ne possède pas de nom à appeler. 
$(document).live('pagebeforecreate', function() {

  var d = $('<a>')
    .attr('data-role', 'button')
    .attr('href', '#')
    .attr('data-icon', 'search')
    .attr('data-theme', 'e')
    .text('4vet');			  // Intitulé du bouton

  d.insertBefore($('#all-patients')); // choisit l'endroit où le bouton sera, 
									  //le sélecteur ici est #all-patient
  d.click(function() {
    if ($.mobile.pageData) {
      var series = $.mobile.pageData.uuid;
      window.open('4VET/4vet.html'); // Appelle la fenêtre à ouvrir "4VET" est appelé dans le fichier CMakeLists.txt
    }
  });
});
