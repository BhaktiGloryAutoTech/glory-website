import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { NeedTeamComponent } from "./need-team/need-team.component";
import { ServicesComponent } from "./services/services.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
  },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "needTeam", component: NeedTeamComponent },
  { path: "services", component: ServicesComponent },
  {
    path: "career",
    loadChildren: () =>
      import("./career/career.module").then((m) => m.CareerModule),
  },
  {
    path: "portfolio",
    loadChildren: () =>
      import("./portfolio/portfolio.module").then((m) => m.PortfolioModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
