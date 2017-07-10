import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesUpdateFiscalInfoComponent } from './companies-update-fiscal-info.component';

describe('CompaniesUpdateFiscalInfoComponent', () => {
  let component: CompaniesUpdateFiscalInfoComponent;
  let fixture: ComponentFixture<CompaniesUpdateFiscalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesUpdateFiscalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesUpdateFiscalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
