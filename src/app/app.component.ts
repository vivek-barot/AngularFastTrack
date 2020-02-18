import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AngularFastTrackByVivek';

  constructor(public auth: AuthService, private router: Router) { }

  goToHome(){
    if(this.auth.isLoggedIn()){
      this.router.navigate(['home']);
    }else{
      this.router.navigate(['']);
    }
  }
}
