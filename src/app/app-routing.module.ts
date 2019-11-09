import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '', component: RegisterComponent
  },
  {
    path: 'validar', component: CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
