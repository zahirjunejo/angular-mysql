import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POCDialogComponent } from './poc-dialog.component';

describe('POCDialogComponent', () => {
  let component: POCDialogComponent;
  let fixture: ComponentFixture<POCDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [POCDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POCDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
