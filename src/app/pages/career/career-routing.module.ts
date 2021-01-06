import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CareerInfoComponent } from "./career-info/career-info.component";

import { CareerComponent } from "./career.component";

const routes: Routes = [
  { path: "", component: CareerComponent },
  { path: "careerInfo/:id", component: CareerInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareerRoutingModule {}
