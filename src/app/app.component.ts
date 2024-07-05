import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public nome = window.localStorage.getItem('nome')

  constructor(
    private _router: Router
  ) {}

  onLogout() {
    window.localStorage.clear()
    this._router.navigate(['/login'])
  }
}
