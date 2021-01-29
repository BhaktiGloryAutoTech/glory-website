import { Component } from "@angular/core";
import { Router } from "@angular/router";
//import { NgwWowService } from "ngx-wow";
import * as AOS from "aos";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private router: Router) {}
  title = "test-application";
  remove: boolean = false;
  ngOnInit() {
    AOS.init();
  }
  reload(value: any) {
    this.router.navigate([value]).then(() => {
      location.reload();
    });
  }
}
