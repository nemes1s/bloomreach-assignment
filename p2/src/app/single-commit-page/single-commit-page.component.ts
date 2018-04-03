import { Component, OnInit } from '@angular/core';
import { CommitsService } from '../commits/commits.service';
import { ActivatedRoute } from '@angular/router';
import { CommitHolder } from '../models/commit.models';

@Component({
    selector: 'app-single-commit-page',
    templateUrl: './single-commit-page.component.html',
    styleUrls: ['./single-commit-page.component.css'],
    providers: [CommitsService]
})
export class SingleCommitPageComponent implements OnInit {
    constructor(private commitsService: CommitsService, private route: ActivatedRoute) {}

    commit: CommitHolder;

    ngOnInit() {
        const sha = this.route.snapshot.paramMap.get('sha');
        return this.commitsService.getSingleCommit(sha).subscribe(data => {
            this.commit = data;
        });
    }
}
