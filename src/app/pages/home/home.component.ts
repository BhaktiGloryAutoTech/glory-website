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
  ngOnInit(): void {
    window.scroll(0, 0);
    this.getClientList();
    this.serviceList();
  }
  getClientList() {
    this.homeService.getClientList().subscribe(
      (data: any) => {
        this.clientData = data["data"];
        this.clientData.forEach((element: any) => {
          this.logo = element.ClientLogo;
        });
      },
      (error) => {}
    );
  }
  serviceList() {
    this.homeService.getServiceList().subscribe(
      (data: any) => {
        this.serviceData = data["data"];
      },
      (error: any) => {}
    );
  }
}
