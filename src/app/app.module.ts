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
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgSelectModule } from "@ng-select/ng-select";
import { NbLayoutModule, NbThemeModule } from "@nebular/theme";
import { NgxLoadingModule } from "ngx-loading";
import { CacheInterceptor } from "./@theme/services/cacheInterceptor";
import { HttpCacheService } from "./@theme/services/cache.service";
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
    NgxLoadingModule.forRoot({}),
    HttpClientModule,
  ],
  exports: [FormsModule, ngFormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    },
    HttpCacheService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
