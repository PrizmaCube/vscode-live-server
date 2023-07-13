var modelUrl = "C:\Users\89000\Desktop\Стиль на сайт\Товары\Офисные\Office One\3D\Office_One.gltf";
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var loader = new THREE.GLTFLoader();
loader.load(modelUrl, function (gltf) {
  var model = gltf.scene;
  scene.add(model);

  camera.position.z = 5;

  animate();
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}