import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SingleCommitPageComponent } from './single-commit-page.component';

import { DatePipe } from '@angular/common';
import { CommitsService } from '../commits/commits.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class MockCommitsComponent {}
class MockCommitsService {
    getSingleCommit() {
        return { sha: '123' };
    }
}
export class ActivatedRouteMock {
    public snapshot = {
        paramMap: convertToParamMap({
            sha: 'abc123'
        })
    };
}
describe('SingleCommitPageComponent', () => {
    let component: SingleCommitPageComponent;
    let fixture: ComponentFixture<SingleCommitPageComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [SingleCommitPageComponent],
                providers: [
                    DatePipe,
                    MockCommitsService,
                    {
                        provide: ActivatedRoute,
                        useClass: ActivatedRouteMock
                    }
                ],
                imports: [
                    RouterTestingModule.withRoutes([
                        { path: 'commits', component: MockCommitsComponent }
                    ]),
                    HttpClientTestingModule
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        try {
            fixture = TestBed.createComponent(SingleCommitPageComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        } catch (e) {
            console.log(e);
        }
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
