$(document).ready(function(){
    $(".row").on({
        click: function(){
            $(this).css("background-color", "yellow");            
        },
        dblclick: function(){
            $(this).css("background-color", "green");            
        }      
    });
  	
  	$(".row").hover(function () {
    	$(this).css("border-color", "white"); 
  		}, function() {
  		$(this).css("border-color", "black"); 	
  		}		    	
  	);

  	$("button").click(function(){
  		$(".row").css("background-color", "green");
  	});

});