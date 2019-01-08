async function getConfig() {

	let x = await fetch('conf/config.json?'+Date.now());


	if (!x.ok) {
		console.log('failed to fetch config using default');
		x = await fetch('example/config.json?'+Date.now());
	}
	return x.text();

}

async function getPageObj(page) {
	console.log(page);
	let json = await fetch(page + '.json?'+Date.now());
	let html = await fetch(page + '.html?'+Date.now());
	let pageObj = {};
	if (json.ok) {

		pageObj = JSON.parse(await json.text());
	}
	else {
		pageObj.title = '';
	}

	if (html.ok) {
		pageObj.content = await html.text();
	}
	else {
		pageObj.content = '';
	}

	if (!html.ok && !json.ok) {
		pageObj = {
			title: "NOT FOUND",
			content: "PAGE NOT FOUND"
		}
	}
	return pageObj;

}

async function getTemplate(templatePath){
	let html=await fetch(templatePath+'?'+Date.now());

	return html.text();

}
async function getTemplateTranslate(translatePath){
	let js=await fetch(translatePath+'?'+Date.now());

	return js.text();

}
