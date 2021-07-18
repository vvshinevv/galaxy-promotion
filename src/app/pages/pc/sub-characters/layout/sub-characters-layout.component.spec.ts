import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCharactersLayoutComponent } from './sub-characters-layout.component';

describe('SubCharactersLayoutComponent', () => {
  let component: SubCharactersLayoutComponent;
  let fixture: ComponentFixture<SubCharactersLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCharactersLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCharactersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
