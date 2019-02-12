
$(function(){
  $(".switcher").click(function(){    
    if( $(this).hasClass("active-switcher")){
      $(this).removeClass("active-switcher");
    }
    else{
      if( $(this).hasClass("rune-choice")){
        $(".rune-choice").removeClass("active-switcher");
        $(this).addClass("active-switcher"); 
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
  })
})
