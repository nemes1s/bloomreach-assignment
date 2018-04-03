import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCommitPageComponent } from './single-commit-page.component';

describe('SingleCommitPageComponent', () => {
  let component: SingleCommitPageComponent;
  let fixture: ComponentFixture<SingleCommitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCommitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCommitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
