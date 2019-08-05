import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherUserComponent } from './afficher-user.component';

describe('AfficherUserComponent', () => {
  let component: AfficherUserComponent;
  let fixture: ComponentFixture<AfficherUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
