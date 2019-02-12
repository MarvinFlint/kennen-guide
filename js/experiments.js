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

function setRune(symbol_id, div_id){
          var divs = ['#display-klepto', '#display-phaserush', '#display-electrocute', '#display-pta', '#display-conqueror', '#display-fleet'];
          var symbols = ['#klepto', '#phaserush', '#electrocute', '#pta', '#conqueror', '#fleet'];
          for (var i = 0; i < divs.length; i++) {
             //document.getElementById(divs[i]).classList.remove('active');
             $(divs[i]).removeClass("active");
             //document.getElementById(symbols[i]).classList.remove('active-switcher');
             $(symbols[i]).removeClass("active-switcher");

          };
          //document.getElementById(div_id).classList.add('active');
          $(div_id).addClass("active");
          //document.getElementById(symbol_id).classList.add('active-switcher');
          $(symbol_id).addClass("active-switcher");        

}
*/
