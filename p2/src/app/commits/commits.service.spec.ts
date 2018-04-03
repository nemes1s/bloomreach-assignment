import { CommitsService } from './commits.service';
import { CommitHolder } from '../models/commit.models';
import { asyncData, asyncError } from '../../testing/async-observable-helpers';
import { HttpErrorResponse } from '@angular/common/http';

let httpClientSpy: { get: jasmine.Spy };
let datePipe: { transform: jasmine.Spy };
let commitsService: CommitsService;

beforeEach(() => {
    // Todo: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    datePipe = jasmine.createSpyObj('DatePipe', ['transform']);
    commitsService = new CommitsService(<any>httpClientSpy, <any>datePipe);
});

it('should return expected commits (HttpClient called once)', () => {
    const expectedCommits: CommitHolder[] = [
        {
            sha: '1',
            comments_url: 'test',
            files: [],
            stats: {
                total: 0,
                additions: 0,
                deletions: 0
            },
            commit: {
                message: 'test message',
                author: {
                    name: 'test name',
                    date: 'test date'
                }
            }
        },
        {
            sha: '2',
            comments_url: 'test 2',
            files: [],
            stats: {
                total: 1,
                additions: 1,
                deletions: 1
            },
            commit: {
                message: 'test message 2',
                author: {
                    name: 'test name 2',
                    date: '2018-03-01'
                }
            }
        }
    ];

    httpClientSpy.get.and.returnValue(asyncData(expectedCommits));

    commitsService
        .getCommits()
        .subscribe(commits => expect(commits).toEqual(expectedCommits, 'expected commits'), fail);
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});

it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
        error: 'test 404 error',
        status: 404,
        statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    commitsService
        .getCommits()
        .subscribe(
            commits => fail('expected an error, not commits'),
            error => expect(error.message).toContain('404 Not Found')
        );
});
