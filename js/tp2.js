
var keys = document.querySelectorAll('#calculator span'),
	operators = ['+', '-', '*', '/','x'],
	hasDecimal = false;


for (var i = 0; i < keys.length; i++)
	keys[i].addEventListener("click", calculate, false);

function calculate(e) {	
	var result = document.querySelector('#result'),
		input = result.innerHTML,
		key = this.innerHTML;
	
	if (key == 'C') { 
		result.innerHTML = '';
		hasDecimal = false;
	}		
	
	else if (key == '=') {
		var equation = input,
			lastChar = equation[equation.length - 1];			
		
		if (operators.indexOf(lastChar) > -1 || lastChar == '.')
			equation = equation.replace(/.$/, '');
		
		if (equation)
			result.innerHTML = eval(equation);
		hasDecimal = false;	
	}
	
	else if (operators.indexOf(key) > -1) {
		
		var lastChar = input[input.length - 1];
		
		if (input != '' && operators.indexOf(lastChar) == -1)
	    	result.innerHTML += key;
	   
	    if (input == '' && key == '-')
	    	result.innerHTML += key;

			if (input == '' && key == 'x'){
result=0;
			for(i=1;i<=input;i++){
				result.innerHTML += key;
			}
		}
	    
	    if (operators.indexOf(lastChar) > -1 && input.length > 1)
	    	result.innerHTML = input.replace(/.$/, key);
	    hasDecimal = false;
	}
	
	else if (key == '.') {
		if (!hasDecimal) {
			result.innerHTML += key;
			hasDecimal = true;
		}
	}
	
	else if (input == '' && key == '0')
		result.innerHTML == '';
	
	else
		result.innerHTML += key;
	
	e.preventDefault(); 
}