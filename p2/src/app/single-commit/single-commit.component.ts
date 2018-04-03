import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-commit',
  templateUrl: './single-commit.component.html',
  styleUrls: ['./single-commit.component.css']
})
export class SingleCommitComponent implements OnInit {

  constructor() { }

  @Input() commit: any;

  ngOnInit() {
  }

}
