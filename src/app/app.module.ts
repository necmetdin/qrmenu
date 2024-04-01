import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './shared/services/api.service';
import { HttpClientModule } from '@angular/common/http';

import { SidenavComponent } from './sidenav/sidenav.component';
import { MatTableModule } from '@angular/material/table'  
import { RouterModule } from '@angular/router';
import { ScrollToTopComponent } from './ScrollToTop/scrollToTop.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoryComponent,

    SidenavComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatExpansionModule,
    MatTooltipModule,
  RouterModule
    
  ],
  exports:[
    
  ]
  ,
  providers: [ ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
