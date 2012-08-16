function Calendar(id){
  this.element = document.getElementById(id);
}

Calendar.prototype.render= function(date){
  var self=this;
  this.date=date; 
  var numOfDays = 7;
  var days=['Su ', 'Mo ', 'Tu ', 'We ', 'Th ', 'Fr ', 'Sa ', 'Su '];
  var numOfDaysInMonth=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var monthName=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  if (date.getFullYear() % 400==0 || date.getFullYear() % 4==0 && date.getFullYear % 100 !=0) numOfDaysInMonth[1]=29;
  var table=document.createElement('table');
  this.element.removeChild(this.element.firstChild);
  this.element.appendChild(table);
  var title=document.createElement('caption');
  var name =document.createTextNode(monthName[date.getMonth()] + ", " + date.getFullYear()); 
  title.appendChild(name); 
  var prev=document.createElement('a');
  var next=document.createElement('a');
  prev.setAttribute('class', 'link');
  next.setAttribute('class', 'link');
  prev.setAttribute('href', '#');
  next.setAttribute('href', '#');
  prev.appendChild(document.createTextNode('<')); 
  next.appendChild(document.createTextNode('>')); 
  prev.onclick=function(){
       self.prev();
  }
  next.onclick=function(){
       self.next();
  }
  title.insertBefore(prev, name);
  title.appendChild(next);
  table.appendChild(title)
  var row=document.createElement('tr');
  table.appendChild(row);

  //headings  (days sun-sat)
  for (i=0;i<numOfDays; i++) {
      var th = document.createElement('th');
      th.appendChild(document.createTextNode(days[i])); 
      row.appendChild(th);
  }
  
  var nextDate= new Date(this.date.getFullYear(), this.date.getMonth(), 0); 
  var firstDay=new Date(date.getFullYear(), date.getMonth(),  1);
  var lastMonthDate=new Date(date.getFullYear(), date.getMonth(),0);
  var numOfRows = Math.ceil((1+lastMonthDate.getDay()+numOfDaysInMonth[date.getMonth()]) / numOfDays); 

   nextDate.setDate(lastMonthDate.getDate()-lastMonthDate.getDay()); //find the last sunday of last month 

  if (firstDay.getDay()==0){ //first day is on a Sunday
      numOfRows-=1;
      nextDate.setDate(1);  
      nextDate.setMonth(date.getMonth());
  }

//fill in the dates
  for (i=0;i<numOfRows; i++) {
      tr=document.createElement('tr');  
      for (j=0;j<numOfDays; j++){
	  td=document.createElement('td');
	  td.appendChild(document.createTextNode(nextDate.getDate()));   
          console.log(nextDate.getDate());
          if (nextDate.getMonth() != date.getMonth()) {
		td.setAttribute('class', 'dim');
          }
	  tr.appendChild(td);
          table.appendChild(tr); 
          nextDate.setDate(nextDate.getDate() + 1);
      }
  }
}

Calendar.prototype.prev = function (event) {
    this.render(new Date(this.date.getFullYear(), this.date.getMonth()-1, 1)); 
}

Calendar.prototype.next = function (event) {
    this.render(new Date(this.date.getFullYear(), this.date.getMonth()+1, 1)); 
}
