var academicTitles = [
  "Computer Engineering Integrated Master Degree",
  "Science and Technology"
];
var academicDates = [
  "Faculdade de Engenharia da Universidade do Porto • Sep 2012 - Dec 2013",
  "Escola Secundária de Águas Santas • until June 2012"
];
var academicTexts = [
  "Despite having dropped out of college after one year and a half into the bachelor, this period of time was essential to learn the logics behind programming and coding overall.",
  "Where my interest for Mathematics, Physics, Geometry, Art and team fellowship became more intense"
];

var professionalTitles = [
  "Lean Coach",
  "Lean Pilot Team",
  "Warehouse Operator",
  "Freelancing Front-End Web Designer",
  "Network Management / Helpdesk",
  "Graphic and Web Designer",
  "Graphic Designer"
];
var professionalDates = [
  "Kolonial.no • Oct 2018 - now",
  "Kolonial.no • Aug 2017 - Oct 2018",
  "Kolonial.no • Apr 2017 - Aug 2017",
  "WoM2 • Jan 2017",
  "Eterhost, Ltd • Jan 2014 - Oct 2016",
  "Eterhost, Ltd • Jan 2014 - Oct 2016",
  "WoM2 • 2011 - Dec 2013"
];
var professionalTexts = [
  "Coaching and supporting leader groups in developing their own areas by using the Lean (or Toyota Production System) methods and tools such as 5S, value stream mapping, root cause analysis, A3 reporting, etc.",
  "Member of a temporary team in charge of supporting the Lean Team in order to achieve a better, safer and more effiecient workflow in the warehouse.",
  "Mainly focused on packing customers' orders. I have also worked as a restocker and cooperated with the optimizing team in order to improve the company's warehouse working flow.",
  "Designed the new official website for WoM2 (https://global.wom2.org/) and coded the frontend part - HTML, CSS and JavaScript.",
  "Troubleshoot and resolution of network and OS (Linux and UNIX) problems. Customer Service via live chat and ticket system.",
  "In charge of advertising imagery (e.g. Google Ads), marketing strategies and frontend website maintenance.",
  "Worked as main designer for the game WoM2. Responsible for emails structure, advertising imagery (e.g. Google Ads) and in-game icons and textures design. Also integrated the game design team for a short period of time."
];

var coursesTitles = [
  "Lean Leadership",
  "Advanced Microsoft Office"
];
var coursesDates = [
  "C2U • Feb 2019 - May 2019",
  "Infordidáctica • May 2008: When it all started"
];
var coursesTexts = [
  "Black belt certificate obtained in Lean - Toyota Product System (TPS). Leadership inserted in the lean context and how to use the lean tools in order to contribute or lead a company to success with the least waste possible.",
  "At the age of 12, my interest on automation of daily tasks was lit up. This advanced Microsoft Office course, taught me that it is possible to let computers do tasks for you and present them visually appealing to others."
];


function displayCurrentFeature(current, type){
  $("#current-ID").text(current);

  if(type == "academic"){
    $(".bg-featured-title").text(academicTitles[current]);
    $(".bg-featured-date").text(academicDates[current]);
    $(".bg-featured-text").text(academicTexts[current]);
  }
  else if (type == "professional"){
    $(".bg-featured-title").text(professionalTitles[current]);
    $(".bg-featured-date").text(professionalDates[current]);
    $(".bg-featured-text").text(professionalTexts[current]);
  }
  else if (type == "courses"){
    $(".bg-featured-title").text(coursesTitles[current]);
    $(".bg-featured-date").text(coursesDates[current]);
    $(".bg-featured-text").text(coursesTexts[current]);
  }
}

function changeCurrentFeature(button){
  $(".current-bg-featured").toggleClass("fadeIn",true);

  var type = $("#current-type").text();
  var current = $("#current-ID").text();
  current = +current;

  var length;

  if(type == "academic"){
    length = academicTitles.length;
  }
  else if (type == "professional"){
    length = professionalTitles.length;
  }
  else if (type == "courses"){
    length = coursesTitles.length;
  }

  if(button == "previous-feature"){
    if (current > 0){
      current = current-1;
    }
    else current = length-1;
  }
  else if(button == "next-feature"){
    if (current < length-1){
      current = current+1;
    }
    else current = 0;
  }

  displayCurrentFeature(current, type);

  setTimeout(function () {
    $(".current-bg-featured").toggleClass("fadeIn",false);
  }, 550);
}

function defineActiveFeature(divID){
  $(".current-bg-featured").toggleClass("fadeIn",true);

  var academic = "#select-academic";
  var professional = "#select-professional";
  var courses = "#select-courses";
  var divID = "#"+divID;

  if(divID == academic){
    $(academic).addClass("bg-featured-category-button-select");
    $(academic).removeClass("bg-featured-category-button-noselect");
    $(professional).removeClass("bg-featured-category-button-select");
    $(professional).addClass("bg-featured-category-button-noselect");
    $(courses).removeClass("bg-featured-category-button-select");
    $(courses).addClass("bg-featured-category-button-noselect");
    $("#current-type").text("academic");
    displayCurrentFeature(0, "academic");
  }
  else if (divID == professional){
    $(professional).addClass("bg-featured-category-button-select");
    $(professional).removeClass("bg-featured-category-button-noselect");
    $(academic).removeClass("bg-featured-category-button-select");
    $(academic).addClass("bg-featured-category-button-noselect");
    $(courses).removeClass("bg-featured-category-button-select");
    $(courses).addClass("bg-featured-category-button-noselect");
    $("#current-type").text("professional");
    displayCurrentFeature(0, "professional");
  }
  else if (divID == courses){
    $(courses).addClass("bg-featured-category-button-select");
    $(courses).removeClass("bg-featured-category-button-noselect");
    $(academic).removeClass("bg-featured-category-button-select");
    $(academic).addClass("bg-featured-category-button-noselect");
    $(professional).removeClass("bg-featured-category-button-select");
    $(professional).addClass("bg-featured-category-button-noselect");
    $("#current-type").text("courses");
    displayCurrentFeature(0, "courses");
  }

  setTimeout(function () {
    $(".current-bg-featured").toggleClass("fadeIn",false);
  }, 550);
}


$(function() {
  $(".bg-arrow-button").on("click",function(){changeCurrentFeature($(this).attr('id'));});
  $(".bg-featured-category-button").on("click", function(){defineActiveFeature($(this).attr('id'));});
});
