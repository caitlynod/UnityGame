#pragma strict
import System.Collections.Generic;//need to import Dictionary
var yourAnimation : Animation;

public var health:float = 100;
var inventory = new Dictionary.<String, int>();
inventory['key'] = 0; //will be used to keep track of keys obtained from chests & items

function OnTriggerEnter(collision: Collider) {
   
      if (collision.gameObject.tag == "Enemy"){
          health -= 0.1;        
      }
      
  }