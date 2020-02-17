import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { HomeComponent } from './components/home/home.component';
import { ListRecipeComponent } from './components/list-recipe/list-recipe.component';
import { ChangeBackgroundDirective } from './directives/change-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateRecipeComponent,
    HomeComponent,
    ListRecipeComponent,
    ChangeBackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}