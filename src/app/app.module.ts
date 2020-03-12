import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadTabsComponent } from './components/head-tabs/head-tabs.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsCategoryComponent } from './components/tabs-category/tabs-category.component';
import { ChartsColumnComponent } from './components/charts/column/charts-column.component';
import { ChartModule } from 'angular-highcharts';
import { ChartsPieComponent } from './components/charts/pie/charts-pie.component';
import { HeadTitleComponent } from './components/head-title/head-title.component';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadTabsComponent,
    TabsCategoryComponent,
    ChartsColumnComponent,
    ChartsPieComponent,
    HeadTitleComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
