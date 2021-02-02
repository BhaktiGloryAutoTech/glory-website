import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { NeedTeamService } from "src/app/@theme/services/needTeam.service";
import { DeveloperList } from "src/app/@theme/modal/needTeam.class";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddDeveloperComponent } from "../add-developer/add-developer.component";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-need-team",
  templateUrl: "./need-team.component.html",
  styleUrls: ["./need-team.component.css"],
})
export class NeedTeamComponent implements OnInit {
  public loading = false;
  needTeamForm: FormGroup | any;
  value64: any = [];
  formSubmitted: boolean = false;
  developerDataList: DeveloperList[] = [];
  public fileSizeFlag = false;
  developerAddCheck = true;
  today: any;
  modifiedToday: any;
  checkEmailFlag: boolean = false;
  checkNumberFlag: boolean = false;
  checkFlag: boolean = false;
  constructor(
    private needTeamService: NeedTeamService,
    private fb: FormBuilder,
    private _modalService: NgbModal,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getCurrentDate();
    this.getdata();
  }
  getCurrentDate() {
    this.today = new Date();
    var dd = String(this.today.getDate()).padStart(2, "0");
    var mm = String(this.today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = this.today.getFullYear();
    this.today = yyyy + "-" + mm + "-" + dd;
    this.modifiedToday = dd + "-" + mm + "-" + yyyy;
  }
  getdata() {
    this.needTeamForm = this.fb.group({
      ProjectDescription: null,
      Budget: null,
      StartDate: null,
      ContactNo: null,
      Attachment: null,
      Email: null,
      Developers: this.fb.array([]),
    });
  }

  handleFileInput(event: any) {
    this.fileSizeFlag = false;
    let test: [] = event.target.files;
    for (let i = 0; i < event.target.files.length; i++) {
      const element = event.target.files[i];
      const file = event.target.files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.value64 = reader.result;
      };
    }
    // const file = event.target.files[0];
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //   this.value64 = reader.result;
    //   console.log(this.value64);
    // };
  }

  onAddStep() {
    const modalRef = this._modalService.open(AddDeveloperComponent);
    modalRef.componentInstance.position = this.developerDataList.length + 1;
    modalRef.componentInstance.developerDataList = this.developerDataList;
    modalRef.componentInstance.editStep = false;
    modalRef.result.then((result) => {
      if (result) {
        this.developerAddCheck = false;
        let developerList = new DeveloperList();
        developerList.Devid = result.Devid;
        developerList.duration = result.duration;
        developerList.experience = result.experience;
        developerList.hrDay = result.hrDay;
        developerList.noOfDeveloper = result.noOfDeveloper;
        developerList.id = result.position;
        this.needTeamService.getDeveloperList().subscribe((data: any) => {
          data["data"].forEach((element: any) => {
            if (developerList.Devid == element.Devid) {
              developerList.developerName = element.DevSkill;
            }
          });
        });
        this.developerDataList.push(developerList);
      }
    });
  }
  onDeleteStep(list: any) {
    // let i = this.developerDataList.findIndex((v: any) => {
    //   v.id == list.id;
    // });
    let index: any;
    for (let i = 0; i < this.developerDataList.length; i++) {
      if (this.developerDataList[i].id == list.id) {
        index = i;
        break;
      }
    }
    this.developerDataList.splice(index, 1);
  }
  onEditStep(list: any) {
    const modalRef = this._modalService.open(AddDeveloperComponent);
    modalRef.componentInstance.position = list.id;
    modalRef.componentInstance.developerDataList = this.developerDataList;
    modalRef.componentInstance.editStep = true;
    modalRef.result.then((result) => {
      if (result) {
        this.developerDataList[list.id - 1].Devid = result.Devid;
        this.developerDataList[list.id - 1].hrDay = result.hrDay;
        this.developerDataList[list.id - 1].duration = result.duration;
        this.developerDataList[list.id - 1].experience = result.experience;
        this.developerDataList[list.id - 1].noOfDeveloper =
          result.noOfDeveloper;
        this.needTeamService.getDeveloperList().subscribe(
          (data: any) => {
            data["data"].forEach((element: any) => {
              if (this.developerDataList[list.id - 1].Devid == element.Devid) {
                this.developerDataList[list.id - 1].developerName =
                  element.DevSkill;
              }
            });
          },
          (error) => {}
        );
      }
    });
  }
  setDeveloperData(): FormGroup {
    let developerData: any = [];
    this.developerDataList.forEach((element: any) => {
      developerData = this.fb.group({
        duration: element.duration,
        Devid: element.Devid,
        experience: element.experience,
        hrDay: element.hrDay,
        noOfDeveloper: element.noOfDeveloper,
      });
    });
    return developerData;
  }

  checkEmail(value: any) {
    if (value.target.value != null) {
      this.checkEmailFlag = true;
      this.checkFlag = false;
    }
    if (this.checkNumberFlag) {
      this.checkFlag = false;
    }
  }

  checkNumber(value: any) {
    if (value.target.value != null) {
      this.checkNumberFlag = true;
    }
    if (this.checkEmailFlag) {
      this.checkFlag = false;
    }
  }

  addNeedTeam() {
    this.formSubmitted = true;
    this.loading = true;
    this.fileSizeFlag = false;
    if (this.developerAddCheck) {
      this.loading = false;
      this.toastrService.warning("Please Add Developer");
    }
    if (this.checkNumberFlag == true || this.checkEmailFlag == true) {
      {
        this.needTeamForm.patchValue({
          Attachment: this.value64,
        });
        (<FormArray>this.needTeamForm.get("Developers")).push(
          this.setDeveloperData()
        );
        this.needTeamService.addNeedTeam(this.needTeamForm.value).subscribe(
          (data) => {
            this.loading = false;
            this.formSubmitted = false;
            this.toastrService.success("We Will get back to you soon.");
            this.router.navigate(["/home"]);
          },
          (error: any) => {
            if (413) {
              this.fileSizeFlag = true;
              this.loading = false;
            } else {
              this.toastrService.error("Something Went Wrong. Try Again");
            }
          }
        );
      }
    } else {
      this.checkFlag = true;
      this.loading = false;
      return;
    }
  }
}
