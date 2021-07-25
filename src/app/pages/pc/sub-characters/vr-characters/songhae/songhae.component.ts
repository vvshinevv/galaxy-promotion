import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { RoomEnvironment } from "../../../../../../assets/jsm/environments/RoomEnvironment.js";
import { OrbitControls } from "../../../../../../assets/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "../../../../../../assets/jsm/loaders/GLTFLoader.js";
import { KTX2Loader } from "../../../../../../assets/jsm/loaders/KTX2Loader.js";
import { MeshoptDecoder } from "../../../../../../assets/jsm/libs/meshopt_decoder.module.js";
import * as THREE from "three";
import Swiper from "swiper";

@Component({
  selector: "app-songhae",
  templateUrl: "./songhae.component.html",
  styleUrls: ["./songhae.component.css"],
})
export class SonghaeComponent implements OnInit {
  @ViewChild("target") targetElement: ElementRef;
  @ViewChild("loading") loadingElement: ElementRef;
  @ViewChild("closeLayer") closeLayerElement: ElementRef;
  @ViewChild("profileBoxLayer") profileBoxLayerElement: ElementRef;
  @ViewChild("promotionMain") promotionMainElement: ElementRef;
  @ViewChild("backToHome") backToHomeElement: ElementRef;
  @ViewChild("profileLink") profileLinkElement: ElementRef;
  @ViewChild("locationLink") locationLinkElement: ElementRef;
  @ViewChild("itemLink") itemLinkElement: ElementRef;
  @ViewChild("pcProfile") pcProfileElement: ElementRef;
  @ViewChild("mobileProfile") mobileProfileElement: ElementRef;
  @ViewChild("goods") goodsElement: ElementRef;
  @ViewChild("location") locationElement: ElementRef;

  camera: any;
  scene: any;
  renderer: any;
  mixer: any;
  spotLight: any;
  swiper1: any;
  swiper2: any;

  clickProfileBoxLayerFlag: boolean = false;
  clickProfileFlag: boolean = false;
  clickSaeulFlag: boolean = false;
  clickItemFlag: boolean = false;

  constructor(private r2: Renderer2) {}

  ngOnInit() {
    this.initSwiper();
    this.init();
    this.render(this.renderer);
    this.removeLoading();
  }

  public removeLoading() {
    this.r2.setStyle(this.loadingElement.nativeElement, "display", "");
    setTimeout(() => {
      this.r2.setStyle(this.loadingElement.nativeElement, "display", "none");
    }, 3000);
  }

  public initSwiper() {
    this.swiper1 = new Swiper(".swiper1", {
      slidesPerView: 1,
      spaceBetween: 96,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    this.r2.setStyle(
      this.mobileProfileElement.nativeElement,
      "display",
      "none"
    );

    this.swiper2 = new Swiper(".swiper2", {
      slidesPerView: 1,
      spaceBetween: 72,
      direction: "horizontal",
      loop: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    this.r2.setStyle(this.goodsElement.nativeElement, "display", "none");
  }

  public clickCloseLayer() {
    this.r2.removeClass(this.promotionMainElement.nativeElement, "profile");
    this.r2.removeClass(this.promotionMainElement.nativeElement, "saeul");
    this.r2.removeClass(this.promotionMainElement.nativeElement, "item");
    this.r2.removeClass(this.profileLinkElement.nativeElement, "on");
    this.r2.removeClass(this.locationLinkElement.nativeElement, "on");
    this.r2.removeClass(this.itemLinkElement.nativeElement, "on");

    this.r2.setStyle(this.backToHomeElement.nativeElement, "display", "");
    this.r2.setStyle(this.closeLayerElement.nativeElement, "display", "none");
    this.r2.setStyle(this.pcProfileElement.nativeElement, "display", "none");
    this.r2.setStyle(
      this.mobileProfileElement.nativeElement,
      "display",
      "none"
    );
    this.r2.setStyle(this.goodsElement.nativeElement, "display", "none");
    this.r2.setStyle(this.locationElement.nativeElement, "display", "none");
  }

  public clickProfile() {
    this.clickProfileFlag = !this.clickProfileFlag;
    this.clickCloseLayer();
    this.r2.addClass(this.promotionMainElement.nativeElement, "profile");
    this.r2.addClass(this.profileLinkElement.nativeElement, "on");
    this.r2.setStyle(this.backToHomeElement.nativeElement, "display", "none");
    this.r2.setStyle(this.closeLayerElement.nativeElement, "display", "");

    this.r2.setStyle(this.pcProfileElement.nativeElement, "display", "");
    this.r2.setStyle(this.mobileProfileElement.nativeElement, "display", "");
  }

  public clickSaeul() {
    this.clickSaeulFlag = !this.clickSaeulFlag;
    this.clickCloseLayer();
    this.r2.addClass(this.promotionMainElement.nativeElement, "saeul");
    this.r2.addClass(this.locationLinkElement.nativeElement, "on");
    this.r2.setStyle(this.backToHomeElement.nativeElement, "display", "none");
    this.r2.setStyle(this.closeLayerElement.nativeElement, "display", "");

    this.r2.setStyle(this.locationElement.nativeElement, "display", "");
  }

  public clickItem() {
    this.clickItemFlag = !this.clickItemFlag;
    this.clickCloseLayer();
    this.r2.addClass(this.promotionMainElement.nativeElement, "saeul");
    this.r2.addClass(this.itemLinkElement.nativeElement, "on");
    this.r2.setStyle(this.backToHomeElement.nativeElement, "display", "none");
    this.r2.setStyle(this.closeLayerElement.nativeElement, "display", "");

    this.r2.setStyle(this.goodsElement.nativeElement, "display", "");
  }

  public init() {
    const container = this.targetElement.nativeElement;
    document.body.appendChild(container);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    this.camera.position.set(1157.810224274296, 66.57923181043022, -95.20418754415628);

    const environment = new RoomEnvironment();
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xbbbbbb);
    this.scene.environment = pmremGenerator.fromScene(environment).texture;

    var geometry = new THREE.SphereGeometry(800, 120, 60);
    geometry.scale(-1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(
        "../../../../../../assets/models/gltf/songhae_background.png"
      ),
    });
    let mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);

    const ktx2Loader = new KTX2Loader()
      .setTranscoderPath("../../../../../../assets/js/libs/basis/")
      .detectSupport(this.renderer);

    const loader = new GLTFLoader().setPath(
      "../../../../../../assets/models/gltf/"
    );
    loader.setKTX2Loader(ktx2Loader);
    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load("songhae_with_stage.glb", (gltf: any) => {     
      gltf.scene.position.x = 1000;
      gltf.scene.position.y = -400;
      gltf.scene.position.z = -300;
      gltf.scene.rotation.y += 1.8;

      const mesh = gltf.scenes[0];
      mesh.scale.set(80, 80, 80);
      this.scene.add(gltf.scene);
      this.render(this.renderer);
    });

    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.addEventListener("change", () => {
      this.render(this.renderer);
    }); // use if there is no animation loop
    controls.minDistance = 1000;
    controls.maxDistance = 1200;
    controls.maxPolarAngle = Math.PI / 2 + 0.3;
    controls.update();
    window.addEventListener("resize", () => this.onWindowResize(this.renderer));
  }

  public onWindowResize(renderer: any) {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.render(renderer);
  }

  public render(renderer: any) {
    console.log(this.camera.position);
    renderer.render(this.scene, this.camera);
  }

  public clickProfileBoxLayer() {
    if (this.clickProfileBoxLayerFlag) {
      this.r2.removeClass(this.profileBoxLayerElement.nativeElement, "on");
    } else {
      this.r2.addClass(this.profileBoxLayerElement.nativeElement, "on");
    }
    this.clickProfileBoxLayerFlag = !this.clickProfileBoxLayerFlag;
  }
}
