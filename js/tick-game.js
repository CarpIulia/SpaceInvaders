AFRAME.registerComponent('tick-game', {
tick: function() {

  var scene = document.querySelector('a-scene');
  var aliens=scene.querySelectorAll('#alien');
  var bullets=scene.querySelectorAll('#bullet');

  for (var index=0; index<bullets.length; index++){
    var pos = bullets[index].getAttribute('position');
    bullets[index].setAttribute('position',{x: pos.x, y: pos.y+0.10, z: pos.z})
  }

  for(var index=0; index<aliens.length; index++) {
    var pos = aliens[index].getAttribute('position');
    if (pos.x>1.25){
      pos.x=-1.25;
      pos.y=pos.y-0.35;
    }
    aliens[index].setAttribute('position',{x: pos.x + 0.005, y: pos.y, z: pos.z});
  }
  
}
});
