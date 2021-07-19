import { Component, OnInit } from "@angular/core";
import Swiper from "swiper";

@Component({
  selector: "app-persona-planet-info",
  templateUrl: "./persona-planet-info.component.html",
  styleUrls: ["./persona-planet-info.component.css"],
})
export class PersonaPlanetInfoComponent implements OnInit {
  swiper: any;

  constructor() {}

  ngOnInit() {
    this.initSwiper();
  }

  public initSwiper() {
    this.swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 14,
      direction: "horizontal",
      loop: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
