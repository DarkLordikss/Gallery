"use strict"

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById('post_button').addEventListener("click", function(event){
        console.log("clicked post_button");
    	document.getElementById('postback').style.visibility = 'visible';
        document.getElementById('postback').style.opacity = '0.9';
    })
    document.getElementById('cross').addEventListener("click", function(event){
        console.log("clickedcross");
                document.getElementById('postback').style.opacity = '0.0';
        document.getElementById('postback').style.visibility = 'hidden';
    })
})
