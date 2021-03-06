
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

    // Loading different build and gameplay partials
    if( $("#toplane").hasClass("active-switcher") && $("#af-ap").hasClass("active-switcher") ){
      $("#builds").load("partials/builds/buildsAP.html");      
      if( $("#klepto").hasClass("active-switcher") ){
        $("#gameplay").load("partials/gameplay/gameplayKleptomancy.html");
      }
      else{
        $("#gameplay").load("partials/gameplay/gameplayAPtop.html");
      }
    }
    else if( $("#toplane").hasClass("active-switcher") && $("#af-ad").hasClass("active-switcher") ){
      $("#gameplay").load("partials/gameplay/gameplayADtop.html");
      $("#builds").load("partials/builds/buildsADtop.html");
    }
    else if( $("#midlane").hasClass("active-switcher") && $("#af-ap").hasClass("active-switcher") ){
      $("#builds").load("partials/builds/buildsAP.html");
      
      if( $("#klepto").hasClass("active-switcher") ){
        $("#gameplay").load("partials/gameplay/gameplayKleptomancy.html");
      }
      else{
        $("#gameplay").load("partials/gameplay/gameplayAPmid.html");
      }
    }
    else if( $("#botlane").hasClass("active-switcher") && $("#af-ad").hasClass("active-switcher") ){
      $("#builds").load("partials/builds/buildsADbot.html");
      $("#gameplay").load("partials/gameplay/gameplayADbot.html");
      $("#tricks").load("partials/tricks/tricksAD.html");
    }
    else if( $("#botlane").hasClass("active-switcher") && $("#af-ap").hasClass("active-switcher") ){
      $("#builds").load("partials/builds/buildsAP.html");      
      if( $("#klepto").hasClass("active-switcher") ){
        $("#gameplay").load("partials/gameplay/gameplayKleptomancy.html");
      }
      else{
        $("#gameplay").load("partials/gameplay/gameplayAPbot.html");
      }
    }
    $(".welcome").css("display", "none");
    $("#abilities").css("display", "flex");
    $("#tricks").load("partials/tricks/tricks.html");
    
    // Loading different ability-max partials
    if( $("#tank").hasClass("active-switcher")){
        if( $("#klepto").hasClass("active-switcher") ){
          $(".ability-load").load("partials/abilities/maxEW.html");
        }
        else if( $("#af-ap").hasClass("active-switcher") ){
          $(".ability-load").load("partials/abilities/maxQ.html");
        }
        else if( $("#af-ad").hasClass("active-switcher") ){
          $(".ability-load").load("partials/abilities/maxWE.html");
        }
    }
    if( $("#mage").hasClass("active-switcher") || $("#marksman").hasClass("active-switcher")){
      if( $("#af-ap").hasClass("active-switcher") ){
        $(".ability-load").load("partials/abilities/maxQ.html")
      }
      else if( $("#af-ad").hasClass("active-switcher") ){
        $(".ability-load").load("partials/abilities/maxWE.html")
      }
      
    }
    if( $("#fighter").hasClass("active-switcher") ){
      if( $("#klepto").hasClass("active-switcher") ){
        $(".ability-load").load("partials/abilities/maxEW.html");
      }
      else if( $("#af-ad").hasClass("active-switcher") ){
        $(".ability-load").load("partials/abilities/maxEW.html");
      }
      else if( $("#af-ap").hasClass("active-switcher") ){
        $(".ability-load").load("partials/abilities/maxWE.html");
      }
    }
    if( $("#assassin").hasClass("active-switcher") ){
      if( $("#klepto").hasClass("active-switcher") ){
        $(".ability-load").load("partials/abilities/maxEW.html");
      }
      else if( $("#af-ad").hasClass("active-switcher") ){
        $(".ability-load").load("partials/abilities/maxEW.html");
      }
      else if( $("#af-ap").hasClass("active-switcher") ){
        $(".ability-load").load("partials/abilities/maxQ.html");
      }
    }    
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