
function setActive(symbol_id, div_id){
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

          if ($("#display-klepto").hasClass("active") || $("#display-phaserush").hasClass("active") || $("#display-electrocute").hasClass("active")){
            $("#buildPartial").load("partials/buildsAP.html");
            $("#gameplay").load("partials/gameplayAP.html");
            $("#tricks").load("partials/tricksAP.html");
            $("#matchups").load("partials/matchups.html");
              }
          else if( $("#display-pta").hasClass("active") || $("#display-conqueror").hasClass("active") || $("#display-fleet").hasClass("active")){
            $("#buildPartial").load("partials/buildsAD.html");
            $("#gameplay").load("partials/gameplayAD.html");
            $("#tricks").load("partials/tricksAD.html");
            $("#matchups").load("partials/matchups.html");
            }

}

$(".onclick").click(function(){
  $(".title").toggle();
})
