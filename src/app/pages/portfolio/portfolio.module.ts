import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortfolioRoutingModule } from "./portfolio-routing.module";
import { PortfolioComponent } from "./portfolio.component";
import { PortfolioInfoComponent } from "./portfolio-info/portfolio-info.component";
import { SharedModule } from "src/app/@theme/shared.module";

@NgModule({
  declarations: [PortfolioComponent, PortfolioInfoComponent],
  imports: [CommonModule, PortfolioRoutingModule, SharedModule],
})
export class PortfolioModule {}
