import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private _router: Router
    
  ) {
    setTimeout(() => {
      this.onClick()
    }, 5000);
   }

  onClick() {
    this._router.navigate(['/home'])
  }

}
