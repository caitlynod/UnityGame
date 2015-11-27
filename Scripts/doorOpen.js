#pragma strict

var doorOpen:boolean = false;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider) {
	if (other.tag =="Player" && Input.GetKeyDown("e")) {
	
	}
}