
$(function(){
  $(".switcher").click(function(){    
    if( $(this).hasClass("active-switcher")){
      $(this).removeClass("active-switcher");
    }
    else{
      if( $(this).hasClass("rune-choice")){
        $(".rune-choice").removeClass("active-switcher");
        $(this).addClass("active-switcher"); 
        var runeID = $(this).attr("id");
        var runeLink = "partials/runes/" + runeID + ".html";
        $("#runePartial").load(runeLink);      
      } 
      else if( $(this).hasClass("lane-choice")){
        $(".lane-choice").removeClass("active-switcher");
        $(this).addClass("active-switcher"); 
      }
      else if( $(this).hasClass("af-choice")){
        $(".af-choice").removeClass("active-switcher");
        $(this).addClass("active-switcher"); 
      }    
    }
    if( $("#toplane").hasClass("active-switcher") && $("#af-ap").hasClass("active-switcher") ){
      $("#gameplay").load("partials/gameplay/gameplayAPtop.html");
    }
    else if( $("#toplane").hasClass("active-switcher") && $("#af-ad").hasClass("active-switcher") ){
      $("#gameplay").load("partials/gameplay/gameplayADtop.html");
    }
    else if( $("#midlane").hasClass("active-switcher") && $("#af-ap").hasClass("active-switcher") ){
      $("#gameplay").load("partials/gameplay/gameplayAPtop.html");
    }
    else if( $("#botlane").hasClass("active-switcher") && $("#af-ad").hasClass("active-switcher") ){
      $("#gameplay").load("partials/gameplay/gameplayADbot.html");
    }
    else if( $("#botlane").hasClass("active-switcher") && $("#af-ap").hasClass("active-switcher") ){
      $("#gameplay").load("partials/gameplay/gameplayAPbot.html");
    }
  })
})

