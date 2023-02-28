

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/vampire.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Ты Капибара, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Ты Капибара, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

var list = document.getElementById("list");

for (let i = 1; i <= 5; i++) {
  let item = document.createElement('li');
  item.appendChild(document.createTextNode('Blabla ' + i));

  item.onclick = function(ev) {
    console.log('Item ' + i + ' is clicked.');
  };
  list.appendChild(item);
}


var i,j;
metka1:
for (i=0; i<5; i++) {
	metka2:
	for(j=0; j<5; j++) {
		if (i==j) {
			continue metka1;
		} else {
			if (i==3) {
				break metka2;
			}
			console.log(i,j);
		}

	}
}