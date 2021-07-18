import { ElementRef, Renderer2, ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sub-characters-layout",
  templateUrl: "./sub-characters-layout.component.html",
  styleUrls: ["./sub-characters-layout.component.css"],
})
export class SubCharactersLayoutComponent implements OnInit {
  @ViewChild("pMenu") pMenuElem: ElementRef;
  @ViewChild("mMenu") mMenu: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  public clickPcMenu() {
    console.log("clickPcMenu");
  }

  public clickMobileMenu() {
    console.log("clickMobileMenu");
  }
}
