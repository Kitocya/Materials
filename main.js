import * as THREE from './Three-js-master/node_modules/three/build/three.module.js';

let scene, camera, renderer;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);