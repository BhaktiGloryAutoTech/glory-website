import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { NeedTeamComponent } from "./need-team/need-team.component";

import { PagesComponent } from "./pages.component";
import { ServicesComponent } from "./services/services.component";
import { WorkComponent } from "./work/work.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
