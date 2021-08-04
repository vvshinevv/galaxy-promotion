import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sub-characters-main-pr',
  templateUrl: './sub-characters-main-pr.component.html',
  styleUrls: ['./sub-characters-main-pr.component.css']
})
export class SubCharactersMainPrComponent implements OnInit {
  @ViewChild("promotionContainer") promotionContainerElement: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    
  }

  public mouseHover(type: string) {
    if (type === 'person1') {
      this.renderer.addClass(this.promotionContainerElement.nativeElement, 'p1');
    }

    if (type === 'person2') {
      this.renderer.addClass(this.promotionContainerElement.nativeElement, 'p2');
    }
  }

  public mouseLeave(type: string) {
    if (type === 'person1') {
      this.renderer.removeClass(this.promotionContainerElement.nativeElement, 'p1');
    }
    if (type === 'person2') {
      this.renderer.removeClass(this.promotionContainerElement.nativeElement, 'p2');
    }
  }
}