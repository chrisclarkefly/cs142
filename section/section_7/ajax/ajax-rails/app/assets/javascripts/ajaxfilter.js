/*
 * Author: Anant Bhardwaj
 * AJAX Based Filter
 * 
 * Created for CS142 Section
 * 
 */
function AjaxFilter(filter_text_box, url, param_key, target){
	this.element = document.getElementById(filter_text_box);
	this.url = url;
	this.param_key = param_key;
	this.target = document.getElementById(target);
	this.substring = this.element.value;
	this.element.onkeyup = this.wrap(this, "onKeyUp");		
	//console.log("Inside construtor");
	this.requestURL = "";
	this.xmlhttp = null;
	if (window.XMLHttpRequest) {
		this.xmlhttp=new XMLHttpRequest();	
		this.xmlhttp.onreadystatechange=this.wrap(this, "onReadyStateChange");
	}
}

AjaxFilter.prototype.wrap = function(obj, method) {
    return function(event) {
        obj[method](event);
    }
}

AjaxFilter.prototype.onReadyStateChange = function() {
	//console.log("On ready state change");
	if (this.xmlhttp.readyState==4 && this.xmlhttp.status==200)  {
		this.target.innerHTML=this.xmlhttp.responseText;
	}
}
AjaxFilter.prototype.onKeyUp = function(event) {
	//console.log("On key up");
    this.substring = encodeURIComponent(this.element.value);
	if (this.substring.length==0)  { 
		this.target.innerHTML="";
		return;
	}	
	
	this.requestURL= this.url+"?"+this.param_key+"="+this.substring;
	this.xmlhttp.open("GET",this.requestURL,true);
	this.xmlhttp.send();
}

