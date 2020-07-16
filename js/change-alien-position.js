AFRAME.registerComponent('change-alien-position', {
tick: function() {

  var scene = document.querySelector('a-scene');
  var aliens=scene.querySelectorAll('#alien');

  for(var i=0; i<aliens.length; i++) {
    var pos = aliens[i].getAttribute('position');
    if (pos.x>1.25){
      pos.x=-1.25;
      pos.y=pos.y-0.35;
    }
    aliens[i].setAttribute('position',{x: pos.x + 0.005, y: pos.y, z: pos.z});
  }
}
});
