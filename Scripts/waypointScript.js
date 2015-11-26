#pragma strict
var waypoint : Transform[];// empty array of transforms, will hold waypoints
var speed : float = 10;//speed of enemy
private var currentWaypoint : int; // hold current value of waypoint

function Update() {
if(currentWaypoint < waypoint.length){
	var target : Vector3 =  waypoint[currentWaypoint].position;
	//hold position of current waypoint in variable 
	var moveDirection : Vector3 = target - transform.position;
	//target is current waypoint position - enemy position
	var velocity = moveDirection.normalized * speed;
	var rotation = Quaternion.LookRotation(moveDirection);
	transform.rotation = rotation;
	
	if(moveDirection.magnitude < 1){
	currentWaypoint++;
	
	}
}else{// we are past last waypoint, so rest to 0
	currentWaypoint = 0;
}

GetComponent.<Rigidbody>().velocity = velocity;
}