#pragma strict

var pagesCount:UI.Text;

function Update() {
	var player = GameObject.FindGameObjectWithTag("Main").GetComponent(inventoryScript);
	//Debug.Log("Hey Im " + page.page);
	
	var pagesInv:int = player.page;
	
	if (pagesInv < 2 && pagesInv > 0) {
		pagesCount.text = pagesInv + " " + "Page Found";
	} else {
		pagesCount.text = pagesInv + " " + "Pages Found";
	}
}