#pragma strict
import System.Collections.Generic;
var yourAnimation : Animation;

public var health:float = 100;
var inventory = new Dictionary.<String, int>();
inventory['key'] = 0; 

function OnTriggerEnter(collision: Collider) {
   
      if (collision.gameObject.tag == "Enemy"){
          health -= 1;        
      }
      
  }