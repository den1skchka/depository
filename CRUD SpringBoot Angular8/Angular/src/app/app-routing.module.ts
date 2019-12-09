import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Student/list/list.component';
import { AddComponent } from './Student/add/add.component';
import { EditComponent } from './Student/edit/edit.component';


const routes: Routes = [
  {path: 'list', component:ListComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
