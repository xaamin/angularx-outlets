import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesOutletComponent } from './companies-outlet.component';

describe('CompaniesOutletComponent', () => {
  let component: CompaniesOutletComponent;
  let fixture: ComponentFixture<CompaniesOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
