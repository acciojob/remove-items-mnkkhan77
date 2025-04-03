//your JS code here. If required.
//your JS code here. If required.
function removeColors() {
	let select = document.getElementById("colorSelect");

	let selectedIndex = select.selectedIndex;

	if(selectedIndex !== -1){
		select.remove(selectedIndex)
	}
}

document.getElementById("removeButton").addEventListener("click", removeColors);