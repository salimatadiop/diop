import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEleveClasseComponent } from './liste-eleve-classe.component';

describe('ListeEleveClasseComponent', () => {
  let component: ListeEleveClasseComponent;
  let fixture: ComponentFixture<ListeEleveClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEleveClasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEleveClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
