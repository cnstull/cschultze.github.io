// JavaScript Document

function validateForm()
{
	var x=document.forms["zipform"]["zip"].value;
	if (x==null || x=="")
	  {
		  alert("Please enter a zipcode.");
		  return false;
	  }
}