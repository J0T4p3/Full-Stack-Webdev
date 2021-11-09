let show = false;

let list = document.getElementById('list');

function showhide(value) {
	console.log(value);
	if (show) {
		show = false;
		list.style.display = 'none';
		value.innerHTML = 'show';
	} else {
		show = 'true';
		list.style.display = 'block';
		value.innerHTML = 'hide';
	}
}
