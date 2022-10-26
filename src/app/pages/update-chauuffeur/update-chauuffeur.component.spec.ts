import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChauuffeurComponent } from './update-chauuffeur.component';

describe('UpdateChauuffeurComponent', () => {
  let component: UpdateChauuffeurComponent;
  let fixture: ComponentFixture<UpdateChauuffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateChauuffeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChauuffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
