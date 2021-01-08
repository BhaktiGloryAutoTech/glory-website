import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NeedTeamService } from "src/app/@theme/services/needTeam.service";

@Component({
  selector: "app-add-developer",
  templateUrl: "./add-developer.component.html",
  styleUrls: ["./add-developer.component.css"],
})
export class AddDeveloperComponent implements OnInit {
  developerList: any = [];
  duration = "";
  Devid = "";
  hrDay = "";
  experience = "";
  noOfDeveloper = "";
  stepName = "";
  @Input() position: any;
  stepPosition = 1;
  positionValues: any = [];
  @Input() developerDataList = [];
  @Input() editStep: any;
  submitButton = "Add";
  modalSubmitted: boolean = false;
  constructor(
    public activeModal: NgbActiveModal,
    private needTeamService: NeedTeamService
  ) {}

  ngOnInit(): void {
    this.getDeveloperList();
    if (!this.editStep) {
      if (this.position > 0) {
        this.stepPosition = this.position;
        for (let i: any = 1; i <= this.position; i++) {
          this.positionValues.push(i);
        }
      }
    } else {
      this.submitButton = "Update";
      this.developerList = this.developerDataList;
      console.log(this.developerList);
      console.log("Developer Data list", this.developerDataList);
      if (this.position > 0) {
        this.stepPosition = this.position;
        this.Devid = this.developerList[this.position - 1].Devid;
        this.hrDay = this.developerList[this.position - 1].hrDay;
        this.duration = this.developerList[this.position - 1].duration;
        this.experience = this.developerList[this.position - 1].experience;
        this.noOfDeveloper = this.developerList[
          this.position - 1
        ].noOfDeveloper;
        for (let i = 1; i <= this.developerList.length; i++) {
          this.positionValues.push(i);
        }
      }
    }
  }
  getDeveloperList() {
    this.needTeamService.getDeveloperList().subscribe(
      (data: any) => {
        this.developerList = data["data"];
        console.log(this.developerList);
      },
      (error) => {}
    );
  }
  onCreate(myForm: any) {
    this.modalSubmitted = true;
    if (myForm.valid) {
      let obj = {
        Devid: this.Devid,
        hrDay: this.hrDay,
        duration: this.duration,
        experience: this.experience,
        noOfDeveloper: this.noOfDeveloper,
        position: this.stepPosition,
      };
      console.log(obj);
      this.activeModal.close(obj);
    }
  }
}
