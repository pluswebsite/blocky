function set(v, q){
window[v] = q;
}
var JSONBinDT = {};
function getJSONBin(bin, masterKey){
	let req = new XMLHttpRequest();

	req.onreadystatechange = () => {
	  if (req.readyState == XMLHttpRequest.DONE) {
	    JSONBinDT = JSON.parse(req.responseText);
	    runPart('JSONBin')
	  }
	};
	
	req.open("GET", "https://api.jsonbin.io/v3/b/" + bin + "/?meta=false", true);
	req.setRequestHeader("X-Master-Key", masterKey);
	req.send();
}
function setJSONBin(va, vl, bin, masterKey){
	JSONBinDT[va] = vl;
	let req = new XMLHttpRequest();

	req.onreadystatechange = () => {
	  if (req.readyState == XMLHttpRequest.DONE) {
	    console.log('JSONBin Update Request Fullfilled With Exit')
	  }
	};
	
	req.open("PUT", "https://api.jsonbin.io/v3/b/" + bin, true);
	req.setRequestHeader("Content-Type", "application/json");
	req.setRequestHeader("X-Master-Key", masterKey);
	req.send(JSON.stringify(JSONBinDT));	
}
function debug(q){
	if(typeof q == 'object'){
		document.getElementById("console").innerHTML = document.getElementById("console").innerHTML + "<br>" + JSON.stringify(q);
	}
	else{
		document.getElementById("console").innerHTML = document.getElementById("console").innerHTML + "<br>" + q;
	}
}