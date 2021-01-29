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
  video: any = "";
  selectedImg: string[] = [];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
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
    this.projectDataId.Projectid = this.id;
    this.workService.getProjectDataById(this.projectDataId).subscribe(
      (data: any) => {
        this.selectedProjectData = data["data"];
        console.log(this.selectedProjectData);
        this.selectedProjectData.forEach((element: any) => {
          this.selectedImg = element.Projectimage;
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
