import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionChauffeurComponent } from './gestion-chauffeur.component';

describe('GestionChauffeurComponent', () => {
  let component: GestionChauffeurComponent;
  let fixture: ComponentFixture<GestionChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionChauffeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
