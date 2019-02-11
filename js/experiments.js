/* OLD FUNCTIONS NO LONGER IN USE */
/*
function switchForce(choice_id, force_id){
          var forces = ['ap-kennen', 'ad-kennen'];
          var choices = ['correct', 'wrong'];
          for (var i= 0; i < forces.length; i++){
            document.getElementById(forces[i]).classList.remove('active-force');
            document.getElementById(choices[i]).classList.remove('active-choice');
          }
          document.getElementById(force_id).classList.add('active-force');
          document.getElementById(choice_id).classList.add('active-choice');
}

function toggleSection(div_id){
   if(document.getElementById(div_id).classList.contains('toggeled')){
     document.getElementById(div_id).classList.remove('toggeled');
   }
   else{
     document.getElementById(div_id).classList.add('toggeled');
   }
}
*/
$("switch").click(function(){
  $("body").css("opacity", "0");
})