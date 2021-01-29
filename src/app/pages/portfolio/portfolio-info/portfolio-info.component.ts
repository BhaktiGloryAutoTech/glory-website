import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { WorkService } from "src/app/@theme/services/work.service";

@Component({
  selector: "app-portfolio-info",
  templateUrl: "./portfolio-info.component.html",
  styleUrls: ["./portfolio-info.component.css"],
})
export class PortfolioInfoComponent implements OnInit {
  id: any;
  selectedProjectData: any = [];
  projectDataId: any = {
    Projectid: null,
  };
  selectedImg = [];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    dots: true,
    infinite: false,
  };
  constructor(
    private router: Router,
    private _router: ActivatedRoute,
    private workService: WorkService
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getId();
  }
  getId() {
    this.id = this._router.snapshot.paramMap.get("id");
    console.log(this.id);
    this.projectDataId.Projectid = this.id;
    console.log(this.projectDataId);
    this.workService.getProjectDataById(this.projectDataId).subscribe(
      (data: any) => {
        console.log(data["data"]);
        this.selectedProjectData = data["data"];
        console.log(this.selectedProjectData);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
