// Scene
const scene = new THREE.Scene();

// Cyan ring
const boxGeometry = new THREE.BoxGeometry(2, 1, 1);
const cyanMaterial = new THREE.MeshBasicMaterial({ color: 'cyan' });
const cyanBox = new THREE.Mesh(boxGeometry, cyanMaterial);

// Sizes 
const sizes = {
  width: 800,
  height: 600
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1.2;

// Add components
scene.add(cyanBox);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas.webgl'),
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
