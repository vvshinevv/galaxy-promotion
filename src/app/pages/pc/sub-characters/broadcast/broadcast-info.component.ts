import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-broadcast-info",
  templateUrl: "./broadcast-info.component.html",
  styleUrls: ["./broadcast-info.component.css"],
})
export class BroadcastInfoComponent implements OnInit {
  @ViewChild("broadcastItem1") broadcastItem1: ElementRef;
  @ViewChild("broadcastItem2") broadcastItem2: ElementRef;
  @ViewChild("broadcastContent1") broadcastContent1: ElementRef;
  @ViewChild("broadcastContent2") broadcastContent2: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  public clickTab(flag: boolean) {
    if (flag) {
      this.renderer.addClass(this.broadcastItem1.nativeElement, "on");
      this.renderer.removeClass(this.broadcastItem2.nativeElement, "on");
      this.renderer.setStyle(
        this.broadcastContent1.nativeElement,
        "display",
        "block"
      );
      this.renderer.setStyle(
        this.broadcastContent2.nativeElement,
        "display",
        "none"
      );
    } else {
      this.renderer.addClass(this.broadcastItem2.nativeElement, "on");
      this.renderer.removeClass(this.broadcastItem1.nativeElement, "on");
      this.renderer.setStyle(
        this.broadcastContent1.nativeElement,
        "display",
        "none"
      );
      this.renderer.setStyle(
        this.broadcastContent2.nativeElement,
        "display",
        "block"
      );
    }
  }
}
