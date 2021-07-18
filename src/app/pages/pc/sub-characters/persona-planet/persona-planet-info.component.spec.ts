import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaPlanetInfoComponent } from './persona-planet-info.component';

describe('PersonaPlanetInfoComponent', () => {
  let component: PersonaPlanetInfoComponent;
  let fixture: ComponentFixture<PersonaPlanetInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaPlanetInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaPlanetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
