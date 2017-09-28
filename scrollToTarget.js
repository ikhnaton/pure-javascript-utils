/**
* Pure Javascript Scroll to Target utility
* written by Niall Cargill
* https://github.com/ikhnaton/pure-javascript-utils
*/

var speed = 2000; //time in milliseconds
var intervalTimeHandicap =10; //number of milliseconds to process the interval

document.addEventListener("DOMContentLoaded", function(event) {
  var refs = document.querySelectorAll("a[href^='#']");

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

	let scrollNode = document.scrollingElement ?
                 document.scrollingElement : document.body;

	let diff = target.offsetTop - scrollNode.scrollTop;
	let parms = {
		increment: diff/(speed/intervalTimeHandicap),
		current: scrollNode.scrollTop,
		stopAt: Math.abs(diff),
		counter: 0
	};

	let interval = setInterval( function() {
		scrollNode.scrollTop = parms.current += parms.increment;
//		console.log(parms);
		parms.counter += parms.increment;
		if (Math.abs(parms.counter) >= parms.stopAt)
		{
			clearInterval(interval);
			location.href = atarget;
		}
	}, Math.abs(speed/diff));
}

