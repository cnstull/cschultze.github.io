function prepareForm() {
				var form = document.getElementsByTagName("form");
				form[0].addEventListener('submit',function(e) {
					e.preventDefault();
					
					if(document.getElementById('adj1').value==''){
						var d = document.getElementById('adj1');
						d.setAttribute('class', 'error');
					}
					else{
						var d = document.getElementById('adj1');
						d.setAttribute('class', '');	
					}
					
					if(document.getElementById('plnoun1').value==''){
						var d = document.getElementById('plnoun1');
						d.setAttribute('class', 'error');
					}
					else{
						var d = document.getElementById('plnoun1');
						d.setAttribute('class', '');	
					}
					
					if(document.getElementById('noun1').value==''){
						var d = document.getElementById('noun1');
						d.setAttribute('class', 'error');
					}
					else{
						var d = document.getElementById('noun1');
						d.setAttribute('class', '');	
					}
					
					if(document.getElementById('adj2').value==''){
						var d = document.getElementById('adj2');
						d.setAttribute('class', 'error');
					}
					else{
						var d = document.getElementById('adj2');
						d.setAttribute('class', '');	
					}
					
					if(document.getElementById('body1').value==''){
						var d = document.getElementById('body1');
						d.setAttribute('class', 'error');
					}
					else{
						var d = document.getElementById('body1');
						d.setAttribute('class', '');	
					}
					
					if(document.getElementById('adj3').value==''){
						var d = document.getElementById('adj3');
						d.setAttribute('class', 'error');
					}
					else{
						var d = document.getElementById('adj3');
						d.setAttribute('class', '');	
					}
					
					if(document.getElementById('plnoun2').value==''){
						var d = document.getElementById('plnoun2');
						d.setAttribute('class', 'error');
					}
					else{
						var d = document.getElementById('plnoun2');
						d.setAttribute('class', '');	
					}
					
					if(document.getElementById('body2').value==''){
						var d = document.getElementById('body2');
						d.setAttribute('class', 'error');
					}
					else{
						var d = document.getElementById('body2');
						d.setAttribute('class', '');	
					}
					
					if(document.getElementById('adj4').value==''){
						var d = document.getElementById('adj4');
						d.setAttribute('class', 'error');
					}
					else{
						var d = document.getElementById('adj4');
						d.setAttribute('class', '');	
					}
					
					if(document.getElementById('adv1').value==''){
						var d = document.getElementById('adv1');
						d.setAttribute('class', 'error');
					}
					else{
						var d = document.getElementById('adv1');
						d.setAttribute('class', '');	
					}
					
					if(document.getElementById('noun2').value==''){
						var d = document.getElementById('noun2');
						d.setAttribute('class', 'error');
					}
					else{
						var d = document.getElementById('noun2');
						d.setAttribute('class', '');	
					}
					
					if(document.getElementById('body3').value==''){
						var d = document.getElementById('body3');
						d.setAttribute('class', 'error');
					}
					else{
						var d = document.getElementById('body3');
						d.setAttribute('class', '');	
					}
					
					if(document.getElementById('adv2').value==''){
						var d = document.getElementById('adv2');
						d.setAttribute('class', 'error');
					}
					else{
						var d = document.getElementById('adv2');
						d.setAttribute('class', '');	
					}
					
					var formData = "";
					formData += 'adj1=';
					formData += document.getElementById('adj1').value;
					formData += '&plnoun1=';
					formData += document.getElementById('plnoun1').value;
					formData += '&plnoun1=';
					formData += document.getElementById('plnoun1').value;
					formData += '&noun1=';
					formData += document.getElementById('noun1').value;
					formData += '&adj2=';
					formData += document.getElementById('adj2').value;
					formData += '&body1=';
					formData += document.getElementById('body1').value;
					formData += '&adj3=';
					formData += document.getElementById('adj3').value;
					formData += '&plnoun2=';
					formData += document.getElementById('plnoun2').value;
					formData += '&body2=';
					formData += document.getElementById('body2').value;
					formData += '&adj4=';
					formData += document.getElementById('adj4').value;
					formData += '&adv1=';
					formData += document.getElementById('adv1').value;
					formData += '&noun2=';
					formData += document.getElementById('noun2').value;
					formData += '&body3=';
					formData += document.getElementById('body3').value;
					formData += '&adv2=';
					formData += document.getElementById('adv2').value;
					formData += '&submit=';
					formData += document.getElementById('submit').value;
					setupRequest(formData);
				});
			}
			function setupRequest(formData) {
				var xhr = new XMLHttpRequest();

				if(xhr) {
					xhr.onreadystatechange = function() {
						displayResponse(xhr);
					}
					xhr.open('POST', 'returnMadlib.php', true);
					xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					xhr.send(formData);
				}
			}
			function displayResponse(xhr) {
				if(xhr.readyState == 4) {
					if((xhr.status == 200) || (xhr.status == 304)) {
						var div = document.getElementById('response');
						div.innerHTML = xhr.responseText;
					}
					else if (xhr.status == 404) {
						var p = document.getElementById('response');
						p.innerHTML = "File not Found!";
					} 
					else {
						var p = document.getElementById('response');
						p.innerHTML = "Refresh the page or try again";
					}
				}
			}
			window.onload = prepareForm;