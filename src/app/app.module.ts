import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { HomeComponent } from './components/home/home.component';
import { ListRecipeComponent } from './components/list-recipe/list-recipe.component';
import { ChangeBackgroundDirective } from './directives/change-background.directive';
import { LoginComponent } from './components/login/login.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateRecipeComponent,
    HomeComponent,
    ListRecipeComponent,
    ChangeBackgroundDirective,
    LoginComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}