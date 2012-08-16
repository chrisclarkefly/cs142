/**
 * Credit: Fall 2010 CS142 Staff
 */ 
 
function Mover(id, parent) {
  this.parent = document.getElementById(parent);
  this.parent.className="container";
	this.parent.style.position = "relative";
  this.parent.style.width = 400;
  this.parent.style.height = 400;
  
  this.element = document.getElementById(id);
  this.element.className="mover";
  this.element.style.position = "relative";
  this.element.style.borderWidth = 40;
  this.element.style.width = 10;
  this.element.style.height = 10;
  
  
  document.onkeypress = this.wrap(this, "keypress");
  this.parent.onclick = this.wrap(this, "click");
  
  
  this.element.style.left = 50;
  this.element.style.top = 50;
  
  this.xpos = parseInt(this.element.style.left);
  this.ypos = parseInt(this.element.style.top);
}

Mover.prototype.wrap = function(obj, method) {
    return function(event) {
        obj[method](event);
    }
}

Mover.prototype.checkBounds = function(x,y) {
  borderWidth = parseInt(this.element.style.borderWidth);
  elemWidth = borderWidth * 2 + parseInt(this.element.style.width);
  elemHeight = borderWidth * 2 + parseInt(this.element.style.height);
  if (x < parseInt(this.parent.style.width) - elemWidth && 
      y < parseInt(this.parent.style.height) - elemHeight &&
    x > 0 && y > 0) {
      return true;
    }
    else {
      return false;
    }
}

Mover.prototype.click = function(event) {

  tempx = event.clientX - this.parent.offsetLeft;
  tempy = event.clientY - this.parent.offsetTop;
  if(this.checkBounds(tempx, tempy)) {
    this.xpos = tempx
    this.ypos = tempy
    this.element.style.left = this.xpos;
    this.element.style.top = this.ypos;
  }
}

Mover.prototype.keypress = function(event) {
  keychar = String.fromCharCode(event.which);
  tempx = this.xpos;
  tempy = this.ypos;
  if (keychar == 'a') {
    tempx -= 5;
  } 
  else if (keychar == 'd') {
    tempx += 5;
  }
  else if (keychar == 'w') {
    tempy -= 5;
  } 
  else if (keychar == 's') {
    tempy += 5;
  }  
  if (this.checkBounds(tempx, tempy)) {
    this.xpos = tempx;
    this.ypos = tempy;
    this.element.style.top = this.ypos;
    this.element.style.left = this.xpos;
  }
}
