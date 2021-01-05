import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { CareerService } from "src/app/@theme/services/career.service";

@Component({
  selector: "app-career-info",
  templateUrl: "./career-info.component.html",
  styleUrls: ["./career-info.component.css"],
})
export class CareerInfoComponent implements OnInit {
  vacancyInfo: any = [];
  id: any;
  VacancyId: any = {
    Vacancyid: null,
  };
  constructor(
    private careerService: CareerService,
    private route: Router,
    private _route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getIdFromUrl();
  }
  getIdFromUrl() {
    this.id = this._route.snapshot.paramMap.get("id");
    console.log(this.id);
    this.VacancyId.Vacancyid = this.id;
    console.log(this.VacancyId.Vacancyid);
    this.careerService.getVacancyListById(this.VacancyId).subscribe(
      (data: any) => {
        this.vacancyInfo = data["data"];
        console.log(this.vacancyInfo);
      },
      (error) => {}
    );
  }
}
