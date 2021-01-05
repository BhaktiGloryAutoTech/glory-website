import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "pages",
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
    //     children:[
    //       {
    //   path: "career",
    //   loadChildren: () =>
    //     import("./pages/career/career.module").then((m) => m.CareerModule),
    // },

    //     ]
  },
  { path: "", redirectTo: "pages", pathMatch: "full" },

  { path: "**", redirectTo: "pages" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
