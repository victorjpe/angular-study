import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { UserService } from '../service/user.service';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
import { IconsComponent } from './icons/icons.component';
import { SpeechRecognitionService } from '../service/speech-recognition.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AboutComponent,
    HomeComponent,
    HomeCardComponent,
    SignupComponent,
    SearchComponent,
    IconsComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ UserService, SpeechRecognitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
