import * as THREE from "three";
import App from "../App";

export default class World {
  constructor() {
    this.app = new App();
    this.scene = this.app.scene;
    this.setCube();
  }

  setCube() {
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: "blue" });
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

    this.scene.add(cubeMesh);
  }
}
