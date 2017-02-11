<!-- Author: Kaushal
	 Date: 09/02/2017-->
<html>
<head>
<title>Webpage</title>
<script>
function changeToYellow()
{
	document.getElementById("h2color").style.color="yellow";
}
function changeToBlack()
{
	document.getElementById("h2color").style.color="black";
}

</script>
<script type="text/javascript" src="code.js">
</script></head>
<body>
<h1 onmouseover="this.style.color='yellow';" onmouseout="this.style.color='blue';">This is example code for Javascript</h1>
<p>Sample Text</p>
<button onmouseover="this.style.color='yellow';"onmouseout="this.style.color='blue';" onclick="sayHello();">Move me!</button>
<h2 id="h2color" onmouseover="changeToGreen();" onmouseout="changeToBlack();">Using functions colour change</h2>
<button onclick="doYouWantToContinue();">Continue?</button>
<hr>
<button onclick="acceptInput();">Enter Number?</button>
<hr>
<button onclick="addition();">Adding two numbers?</button>
<hr>
<button onclick="array();">Array addition?</button>
</body>
</html>
