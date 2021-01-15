import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PortfolioRoutingModule } from "./portfolio-routing.module";
import { PortfolioComponent } from "./portfolio.component";
import { PortfolioInfoComponent } from "./portfolio-info/portfolio-info.component";
import { SharedModule } from "src/app/@theme/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NbIconModule } from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NgxLoadingModule } from "ngx-loading";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [PortfolioComponent, PortfolioInfoComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    NbEvaIconsModule,
    NgxLoadingModule,
    NgbModule,
  ],
})
export class PortfolioModule {}
