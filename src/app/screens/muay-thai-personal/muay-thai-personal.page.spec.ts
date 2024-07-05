import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuayThaiPersonalPage } from './muay-thai-personal.page';

describe('MuayThaiPersonalPage', () => {
  let component: MuayThaiPersonalPage;
  let fixture: ComponentFixture<MuayThaiPersonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MuayThaiPersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
