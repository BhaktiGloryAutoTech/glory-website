import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";
import { NeedTeamComponent } from "./pages/need-team/need-team.component";
import { ServicesComponent } from "./pages/services/services.component";
import { WorkComponent } from "./pages/work/work.component";

const routes: Routes = [
  {
    path: "pages",

    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        component: HomeComponent,
      },
      { path: "contact", component: ContactComponent },
      { path: "about", component: AboutComponent },
      { path: "needTeam", component: NeedTeamComponent },
      { path: "services", component: ServicesComponent },
      { path: "work", component: WorkComponent },
      {
        path: "career",
        loadChildren: () =>
          import("./pages/career/career.module").then((m) => m.CareerModule),
      },
    ],
  },
  { path: "", redirectTo: "pages", pathMatch: "full" },

  { path: "**", redirectTo: "pages" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
