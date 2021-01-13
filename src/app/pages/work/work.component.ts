import { Component, OnInit } from "@angular/core";
import { WorkService } from "src/app/@theme/services/work.service";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.css"],
})
export class WorkComponent implements OnInit {
  value: number = 3;
  projectDataList: any = [];
  constructor(private workService: WorkService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getData();
  }
  getData() {
    this.workService.getProjectList().subscribe(
      (data: any) => {
        this.projectDataList = data["data"];
        console.log(this.projectDataList);
      },
      (error) => {}
    );
  }
}
