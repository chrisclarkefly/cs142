function AjaxSearch(search_text_box, url, param_key, target) {
    this.element = document.getElementById(search_text_box);
    this.url = url;
    this.param_key = param_key;
    this.target = document.getElementById(target);
    this.substring = this.element.value;
    var obj=this;
    this.element.onkeyup = function(event){
        obj.onKeyUp(event);
    } 

    //console.log("Inside constructor");
    this.requestUrl = "";
    this.xmlhttp = null;
    if (window.XMLHttpRequest) {
       this.xmlhttp=new XMLHttpRequest();
       this.xmlhttp.onreadystatechange=function() {
	     if (obj.xmlhttp.readyState==4 && obj.xmlhttp.status ==200) {
		  console.log(obj.xmlhttp.responseText);
		  obj.target.innerHTML=obj.xmlhttp.responseText;
		  obj.onReadyStateChange;
	       }
       }
    }
}

AjaxSearch.prototype.onReadyStateChange = function() {
     console.log(this.xmlhttp.responseText);
     if (this.xmlhttp.readyState==4 && this.xmlhttp.status ==200) {
          this.target.innerHTML=this.xmlhttp.responseText;
     }
}

AjaxSearch.prototype.onKeyUp = function(event) {
     this.substring = encodeURIComponent(this.element.value);
     if (this.substring.length==0) {
           this.target.innerHTML="";
           return;
     }
    
     this.requestURL = this.url + "?"+this.param_key+"="+this.substring;
     this.xmlhttp.open("GET", this.requestURL, true);
     this.xmlhttp.send();
}

