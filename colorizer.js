let target = null;
let active = false;
let ref = '#verse-1';
let red = 20;
let green = 230
let blue = 130;
let major = 30;
let minor = 1;

document.addEventListener("DOMContentLoaded", function(event) {
	if (active)
	{
		document.addEventListener('keydown', updateColor);
		publishColor();
	}
});

function publishColor()
{
	document.querySelector(ref).style.color = `rgb(${red},${green},${blue})`;
}

function updateColor(event)
{

	if (event.code == "ArrowDown")
	{
		decrementColor(major);
		event.preventDefault();
	}
	else if (event.code == "ArrowUp")
	{
		incrementColor(major);
		event.preventDefault();
	}
	else if (event.code == "ArrowRight")
	{
		incrementColor(minor);
		event.preventDefault();
	}
	else if (event.code == "ArrowLeft")
	{
		decrementColor(minor);
		event.preventDefault();
	}
	else if (event.code == "KeyS")
	{
		alert(document.querySelector(ref).style.color)
	}
	publishColor();
}

function incrementColor(x)
{
	blue += x;

	if (blue > 255)
	{
		blue = 0;
		green += x;
	}

	if (green > 255)
	{
		green = 0;
		red += x;
	}

	if (red > 255)
	{
		red = 0;
	}
}

function decrementColor(x)
{
	blue -= x;

	if (blue < 0)
	{
		blue = 255;
		green -= x;
	}

	if (green < 0)
	{
		green = 255;
		red -= x;
	}

	if (red < 0)
	{
		red = 255;
	}
}
