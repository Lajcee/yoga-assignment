
// nav







// nav

  $("#loginSection,.automaticContainer , .cam, .switcheOn").hide();
$(document).ready(function(){
  $("#login").click(function(){
    $("#loginSection").show();
    $("#landing, #image-icons, #intro, #contact, #try .cam").hide();
  });

  $("#go").click(function(){
    $("#try").show();
      $("#loginSection").hide();
  });
});


// slideshow

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}

// smarthome

// slider for light intensity

$( function() {
  var select = $( "#minbeds" );
  var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
    min: 1,
    max: 6,
    range: "min",
    value: select[ 0 ].selectedIndex + 1,
    slide: function( event, ui ) {
      select[ 0 ].selectedIndex = ui.value - 1;
    }
  });
  $( "#minbeds" ).on( "change", function() {
    slider.slider( "value", this.selectedIndex + 1 );
  });


    $(".camera").click(function(){
      $(".cam").show();
      $("#landing, #image-icons, #intro, #contact, #try, .automaticContainer #loginSection").hide();
    });

    $(".camView").click(function(){
      $("#automaticContainer").show();
        $("#landing, #image-icons, #intro, #contact, #try, #loginSection .cam").hide();
    });

    $("#login").click(function(){
      $("#loginSection").show();
        $("#landing, #image-icons, #intro, #contact, #try, .automaticContainer, .cam").hide();
    });

    $(".camView").click(function(){
      $("#try").show();
        $("#landing, #image-icons, #intro, #contact,  #loginSection .cam").hide();
    });

    $(".try").click(function(){
      $("#try").show();
        $("#landing, #image-icons, #intro, #contact,  #loginSection .camView .cam .cameraImg" ).hide();
    });

    $(".camView").click(function(){
      $(".automaticContainer").show();
        $(" #camID" ).hide();
    });

    $("#switcheOff").click(function(){
      $(".switcheOn").show();
        $(" #switcheOff" ).hide();
    });

    $(".switcheOn").click(function(){
      $("#switcheOff").show();
        $(".switcheOn" ).hide();
    });






} );
