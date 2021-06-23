import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './core/app/app.component'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { AllgamesComponent } from './legacy/allgames/allgames.component'
import { FooterComponent } from './legacy/footer/footer.component'
import { HomeComponent } from './legacy/home/home.component'
import { HomebuttonComponent } from './legacy/homebutton/homebutton.component'
import { IndevelopmentComponent } from './legacy/indevelopment/indevelopment.component'
import { SubwaysurfersComponent } from './legacy/subwaysurfers/subwaysurfers.component'
import { LogoComponent } from './legacy/logo/logo.component'
import { MaintextComponent } from './legacy/maintext/maintext.component'
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FeaturedGamesCarouselComponent } from './featured-games-carousel/featured-games-carousel.component';
import { FeaturedgamesComponent } from './legacy/featuredgames/featuredgames.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,
    FooterComponent,
    SubwaysurfersComponent,
    HomeComponent,
    AllgamesComponent,
    HomebuttonComponent,
    IndevelopmentComponent,
    MaintextComponent,
    LogoComponent,
    FeaturedGamesCarouselComponent,
    FeaturedgamesComponent,
  ],
  imports: [BrowserModule, RouterModule, NgbModule, AppRoutingModule, IvyCarouselModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
