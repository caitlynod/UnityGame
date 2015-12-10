#pragma strict
import System.Collections.Generic;//need to import Dictionary
public var health:int = 100;
public var key:int = 0;
var inventory = new Dictionary.<String, int>();
inventory['key'] = 0;
inventory['Page'] = 0;


function Start () {

}

function Update () {

}

//Debug.Log ("keys " + key);

function OnTriggerEnter(collision:Collider) {
 if (collision.gameObject.tag == "Enemy"){
          health -= 5; 
          //Debug.Log(health);       
      }

	if (collision.gameObject.tag =="key") {
		key+=1;
		inventory["key"] += 1;
		Destroy (collision.gameObject);
	}
}

public var page : int = 0;

function incrementPage() {
	page++;
	inventory["Page"] += 1;

}

