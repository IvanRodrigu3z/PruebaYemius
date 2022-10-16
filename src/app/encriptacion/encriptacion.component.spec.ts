import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncriptacionComponent } from './encriptacion.component';

describe('EncriptacionComponent', () => {
  let component: EncriptacionComponent;
  let fixture: ComponentFixture<EncriptacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncriptacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncriptacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
