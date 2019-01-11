window.onload = async function () {

	let config=JSON.parse(await getConfig());
	let u = new URL(document.location);
	let pageLookup;
	if (u.searchParams.has('page')) {
		pageLookup = u.searchParams.get('page');
	}
	else {
		pageLookup = 'home';
	}
	
	//to remove ../ 
	let cleanUrl = new URL(pageLookup, location.origin);
	pageLookup=cleanUrl.pathname.substring(1);
	console.log(pageLookup);
	
	let page=await getPageObj(config.pages.dir+pageLookup);

	let template=await getTemplate(config.template.html);

	let templateTranslate=await getTemplateTranslate(config.template.translateJs);

	let sentObject={
		config:config,
		page:page
	}


	let nextHtml=template.replace('//ADD-PAGE-DATA//','let _PAGEDATA_='+JSON.stringify(sentObject)+';\n'+templateTranslate);

	let next=document.open("text/html","replace");
	next.write(nextHtml);
	next.close();



};





