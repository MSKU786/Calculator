
var buttons = document.getElementsByClassName("number");
var display = document.getElementById("display");
var operator = null;
var operand1 = 0;
var operand2 = 0;
console.log('yes');
for(var i=0;i<buttons.length;i++)
{
	buttons[i].addEventListener('click', function(){
		var value =  this.getAttribute('data-value');
		console.log(value);
		switch(value)
		{
			case '+': operator = '+';
					   operand1 = parseFloat(display.textContent);
					   display.innerText += value;
					   display.innerText = "";
					   break;
			case "=" : operand2 = parseFloat(display.textContent);
					   var ans = eval(operand1+ operator+operand2);
					   display.innerText=ans;
					   break;
			default: display.innerText += value;

		}
	});
}