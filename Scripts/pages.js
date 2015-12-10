#pragma strict
function OnMouseUpAsButton() {
var player = GameObject.FindGameObjectWithTag("Player").GetComponent(characterScript);
	player.incrementPage();
	Destroy(gameObject);
}
