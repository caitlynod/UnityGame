#pragma strict
var healthDisplay:UI.Text;
var pagesCount:UI.Text;

function Update(){

var character = GameObject.FindGameObjectWithTag("Player").GetComponent(characterScript);
var healthValue : String = character.health.ToString();
healthDisplay.text = "Health: " + healthValue;

var player = GameObject.FindGameObjectWithTag("Player").GetComponent(characterScript);
	//Debug.Log("Hey Im " + page.page);
var pagesInv:int = player.page;
	
	if (pagesInv < 2 && pagesInv > 0) {
		pagesCount.text = pagesInv + " " + "Page Found";
	} else {
		pagesCount.text = pagesInv + " " + "Pages Found";
	}
}

