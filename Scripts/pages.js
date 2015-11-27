#pragma strict


function destroyObjects() {
	GetComponent.<inventoryScript>().OnMouseUpAsButton();

	Destroy(gameObject);

}