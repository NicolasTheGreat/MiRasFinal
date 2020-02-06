import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-panel',
  templateUrl: './accounts-panel.component.html',
  styles: []
})
export class AccountsPanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToUser() {
    this.router.navigate(['/home']);
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}
