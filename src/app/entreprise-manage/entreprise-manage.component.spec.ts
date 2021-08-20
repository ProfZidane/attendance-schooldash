import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseManageComponent } from './entreprise-manage.component';

describe('EntrepriseManageComponent', () => {
  let component: EntrepriseManageComponent;
  let fixture: ComponentFixture<EntrepriseManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
