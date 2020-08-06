AFRAME.registerComponent('camera-ship-chase',{
tick: function() {
  var scene = document.querySelector('a-scene');
  var shipEl=scene.querySelector('#ship');

  var pos=shipEl.getAttribute('position');
  if (-this.el.object3D.rotation.y*2>-1.25 && -this.el.object3D.rotation.y*1.4<1.5){ //restricts ship movement to game boundaries
    shipEl.setAttribute('position',{x: -this.el.object3D.rotation.y*1.4, y: pos.y, z: pos.z});
  }

}
});
