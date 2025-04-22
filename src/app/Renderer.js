import * as THREE from "three";
import App from "./App.js";
import { sizesStore } from "./utils/Store.js";

export default class Renderer {
  constructor() {
    this.app = new App();
    this.canvas = this.app.canvas;
    this.scene = this.app.scene;
    this.camera = this.app.camera.instance;
    this.sizesStore = sizesStore;
    this.sizes = this.sizesStore.getState();

    this.setInstance();
    this.setResizeListener();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
    this.instance.setClearColor(0xf5f5f5);
  }

  setResizeListener() {
    this.sizesStore.subscribe((sizes) => {
      //   console.log("sizes changed");
      this.instance.setSize(sizes.width, sizes.height);
      this.instance.setPixelRatio(sizes.pixelRatio);
    });
  }

  loop() {
    this.instance.render(this.scene, this.camera);
    // console.log("rendering");
  }
}
