#pragma strict
var pageDisplay : UI.RawImage;
var pageNum : float;

function Awake () {
//Debug.Log(pageDisplay);
pageDisplay.enabled = false;
}

function Update(){
var player = GameObject.FindGameObjectWithTag("Player").GetComponent(characterScript);
var pagesInv:int = player.page;

if(Input.GetKeyDown("q")){
pageDisplay.enabled = false;
}

}