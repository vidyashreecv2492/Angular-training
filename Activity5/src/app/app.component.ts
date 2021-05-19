import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-form';

  constructor(private authenticationService: AuthenticationService) { }

  logout() {
    this.authenticationService.logout();
  }
}
