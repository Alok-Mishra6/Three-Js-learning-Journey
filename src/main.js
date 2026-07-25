


// import {
//   BoxGeometry,
//   Color,
//   Mesh,
//   MeshStandardMaterial, // Changed from MeshBasicMaterial
//   DirectionalLight,     // Added
//   AmbientLight,         // Added
//   PerspectiveCamera,
//   Scene,
//   WebGLRenderer,
// }from '../node_modules/three/build/three.module.js';

import { World } from './World/World.js';


function main(){
  const container = document.querySelector("#scene_container")

  const world = new World(container)

  world.animate()

}

main()

// const container= document.querySelector("#scene_container")

// const scene = new Scene();
// scene.background = new Color('white')

// const fov = 35
// const aspect = container.clientWidth / container.clientHeight
// const near = 0.1
// const far = 100

// const camera = new PerspectiveCamera(fov,aspect,near,far)
// camera.position.set(0,0,10)


// // const length =15
// // const width=15
// // const height =15
// // const lenseg= 2
// // const heiseg= 2
// // const depth seg=2
// const geometry= new BoxGeometry(2,2,2,2,2,2)
// const material = new MeshStandardMaterial({ color: 0xff5500 })

// const cube = new Mesh(geometry,material)

// scene.add(cube)
// // 1. A soft background light that hits everything equally
// const ambientLight = new AmbientLight(0xffffff, 0.4); 
// scene.add(ambientLight);

// // 2. A strong directional light (like the sun)
// const directionalLight = new DirectionalLight(0xffffff, 2); 
// directionalLight.position.set(10, 20, 15); // Positioned up and to the right
// scene.add(directionalLight);

// const renderer= new WebGLRenderer()
// .clientWidth,container.clientHeight)
// rendererenderer.setSize(containerr.setPixelRatio(window.devicePixelRatio)

// container.append(renderer.domElement)
// // renderer.render(scene,camera)

// function animate() {
//     // 1. Tell the browser to run this function again on the next frame
//     requestAnimationFrame(animate);

//     // 2. Change the cube's rotation slightly
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     cube.rotation.z += 0.01;

//     // 3. Take a new picture with the updated rotation
//     renderer.render(scene, camera);
// }

// // Start the loop!
// animate();

