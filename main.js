// Three.jsのインポート
import * as THREE from './Three-js-master/node_modules/three/build/three.module.js';

// グローバル宣言
let scene, camera, renderer, pointLight;

// シーン追加
scene = new THREE.Scene();

// カメラ追加
camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 500);

// レンダラー追加
renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ジオメトリ（骨格）追加
let ballGeometry = new THREE.SphereGeometry(
    100, //半径
    64, //滑らかさ幅
    32 //滑らかさ高
);

// マテリアル（色）追加
let ballMaterial = new THREE.MeshPhysicalMaterial();

// メッシュ化（骨格と色の組み合わせ）追加
let ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
scene.add(ballMesh);

// 平行光源追加
let directionalLight = new THREE.DirectionalLight(0xffffff, 5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// 点光源追加
pointLight = new THREE.PointLight(0xffffff, 2);
pointLight.position.set(-200, -200, -200);
scene.add(pointLight);

// アニメーションループ追加
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();