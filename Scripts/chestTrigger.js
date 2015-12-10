#pragma strict
var trigger : GameObject;
var chest : Animation;
function OnTriggerEnter(collision: Collider) {
if (collision.gameObject.tag == "Player"){
     chest.Play ("ChestAnim");
}
}