import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageAnimalsComponent } from './manage-animals/manage-animals.component';
import { ManageCropsComponent } from './manage-crops/manage-crops.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [
    AppComponent,
    ManageAnimalsComponent,
    ManageCropsComponent,
    StatusBarComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
