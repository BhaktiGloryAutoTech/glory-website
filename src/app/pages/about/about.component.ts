import { Component, OnInit } from "@angular/core";
import { HomeService } from "src/app/@theme/services/home.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  serviceData: any = [];
  serviceLimit: any = 4;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    location.reload;
    this.serviceList();
  }
  serviceList() {
    this.homeService.getServiceList(this.serviceLimit).subscribe(
      (data: any) => {
        this.serviceData = data["data"];
      },
      (error: any) => {}
    );
  }
}
