var speed = 2000; //time in milliseconds
var intervalTimeHandicap =10; //number of milliseconds to process the interval

document.addEventListener("DOMContentLoaded", function(event) {
  var refs = document.querySelectorAll("a[href^='#'");

	for (var item = 0; item < refs.length; item++)
	{
		refs[item].addEventListener('click', doTheScroll , true);
	}
});

function doTheScroll(event)
{
	let atarget = this.getAttribute('href');
	let target = document.querySelector(atarget);
	event.preventDefault();
	let diff = target.offsetTop - document.body.scrollTop;
	let parms = {
		increment: diff/(speed/intervalTimeHandicap),
		current: document.body.scrollTop,
		stopAt: Math.abs(diff),
		counter: 0
	};
	let interval = setInterval( function() {
		document.body.scrollTop = parms.current += parms.increment;
		parms.counter += parms.increment;
		if (Math.abs(parms.counter) >= parms.stopAt)
		{
			clearInterval(interval);
			location.href = atarget;
		}
	}, Math.abs(speed/diff));
}
