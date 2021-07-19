import { ElementRef, Renderer2, ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sub-characters-layout",
  templateUrl: "./sub-characters-layout.component.html",
  styleUrls: ["./sub-characters-layout.component.css"],
})
export class SubCharactersLayoutComponent implements OnInit {
  @ViewChild("pMenu") pMenuElement: ElementRef;
  @ViewChild("mMenu") mMenuElement: ElementRef;

  menuFlag: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  public clickPcMenu() {
    if (!this.menuFlag) {
      this.renderer.addClass(this.pMenuElement.nativeElement, "on");
      this.renderer.addClass(this.mMenuElement.nativeElement, "on");
    } else {
      this.renderer.removeClass(this.pMenuElement.nativeElement, "on");
      this.renderer.removeClass(this.mMenuElement.nativeElement, "on");
    }
    this.menuFlag = !this.menuFlag;
  }
}
