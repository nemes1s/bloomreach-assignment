import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { CommitsComponent } from './commits.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {SingleCommitComponent} from '../single-commit/single-commit.component';

import {DatePipe} from '@angular/common';
import {HttpClientTestingModule} from '@angular/common/http/testing';
class MockCommitsComponent { }
describe('CommitsComponent', () => {
  let component: CommitsComponent;
  let fixture: ComponentFixture<CommitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitsComponent, SingleCommitComponent ],
      providers: [DatePipe],
      imports: [RouterTestingModule.withRoutes(
        [{path: 'commits', component: MockCommitsComponent}]
      ), NgbModule.forRoot(), FormsModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
