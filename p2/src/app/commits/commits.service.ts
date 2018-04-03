import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { CommitHolder } from '../models/commit.models';
import { Observable } from 'rxjs/Observable';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class CommitsService {
    config = {
        commitsUrl: 'https://api.github.com/repos/angular/material2/commits',
        accessToken: '669f3f2a74d282a6ea07344dedaf8d5c3e4524eb'
    };

    constructor(private http: HttpClient, private datePipe: DatePipe) {}

    private ngDateStructToString(date: NgbDateStruct) {
        const tempDate = new Date();
        tempDate.setFullYear(date.year);
        tempDate.setMonth(date.month - 1);
        tempDate.setDate(date.day);

        return this.datePipe.transform(tempDate, 'yyyy-MM-ddTHH:mm:ssZ');
    }
    getCommits(params = {}): Observable<CommitHolder[]> {
        const paramsToSend = { access_token: this.config.accessToken };

        if (params['until']) {
            paramsToSend['until'] = this.ngDateStructToString(params['until']);
        }
        if (params['since']) {
            paramsToSend['since'] = this.ngDateStructToString(params['since']);
        }
        return this.http.get<CommitHolder[]>(this.config.commitsUrl, {
            params: paramsToSend
        });
    }

    getSingleCommit(commitSHA: string): Observable<CommitHolder> {
        return this.http.get<CommitHolder>(this.config.commitsUrl + `/${commitSHA}`, {
            params: { access_token: this.config.accessToken, sha: commitSHA }
        });
    }
}
