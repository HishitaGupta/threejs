// Scene setup
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);
camera.position.set(0, 4, 3);

// Renderer setup
const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas:canvas,antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Orbit Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// GLTFLoader to load the .glb model
const loader = new THREE.GLTFLoader();
loader.load(
  "https://models.readyplayer.me/677d5c2321755451f0dd2981.glb", // Model URL
  (gltf) => {
    const model = gltf.scene;
    model.scale.set(1.5, 1.5, 1.5); // Adjust the scale if needed
    scene.add(model);
  },
  (xhr) => {
    console.log(`Model ${((xhr.loaded / xhr.total) * 100).toFixed(2)}% loaded`);
  },
  (error) => {
    console.error("An error occurred while loading the model", error);
  }
);

// Handle window resizing
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update(); // For OrbitControls
  renderer.render(scene, camera);
}

animate();


