import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { ServicesComponent } from './services/services.component';
import { CareerComponent } from './career/career.component';
import { NeedTeamComponent } from './need-team/need-team.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WorkComponent } from './work/work.component';


@NgModule({
  declarations: [PagesComponent, HomeComponent, ContactComponent, AboutComponent, ServicesComponent, CareerComponent, NeedTeamComponent, FooterComponent, HeaderComponent, WorkComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
