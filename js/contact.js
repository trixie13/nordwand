(function () {

    this.showTextArea = function () {
      document.getElementById("text-message").className = "visible";
    }
    this.hideTextArea = function () {
      document.getElementById("text-message").className = "invisible";
    }

    this.showCheckboxes = function () {
    	document.getElementById("checkboxes-message")
	    	       .className = "visible";
    }
    this.hideCheckboxes = function () {
    	    	document.getElementById("checkboxes-message")
	    	       .className = "invisible"; 
    }

    this.changeLayout = function () {
    	var text = document.getElementById("text");
    	if(text.checked){
    		showTextArea();
    		hideCheckboxes();
    		console.log("1");
    	}else{
    		hideTextArea();
    		showCheckboxes();
    		console.log("2");
    	}
    }

    // form validation
    
})();