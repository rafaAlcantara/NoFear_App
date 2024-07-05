import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuayThaiGrupoPage } from './muay-thai-grupo.page';

describe('MuayThaiGrupoPage', () => {
  let component: MuayThaiGrupoPage;
  let fixture: ComponentFixture<MuayThaiGrupoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MuayThaiGrupoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
