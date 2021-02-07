import { getLocaleDateFormat } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
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
  today: any;
  Year: any;
  ngOnInit() {
    AOS.init();
    this.getCurrentDate();
  }
  getCurrentDate() {
    this.today = new Date();
    this.Year = this.today.getFullYear();
  }
  reload(value: any) {
    this.router.navigate([value]).then(() => {
      document
        .getElementById("navbarSupportedContent")
        ?.classList.remove("show");
    });
  }
}
