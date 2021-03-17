function isTouching(a,fixedRect){
    if (a.x - fixedRect.x < fixedRect.width/2 + a.width/2
      && fixedRect.x - a.x < fixedRect.width/2 + a.width/2
      &&a.y - fixedRect.y < fixedRect.height/2 + a.height/2
      && fixedRect.y - a.y < fixedRect.height/2 + a.height/2) {
      
      return true;
    }
    else {
      return false;
    }
}