import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListuserComponent } from './listuser/listuser.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AdminComponent } from './admin/admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListecollieComponent } from './listecollie/listecollie.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AreaComponent } from './area/area.component';
import { CardComponent } from './card/card.component';
import { AddcolieComponent } from './addcolie/addcolie.component';
import { ListtransporteurComponent } from './listtransporteur/listtransporteur.component';
import { UserheaderComponent } from './userheader/userheader.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "", component:HeaderComponent},
  {path: "", component:FooterComponent},
  {path: "signin", component:SigninComponent},
  
  {path: "updateuser/:id", component:UpdateuserComponent},
  {path: "signup", component:SignupComponent},
  {path: "addcollie", component:AddcolieComponent},
  
  
    {
      path: 'admin',
      component: AdminComponent,
      children: [
        {
          path: 'sidenav',
          component: SidenavComponent
        },
        {
          path: 'listuser',
          component: ListuserComponent
        },
        {
          path: 'listecollie',
          component: ListecollieComponent
        },
        {
          path: 'dashbord',
          component: DashbordComponent
        },
          {
            path: 'listTransporteur',
            component: ListtransporteurComponent
          },
          {
            path: 'userheader',
            component: UserheaderComponent
          }

      ]
    },
    {
      path: 'dashbord',
      component: DashbordComponent,
      children: [
        {
          path: 'area',
          component: AreaComponent
        },
        {
          path: 'card',
          component: CardComponent
        }
      ]
    }
  
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
