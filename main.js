function printOper (a) {
	var elem = document.getElementById('result');
	if (!!!elem.value) {
	 	elem.value;
	 } else if (elem.value.substr(-1).match(/[\-\×\÷\+]/)) {
	 	elem.value = elem.value.substr(0, elem.value.length-1) + a;
	 } else {
	 	elem.value += a;
	 }
};

function printNumLBr (a) {
	document.getElementById('result').value += a;
};

function printRBracket (a) {
	var elem = document.getElementById('result');
	if ((elem.value.split('').filter(y => y == '(').length == elem.value.split('').filter(y => y == ')').length) || (elem.value.split('').filter(y => y == '(').length == 0)) {
		elem.value;
	} else if (elem.value.length == 0) {
		elem.value; 
	} else {
		elem.value += a;
	}
};

function resetDlt (a) {
	var elem = document.getElementById('result');
	if (a == 'r') {
		elem.value = '';
	} else {
		elem.value = elem.value.substr(0, elem.value.length-1);
	}
};

function equal() {
	var elem = document.getElementById('result'), replace;
	elem = elem.value.replace('÷', '/').replace('x', '*');
	
};