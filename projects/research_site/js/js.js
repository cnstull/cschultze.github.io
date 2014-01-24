// JavaScript Document

<script type="text/javascript">
			function randomColor() {
				// #1FE6A2
				var colorChoices = new Array('0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f');

				// FF 00 62 A7
				var r1 = colorChoices[Math.floor(15*Math.random())];
				var r2 = colorChoices[Math.floor(15*Math.random())];
				var g1 = colorChoices[Math.floor(15*Math.random())];
				var g2 = colorChoices[Math.floor(15*Math.random())];
				var b1 = colorChoices[Math.floor(15*Math.random())];
				var b2 = colorChoices[Math.floor(15*Math.random())];
				
				//alert(r1 + r2 + g1 + g2 + b1 + b2);
				var finalColor = "#" + r1 + r2 + g1 + g2 + b1 + b2;
				//alert(finalColor);
				
				return finalColor;
			}
			
			function showCSS(event) {
				/*
					<div id="cssContainer">
						<p>background-color: #131566;</p>
						<p>color: #131566;</p>
					</div>
				*/
				var anchorColor = this.getAttribute('title');

				if(document.getElementById('cssContainer')) {
					document.getElementById('cssContainer').parentNode.removeChild(document.getElementById('cssContainer'));
				}
				
				var divCssContainer = document.createElement('div');
				divCssContainer.setAttribute('id','cssContainer');
				
				var paragraphBC = document.createElement('p');
				var paragraphBCText = document.createTextNode('background-color: ' + anchorColor + ';');
				paragraphBC.appendChild(paragraphBCText);
				divCssContainer.appendChild(paragraphBC);
				
				var paragraphC = document.createElement('p');
				var paragraphCText = document.createTextNode('color: ' + anchorColor + ';');
				paragraphC.appendChild(paragraphCText);
				divCssContainer.appendChild(paragraphC);
				
				var container = document.getElementById('container');
				container.appendChild(divCssContainer);
				
				event.preventDefault();
			}

			function createColor(event) {
				//alert('inside createColor');
				
				var listItem1 = document.getElementById('color1');
				var colorBox1 = listItem1.firstChild;
				var listItem2 = document.getElementById('color2');
				var colorBox2 = listItem2.firstChild;
				var listItem3 = document.getElementById('color3');
				var colorBox3 = listItem3.firstChild;
				var listItem4 = document.getElementById('color4');
				var colorBox4 = listItem4.firstChild;
				var listItem5 = document.getElementById('color5');
				var colorBox5 = listItem5.firstChild;
				
				var color1 = randomColor();
				colorBox1.style.backgroundColor = color1;
				colorBox1.setAttribute('title',color1);
				colorBox1.addEventListener('click',showCSS,false);

				var color2 = randomColor();
				colorBox2.style.backgroundColor = color2;
				colorBox2.setAttribute('title',color2);
				colorBox2.addEventListener('click',showCSS,false);

				var color3 = randomColor();
				colorBox3.style.backgroundColor = color3;
				colorBox3.setAttribute('title',color3);
				colorBox3.addEventListener('click',showCSS,false);

				var color4 = randomColor();
				colorBox4.style.backgroundColor = color4;
				colorBox4.setAttribute('title',color4);
				colorBox4.addEventListener('click',showCSS,false);

				var color5 = randomColor();
				colorBox5.style.backgroundColor = color5;
				colorBox5.setAttribute('title',color5);
				colorBox5.addEventListener('click',showCSS,false);
				// what I have now - <a href=""></a>
				// what I want     - <a href="" title="#672575"></a>
				
				event.preventDefault();
			}
			
			window.onload = function() {
				var paragraphs = document.getElementsByTagName('p');
				var firstParagraph = paragraphs[0];
				var anchor = firstParagraph.firstChild;
				anchor.addEventListener('click',createColor,false);
			}
		</script>
