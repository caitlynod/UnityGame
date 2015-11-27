#pragma strict

var pagesCount:UI.Text;

function Update() {
	var player = GameObject.FindGameObjectWithTag("Main").GetComponent(inventoryScript);
	
	var pagesValue:int = player.page;
	
	if (pagesValue < 2 && pagesValue > 0) {
		pagesCount.text = pagesValue + " " + "Page Found";
	} else {
		pagesCount.text = pagesValue + " " + "Pages Found";
	}
}