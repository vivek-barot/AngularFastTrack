import { AuthGuard } from './auth.guard';
import { ListRecipeComponent } from './components/list-recipe/list-recipe.component';
import { HomeComponent } from './components/home/home.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateRecipeComponent, canActivate: [AuthGuard] },
  { path: 'list', component: ListRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
