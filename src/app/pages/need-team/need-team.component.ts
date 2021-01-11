import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NeedTeamService } from "src/app/@theme/services/needTeam.service";
import { ChangeDetectorRef } from "@angular/core";
import { DeveloperList } from "src/app/@theme/modal/needTeam.class";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddDeveloperComponent } from "../add-developer/add-developer.component";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-need-team",
  templateUrl: "./need-team.component.html",
  styleUrls: ["./need-team.component.css"],
})
export class NeedTeamComponent implements OnInit {
  public loading = false;
  needTeamForm: FormGroup | any;
  value64: any;
  formSubmitted: boolean = false;
  developerDataList: DeveloperList[] = [];
  public fileSizeFlag = false;

  constructor(
    private needTeamService: NeedTeamService,
    private fb: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private _modalService: NgbModal,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getdata();
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
    console.log(this.needTeamForm);
  }

  handleFileInput(event: any) {
    this.fileSizeFlag = false;
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.value64 = reader.result;
      console.log(this.value64);
    };
  }

  onAddStep() {
    const modalRef = this._modalService.open(AddDeveloperComponent);
    modalRef.componentInstance.position = this.developerDataList.length + 1;
    modalRef.componentInstance.developerDataList = this.developerDataList;
    modalRef.componentInstance.editStep = false;
    modalRef.result.then((result) => {
      if (result) {
        let developerList = new DeveloperList();
        developerList.Devid = result.Devid;
        developerList.duration = result.duration;
        developerList.experience = result.experience;
        developerList.hrDay = result.hrDay;
        developerList.noOfDeveloper = result.noOfDeveloper;
        developerList.id = result.position;
        console.log(developerList.id);
        this.needTeamService.getDeveloperList().subscribe((data: any) => {
          data["data"].forEach((element: any) => {
            if (developerList.Devid == element.Devid) {
              developerList.developerName = element.DevSkill;
            }
          });
        });
        this.developerDataList.push(developerList);
        console.log("DeveloperList", this.developerDataList);
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
  addNeedTeam() {
    this.formSubmitted = true;
    this.loading = true;
    this.fileSizeFlag = false;
    if (this.needTeamForm.valid) {
      this.needTeamForm.patchValue({
        Attachment: this.value64,
      });
      (<FormArray>this.needTeamForm.get("Developers")).push(
        this.setDeveloperData()
      );
      console.log(this.needTeamForm);
      this.needTeamService.addNeedTeam(this.needTeamForm.value).subscribe(
        (data) => {
          this.needTeamForm.reset();
          this.loading = false;
          this.formSubmitted = false;
          this.toastrService.success("We Will get back to you soon.");
          this.router.navigate(["/pages/home"]);
        },
        (error: any) => {
          console.log(error);
          if (413) {
            console.log("hdsgfhsgdf");
            this.fileSizeFlag = true;
            this.loading = false;
          } else {
            this.toastrService.error("Something Went Wrong. Try Again");
          }
        }
      );
    } else {
      this.loading = false;
      return;
    }
  }
}
