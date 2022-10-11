import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from '../child/child.component';
import { ForkJoinComponent } from '../fork-join/fork-join.component';
import { ParentComponent } from '../parent/parent.component';

const routes: Routes = [
  { path: 'child', component: ChildComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'forkjion', component: ForkJoinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
