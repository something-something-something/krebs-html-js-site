function drawNav(){
	let st='';
	console.log('drawnav called');
	for(let i of _PAGEDATA_.config.site.nav){
		if(!Array.isArray(i)){
			st+='<a href="'+i.url+'">' +i.txt+'</a>';
		}
		else{

		}
		console.log(i);
	}
	console.log(st);
	return st;
}