#pragma strict
import System.Collections.Generic;//need to import Dictionary
public var health:int = 100;
var inventory = new Dictionary.<String, int>();
inventory['key'] = 0;

function Start () {

}

function Update () {

}

function reduceHealth(damage : int){

	health -= damage;
	Debug.Log(health);
}

