import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgwWowModule } from "ngx-wow";
import {
  FormsModule,
  FormsModule as ngFormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./@theme/shared.module";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgSelectModule } from "@ng-select/ng-select";
import { NbLayoutModule, NbThemeModule } from "@nebular/theme";
@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgwWowModule,
    ToastrModule,
    RouterModule,
    SharedModule,
    NgSelectModule,
    FormsModule,
    ngFormsModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbThemeModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      closeButton: true,
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  exports: [FormsModule, ngFormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
