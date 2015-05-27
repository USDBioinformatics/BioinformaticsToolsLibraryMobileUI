function myFunction() {
    $( "#idofpanel" ).panel( "open" , optionsHash );;
}
$(document).ready(function(){ 

 $(function() {


	//$.getJSON("http://osmonds.usd.edu/BTL-REST/resources/tools/", function(data) {
   			// alert(data);
   		//$.each(data, function(i, f) {
		// var tool_div_row = "<div id='two-columns parent' class='grid-container centered' style='display:block;'>" + "<ul class='col-md-3'>" + "<li style='list-style-type: none;' class = 'bor' >" + "<img id = 'pop' src='images/tools-icon.jpg' class='img-responsive center-block lefter'>" + "</img>" + "<h3>" + f.name + "</h3>" + "<p>" + f.version + "</p>"  +  "<p class = 'discriptionPad' >" + f.description + "</p>" + "<div class = 'smile'>" + "<a href='#'>" + "<img class = 'ver' src='img/play.png' />" + "</a>" + "<a href='#'>" + "<img class = 'ver' src='img/eye.png' align='center''/>" + "</a> " + "<a href='#'>" +"<img  class = 'ver' src='img/quality.png' align='center''/>" + "</a>" + "<a href='#'>" + "<img src='img/support.png' align='center''/>" + "</a>"  + "</div>" + "</li>" + "</ul>" + "</div>"
		 //+  "<a href='#'>" + "<img src='img/docker-whale.png' align='center''/>" + "</a>"  -- Docker icon!

     //   $(tool_div_row).appendTo("#three-columns");
        	//});
	//});

//Json Parser code!
   $.getJSON('http://osmonds.usd.edu/BTL-REST/resources/tools/names', function(data) {
  		// Displays the tools in a table
  		//alert(data);
       $.each(data, function(i, f) {
		 var tool_div_row = "<div id='two-columns parent' class='grid-container centered' style='display:block;'>" + "<ul class='col-md-2'>" + "<li style='list-style-type: none;' class = 'bor' >" + "<img id = 'pop' src='images/microscope_science_biology-512.png' class='img-responsive center-block lefter'>" +  "</img>"   + "<h4>" + "<b>" + f.id + "</b>" +"<input type='checkbox' name='tool' value='Tool'>" + f.name + "</h4>" +  "</li>" + "</ul>" + "</div>"

/**
*"<form action="">" + "<input type='checkbox' name='vehicle' value='Bike'>" + "I have a bike" + "</form>" + 
*
		SEATCH ...
*/		//if (f.name == "AGE") {
          //  alert(f.name);
           // return;
       // }

		 
        $(tool_div_row).appendTo("#two-columns");
      
     });

       var tool_icons = "<div id='righterr' class='containerr' align='right'>" + "<ul class='col-md-3'>" + "<li style='list-style-type: none;' class = 'bor' >" +  "<div class = 'righterr '>" +  "<a href='#'>" + "<img src='img/arrow_up_1.png' align='center''/>" + "</a>" + "<a href='#'>" + "<img class = 'ver' src='img/play.png' />" + "</a>" + "<a href='#'>" + "<img class = 'ver' src='img/eye.png' align='center''/>" + "</a> " + "<a href='#'>" +"<img  class = 'ver' src='img/quality.png' align='center''/>" + "</a>" + "<a href='#'>" + "<img src='img/support.png' align='center''/>" + "</a>" +  "<a href='#'>" + "<img src='img/docker-whale.png' align='center''/>" + "</a>"  +  "<a href='#'>" + "<img src='img/arrow_down_2.png' align='center''/>" + "</a>" + "</div>" + "</li>" + "</ul>" + "</div>"
		 //+  "<a href='#'>" + "<img src='img/docker-whale.png' align='center''/>" + "</a>"  -- Docker icon!
		  //+  "<a href='#'>" + "<img src='img/arrow_down_2.png' align='center''/>" + "</a>"  -- up icon!
		   //+  "<a href='#'>" + "<img src='img/arrow_up_1.png' align='center''/>" + "</a>"  -- down icon!
		 // + "<a class='resize' href='f.summary'>"+ 'summary' + "</a>" 
		 //+ "<p>" + f.version + "</p>"  +  "<p class = 'discriptionPad' >" + f.description + "</p>"
		   $(tool_icons).appendTo("#righterr");
	});



});

	
	/**
	*Search box
	*/
 })

  

