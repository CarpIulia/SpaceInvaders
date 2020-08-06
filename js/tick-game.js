AFRAME.registerComponent('tick-game', {
tick: function() {

  var scene = document.querySelector('a-scene');
  var aliens=scene.querySelectorAll('#alien'); //array of all aliens
  var bullets=scene.querySelectorAll('#bullet'); //array of all bullets

  for (var index=0; index<bullets.length; index++){ //manages bullet movement
    var pos = bullets[index].getAttribute('position');
    bullets[index].setAttribute('position',{x: pos.x, y: pos.y+0.10, z: pos.z})
    if (pos.y>4)
    scene.removeChild(bullets[index]);
  }

  for(var index=0; index<aliens.length; index++) { //manages alien movement
    var pos = aliens[index].getAttribute('position');
    if (pos.x>1.25){
      pos.x=-1.25;
      pos.y=pos.y-0.35;
    }
    aliens[index].setAttribute('position',{x: pos.x + 0.005, y: pos.y, z: pos.z});
  }

  for (var indexBullets=0; indexBullets<bullets.length; indexBullets++) //collision check
    for (var indexAliens=0; indexAliens<aliens.length; indexAliens++){
      var posBullet = bullets[indexBullets].getAttribute('position');
      var posAlien = aliens[indexAliens].getAttribute('position');

      if (posBullet.x>posAlien.x-0.25 && posBullet.x<posAlien.x+0.25 //bounding boxes check
      && posBullet.y>posAlien.y-0.10 && posBullet.y<posAlien.y+0.10){
        scene.removeChild(bullets[indexBullets]);
        scene.removeChild(aliens[indexAliens]);
      }

    }
}
});
