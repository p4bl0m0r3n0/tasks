import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddTaskComponent } from './pages/addTask/addTask.component';
import { Page404Component } from './pages/page404/page404.component';
import { TaskComponent } from './pages/task/task.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'new',
    component: AddTaskComponent
  },
  {
    path: 'task/:id',
    component: TaskComponent
  },
  {
    path:'**',
    component: Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
