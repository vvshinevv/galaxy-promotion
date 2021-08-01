import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCharactersMainPrComponent } from './sub-characters-main-pr.component';

describe('SubCharactersMainPrComponent', () => {
  let component: SubCharactersMainPrComponent;
  let fixture: ComponentFixture<SubCharactersMainPrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCharactersMainPrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCharactersMainPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
