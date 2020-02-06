import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AccountsPanelComponent } from './accounts-panel/accounts-panel.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
  { path: 'forbidden', component: ForbiddenComponent},
  { path: 'adminpanel', component: AdminPanelComponent,canActivate:[AuthGuard],data : {permittedRoles:['Admin']}},
  { path: 'homepage', component: HomepageComponent },
  { path: 'accounts-panel', component: AccountsPanelComponent,canActivate:[AuthGuard],data : {permittedRoles:['Admin']}},
  { path: 'user-registration', component: UserRegisterComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
