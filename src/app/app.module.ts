import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdminComponent } from './admin/admin.component';
import {SidebarModule} from 'ng-cdbangular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ListecollieComponent } from './listecollie/listecollie.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AddcolieComponent } from './addcolie/addcolie.component';
import { AreaComponent } from './area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { ListtransporteurComponent } from './listtransporteur/listtransporteur.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UpdatecollieComponent } from './updatecollie/updatecollie.component';
import { UpdateTransporteurComponent } from './update-transporteur/update-transporteur.component';
import { ClientComponent } from './client/client.component';





@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SigninComponent,
    ListuserComponent,
    UpdateuserComponent,
    SignupComponent,
    SidenavComponent,
    AdminComponent,
    ListecollieComponent,
    DashbordComponent,
    AddcolieComponent,
    AreaComponent,
    CardComponent,
    ListtransporteurComponent,
    UserheaderComponent,
    UpdatecollieComponent,
    UpdateTransporteurComponent,
    ClientComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SidebarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SidebarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    HighchartsChartModule,
    FlexLayoutModule,
    MatCardModule
    
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
