// JavaScript Document

			function randomAd() {
				var adChoices = new Array("http://sulley.dm.ucf.edu/~co344095/dig3716c/assignment3/img/ad1.png",
										"http://sulley.dm.ucf.edu/~co344095/dig3716c/assignment3/img/ad2.png",
										"http://sulley.dm.ucf.edu/~co344095/dig3716c/assignment3/img/ad3.png",
										"http://sulley.dm.ucf.edu/~co344095/dig3716c/assignment3/img/ad4.png",
										"http://sulley.dm.ucf.edu/~co344095/dig3716c/assignment3/img/ad5.png",
										"http://sulley.dm.ucf.edu/~co344095/dig3716c/assignment3/img/ad6.png",
										"http://sulley.dm.ucf.edu/~co344095/dig3716c/assignment3/img/ad7.png",
										"http://sulley.dm.ucf.edu/~co344095/dig3716c/assignment3/img/ad8.png",
										"http://sulley.dm.ucf.edu/~co344095/dig3716c/assignment3/img/ad9.png",
										"http://sulley.dm.ucf.edu/~co344095/dig3716c/assignment3/img/ad10.png");
				
				var information = new Array("Oxy-Screen",
											"WoW Soda Hat",
											"College Ramen",
											"Mega Energy",
											"Retro Gaming",
											"Mario Chess",
											"Support Japan",
											"Annoy-a-tron",
											"Minecraft",
											"Desktop Nether Portal");

				var finalAd = adChoices[Math.floor(10*Math.random())];

				return finalAd;
			}


			function showCSS(event) {
			
				var anchorAd = this.getAttribute('title');
				// the "this" that this.getAttribute('title') refers to is the
				// element that triggered the function, which would be the
				// <a> tag you click on. It takes the attribute 'title' that
				// was put on it in the createColor() function and stores
				// that value in anchorColor.

				if(document.getElementById('cssContainer')) {  // the if statement checks to see if any Elements exist that have the id = cssContainer, 
																//and if it does the next line removes it.
					document.getElementById('cssContainer').parentNode.removeChild(document.getElementById('cssContainer'));
				}
				
				
				var divCssContainer = document.createElement('div');
				divCssContainer.setAttribute('id','cssContainer');
				// recreates the cssContainer and assigns the id to it
				
				
				var paraName = document.createElement('p');  // the first line creates a <p> tag
				var paraNameText = document.createTextNode('Company Name');  // the second line create a text node, which is just text
				paraName.appendChild(paraNameText);  // the third line puts that text into the <p> tag
				divCssContainer.appendChild(paraName);  // puts the above <p> into cssContainer
				
				var paraProduct = document.createElement('p');
				var paraProductText = document.createTextNode('Product/Service');
				paraProduct.appendChild(paraProductText);
				divCssContainer.appendChild(paraProduct);  // same thing ^
				
				var paraPrice = document.createElement('p');
				var paraPriceText = document.createTextNode('Price');
				paraPrice.appendChild(paraPriceText);
				divCssContainer.appendChild(paraPrice);  // same thing ^
				
				var container = document.getElementById('container');
				container.appendChild(divCssContainer);  // appends the cssContainer to container
				
				
				
				event.preventDefault();  //prevents from going to www.google.com
			} 


			window.onload = function createAd(event) {
				
				var listItem1 = document.getElementById('ad1');
				var adBox1 = listItem1.firstChild;
				var listItem2 = document.getElementById('ad2');
				var adBox2 = listItem2.firstChild;
				var listItem3 = document.getElementById('ad3');
				var adBox3 = listItem3.firstChild;
				// these lines are storing the <a> tag in each of the <li> tags in each of the variables
				

				var ad1 = randomAd();  //these lines get a randomColor and store it in color1 
				var image1 = document.createElement("img");
				image1.setAttribute("id", "img1");
				image1.setAttribute("src", ad1);
				adBox1.appendChild(image1);  
				adBox1.setAttribute('title',ad1);  //adds an attribute to the tag called 'title' and sets its value to the string stored in color1
				adBox1.addEventListener('click',showCSS,false);  //adds an event listener to it so that when it is clicked on the showCSS function triggers

				var ad2 = randomAd();
				var image2 = document.createElement("img");
				image2.setAttribute("id", "img2");
				image2.setAttribute("src", ad2);
				adBox2.appendChild(image2);  
				adBox2.setAttribute('title',ad2);
				adBox2.addEventListener('click',showCSS,false);

				var ad3 = randomAd();
				var image3 = document.createElement("img");
				image3.setAttribute("id", "img3");
				image3.setAttribute("src", ad3);
				adBox3.appendChild(image3);  
				adBox3.setAttribute('title',ad3);
				adBox3.addEventListener('click',showCSS,false);
				
				event.preventDefault();  //stops it from going to www.google.com
			}

			/*window.onload = function() {  // adds an event listener to the first anchor tag in the first paragraph
				var paragraphs = document.getElementsByTagName('p');  //collects all the <p> elements and puts them in an array in the order they appear on the page
				var firstParagraph = paragraphs[0];  //paragraphs[0] would be the first <p> tag on the page
				var anchor = firstParagraph.firstChild;  //takes the first child of firstParagraph (which is the first paragraph on the page) and stores it in anchor
				anchor.addEventListener('click',showCSS,false);  //the function executes when you click on the element
			}*/