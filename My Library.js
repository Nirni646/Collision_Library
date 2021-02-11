function isTouching(speaker,public){
    if (speaker.x - public.x < public.width/2 + speaker.width/2
      && public.x - speaker.x < public.width/2 + speaker.width/2
      && movingRect.y - public.y < public.height/2 + speaker.height/2
      && public.y - speaker.y < public.height/2 + speaker.height/2) {
    return true;
  }
  else {
   return false;
  }
  }
  