
$(document).ready(function() {
    //Your jquery goes here
    var player = $("#player");
        var xl = $("#xl");
        var citty = $("#citty");
$("#textinput").hide();
$("#textinput1").hide();
  $("#textfield").hide();
  $(".enter").hide();
  $("#correct").hide();
  $("#textinput2").hide();


    $(document).keydown(function(e) {
        $(player).keydown;
        switch (e.which) {
            //move left
            case 37:
                $(player).animate({
                    left: "-=20px"
                }, 'fast');
                break;
                //move up
            case 38:
                $(player).animate({
                    top: "-=20px"
                }, 'fast');
                break;
                //move right
            case 39:
                $(player).animate({
                    left: "+=20px"
                }, 'fast');
                break;
                //move down
            case 40:
                $(player).animate({
                    top: "+=20px"
                }, 'fast');
                break;
        }
    });



function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    //below is an if statement - if the variables calculate to the right formula, it will return true or false
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

  window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    $('#result').text('False');
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('#citty'), function() {
      if (collision($('#player'), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
    $("#textfield").show();
        $("#textinput").show();
        $("#enter").show();
      }
        });


$("#enter").click(function(){

    var q1 = document.getElementById("textfield").value.toLowerCase();

   //This is what happens if you answer correctly 
  if (q1 === "candle") {
    $("#correct").show().delay(5000).fadeOut();
    $("#textinput").fadeOut();
$(".enter").fadeOut();
    }

  else
    {
    }

      }
    );
  }, 1000); //this is how often it checks for a collision

function collision1($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    //below is an if statement - if the variables calculate to the right formula, it will return true or false
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

  window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    $('#result').text('False');
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('#xl'), function() {
      if (collision1($('#player'), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
    $("#textfield").show();
        $("#textinput1").show();
        $("#enter").show();
      }
        });


$("#enter").click(function(){

    var q2 = document.getElementById("textfield").value.toLowerCase();

   //This is what happens if you answer correctly 
   if (q2 === "short") {
    $("#correct").show().delay(5000).fadeOut();
        $("#textinput1").fadeOut();
    $("#textfield").fadeOut();
    $(".enter").fadeOut();

    }
  else
    {
    }

      }
    );
  }, 1000); 

function collision2($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    //below is an if statement - if the variables calculate to the right formula, it will return true or false
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

  window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    $('#result').text('False');
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('#dlanod'), function() {
      if (collision1($('#player'), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
    $("#textfield").show();
        $("#textinput2").show();
        $("#enter").show();
      }
        });


$("#enter").click(function(){

    var q3 = document.getElementById("textfield").value.toLowerCase();

   //This is what happens if you answer correctly 
 if (q3 === "smiles") {
    $("#correct").show().delay(5000).fadeOut();
       $("#textinput2").fadeOut();
    $("#textfield").fadeOut();
    $(".enter").fadeOut();

    }
  else
    {
    }

      }
    );
  }, 1000); 

});

