/*       Author: Kaushal Topinkatti B
	 Date: 09/02/2017                 */
function changeToGreen()
{
	document.getElementById("h2color").style.color="green";
}

function sayHello()
{
	alert("Hello");
}

function doYouWantToContinue()
{
	var confirmation=confirm("Do you want to continue?");
	if(confirmation==true)
	{
		alert("You clicked OK!");
	}
	else
	{
		alert("You clicked on cancel");
	}
}

function acceptInput()
{
	var x=prompt("Please Enter a number");
	alert("You entered "+x);
}

function addition()
{
	var x=prompt("Please enter first number");
	var y=prompt("Please enter second number");
	x=x-0;
	y=y-0;	
	var z=x+y;
	alert("Sum= "+z);
}

function array()
{
	var list=new Array(10,20,30);
	var i=0,sum=0;
	for(i=0;i<3;i++)
	{

		sum+=list[i];
	}
	alert("Sum="+sum);
}
