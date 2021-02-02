import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CareerRoutingModule } from "./career-routing.module";
import { CareerComponent } from "./career.component";
import { CareerInfoComponent } from "./career-info/career-info.component";
import { SharedModule } from "src/app/@theme/shared.module";

@NgModule({
  declarations: [CareerComponent, CareerInfoComponent],
  imports: [CommonModule, CareerRoutingModule, SharedModule],
})
export class CareerModule {}
