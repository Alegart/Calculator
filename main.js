// Adding signs

function printOper (a) {
	var elem = document.getElementById('result');
	if (elem.value == '') {
	 	elem.value;
	 } else if (elem.value.substr(-1).match(/[\-\×\÷\+]/)) {
	 	elem.value = elem.value.substr(0, elem.value.length-1) + a;
	 } else {
	 	elem.value += a;
	 }
}

// Adding numbers and left round brackets

function printNumLBr (a) {
	document.getElementById('result').value += a;
}

// Adding right round brackets

function printRBracket (a) {
	var elem = document.getElementById('result');
	if ( (elem.value.split('').filter(y => y == '(').length == elem.value.split('').filter(y => y == ')').length) || (elem.value.split('').filter(y => y == '(').length == 0)) {
		elem.value;
	} else if (elem.value.length == 0) {
		elem.value; 
	} else {
		elem.value += a;
	}
}

// Value reset

function resetDlt (a) {
	var elem = document.getElementById('result');
	if (a == 'r') {
		elem.value = '';
	} else {
		elem.value = elem.value.substr(0, elem.value.length-1);
	}
}

// Adding decimal numbers

function printPoint (a) {
	var elem = document.getElementById('result');
		if (elem.value == '') {
			elem.value;
		} else if (elem.value.substr(-1) == '.') {
			elem.value;
		} else if (typeof +elem.value.substr(-1) !== 'number') {
			elem.value;
		} else if ((elem.value.match(/[\.]/)) && (elem.value.substr(elem.value.lastIndexOf('.'), elem.value.substr(-1)).match(/[\-\×\÷\+]/) == null)) {
			elem.value;
		} else {
			elem.value += a;
		}
}

// Calculation

function equal() {
	var replace = document.getElementById('result').value.replace('÷', '/').replace('x', '*');
	
}

