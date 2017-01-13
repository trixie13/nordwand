// resizeText();
// function resizeText(){
// 	var img = document.getElementById('img'); 
// 	var width = img.clientWidth;
// 	var height = img.clientHeight;
// 	document.getElementByClass('text').style.width = width;
// 	document.getElementByClass('text').style.height = height;
// }
// window.addEventListener('resize',resizeText());

// $(document).ready(function() {
  
//    $(".text").css("width",function(){
// 	   	var imgWidth = $(".img").width();
// 	    return imgWidth;})
//    $(".text").css("height",function(){
// 	   	var imgHeight = $(".img").height();
// 	   	return imgHeight;})

//    $("#hero").css("background-color","red");
// });

window.onscroll = function() {
    if(document.body.scrollTop == 0) {
        document.getElementById("nav").className = "top-size";
    }else{
    	document.getElementById("nav").className = "scroll-size";
    }

}
/* ----- search input change style ----- */
function Search(){
	if(document.getElementById("input").className == "visible"){
		document.getElementById("input").className = "invisible";
		document.getElementById("search-li").className = "";
	    document.getElementById("search-svg").style.fill = "#eef2f4"; /* white */
	    document.getElementsByClassName("breadcrumb")[0].style.marginTop = "86px";
	}else{
		document.getElementById("input").className = "visible";
		document.getElementById("search-li").className = "jump-next-line";
	    document.getElementById("search-svg").style.fill = "#82868a"; /* gray */
	    //also, make breadcrumb go lower
	    document.getElementsByClassName("breadcrumb")[0].style.marginTop = "116px";
	}
}
// function getWhite(){
// 	document.getElementById("search").style.fill = "#eef2f4"; /* white */
// }

// function getGray(){
// 	if(document.getElementById("input").className == "invisible"){
// 		document.getElementById("search").style.fill = "#82868a"; /* gray */
// 	}
// }
function displayMenu(){
	// var viewportwidth;
 //    var viewportheight;
  
 // // the more standards compliant browsers 
 // //(mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
 //    if (typeof window.innerWidth != 'undefined'){
 //      viewportwidth = window.innerWidth;
 //      viewportheight = window.innerHeight;
 //    }
 //    // if(viewportwidth < 1150px){
 //    // 	document.getElementById("menu").className = "invisible";
 //    // }

	// var listItems = document.getElementsByClassName('full-width');
 //    for(i=0;i<listItems.length;i++){
 //    	listItems[i].className = "squeezed";
 //    }

}

function fitImage(div){
	//gets div it needs to fit as paramenter
	var rect = div.getBoundingRect();
	fromLeft = rect.left;
	console.log(fromLeft);
	fromTop = rect.top;
	console.log(fromTop);
	div.style.backgroundPosition = '"' + fromTop + 'px ' + fromLeft + 'px"';
	console.log('"' + fromTop + 'px ' + fromLeft + 'px"');
}
/* ----- end search input ----*/