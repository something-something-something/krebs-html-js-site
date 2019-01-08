window.onload = async function () {

	console.log("NEW DOC");
	for (let i in _HTMLREPLACE_.id) {

		console.log(i);
		console.log(typeof _HTMLREPLACE_.id[i]);
		if (typeof _HTMLREPLACE_.id[i] === "function") {
			document.getElementById(i).innerHTML = _HTMLREPLACE_.id[i]();
		}
		else {
			document.getElementById(i).innerHTML = _HTMLREPLACE_.id[i];
		}
	}

	for (let i in _HTMLREPLACE_.class) {
		for (let j of document.getElementsByClassName(i)) {
			if (typeof _HTMLREPLACE_.class[i] === "function") {
				j.innerHTML = _HTMLREPLACE_.class[i]();
			}
			else {
				j.innerHTML = _HTMLREPLACE_.class[i];
			}
		}
	}
	for (let i in _HTMLREPLACE_.tag) {
		for (let j of document.getElementsByTagName(i)) {
			if (typeof _HTMLREPLACE_.class[i] === "function") {
				j.innerHTML = _HTMLREPLACE_.tag[i]();
			}
			else {
				j.innerHTML = _HTMLREPLACE_.tag[i];
			}
		}
	}



}