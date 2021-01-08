import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { WorkComponent } from "./work/work.component";
import { ServicesComponent } from "./services/services.component";
import { NeedTeamComponent } from "./need-team/need-team.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { AppModule } from "../app.module";
import { SharedModule } from "../@theme/shared.module";
import {
  FormsModule,
  FormsModule as ngFormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { ContactService } from "../@theme/services/contact.service";
import { CareerService } from "../@theme/services/career.service";
import { CareerModule } from "./career/career.module";
import { HomeService } from "../@theme/services/home.service";
import { ServiceService } from "../@theme/services/service.service";
import { NeedTeamService } from "../@theme/services/needTeam.service";
import { AddDeveloperComponent } from './add-developer/add-developer.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    WorkComponent,
    ServicesComponent,
    NeedTeamComponent,
    FooterComponent,
    HeaderComponent,
    AddDeveloperComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ngFormsModule,
    ReactiveFormsModule,
    CareerModule,
  ],
  exports: [FormsModule, ngFormsModule, ReactiveFormsModule],
  providers: [
    ContactService,
    CareerService,
    HomeService,
    ServiceService,
    NeedTeamService,
  ],
})
export class PagesModule {}
