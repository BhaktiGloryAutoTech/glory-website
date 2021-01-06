import { Component, OnInit } from "@angular/core";
import { ServiceService } from "src/app/@theme/services/service.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  constructor(private serviceService: ServiceService) {}
  serviceList: any = [];
  ngOnInit(): void {
    this.getServiceList();
  }

  getServiceList() {
    this.serviceService.getServiceList().subscribe(
      (data: any) => {
        this.serviceList = data["data"];
        console.log(this.serviceList);
      },
      (error) => {}
    );
  }
}
