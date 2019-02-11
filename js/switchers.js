
function runeSwitch(symbol_id, div_id){
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
            $("#buildPartial").load("partials/builds/buildsAP.html");
            $("#gameplay").load("partials/gameplay/gameplayAP.html");
            $("#tricks").load("partials/tricks/tricksAP.html");
            $("#matchups").load("partials/matchups/matchups.html");
              }
          else if( $("#display-pta").hasClass("active") || $("#display-conqueror").hasClass("active") || $("#display-fleet").hasClass("active")){
            $("#buildPartial").load("partials/builds/buildsAD.html");
            $("#gameplay").load("partials/gameplay/gameplayAD.html");
            $("#tricks").load("partials/tricks/tricksAD.html");
            $("#matchups").load("partials/matchups/matchups.html");
            }

        }
