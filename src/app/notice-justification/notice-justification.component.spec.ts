import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeJustificationComponent } from './notice-justification.component';

describe('NoticeJustificationComponent', () => {
  let component: NoticeJustificationComponent;
  let fixture: ComponentFixture<NoticeJustificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeJustificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeJustificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
