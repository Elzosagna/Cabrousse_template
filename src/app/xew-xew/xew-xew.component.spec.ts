import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XewXewComponent } from './xew-xew.component';

describe('XewXewComponent', () => {
  let component: XewXewComponent;
  let fixture: ComponentFixture<XewXewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XewXewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XewXewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
