import { Component } from "@angular/core";
//import { NgwWowService } from "ngx-wow";
import * as AOS from "aos";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // constructor(private wowServices: NgwWowService) {
  //   this.wowServices.init();
  // }
  title = "test-application";
  ngOnInit() {
    AOS.init();
  }
}
