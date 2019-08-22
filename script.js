 

 /*Meu codigo para uso do JQuery*/
$(document).ready(function(){
   $("#flip").click(function(){
   	  /*comandos que fazem os elementos terem a animaçao de subir*/
      //$("#panel").slideDown("slow");
      //$("#panel").slideDown();
      //$("#panel").slideDown(5000);
      $("#panel").slideDown("fast");
   });
});



$(document).ready(function(){
   $("#flip2").click(function(){
   	  /*comandos que fazem os elementos terem a animaçao de descer*/
      //$("#panel").slideUp("slow");
      //$("#panel").slideUp();
      //$("#panel").slideUp(1000);
      $("#panel").slideUp("fast");
   });





  /*comando que faz os elementos terem a animaçao dos outros dois*/

   $("#flip3").click(function(){
	  $("#panel").slideToggle("fast");
    });





});




////////////////////FadeOut///////////////////////////////



    $(document).ready(function(){
      $("#b1").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
      });
    });
  


   $(document).ready(function(){
      $("#b2").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
      });
    });
  



  ////////////////////Append///////////////////////////////



    $(document).ready(function(){
      $("#btn1").click(function(){
        $("p").append(" <b>Brayan lindo</b>.");
      });

      $("#btn2").click(function(){
        $("ol").append("<li>Brayan lindo</li>");
      });
   });




    
  





    ////////////////////Accordion///////////////////////////////