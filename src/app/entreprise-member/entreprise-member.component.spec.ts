import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseMemberComponent } from './entreprise-member.component';

describe('EntrepriseMemberComponent', () => {
  let component: EntrepriseMemberComponent;
  let fixture: ComponentFixture<EntrepriseMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
