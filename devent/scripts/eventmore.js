function open_()  //顯示隱藏層和彈出層 
{
	var hideobj=document.getElementById("hidebg"); 
	hideobj.style.display="block";  //顯示隱藏層 
	hideobj.style.height=document.body.clientHeight+"px"; 
	var hideobj2=document.getElementById("eventcontent"); 
	hideobj2.style.display="block"; 
	
} 
function close_()  //去除隱藏層和彈出層 
{ 
   var hideobj=document.getElementById("hidebg");
   hideobj.style.display="none";
   var hideobj2=document.getElementById("eventcontent"); 
	hideobj2.style.display="none"; 
} 


