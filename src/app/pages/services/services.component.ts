import { Component, OnInit, TemplateRef } from "@angular/core";
import { ServiceService } from "src/app/@theme/services/service.service";
import { ElementRef, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  @ViewChild("content", { static: true })
  content!: TemplateRef<any>;
  mod: any;
  constructor(
    private serviceService: ServiceService,
    private modalService: NgbModal
  ) {}
  serviceList: any = [];
  ngOnInit(): void {
    window.scroll(0, 0);
    this.getServiceList();
    this.mod = setInterval(() => {
      this.modalService.open(this.content);
      clearInterval(this.mod);
    }, 5000);
  }

  getServiceList() {
    this.serviceService.getServiceList().subscribe(
      (data: any) => {
        this.serviceList = data["data"];
      },
      (error) => {}
    );
  }
}
