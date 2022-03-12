import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListsComponent } from './lists/lists.component';
import { TasksComponent } from './tasks/tasks.component';

//Takes a map of the paths(forward slashes) and the respective components
const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'lists', component: ListsComponent}
];

@NgModule({
  // Holds module
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
