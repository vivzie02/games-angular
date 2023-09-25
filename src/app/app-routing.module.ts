import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BackgammonComponent } from './games/backgammon/backgammon.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'games/backgammon', component: BackgammonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
