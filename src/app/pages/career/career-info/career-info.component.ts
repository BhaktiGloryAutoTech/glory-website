import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { ToastrService } from "ngx-toastr";
import { CareerService } from "src/app/@theme/services/career.service";

@Component({
  selector: "app-career-info",
  templateUrl: "./career-info.component.html",
  styleUrls: ["./career-info.component.css"],
})
export class CareerInfoComponent implements OnInit {
  careerForm: FormGroup | any;
  vacancyInfo: any = [];
  id: any;
  VacancyId: any = {
    Vacancyid: null,
  };
  fileToUpload: File | any = null;
  applyNowFlag: boolean = false;
  value64: string | any;
  formSubmitted: boolean = false;
  constructor(
    private careerService: CareerService,
    private route: Router,
    private _route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getData();
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

  getData() {
    this.careerForm = new FormGroup({
      FirstName: new FormControl(null, Validators.required),
      LastName: new FormControl(null, Validators.required),
      ContactNo: new FormControl(null, Validators.required),
      Email: new FormControl(null, Validators.required),
      DOB: new FormControl(null),
      Gender: new FormControl(null),
      Experience: new FormControl(null),
      Message: new FormControl(null),
      Vaccancyid: new FormControl(null),
      Resume: new FormControl(null),
    });
  }

  chekApplyNow() {
    this.applyNowFlag = true;
    this.careerForm.reset();
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.value64 = reader.result;
    };
  }

  addCareerApplication() {
    this.formSubmitted = true;
    if (this.careerForm.valid) {
      this.careerForm.patchValue({
        Vaccancyid: this.id,
        Resume: this.value64,
      });

      this.careerService.hireApplication(this.careerForm.value).subscribe(
        (data) => {
          this.toastr.success("We will get back to you soon");
          this.applyNowFlag = false;
        },
        (error) => {
          this.toastr.error("Something went wrong. try again later.");
        }
      );
    } else {
      return;
    }
  }
}
