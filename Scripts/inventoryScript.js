#pragma strict

import System.Collections.Generic;

public var page:int = 0;

var inventory = new Dictionary.<String,int>();
inventory["page"] = 1;

function Start() {
}

function Update() {
}

function OnTriggerEnter(other:Collider) {
	if(other.tag =="page") {
	page++;
	Destroy(other.gameObject);
	
	}
}

function OnMouseUpAsButton() {
	page++;
	Destroy(gameObject);
}