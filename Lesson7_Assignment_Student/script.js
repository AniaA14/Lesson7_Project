/**
Program Name: Recipe Display Application 

Author: Ania Augustin

Date: 7/13/2015

Filename: script.js

*/



// Function Display

function display(event){
    
$(event.currentTarget).next().fadeIn("slow");

}// end of display()


//Element called display

/*
$("h3").click(display);
*/


// This code will trigger the display2 (toggle, animate)
/*
$("h3").click(display2);
*/

//Hover display 
$("h3").hover(display2);


//Recipe Display Application
function display2(event) {
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
    // $(event.currentTarget).prev().animate( {left: '100px'}, "slow");// Office hours example sliding text
    
};

//Hover Example 2
$("h3").hover(function() {
    $(this).css("background-color", "yellow");
   }, function(){
    $(this).css("background-color", "pink");
 });

