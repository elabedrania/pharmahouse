import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionproduitsComponent } from './dashboard/gestionproduits/gestionproduits.component';
import { ListeComponent } from './dashboard/gestionproduits/liste/liste.component';
import { UpdateComponent } from './dashboard/gestionproduits/update/update.component';
import { AjoutComponent } from './dashboard/gestionproduits/ajout/ajout.component';
import { GestionutilisateursComponent } from './dashboard/gestionutilisateurs/gestionutilisateurs.component';
import { ListeusersComponent } from './dashboard/gestionutilisateurs/listeusers/listeusers.component';
import { UpdateuserComponent } from './dashboard/gestionutilisateurs/updateuser/updateuser.component';
import { AjoutuserComponent } from './dashboard/gestionutilisateurs/ajoutuser/ajoutuser.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [

  
  {path: 'login' , component: LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'landingpage', component : LandingpageComponent},
  {path : 'dashboard', component : DashboardComponent, children : [

    {path:'', redirectTo: 'gestionproduits', pathMatch: 'full'},
    {path : 'gestionproduits', component : GestionproduitsComponent, children : [
      {path: '', redirectTo: 'list', pathMatch:'full'},
      {path : 'list', component: ListeComponent},
      {path: 'update/:id', component: UpdateComponent},
      {path: 'ajout', component: AjoutComponent}
    ]},

    {path : 'gestionutilisateurs', component : GestionutilisateursComponent, children : [
      {path: '', redirectTo: 'list', pathMatch:'full'},
      {path : 'list', component: ListeusersComponent},
      {path: 'update/:id', component: UpdateuserComponent},
      {path: 'ajout', component: AjoutuserComponent}
    ]},
  ]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
