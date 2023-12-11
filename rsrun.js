var doc = document.getElementsByTagName("rscript")[0];
function $(com){
	let arr = com.split(" ")
	let func = arr[0];
	arr.shift()
	var params = "";
	for(p in arr){
		params = params + arr[p] + ",";
	}
	params.slice(0,params.length - 1)
	if(window[func]){
		eval(func + "(" + params + ")")
	}
	else if(doc.innerHTML.includes("func " + func)){
		runFunc(func)
	}
	else{
		alert("'" + func + "' not defined")
	}
}
function runFunc(f){
	var fcode = doc.innerHTML.split("func " + f)[1].split("\n");
	debug(fcode)
	for(c in fcode){
		if(fcode[c].includes("}")){break;}
		else if(fcode[c].includes("{")){
			continue;
		}
		else if(fcode[c] == "" || fcode[c] == " "){
			continue;
		}
		else{
			$(fcode[c])
		}
	}
}
function run(){
	let dt = doc.innerHTML.split("\n");
	for(c in dt){
		if(dt[c].includes("}")){break;}
		else if(dt[c].includes("{") || dt[c] == "" || dt[c] == " "){
			continue
		}
		else{
			$(dt[c])
		}
	}
}
window.onload = function(){
  run()
}
