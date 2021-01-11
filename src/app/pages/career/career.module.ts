import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CareerRoutingModule } from "./career-routing.module";
import { CareerComponent } from "./career.component";
import { CareerInfoComponent } from "./career-info/career-info.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/@theme/shared.module";
import { NgxLoadingModule } from "ngx-loading";

@NgModule({
  declarations: [CareerComponent, CareerInfoComponent],
  imports: [
    CommonModule,
    CareerRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxLoadingModule,
  ],
})
export class CareerModule {}
