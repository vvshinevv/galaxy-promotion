import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastInfoComponent } from './broadcast-info.component';

describe('BroadcastInfoComponent', () => {
  let component: BroadcastInfoComponent;
  let fixture: ComponentFixture<BroadcastInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadcastInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
