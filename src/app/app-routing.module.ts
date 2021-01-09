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
    loadChildren: () =>
          import("./pages/pages.module").then((m) => m.PagesModule),

   
  },
  { path: "", redirectTo: "pages", pathMatch: "full" },

  { path: "**", redirectTo: "pages" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
