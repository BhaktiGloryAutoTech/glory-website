import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NeedTeamService } from "src/app/@theme/services/needTeam.service";
import { AfterViewChecked, ChangeDetectorRef } from "@angular/core";
import { DeveloperList } from "src/app/@theme/modal/needTeam.class";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddDeveloperComponent } from "../add-developer/add-developer.component";

@Component({
  selector: "app-need-team",
  templateUrl: "./need-team.component.html",
  styleUrls: ["./need-team.component.css"],
})
export class NeedTeamComponent implements OnInit {
  needTeamForm: FormGroup | any;

  duration: any;
  value64: any;
  skills: any;
  formSubmitted: boolean = false;
  developerDataList: DeveloperList[] = [];
  tempData: any = [
    {
      duration: new FormControl(null, Validators.required),
      Devid: new FormControl(null, Validators.required),
      hrDay: new FormControl(null, Validators.required),
      experience: new FormControl(null),
      noOfDeveloper: new FormControl(null, Validators.required),
    },
  ];

  constructor(
    private needTeamService: NeedTeamService,
    private fb: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private _modalService: NgbModal
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
      Developers: this.fb.array([this.addSkillFormGroup()]),
    });
    console.log(this.needTeamForm);
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
  addSkillFormGroup(): FormGroup {
    return this.fb.group({
      duration: null,
      Devid: null,
      hrDay: null,
      experience: null,
      noOfDeveloper: null,
    });
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.value64 = reader.result;
    };
  }

  addDeveloper() {
    (<FormArray>this.needTeamForm.get("Developers")).push(
      this.addSkillFormGroup()
    );
    console.log(this.needTeamForm);
  }
  addNeedTeam() {
    console.log(this.needTeamForm);
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
}
