import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesUpdateCsdComponent } from './companies-update-csd.component';

describe('CompaniesUpdateCsdComponent', () => {
  let component: CompaniesUpdateCsdComponent;
  let fixture: ComponentFixture<CompaniesUpdateCsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesUpdateCsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesUpdateCsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
