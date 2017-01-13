(function () {

	this.onload = function () {
		document.getElementById("menu").addEventListener("mouseleave",hideMenu);
	}

    // function to change navigation bar size when scrolling
    this.onscroll = function() {
    	var navBar = document.getElementById("nav");
	    if(document.body.scrollTop == 0) {
	        navBar.className = "top-size";
	   
	    }else{
	    	navBar.className = "scroll-size";
	    	
    		//also hide search field
	    	var inputField = document.getElementById("input");
	    	var searchItem = document.getElementById("search-li");
		    var searchSvg = document.getElementById("search-svg");
		    var navBar = document.getElementById("nav");

		    inputField.className = "invisible";
            searchItem.className = "";
            searchSvg.style.fill = "#eef2f4"; /* white */ 
            if(navBar.className == "top-size"){
		    	breadcrumb.style.marginTop = "86px";
		    }

		    //hide menu bar if scrolling started
		    hideMenu();
		}
    } 


    //search input appear/disappear function
    this.Search = function () {
    	var inputField = document.getElementById("input");
    	var searchItem = document.getElementById("search-li");
	    var searchSvg = document.getElementById("search-svg");
	    var breadcrumb = document.getElementsByClassName("breadcrumb")[0];
	    var navBar = document.getElementById("nav");
    
	    if(inputField.className == "visible"){
	    	//input is visible, it needs to disappear now (was clicked)
			
			inputField.className = "invisible";
            searchItem.className = "display"; 
				//insead of display jump-next-line (active on media query)
		    searchSvg.style.fill = "#eef2f4"; /* white */
    
		    //if the nav is on top, restore space taken when search jumped on next line
	        if(navBar.className == "top-size"){
		    	breadcrumb.style.marginTop = "86px";
		    }

		}else{
			//input is invisible, it was triggered to appear

			inputField.className = "visible";
			searchItem.className += " jump-next-line";
		    searchSvg.style.fill = "#82868a"; /* gray */
		   
		    //also, make breadcrumb go lower
		    if(navBar.className == "top-size"){
		    	breadcrumb.style.marginTop = "116px";
	        }
		}

	}//end Search() function;

	this.displayMenu = function () {
	    var menu = document.getElementById("menu").getElementsByTagName("li");

	    var menuItems = Array.prototype.slice.call(menu,0);
	    menuItems.forEach(li => li.className = "display");
	    document.getElementById("search-li").className = "display";
    }

    this.hideMenu = function () {
    	var menu = document.getElementById("menu").getElementsByTagName("li");
    	var menuItems = Array.prototype.slice.call(menu,0);
	    menuItems.forEach(li => li.className = "");
    }

})();

