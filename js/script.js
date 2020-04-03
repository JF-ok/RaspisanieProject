window.onload = function (){
 var links = document.querySelectorAll(".links_buttons div")
 for (var i = 0; i < links.length; i++) {
 	links[i].onclick = function (){
 		if (this.getAttribute("state") == "open") {
 			this.setAttribute("state", "close")
 		}
 		else {
 			this.setAttribute("state", "open")
 		}
 	}
 }
}

$("document").ready(function(){
	$(".button-collapse").sideNav();
  });