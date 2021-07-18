import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCharactersMainComponent } from './sub-characters-main.component';

describe('SubCharactersMainComponent', () => {
  let component: SubCharactersMainComponent;
  let fixture: ComponentFixture<SubCharactersMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCharactersMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCharactersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
