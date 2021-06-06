
var buttons = document.getElementsByClassName("number");
var display = document.getElementById("display");
var previous = document.getElementById("prevDisplay");
var operation = document.getElementById("operation");
var operator = null;
var operand1 = 0;
var operand2 = 0;

for(var i=0;i<buttons.length;i++)
{
	buttons[i].addEventListener('click', function(){
		var value =  this.getAttribute('data-value');
		console.log(value);
		switch(value)
		{
			case '+': operator = '+';

					  if(operand1!=null)
					  {
					  		var temp = parseFloat(display.textContent);
					  		operand1 = eval(temp+operator+operand1);
					  }
					  else
					  	   operand1 = parseFloat(display.textContent);
					   prevDisplay.innerText = prevDisplay.innerText+ operation.innerText+display.innerText ;
					   operation.innerText = "+"
					   display.innerText = "";
					   break;
			case '-': operator = '-';
						if(operand1!=null)
						{
								var temp = parseFloat(display.textContent);
								operand1 = eval(temp+operator+operand1);
						}
						else
							operand1 = parseFloat(display.textContent);
							prevDisplay.innerText = prevDisplay.innerText+ operation.innerText+display.innerText ;
						operation.innerText = "-"
						display.innerText = "";
						break;
					  
			case '*': operator = '*';
					  if(operand1!=null)
					  {
					  		var temp = parseFloat(display.textContent);
					  		operand1 = eval(temp+operator+operand1);
					  }
					  else
					  	   operand1 = parseFloat(display.textContent);
							 prevDisplay.innerText = prevDisplay.innerText+ operation.innerText+display.innerText ;
						operation.innerText = "*"
						display.innerText = "";
					   break;

			case '%': operator = '%';
					  if(operand1!=null)
					  {
					  		var temp = parseFloat(display.textContent);
					  		operand1 = eval(temp+operator+operand1);
					  }
					  else
					  	   operand1 = parseFloat(display.textContent);
							 prevDisplay.innerText = prevDisplay.innerText+ operation.innerText+display.innerText ;
						operation.innerText = "%"
						display.innerText = "";
					   break;
			case '/': operator = '/';
					  if(operand1!=null)
					  {
					  		var temp = parseFloat(display.textContent);
					  		operand1 = eval(temp+operator+operand1);
					  }
					  else
					  	   operand1 = parseFloat(display.textContent);
							 prevDisplay.innerText = prevDisplay.innerText+ operation.innerText+display.innerText ;
					   operation.innerText = "/"
					   display.innerText = "";
					   break;
			case "=" : operand2 = parseFloat(display.textContent);
					   var ans = eval(operand1+ operator+operand2);
					   operation.innerText="";
					   prevDisplay.innerText = ans ;
					   display.innerText=ans;
					   break;
			case "AC" : operand1 = null;
						operand2 = null;
						operator = "";
						prevDisplay.innerText = "";
						operation.innerText = "";
						display.innerText = "";
						break;
			case "+/-" :operand1 = parseFloat(display.textContent);
						operand1 = eval("-1"+"*"+parseFloat(operand1));
						if(operation.innerText="")
							operation.innerText = "-"
						console.log(operand1);
						display.innerText = operand1;
						break;
			case "square" :operand1 = parseFloat(display.textContent);
						   operand1 = Math.pow(operand1,2);
						   operation.innerText = "^2"
						   console.log(operand1);
						   display.innerText = operand1;
						   break;
			default:  display.innerText += value;

		}
	});
}