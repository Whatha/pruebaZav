import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ThanksComponent } from './thanks/thanks.component';
const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'gracias',
    component: ThanksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
