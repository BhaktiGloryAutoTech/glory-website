import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CareerService } from "src/app/@theme/services/career.service";

@Component({
  selector: "app-career",
  templateUrl: "./career.component.html",
  styleUrls: ["./career.component.css"],
})
export class CareerComponent implements OnInit {
  vacancyTitle: any = [];
  constructor(private careerService: CareerService, private route: Router) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getJobTitle();
  }
  getJobTitle() {
    this.careerService.getJobTitle().subscribe(
      (data: any) => {
        this.vacancyTitle = data["data"];
      },
      (error) => {}
    );
  }
  redirectInfo(VacancyId: any) {
    this.route.navigate(["pages/career/carrerInfo/", VacancyId]);
  }
}
