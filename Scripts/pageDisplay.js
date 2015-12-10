#pragma strict
var pageDisplay : UI.RawImage;
var pageNum : float;

function Awake () {
pageDisplay.enabled = false;

}

function Update(){
var player = GameObject.FindGameObjectWithTag("Player").GetComponent(characterScript);
var pagesInv:int = player.page;
if(pagesInv == pageNum){
	pageDisplay.enabled = true;
}	

if(Input.GetKeyDown("q")){
Destroy(pageDisplay);
}

}