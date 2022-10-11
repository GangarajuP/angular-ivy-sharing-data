import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BheaviourSubService } from './bheaviour-sub.service';
import { HttpClientModule } from '@angular/common/http';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponent,
    ChildComponent,
    ForkJoinComponent,
  ],
  providers: [BheaviourSubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
