#pragma strict
import System.Collections.Generic;//need to import Dictionary
public var health:int = 100;
public var key:int = 0;
var inventory = new Dictionary.<String, int>();


function Start () {

}

function Update () {

}

Debug.Log ("keys " + key);

function reduceHealth(damage : int){

	health -= damage;
	Debug.Log(health);
}

function OnTriggerEnter(other:Collider) {
	if (other.tag =="key") {
		key+=1;
		Destroy (other.gameObject);
	}

	
}