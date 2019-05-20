$(window).scroll(function() {
	var menu = $("#menu");
  var offsetMeetme = $("#content-meetme").offset().top-99-10;
  var offsetBackground = $("#content-background").offset().top-99-($("#content-background").height()/2);

	var currentScroll = $(window).scrollTop();

	if (currentScroll > 0) {
		menu.addClass("menu-moved");
    if(currentScroll > offsetMeetme && currentScroll < offsetBackground){
      $("#menu-meetme").addClass("current-menu-item");
      $("#menu-background").removeClass("current-menu-item");
    }
    else if(currentScroll > offsetBackground){
      $("#menu-background").addClass("current-menu-item");
      $("#menu-meetme").removeClass("current-menu-item");
    }
    else {
      $("#menu-background").removeClass("current-menu-item");
      $("#menu-meetme").removeClass("current-menu-item");
    }
	}
	else{
		menu.removeClass("menu-moved");
	}
});

function scrollTo(divID){
  var currentScroll = $(window).scrollTop();

  if (divID == 0){
    $('html, body').animate({
          scrollTop: 0
      }, 200);
  }
  else{
    if(currentScroll > 0){
      $('html, body').animate({
        scrollTop: $(divID).offset().top-99
      }, 600);
    }
    else {
      $('html, body').animate({
        scrollTop: $(divID).offset().top-99
      }, 600);
    }
  }
}

$(function() {
  $("#home").on("click", function(){scrollTo(0);});
	$(".menu-item").on("click", function(){scrollTo("#content-"+$(this).attr('id').substring(5));});
}); // On body load
