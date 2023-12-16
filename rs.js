function set(v, q){
window[v] = q;
}
var JSONBin = {}
JSONBin.dt = {};
function getJSONBin(bin, masterKey){
	let req = new XMLHttpRequest();

	req.onreadystatechange = () => {
	  if (req.readyState == XMLHttpRequest.DONE) {
	    JSONBin.dt = JSON.parse(req.responseText);
	    runPart('JSONBin')
	  }
	};
	
	req.open("GET", "https://api.jsonbin.io/v3/b/" + bin + "/?meta=false", true);
	req.setRequestHeader("X-Master-Key", masterKey);
	req.send();
}