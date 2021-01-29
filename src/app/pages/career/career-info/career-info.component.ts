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
  public loading = false;
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
  fileSize = false;
  vacancyTitle: any = [];
  selectedVaccancyName: any;
  constructor(
    private careerService: CareerService,
    private route: Router,
    private _route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getData();
    this.getIdFromUrl();
    this.getDeveloprList();
  }
  afterViewInit() {
    this.selectedVaccancyName = this.vacancyInfo.VacancyName;
  }
  getDeveloprList() {
    this.careerService.getJobTitle().subscribe(
      (data: any) => {
        this.vacancyTitle = data["data"];
      },
      (error) => {}
    );
  }
  showSelectedData(value: any) {
    this.VacancyId.Vacancyid = value;
    this.selectedVaccancyName = value;
    this.careerService.getVacancyListById(this.VacancyId).subscribe(
      (data: any) => {
        this.vacancyInfo = data["data"];
      },
      (error) => {}
    );
  }
  getIdFromUrl() {
    this.id = this._route.snapshot.paramMap.get("id");
    this.VacancyId.Vacancyid = this.id;
    this.selectedVaccancyName = this.id;
    this.careerService.getVacancyListById(this.VacancyId).subscribe(
      (data: any) => {
        this.vacancyInfo = data["data"];
      },
      (error) => {}
    );
  }
  setDefaultValu() {
    this.getIdFromUrl();
  }
  getData() {
    this.careerForm = new FormGroup({
      FirstName: new FormControl(null, [Validators.required]),
      LastName: new FormControl(null, Validators.required),
      ContactNo: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}/),
      ]),
      Email: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/
        ),
      ]),
      Experience: new FormControl(null),
      Message: new FormControl(null),
      Vaccancyid: new FormControl(null),
      Resume: new FormControl(null),
    });
  }

  chekApplyNow() {
    this.applyNowFlag = true;
    let inter = setInterval(() => {
      let va = document.getElementById("applicationId");
      if (va) {
        va.scrollIntoView();
        clearInterval(inter);
      }
    }, 10);
    this.careerForm.reset();
  }

  handleFileInput(event: any) {
    this.fileSize = false;
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.value64 = reader.result;
    };
  }

  addCareerApplication() {
    this.formSubmitted = true;
    this.loading = true;
    if (this.careerForm.valid) {
      this.careerForm.patchValue({
        Vaccancyid: this.id,
        Resume: this.value64,
      });

      this.careerService.hireApplication(this.careerForm.value).subscribe(
        (data) => {
          this.loading = false;
          this.route.navigate(["/pages/career"]);
          this.toastr.success("We will get back to you soon");
          this.applyNowFlag = false;
        },
        (error) => {
          if (413) {
            this.loading = false;
            this.fileSize = true;
          } else {
            this.loading = false;
            this.toastr.error("Something went wrong. try again later.");
          }
        }
      );
    } else {
      this.loading = false;
      return;
    }
  }
}
