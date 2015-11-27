#pragma strict
function OnMouseUpAsButton() {
var player = GameObject.FindGameObjectWithTag("Main").GetComponent(inventoryScript);
	player.incrementPage();
	Destroy(gameObject);
}
