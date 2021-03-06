﻿var smooth = 2.0;
var DoorOpenAngle = 90.0;
private var open : boolean;
private var enter : boolean;
private var defaultRot : Vector3;
private var openRot : Vector3;
var keys : float;


function Start(){

defaultRot = transform.eulerAngles;
openRot = new Vector3 (defaultRot.x, defaultRot.y + DoorOpenAngle, defaultRot.z);
}

//Main function
function Update (){



if(open){
//Open door
transform.eulerAngles = Vector3.Slerp(transform.eulerAngles, openRot, Time.deltaTime * smooth);
}else{
//Close door
transform.eulerAngles = Vector3.Slerp(transform.eulerAngles, defaultRot, Time.deltaTime * smooth);
}

if(Input.GetKeyDown("f") && enter){
open = !open;
}
}

function needkey(){
 GUI.Label(new Rect(Screen.width/2 - 75, Screen.height - 100, 150, 30), "You need a key for this door!");
}
needkey();

function OnGUI(){
if(enter){
GUI.Label(new Rect(Screen.width/2 - 75, Screen.height - 100, 150, 30), "Press 'F' to open the door");
}
}

//Activate the Main function when player is near the door
function OnTriggerEnter (other : Collider){
var key = GameObject.FindGameObjectWithTag("Player").GetComponent(characterScript);
var numkey: int = key.key;

 	//Debug.Log (numkey);

if (other.gameObject.tag == "Player" && numkey == keys) {

enter = true;
}

if(enter == false){
	GUI.Label(new Rect(Screen.width/2 - 75, Screen.height - 100, 150, 30), "You need a key for this door!");

}

}

//Deactivate the Main function when player is go away from door
function OnTriggerExit (other : Collider){
if (other.gameObject.tag == "Player") {
enter = false;
}
}