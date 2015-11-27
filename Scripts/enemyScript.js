#pragma strict
public var damage : int = 10;

function attack(other:Collider){

	var character = GameObject.FindGameObjectWithTag("Main").GetComponent(characterScript);
	if(other.tag == 'Main' && character.health < 0){
	character.reduceHealth(damage);
}
}

