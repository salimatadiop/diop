import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ClasseComponent } from './classe/classe.component';
import { CourComponent } from './cour/cour.component';
import { EleveComponent } from './eleve/eleve.component';
import { InscriptionComponent } from './inscription/inscription.component';


const routes: Routes = [
  {
    path:'accueil',
    component: AccueilComponent,
  },

  {
    path:'classe',
    component: ClasseComponent,
  },
  {
    path:'cour',
    component: CourComponent,
  },
  {
    path:'inscription',
    component: InscriptionComponent,
  },
  {
    path:'eleve',
    component:EleveComponent ,
  },
  {  path:'',redirectTo:'root', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
