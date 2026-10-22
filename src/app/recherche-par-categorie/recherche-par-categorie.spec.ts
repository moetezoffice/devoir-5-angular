import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParCategorie } from './recherche-par-categorie';

describe('RechercheParCategorie', () => {
  let component: RechercheParCategorie;
  let fixture: ComponentFixture<RechercheParCategorie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheParCategorie],
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheParCategorie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
