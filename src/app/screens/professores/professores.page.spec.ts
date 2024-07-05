import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessoresPage } from './professores.page';

describe('ProfessoresPage', () => {
  let component: ProfessoresPage;
  let fixture: ComponentFixture<ProfessoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
