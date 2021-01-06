import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CareerRoutingModule } from "./career-routing.module";
import { CareerComponent } from "./career.component";
import { CareerInfoComponent } from "./career-info/career-info.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [CareerComponent, CareerInfoComponent],
  imports: [CommonModule, CareerRoutingModule, ReactiveFormsModule],
})
export class CareerModule {}
