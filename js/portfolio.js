var works = [
	"#work-1",
	"#work-2",
	"#work-3",
	"#work-4",
	"#work-5",
	"#work-6",
	"#work-7",
	"#work-8",
	"#work-9",
	"#work-10",
	"#work-11",
	"#work-12",
	"#work-13",
	"#work-14",
	"#work-15",
	"#work-16",
	"#work-17",
	"#work-18",
	"#work-19",
	"#work-20",
	"#work-21",
	"#work-22",
	"#work-23",
	"#work-24",
	"#work-25",
	"#work-26",
	"#work-27",
	"#work-28",
	"#work-29",
	"#work-30",
	"#work-31",
	"#work-32",
	"#work-33",
	"#work-34",
	"#work-35",
	"#work-36",
	"#work-37",
	"#work-38",
	"#work-39",
	"#work-40",
	"#work-41",
	"#work-42"
]

var worksFileNames = [
	"WoM2 - Facebook Banner - Video Contest.jpg",
	"WoM2 - Facebook Banner - Valentines Day.png",
	"WoM2 - Facebook Banner - Romania Day.png",
	"WoM2 - Facebook Banner - Black Friday.png",
	"WoM2 - Facebook Banner - OX Event.png",
	"WoM2 - Facebook Banner - Nation War.png",
	"WoM2 - Facebook Banner - Monster Chat.png",
	"WoM2 - Graphic Design - Ingame Login Screen.png",
	"WoM2 - Graphic Design - Webpage header.png",
	"WoM2 - Web Page - Account Merging.jpg",
	"WoM2 - Email - Merge.png",
	"WoM2 - Facebook Header.png",
	"WoM2 - Mapname Banner.png",
	"WoM2 - Email - Callback.jpg",
	"WoM2 - Web Page - Logged in.jpg",
	"WoM2 - Web Page - Forbidden Access.jpg",
	"WoM2 - Web Page - Patcher.png",
	"WoM2 - Ingame Assets - Ranking System.jpg",
	"WoM2 - Ingame Assets - Iconset.jpg",
	"Horse Painting.png",
	"WoM2 - Web Page - Item Shop.jpg",
	"Eterhost - Facebook engagement 2.png",
	"Eterhost - 2 years anniversary banner.png",
	"Eterhost - Facebook banner.png",
	"WaterSpace - Concept Art.png",
	"WaterSpace - Mascot - error.png",
	"WaterSpace - Mascot - aid.png",
	"Pokemon Fan Art - Gecko.png",
	"WaterSpace - Image assets.png",
	"Eterhost - Gameservers banner.png",
	"Eterhost - Product Showcase.png",
	"Eterhost - Rebranding.png",
	"4GNews - Seals of Quality v1.png",
	"Eterhost - New branding banner.png",
	"4GNews - Wallpaper - Features.png",
	"4GNews - Wallpaper - Antutu.png",
	"Eterhost - Facebook cover old.png",
	"Eterhost - Product Showcase old.png",
	"WaterSpace - Web design concept.jpg",
	"Graphic Design - asset 1.jpg",
	"Youtube banner.jpg",
	"Eterhost - Web design concept.jpg"
]
var worksTypes = [
	"Advertisement",
	"Advertisement",
	"Advertisement",
	"Advertisement",
	"Advertisement",
	"Advertisement",
	"Advertisement",
	"Graphic Design",
	"Graphic Design",
	"Web Development",
	"Email Design",
	"Advertisement",
	"Graphic Design",
	"Email Design",
	"Web Development",
	"Web Development",
	"Web Development",
	"Digital Art ",
	"Digital Art ",
	"Digital Art ",
	"Web Development",
	"Advertisement",
	"Graphic Design",
	"Advertisement",
	"Concept Art",
	"Pixel Art",
	"Pixel Art",
	"Pixel Art",
	"Digital Art ",
	"Graphic Design",
	"Graphic Design",
	"Graphic Design",
	"Graphic Design",
	"Graphic Design",
	"Graphic Design",
	"Graphic Design",
	"Advertisement",
	"Graphic Design",
	"Web Development",
	"Graphic Design",
	"Graphic Design",
	"Web Development"
]
var worksCompanies = [
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"WoM2.org",
	"Personal Development",
	"WoM2.org",
	"Eterhost, Ltd",
	"Eterhost, Ltd",
	"Eterhost, Ltd",
	"WaterSpace.es",
	"WaterSpace.es",
	"WaterSpace.es",
	"Personal Development",
	"WaterSpace.es",
	"Eterhost, Ltd",
	"Eterhost, Ltd",
	"Eterhost, Ltd",
	"4GNews.pt",
	"Eterhost, Ltd",
	"4GNews.pt",
	"4GNews.pt",
	"Eterhost, Ltd",
	"Eterhost, Ltd",
	"WaterSpace.es",
	"Freelancing",
	"Freelancing",
	"Eterhost, Ltd"
]

$(window).scroll(function() {
	var menu = $("#menu");
	var main = $("#main");
	var currentScroll = $(window).scrollTop();

	if (currentScroll > 0) {
		menu.addClass("menu-moved");
	  main.addClass("main-menu-moved");
	}
	else{
		menu.removeClass("menu-moved");
	  main.removeClass("main-menu-moved");
	}
});

function selectTag(option){
	var qtyWorks = works.length;
	if (option == "all"){
		for (var i=0; i < qtyWorks; i++){
			$(works[i]).toggleClass("hidden",false);
		}
	}
	else {
		for (var i=0; i < qtyWorks; i++){
			if ($(works[i]).attr('data-type') == option){
				$(works[i]).toggleClass("hidden",false);
			}
			else $(works[i]).toggleClass("hidden",true);
		}
	}

	return;
}

function toggleTag(tag){
	var tags = ["#tag-0", "#tag-1", "#tag-2", "#tag-3", "#tag-4"];
	var qtyWorks = works.length;
	var clickedTagID = tag.attr('id');

	for(var i=0; i < tags.length; i++){
		if(clickedTagID == tags[i].substring(1)){
			$(tags[i]).attr('data-toggle',1);
			$(tags[i]).toggleClass("tag-selected",true);
		}
		else {
			$(tags[i]).attr('data-toggle',0);
			$(tags[i]).toggleClass("tag-selected",false);
		}
	}

	if(clickedTagID == tags[0].substring(1)){
		for (var i=0; i < qtyWorks; i++){
			$(works[i]).toggleClass("hidden",false);
		}
		return;
	}
	else {
		for (var i=0; i < qtyWorks; i++){
			if ($(works[i]).attr('data-type') == tag.attr('data-type')){
				$(works[i]).toggleClass("hidden",false);
			}
			else $(works[i]).toggleClass("hidden",true);
		}
	}

	return;
}

function zoominPicture(picture){
	pictureID = 0+picture.attr('data-workID') - 1;
	pictureSrc = "img/portfolio/" + worksFileNames[pictureID];
	pictureAlt = worksFileNames[pictureID].slice(0,-4);

	$("#work-picture-fullscreen").attr('src',pictureSrc);
	$("#work-picture-fullscreen").attr('alt',pictureAlt);
	$("#work-type-fullscreen").text(worksTypes[pictureID]);
	$("#work-company-fullscreen").text(worksCompanies[pictureID]);
	$("#work-fullscreen").toggleClass("hidden",false);

	return;
}

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

$(function(){
	$('#select-tags').change(function(){scrollTo(0);});
	$('.tag').on("click", function(){scrollTo(0);});
  $('#select-tags').change(function(){selectTag($(this).val());});
	$(".tag").on("click", function(){toggleTag($(this));});
	$("#close-work-fullscreen, #black-screen").on("click", function(){
		$("#work-fullscreen").toggleClass("hidden",true);
		$('#black-screen').toggleClass("hidden",true);
	});
	$(".work-picture, .work-picture-zoomin").on("click",function(){
		zoominPicture($(this));
		$('#black-screen').toggleClass("hidden",false);
	});
});
