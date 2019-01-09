window.onload = async function () {

	console.log("NEW DOC");
	let elementArr = [];

	for (let i in _HTMLREPLACE_.id) {
		console.log(i);
		console.log(typeof _HTMLREPLACE_.id[i]);
		elementArr.push({
			el: document.getElementById(i),
			re: _HTMLREPLACE_.id[i]
		});
	}

	for (let i in _HTMLREPLACE_.class) {
		for (let j of document.getElementsByClassName(i)) {
			elementArr.push({
				el: j,
				re: _HTMLREPLACE_.class[i]
			});
		}
	}

	for (let i in _HTMLREPLACE_.tag) {
		for (let j of document.getElementsByTagName(i)) {
			elementArr.push({
				el: j,
				re: _HTMLREPLACE_.tag[i]
			});
		}
	}

	for (let e of elementArr) {
		if (e.el !== null) {
			if (typeof e.re === "function") {
				e.el.innerHTML = e.re();
			}
			else {
				e.el.innerHTML = e.re;
			}
		}
	}
}