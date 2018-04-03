import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommitsComponent } from './commits/commits.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleCommitComponent } from './single-commit/single-commit.component';
import { AppRoutingModule } from './app-routing.module';
import { SingleCommitPageComponent } from './single-commit-page/single-commit-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        CommitsComponent,
        SingleCommitComponent,
        SingleCommitPageComponent
    ],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule.forRoot(), FormsModule],
    providers: [DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule {}
