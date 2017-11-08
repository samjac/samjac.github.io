function hRooms() {
	 document.getElementById('blue').style.display = 'block';
	 document.getElementById('suite').style.display= 'block';
	 document.getElementById('redo').style.display = 'block';
}
function begin() {
	document.getElementById('blue').style.display = 'none';
	document.getElementById('suite').style.display = 'none';
	document.getElementById('PRoom').style.display = 'none';
	document.getElementById('DRoom').style.display = 'none';
	document.getElementById('RRoom').style.display = 'none';
	document.getElementById('redo').style.display = 'none';
}
//Presidential 
var clickTotal = 0;
function addGuest() {
	var x= document.getElementById('PListe').value;
	var y = document.createElement('li');
	var w = document.createTextNode(x);
	
	if (clickTotal<3) {
	
	clickTotal++;
	y.appendChild(w);
	y.addEventListener("click", remove);
	function remove() {
		this.remove();
		clickTotal--;
	}

	document.getElementById('PRoom').appendChild(y);
}

	document.getElementById('PRoom').style.display = 'block';
	
}

//Deluxe 
var clickTotal2 = 0;
function addGuest2() {
	var x= document.getElementById('DListe').value;
	var y = document.createElement('li');
	var w = document.createTextNode(x);
	
	if (clickTotal2<3) {
	
	clickTotal2++;
	y.appendChild(w);
	y.addEventListener("click", remove);
	function remove() {
		this.remove();
		clickTotal2--;
	}
	document.getElementById('DRoom').appendChild(y);
	
	}

	document.getElementById('DRoom').style.display = 'block';
	
	
}
//Royal
var clickTotal3 = 0;
function addGuest3() {
	var x= document.getElementById('RListe').value;
	var y = document.createElement('li');
	var w = document.createTextNode(x);
	
	if (clickTotal3<3) {
	
	clickTotal3++;
	y.appendChild(w);
	y.addEventListener("click", remove);
	function remove() {
		this.remove();
		clickTotal3--;
	}
	document.getElementById('RRoom').appendChild(y);
	
	}

	document.getElementById('RRoom').style.display = 'block';
	
	
}
