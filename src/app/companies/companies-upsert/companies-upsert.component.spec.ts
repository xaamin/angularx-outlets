import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesUpsertComponent } from './companies-upsert.component';

describe('CompaniesUpsertComponent', () => {
  let component: CompaniesUpsertComponent;
  let fixture: ComponentFixture<CompaniesUpsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesUpsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
