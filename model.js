
const div = document.querySelector('.threejs');
let mesh;

document.forms[0].addEventListener('change', (e) => {
  cube.material.color.set(e.target.value);
}) 
document.forms[1].addEventListener('change', (e) => {
  pyramid.material.color.set(e.target.value);
})

document.forms[2].addEventListener('change', (e) => {
  hemiLight.intensity=e.target.value;
  
})
document.forms[3].addEventListener('change', (e) => {
  directionalLight.intensity=e.target.value;
  
}) 
document.forms[4].addEventListener('change', (e) => {
  upLight.intensity=e.target.value;
  
}) 

window.addEventListener('resize', onWindowResize);

function onWindowResize() {

camera.aspect = div.clientWidth / div.clientHeight;
camera.updateProjectionMatrix();
renderer.setSize(div.clientWidth, div.clientHeight);
}

const clock = new THREE.Clock();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, div.clientWidth / div.clientHeight, 0.1, 100);
camera.position.set(3, 0.7, 3);
cameraTarget = new THREE.Vector3(0, 0.4, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(div.clientWidth, div.clientHeight);

div.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;

scene.background = new THREE.Color('gray');
scene.fog = new THREE.Fog('gray', 1, 5);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemiLight.position.set(0, 200, 0);
scene.add(hemiLight);

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(25, 25, 25);
directionalLight.castShadow = true;
scene.add(directionalLight);   

const upLight = new THREE.DirectionalLight(0xffffff);
upLight.position.set(15, 20, 40);
upLight.castShadow = true;
scene.add(upLight);


const plane = new THREE.Mesh(
new THREE.PlaneGeometry(4000, 4000),
new THREE.MeshPhongMaterial({ color: 0x808080, dithering: true })
);
plane.rotation.x = - Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

const boxWidth = 0.5;
const boxHeight = 0.5;
const boxDepth = 0.5;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const material = new THREE.MeshPhongMaterial({color: 'Gray'}); 

const cube = new THREE.Mesh(geometry, material);
cube.castShadow=true;
scene.add(cube);
cube.position.x = -0.5;
cube.position.y = 0.5;


const loader = new STLLoader();
var geometry1 = new THREE.BufferGeometry();
const vertices1 = new Float32Array( [
    0, 0, 0.5,
    0.5, 0,  0,
    -0.25,  -Math.sqrt(0.5*0.5-0.25*0.25),  0,

    0, 0, 0.5,
    0.5, 0,  0,
    -0.25,  Math.sqrt(0.5*0.5-0.25*0.25),  0,

    0, 0, 0.5,
    -0.25,  -Math.sqrt(0.5*0.5-0.25*0.25),  0,
    -0.25,  Math.sqrt(0.5*0.5-0.25*0.25),  0,

    0.5, 0,  0,
    -0.25,  -Math.sqrt(0.5*0.5-0.25*0.25),  0,
    -0.25,  Math.sqrt(0.5*0.5-0.25*0.25),  0
] );
geometry1.setAttribute('position', new THREE.Float32BufferAttribute(vertices1, 3));
geometry1.computeVertexNormals();
const material1 = new THREE.MeshPhongMaterial({ color: 'Gray', side:THREE.DoubleSide});
const pyramid = new THREE.Mesh(geometry1, material1);
pyramid.castShadow=true;
pyramid.position.x=0.9;
pyramid.position.y=0.5;
pyramid.position.z=0.2;
scene.add(pyramid);



camera.position.z = 5;

function animate() {

requestAnimationFrame(animate);

render();

}

function render() {

const elapsedTime = clock.getElapsedTime()

  camera.position.x = Math.cos(elapsedTime * 0.5) * 2;
  camera.position.z = Math.sin(elapsedTime * 0.5) * 2;

camera.lookAt(cameraTarget);
renderer.render(scene, camera);
} 
animate();