function Tagger (parent_id, feedback_div, x, y, width, height) {
    this.isMouseDown = false;
    this.parent = document.getElementById(parent_id);
    //console.log(parent_id);
    //console.log(feedback_div);
    this.parent.style.position="relative";
    this.element= document.getElementById(feedback_div);
    this.parent.className  = "images";
    this.element.className = "tag_rect";
    this.element.style.position="absolute";

    this.x = document.getElementById(x);
    this.y = document.getElementById(y);
    this.width  = document.getElementById(width);
    this.height = document.getElementById(height);

    var obj = this;
 
    this.element.onmousedown = function(event) {
        obj.mouseDown(event);
    }

    this.parent.onclick= function(event) {
         obj.click(event);
    }

}

function Tag (tag_id, parent_id, x, y, width, height, name) {
    //console.log(parent_id);
    //console.log(tag_id);
    this.element= document.getElementById(tag_id);
    this.parent = document.getElementById(parent_id);
    this.parent.style.position = "relative";
    this.element.style.position = "absolute";
    this.element.className="tags";
    this.element.style.left = x + "px";
    this.element.style.top  = y + "px";
    this.element.style.width=  width + "px";
    this.element.style.height= height + "px";
    this.name = name;

    var obj=this;
    this.element.onmouseover= function(event) {
      obj.element.innerHTML="<p>" + obj.name + "</p>"; 
    }

    this.element.onmouseout= function(event) {
      obj.element.innerHTML="<p>" + "</p>"; 
    }
}

Tagger.prototype.mouseDown = function(event) {
    var obj= this;
    this.oldMoveHandler = document.body.onmousemove;
    document.body.onmousemove = function(event) {
         obj.mouseMove (event);
    }
    this.oldUpHandler = document.body.onmouseup;
    document.body.onmouseup= function(event) {
         obj.mouseUp(event);
    }
    this.oldX = event.clientX;
    this.oldY = event.clientY;
    this.isMouseDown = true;
}

Tagger.prototype.click = function(event) {
    var tempx = event.pageX- this.parent.offsetLeft;
    var tempy = event.pageY- this.parent.offsetTop;

    if (this.checkBounds(tempx, tempy)){
	this.element.style.left = tempx + "px";
	this.element.style.top  = tempy + "px";
        if (!this.isMouseDown){
	    this.element.style.width = 100 + "px";
	    this.element.style.height= 100 + "px";
        }

    }else if (this.checkBounds(tempx, 1)){
	this.element.style.left = tempx + "px";
	this.element.style.top  = parseInt(this.parent.offsetHeight)  - this.element.offsetHeight + "px"; 
    }else if (this.checkBounds(1, tempy)){
	this.element.style.left = parseInt(this.parent.offsetWidth)  - this.element.offsetWidth + "px"; 
	this.element.style.top  = tempy + "px";
    }else {
	this.element.style.left = parseInt(this.parent.offsetWidth)  - this.element.offsetWidth + "px"; 
	this.element.style.top  = parseInt(this.parent.offsetHeight)  - this.element.offsetHeight + "px"; 
    }
    this.savePosition();
    this.isMouseDown = false;
}

Tagger.prototype.mouseMove = function(event) {
    if (!this.isMouseDown) {
       return;
    }
    this.isMouseDown = true;
    var tempx = (this.element.offsetLeft + (event.clientX- this.oldX));
    var tempy = (this.element.offsetTop  + (event.clientY- this.oldY));

    if (this.checkBounds(tempx, tempy)){
        this.element.style.width  =  this.element.offsetWidth + event.clientX-this.oldX + "px";
        this.element.style.height =  this.element.offsetWidth + event.clientY-this.oldY + "px";
    }else if (this.checkBounds(tempx, 1)){
        this.element.style.width  =  this.element.offsetWidth + event.clientX-this.oldX + "px";
    }else if (this.checkBounds(1, tempy)){
        this.element.style.height =  this.element.offsetWidth + event.clientY-this.oldY + "px";
    }
    this.oldX = event.clientX;
    this.oldY = event.clientY;
    this.savePosition();
}

Tagger.prototype.mouseUp = function(event) {
    this.isMouseDown = false;
    document.body.onmousemove = this.oldMoveHandler;
    document.body.onmouseup   = this.oldUpHandler;
}

Tagger.prototype.checkBounds = function(x,y) {
    elemWidth  =  parseInt(this.element.offsetWidth);
    elemHeight =  parseInt(this.element.offsetHeight);
    if (x < parseInt(this.parent.offsetWidth) - elemWidth && y < parseInt(this.parent.offsetHeight) - elemHeight && x > 0 && y > 0) {
	 return true;
    } else {
	 return false;
    }
}

Tagger.prototype.savePosition = function () {
    this.x.value      = this.element.offsetLeft;
    //console.log("I am here");
    //console.log(this.x.value);
    this.y.value      = this.element.offsetTop;
    this.width.value  = this.element.offsetWidth;
    this.height.value = this.element.offsetHeight;
}

