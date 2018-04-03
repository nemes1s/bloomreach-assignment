import { Component, OnInit } from '@angular/core';
import { CommitsService } from './commits.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CommitHolder } from '../models/commit.models';

@Component({
    selector: 'app-commits',
    templateUrl: './commits.component.html',
    styleUrls: ['./commits.component.css'],
    providers: [CommitsService]
})
export class CommitsComponent implements OnInit {
    constructor(private commitsService: CommitsService) {}

    commits: CommitHolder[] = [];
    fromDate: NgbDateStruct;
    toDate: NgbDateStruct;

    ngOnInit() {
        this.commitsService.getCommits().subscribe((data: any[]) => {
            this.commits = data;
        });
    }

    filter() {
        this.commitsService
            .getCommits({ since: this.fromDate, until: this.toDate })
            .subscribe((data: any[]) => {
                this.commits = data;
            });
    }
}
