import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowChauffeurComponent } from './show-chauffeur.component';

describe('ShowChauffeurComponent', () => {
  let component: ShowChauffeurComponent;
  let fixture: ComponentFixture<ShowChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowChauffeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
