import { Component, OnInit } from "@angular/core";
import { HomeService } from "src/app/@theme/services/home.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  clientData: any = [];
  imagePath: any;
  serviceData: any = [];
  logo: any;
  serviceLimit: any = 4;
  ngOnInit(): void {
    window.scroll(0, 0);
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
