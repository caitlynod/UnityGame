#pragma strict


function displayImg(){
var player = GameObject.FindGameObjectWithTag("Player").GetComponent(characterScript);
var pagesInv:int = player.page;
var display = GameObject.FindGameObjectWithTag("Page").GetComponent(pageDisplay);

		display.pageDisplay.enabled = true;
		
}