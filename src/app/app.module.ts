import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
