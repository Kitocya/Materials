import * as THREE from './Three-js-master/node_modules/three/build/three.module.js';

let scene, camera, renderer;

//シーンの追加
scene = new THREE.Scene();

//カメラの追加
camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 500);

//レンダラーの追加
renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);

//ジオメトリ（骨格）の追加
let ballGeometry = new THREE.SphereGeometry(
    100, //半径
    64, //滑らかさ幅
    32 //滑らかさ高
);

//マテリアル（色）の追加
let ballMaterial = new THREE.MeshPhysicalMaterial();

//メッシュ化（骨格と色の組み合わせ）の追加
let ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
scene.add(ballMesh);

//平行光源の追加
let directionalLight = new THREE.DirectionalLight(0xffffff, 2);
scene.add(directionalLight);

//レンダリングの追加
renderer.render(scene, camera);
