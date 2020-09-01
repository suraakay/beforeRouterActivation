import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'' , redirectTo:'',pathMatch:'full'},
  {path:'movies' , component : MoviesComponent},
  {path:'dashboard' , component : DashboardComponent},
  {path:'detail/:id' , component : DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
