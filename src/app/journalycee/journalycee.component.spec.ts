import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalyceeComponent } from './journalycee.component';

describe('JournalyceeComponent', () => {
  let component: JournalyceeComponent;
  let fixture: ComponentFixture<JournalyceeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalyceeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalyceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
