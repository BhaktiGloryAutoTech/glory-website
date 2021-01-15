import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortfolioInfoComponent } from "./portfolio-info/portfolio-info.component";

import { PortfolioComponent } from "./portfolio.component";

const routes: Routes = [
  { path: "", component: PortfolioComponent },
  { path: "portfolioInfo/:id", component: PortfolioInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
