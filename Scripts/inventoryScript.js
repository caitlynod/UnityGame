﻿#pragma strict

import System.Collections.Generic;

var inventory = new Dictionary.<String,int>();
inventory["page"] = 1;


function Update() {
	
}

public var page : int = 0;

function OnMouseUpAsButton() {
	page++;
	Debug.Log(page);
}