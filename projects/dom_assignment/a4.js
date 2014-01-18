var error = Array();
//Getting the information from the form
function submitForm() {
	var form = new Array();
	form.push(new Array(document.getElementById('firstName'), 'First Name'));
	form.push(new Array(document.getElementById('lastName'), 'Last Name'));
	form.push(new Array(document.getElementById('email'), 'Email Address'));
	form.push(new Array(document.getElementById('creditNum'), 'Credit Card Number'));
	form.push(new Array(document.getElementById('creditEx'), 'Credit Card Expiration Date'));
	
	//Topping choices
	var chocFrost = document.getElementById('chocFrost');
	var vanFrost = document.getElementById('vanFrost');
	var sprinkles = document.getElementById('sprinkles');
	var cherry = document.getElementById('cherry');
	
	//Putting images to the choices
	var image = '';
	if (chocFrost.checked) {
		image += chocFrost.value;
	}
	if (vanFrost.checked) {
		image += vanFrost.value;
	}
	if(sprinkles.checked) {
		image += sprinkles.value;
	}
	if(cherry.checked) {
		image += cherry.value;
	}
	
	var product = document.createElement('img');
	product.src = "img/"+image+".bmp";
	
	var ul = document.createElement('ul');
	var h2 = document.createElement('h2');
	var h3 = document.createElement('h3');
	var h3a = document.createElement('h3');
	var h4 = document.createElement('h3');
	
	var h2text = document.createTextNode('Order Confirmation');
	var h3text = document.createTextNode('Your Information');
	var h3atext = document.createTextNode('Your Order');
	var h4text = document.createTextNode("Thank you for your order!");
	
	h2.appendChild(h2txt);
	h3.appendChild(h3txt);
	h3a.appendChild(h3atxt);
	h4.appendChild(h4text);
	
	//Getting the information that was input on the form, to replace
	for(i=0; i<form.length; i++) {
		var li = document.createElement('li');
		var text3 = document.createTextNode(form[i][1]+": "+form[i][0].value);
		li.appendChild(text3);
		ul.appendChild(li);
	}
	var replacement = document.cupcake_form.parentNode;
	replacement.appendChild(h2);	
	replacement.appendChild(h3);	
	replacement.appendChild(ul);
	replacement.appendChild(h3a);
	replacement.appendChild(h4);
	replacement.appendChild(product);
	replacement.removeChild(document.cupcake_form);
} 

//Validate the form
function validate(tag) {
	
	if(tag.parentNode.childNodes[tag.parentNode.childNodes.length-1].nodeName == 'SPAN') {
		var name = tag.parentNode.childNodes[tag.parentNode.childNodes.length-1];
		name.parentNode.removeChild(name);	
	}

	var span = document.createElement('span');

	//Checks name, email, CC info
	if(tag.id == 'firstName' || tag.id == 'lastName') {
		var check = /[A-Za-z ]+/;
	}
	else if(tag.id == 'email') {
		var check = /^[a-zA-Z.+-_%]+@[A-Za-z0-9.-]+\.([a-zA-Z]{2,4}|museum)/;
	}
	else if(tag.id == 'creditNum') {
		var check = /^(3[47]{1}[0-9]{13})|(5[1-5]{1}[0-9]{14})|(4[0-9]{15})$/;
	}	
	else {
		var check = /^(0[1-9]{1}|10|11|12)\/[0-9]{2}$/;
	}

	//Displays if the information is valid or not for the user
	if(tag.value.match(check)) {
		var text = document.createTextNode('Valid');
		span.appendChild(text);
		span.setAttribute('id', tag.id+'_valid');
		tag.parentNode.appendChild(span);
	}
	else {
		var text = document.createTextNode('Invalid');
		span.appendChild(text);
		span.setAttribute('id', tag.id+'_error');
		span.setAttribute('class', 'error');
		tag.parentNode.appendChild(span);
	}
}
function submitClicked() {
	var chFrost = document.cupcake_form.chocFrost.checked;
	var vFrost = document.cupcake_form.vanFrost.checked;
	var sprink = document.cupcake_form.sprinkles.checked;
	var cher = document.cupcake_form.cherry.checked;
	var food = document.getElementById('chocFrost').parentNode.parentNode.parentNode;
	for (x=0; x<food.childNodes.length; x++) {
		if(food.childNodes[x].nodeName == 'SPAN') {
			var nod = food.childNodes[x];
			food.removeChild(nod);
		}
	}
	//If nothing is chosen, gives the user an error
	if(chFrost != true && vFrost != true && sprink != true && cher != true) {		
		var doc = document.createElement('span');
		doc.setAttribute('class', 'error');
		var text2 = document.createTextNode('You have to choose at least one option.');
		doc.appendChild(text2);
		var list = document.getElementById('chocFrost');
		var par = list.parentNode.parentNode.parentNode;
		par.insertBefore(doc, par.childNodes[1]);
	}
	//Displays error if it is not submitted
	var listing = document.getElementsByTagName('li');
	for (y=0; y < listing.length-5; y++) {
		if(listing[y].childNodes[listing[y].childNodes.length-1].nodeName != 'SPAN' && listing[y].childNodes[listing[y].childNodes.length-1].value == '') {
			var err = document.createElement('span');
			var text3 = document.createTextNode('You must enter something.');
			err.appendChild(text3);
			err.setAttribute('class', 'error');
			listing[y].appendChild(err);
		}
		else if(listing[y].childNodes[listing[y].childNodes.length-1].value != '' && listing[y].childNodes[listing[y].childNodes.length-1].value != null) {
			validate(listing[y].childNodes[listing[y].childNodes.length-1]);
		}
	}
	if(document.getElementsByTagName('span')) {
		var stuff = document.getElementsByTagName('span');
		for (var x = 0; x < stuff.length; x++) {
			if(stuff[x].getAttribute('class') != null) {
				return false
			}
		}
		if(stuff.length > 4) {
			formSubmitted();
		}
	}
	return false;
}
function formSubmit() {
	var formName = document.cupcake_form;
	//formName.fname.onblur = function(e) { alert(e.target.value); }
	formName.firstName.onblur = function(e) { validate(e.target); }
	formName.lastName.onblur = function(e) { validate(e.target); }
	formName.email.onblur = function(e) { validate(e.target); }
	formName.creditNum.onblur = function(e) { validate(e.target); }
	formName.creditEx.onblur = function(e) { validate(e.target); }
	var submitted = document.getElementById('submit');
	submitted.onclick = submitClicked;
}
window.onload = formSubmit;
