import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import {
  FormsModule,
  FormsModule as ngFormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { NgwWowModule } from "ngx-wow";
import { ToastrModule } from "ngx-toastr";
import { AppModule } from "../app.module";
import { RouterModule } from "@angular/router";
import { ContactService } from "./services/contact.service";
import { CareerService } from "./services/career.service";
import { CommonService } from "./services/common.service";
import { HomeService } from "./services/home.service";
import { ServiceService } from "./services/service.service";
import { NgSelectModule } from "@ng-select/ng-select";
import { NeedTeamService } from "./services/needTeam.service";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbIconModule } from "@nebular/theme";
import { ModalModule } from "ngb-modal";
import { WorkService } from "./services/work.service";
import { NgxLoadingModule } from "ngx-loading";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpCacheService } from "./services/cache.service";
import { CacheInterceptor } from "./services/cacheInterceptor";
@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ngFormsModule,
    ReactiveFormsModule,
    NbIconModule,
    NbEvaIconsModule,
    NgxLoadingModule,
    ModalModule,
    NgbModule,
    NgSelectModule,
    NgxLoadingModule,
    SlickCarouselModule,
  ],

  exports: [
    FormsModule,
    ngFormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    ModalModule,
    NbIconModule,
    NbEvaIconsModule,
    NgxLoadingModule,
    SlickCarouselModule,
  ],
  providers: [
    ContactService,
    CareerService,
    CommonService,
    HomeService,
    ServiceService,
    NgSelectModule,
    NeedTeamService,
    WorkService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    },
    HttpCacheService,
  ],
  entryComponents: [],
})
export class SharedModule {}
