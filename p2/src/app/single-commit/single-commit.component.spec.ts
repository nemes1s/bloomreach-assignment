import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCommitComponent } from './single-commit.component';
import { RouterTestingModule } from '@angular/router/testing';
import {CommitHolder} from '../models/commit.models';

class MockCommitsComponent { }
describe('SingleCommitComponent', () => {
    let component: SingleCommitComponent;
    let fixture: ComponentFixture<SingleCommitComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [SingleCommitComponent],
                imports: [
                    RouterTestingModule.withRoutes([
                        { path: 'commits', component: MockCommitsComponent }
                    ])
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(SingleCommitComponent);
        component = fixture.componentInstance;

        const commit: CommitHolder = Object.assign(new CommitHolder(), {
          commit: {
            author: {
              name: 'test'
            }
          }
        });
        component.commit = commit;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
