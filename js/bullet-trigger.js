AFRAME.registerComponent('bullet-trigger', {
init: function() {
  var scene = document.querySelector('a-scene');
  var shipEl = scene.querySelector('#ship');
  var pos=shipEl.getAttribute('position');

  var bullet = document.createElement('a-entity');
  bullet.setAttribute('id','bullet');
  bullet.setAttribute('obj-model','obj','#bulletModel');
  bullet.setAttribute('position',{x: pos.x, y: pos.y+0.5, z: pos.z});
  bullet.setAttribute('material', 'color', '#FFC100');
  scene.appendChild(bullet);
}
});
