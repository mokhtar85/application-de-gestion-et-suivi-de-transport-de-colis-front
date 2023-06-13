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
import { AddcolieComponent } from './addcolie/addcolie.component';
import { ListtransporteurComponent } from './listtransporteur/listtransporteur.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UpdatecollieComponent } from './updatecollie/updatecollie.component';
import { UpdateTransporteurComponent } from './update-transporteur/update-transporteur.component';
import { ClientComponent } from './client/client.component';
import { SidenavclientComponent } from './sidenavclient/sidenavclient.component';
import { NavbarComponent } from 'ng-cdbangular';
import { UsercommandComponent } from './usercommand/usercommand.component';
import { ChartComponent } from './chart/chart.component';
import { MaptrackingComponent } from './maptracking/maptracking.component';
import { ListcommandclientComponent } from './listcommandclient/listcommandclient.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { TransporteurinterfaceComponent } from './transporteurinterface/transporteurinterface.component';
import { SidenavtransporteurComponent } from './sidenavtransporteur/sidenavtransporteur.component';
import { ListcolisaffectedComponent } from './listcolisaffected/listcolisaffected.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "", component:HeaderComponent},
  {path: "", component:FooterComponent},
  {path: "signin", component:SigninComponent},
  
  {path: "updateuser/:id", component:UpdateuserComponent},
  {path: "signup", component:SignupComponent},
  {path: "updatecollie/:id", component:UpdatecollieComponent},
  {path:"updateTransporteur/:id",component:UpdateTransporteurComponent},
  {path: "client", component:ClientComponent},
  {path: "sidnavclient", component:SidenavclientComponent},
  {path: "transporteurinterface", component:TransporteurinterfaceComponent,
  children: [
    {
      path: 'sidenavTransporteur',
      component: SidenavtransporteurComponent
    },
    {
      path: 'listcolisaffecter',
      component: ListcolisaffectedComponent
    }
  
    
    
  ] },

  
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
          },
          {
            path : 'notification',
            component: NotificationComponent

          }

      ]
    },
  
    {
      path: 'client',
      component: ClientComponent,
      children: [
        {
          path: 'sidenavclient',
          component: SidenavclientComponent
        },
        {
          path: 'navbarclient',
          component: NavbarComponent
        },
        {path: "addcollie", component:AddcolieComponent},
        {path: "listcommandclient", component:ListcommandclientComponent},
        {path: "maptracking", component:MaptrackingComponent},
        {path: "maptracking", component:MaptrackingComponent},
        {path: "updateprofile", component:UpdateProfileComponent}

      ]  
    }
    
    
  
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
