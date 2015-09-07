/**
 * Plugin Orthanc 4Vet :
 * @author Thanh Tuan Bach
 * @date 24/08/2015
 * @version 0.1
 * @Brief : the file associated to 4vet.html that show the tags that we need. 
 **/




// Test connexion
 //document.write("Test"); 


// Cette fonction permet l'affichage des patients qu'on pourra adapter pour l'affichage des tags vétérinaires : http://www.tutorialspoint.com/jquery/ajax-jquery-getjson.htm  
         $(document).ready(function() {
            $("#bouton").click(function(event){
               $.getJSON('http://localhost:8042/patients/', function(test) {
                  $('#patient').html('<p> Patient: ' + test + '</p>');
               });
            });
         });



  





