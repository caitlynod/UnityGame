#pragma strict
var healthDisplay:UI.Text;//empty slot to be filled with text fields
function Update(){
var character = GameObject.FindGameObjectWithTag("Main").GetComponent(characterScript);
var healthValue : String = character.health.ToString();
healthDisplay.text = "Health: " + healthValue;
}

