import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuayThaiKidsPage } from './muay-thai-kids.page';

describe('MuayThaiKidsPage', () => {
  let component: MuayThaiKidsPage;
  let fixture: ComponentFixture<MuayThaiKidsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MuayThaiKidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
