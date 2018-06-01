import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodListComponent } from './food-list/food-list.component';
import { AppRoutingModule } from './app-routing.module';
import { OtherComponentComponent } from './other-component/other-component.component';
import {OtherModuleModule} from './other-module/other-module.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FoodListComponent,
    OtherComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OtherModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
