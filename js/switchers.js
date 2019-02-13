
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
      else if( $(this).hasClass("ability-choice")){
        $(".ability-choice").removeClass("active-switcher");
        $(this).addClass("active-switcher"); 
      }   
    }
    if( $("#toplane").hasClass("active-switcher") && $("#af-ap").hasClass("active-switcher") ){
      $("#gameplay").load("partials/gameplay/gameplayAPtop.html");
      $("#builds").load("partials/builds/buildsAP.html");
      $("#tricks").load("partials/tricks/tricksAP.html");
    }
    else if( $("#toplane").hasClass("active-switcher") && $("#af-ad").hasClass("active-switcher") ){
      $("#gameplay").load("partials/gameplay/gameplayADtop.html");
      $("#builds").load("partials/builds/buildsADtop.html");
      $("#tricks").load("partials/tricks/tricksAD.html");
    }
    else if( $("#midlane").hasClass("active-switcher") && $("#af-ap").hasClass("active-switcher") ){
      $("#gameplay").load("partials/gameplay/gameplayAPtop.html");
      $("#builds").load("partials/builds/buildsAP.html");
      $("#tricks").load("partials/tricks/tricksAP.html");
    }
    else if( $("#botlane").hasClass("active-switcher") && $("#af-ad").hasClass("active-switcher") ){
      $("#gameplay").load("partials/gameplay/gameplayADbot.html");
      $("#builds").load("partials/builds/buildsADbot.html");
      $("#tricks").load("partials/tricks/tricksAD.html");
    }
    else if( $("#botlane").hasClass("active-switcher") && $("#af-ap").hasClass("active-switcher") ){
      $("#gameplay").load("partials/gameplay/gameplayAPbot.html");
      $("#builds").load("partials/builds/buildsAP.html");
      $("#tricks").load("partials/tricks/tricksAP.html");
    }
    $(".welcome").css("display", "none");
    $("#abilities").css("display", "flex");
    
  })
})

$(function(){
  $(".toggle").click(function(){
  if( $(".header").hasClass("toggled")){
    $(".header").removeClass("toggled");
    $(".toggle").removeClass("rotated");
    }
  else{
    $(".header").addClass("toggled");
    $(".toggle").addClass("rotated");
  }  
  })
})